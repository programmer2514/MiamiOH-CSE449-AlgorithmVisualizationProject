import {
  useEffect,
  useState,
} from 'react';

import { diffChars, diffLines } from 'diff';

import Defs from '../defs';

/**
 * Provides a hook to edit a state variable with save and discard functions.
 *
 * @param {Object} props
 *        React props
 * @param {string} props.src
 *        The source state variable
 * @param {function} props.setSrc
 *        A function to update the source state variable
 * @param {function} props.onSave
 *        A function to run on save
 * @param {function} props.onDiscard
 *        A function to run on discard
 */
export default function useEditSrc({
  src,
  setSrc,
  onSave,
  onDiscard,
}:
{
  src: string
  setSrc: (src: string) => void
  onSave: () => void
  onDiscard: () => void
}) {
  const [editSrc, setEditSrc] = useState('');
  const [expertMode, _setExpertMode] = useState(null as boolean | null);

  useEffect(() => {
    _setExpertMode((localStorage.getItem('expertMode') === 'true') || false);
  }, []);

  useEffect(() => {
    if (expertMode === null) return;
    localStorage.setItem('expertMode', `${expertMode}`);
  }, [expertMode]);

  useEffect(() => {
    setEditSrc(src);
  }, [src]);

  function countCommas(str: string) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === ',') count++;
    }

    return count;
  }

  function countLeadingSpaces(str: string) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') count++;
      else break;
    }

    return count;
  }

  function percentDifferent(str1: string, str2: string) {
    const diff = diffChars(str1, str2);
    let count = 0;

    for (const d of diff)
      if (d.removed)
        count += d.count;

    return count / str1.length;
  }

  function patchSrc(original: string, patch: string) {
    const diff = diffLines(original, patch, { newlineIsToken: true });
    let newSrc = '';

    for (let i = 0; i < diff.length; i++) {
      const curr = diff[i];
      if (curr.removed) {
        if (i + 1 === diff.length) break;

        const next = diff[i + 1];
        if (next.added) {
          const currStripped = curr.value.replace(Defs.REGEX_ANNOTATION, '');

          if (next.value === currStripped) {
            newSrc += curr.value;
          } else {
            let finalValue = next.value;

            if (curr.value.match(/.*fun .*@init<.*/)) {
              const numParams = countCommas(next.value) + 1;
              const paramIndex = countCommas(
                curr.value.substring(0, curr.value.indexOf('@init<')),
              );

              if (paramIndex + 1 <= numParams) {
                let actualIndex = -1;

                for (let i = paramIndex; i > 0; i--) {
                  actualIndex = next.value.indexOf(',', actualIndex + 1);
                }

                if (actualIndex === -1)
                  actualIndex = next.value.indexOf('(');
                else if (next.value[actualIndex + 1] === ' ')
                  actualIndex++;

                finalValue = next.value.substring(0, actualIndex + 1) +
                  curr.value.match(/@init<.*> /)![0] +
                  next.value.substring(actualIndex + 1);
              }
            }

            if (
              curr.value.trimStart().startsWith('@') &&
              percentDifferent(currStripped, finalValue) <= 0.5
            ) {
              finalValue =
                finalValue.substring(0, countLeadingSpaces(finalValue)) + (
                  [...curr.value.match(Defs.REGEX_ANNOTATION)!]
                    .filter(v => !v.startsWith('@init<'))
                    .join('')
                ) +
                finalValue.trimStart();
            }

            newSrc += finalValue;
          }
          i++;
        }
      } else newSrc += curr.value;
    }

    return newSrc;
  }

  function save() {
    if (expertMode) {
      setSrc(editSrc);
    } else {
      setSrc(patchSrc(src, editSrc));
    }
    onSave();
  }

  function discard() {
    setEditSrc(src);
    onDiscard();
  }

  function setExpertMode(newExpertMode: boolean) {
    if (newExpertMode) {
      setEditSrc(patchSrc(src, editSrc));
    } else {
      setEditSrc(editSrc.replace(Defs.REGEX_ANNOTATION, ''));
    }
    _setExpertMode(newExpertMode);
  }

  return [
    editSrc,
    setEditSrc,
    expertMode,
    setExpertMode,
    save,
    discard,
  ] as const;
}
