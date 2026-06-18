import {
  useContext,
  useEffect,
  useState,
} from 'react';

import { Editor } from '@monaco-editor/react';

import Defs from '../defs';

import DarkModeContext from '../contexts/DarkModeContext';

const errorParser = /Error: \[line (\d+):\d+\] (.*)/;

/**
 * Renders the Monaco code editor. Allows highlighting and editing through the
 * passed-in props.
 *
 * @param {Object} props
 *        React props
 * @param {string} props.name
 *        The name of the editor
 * @param {string} props.src
 *        The source code to display
 * @param {function} props.setSrc
 *        A function to update the source code
 * @param {(number | [number, number] | null)[]} props.highlights
 *        The line ranges to highlight
 * @param {(number | [number, number] | null)[]} props.greyouts
 *        The line ranges to grey out
 * @param {string[]} props.errors
 *        The errors to display
 * @param {boolean} props.editing
 *        Whether the editor is in editing mode
 * @param {boolean} props.bindSrc
 *        Whether the editor's value should be bound to the source state
 */
export default function Monaco(
  {
    name,
    src,
    setSrc,
    highlights,
    greyouts,
    errors,
    editing,
    bindSrc,
  }:
  {
    name: string
    src: string
    setSrc: (src: string) => void
    highlights: (number | [number, number] | null)[]
    greyouts: (number | [number, number] | null)[]
    errors: string[]
    editing: boolean
    bindSrc: boolean
  },
) {
  const isDark = useContext(DarkModeContext);

  const [monaco, setMonaco] = useState(null as [import('monaco-editor').editor.IStandaloneCodeEditor, typeof import('monaco-editor')] | null);
  const [decoration, setDecoration] = useState(null as import('monaco-editor').editor.IEditorDecorationsCollection | null);
  const [cursorPos, setCursorPos] = useState([0, 0] as [number, number]);
  const [selectionHandler, setSelectionHandler] =
    useState(null as import('monaco-editor').IDisposable | null);
  const [rem, setRem] = useState(14.0);

  useEffect(() => {
    if (!monaco) return;

    monaco[1].editor.setTheme(isDark ? 'avp-dark' : 'avp');

    monaco[0].updateOptions({
      readOnly: !editing,
      domReadOnly: !editing,
    });

    const oldCursorPos = cursorPos;

    monaco[0].setValue(
      (!editing) ?
        src?.replaceAll(/@[\w]+<.*?> ?/g, '') :
        src,
    );

    monaco[0].setPosition({
      lineNumber: oldCursorPos[0],
      column: oldCursorPos[1],
    });
  }, [isDark, monaco, editing]);

  useEffect(() => {
    if (monaco === null) return;

    decoration?.clear();

    setDecoration(
      monaco[0].createDecorationsCollection([
        ...highlights.map((highlight) => {
          if (highlight === null) return null;
          if (typeof highlight === 'number') return { range: new monaco[1].Range(highlight, 1, highlight, 99999), options: { className: 'avp-highlight', marginClassName: 'avp-highlight', isWholeLine: true } };
          return { range: new monaco[1].Range(highlight[0], 1, highlight[1], 99999), options: { className: 'avp-highlight' } };
        }).filter(highlight => highlight !== null),
        ...greyouts.map((greyout) => {
          if (greyout === null) return null;
          if (typeof greyout === 'number') return { range: new monaco[1].Range(greyout, 1, greyout, 99999), options: { className: 'avp-greyout', marginClassName: 'avp-greyout', isWholeLine: true } };
          return { range: new monaco[1].Range(greyout[0], 1, greyout[1], 99999), options: { className: 'avp-greyout' } };
        }).filter(greyout => greyout !== null),
        ...errors.map((error) => {
          if (error === null) return null;
          const preParsedError = error.match(errorParser)!;
          const parsedError = [preParsedError[1], (
            preParsedError[2].substring(0, 1).toUpperCase() +
            preParsedError[2].substring(1)
              .replaceAll(/[{}]/g, '')
              .replaceAll(' expecting', ' —— Expected one of')
          )];
          return { range: new monaco[1].Range(parseInt(parsedError[0]), 1, parseInt(parsedError[0]), 99999), options: { className: 'avp-error', marginClassName: 'avp-error', isWholeLine: true, after: { content: `  ┃ ${parsedError[1]}`, inlineClassName: 'avp-error-message' } } };
        }).filter(error => error !== null),
      ]),
    );

    if (highlights.length === 1 && greyouts.length === 0) {
      if (highlights[0] === null) return;

      monaco[0].revealLineInCenterIfOutsideViewport(
        (typeof highlights[0] === 'number') ?
          highlights[0] :
          highlights[0][0],
      );
    }
  }, [highlights, greyouts, errors, monaco, isDark]);

  useEffect(() => {
    if (monaco === null) return;

    if (selectionHandler) {
      selectionHandler.dispose();
      setSelectionHandler(null);
    }

    setSelectionHandler(
      monaco[0].onDidChangeCursorSelection((e) => {
        setCursorPos(
          [e.selection.positionLineNumber, e.selection.positionColumn],
        );
      }),
    );
  }, [monaco, editing]);

  useEffect(() => {
    if (monaco === null) return;

    if (bindSrc) {
      decoration?.clear();

      monaco[0].setValue(
        (!editing) ?
          src?.replaceAll(/@[\w]+<.*?> ?/g, '') :
          src,
      );

      setDecoration(
        monaco[0].createDecorationsCollection([
          ...highlights.map((highlight) => {
            if (highlight === null) return null;
            if (typeof highlight === 'number') return { range: new monaco[1].Range(highlight, 1, highlight, 99999), options: { className: 'avp-highlight', marginClassName: 'avp-highlight', isWholeLine: true } };
            return { range: new monaco[1].Range(highlight[0], 1, highlight[1], 99999), options: { className: 'avp-highlight' } };
          }).filter(highlight => highlight !== null),
          ...greyouts.map((greyout) => {
            if (greyout === null) return null;
            if (typeof greyout === 'number') return { range: new monaco[1].Range(greyout, 1, greyout, 99999), options: { className: 'avp-greyout', marginClassName: 'avp-greyout', isWholeLine: true } };
            return { range: new monaco[1].Range(greyout[0], 1, greyout[1], 99999), options: { className: 'avp-greyout' } };
          }).filter(greyout => greyout !== null),
          ...errors.map((error) => {
            if (error === null) return null;
            const parsedError = error.match(errorParser)!;
            return { range: new monaco[1].Range(parseInt(parsedError[1]), 1, parseInt(parsedError[1]), 99999), options: { className: 'avp-error', marginClassName: 'avp-error', isWholeLine: true, after: { content: parsedError[2], inlineClassName: 'avp-error-message' } } };
          }).filter(error => error !== null),
        ]),
      );
    }
  }, [monaco, src]);

  useEffect(() => {
    setRem(parseFloat(getComputedStyle(document.documentElement).fontSize));
  }, []);

  return (
    <div
      id={name}
      className="w-full h-full"
    >
      <style>
        {(!editing) && `
          #${name} .monaco-editor {
            & .view-overlays svg > circle,
            & .decorationsOverviewRuler {
              display: none !important;
            }

            & .core-guide-indent.indent-active {
              box-shadow: 1px 0 0 0 var(--indent-color) inset !important;
            }
            
            & .active-line-number {
              color: var(--vscode-editorLineNumber-foreground) !important;
            }

            & .current-line-exact {
              border: none !important;
            }

            & .cursor {
              opacity: 0 !important;
            }

            & .wordHighlightText,
            & .selectionHighlight {
              background-color: transparent !important;
            }

            & .monaco-editor-overlaymessage {
              display: none !important;
            }
          }
        `}
      </style>
      <Editor
        options={{
          minimap: { enabled: false },
          padding: { top: 10 },
          fontSize: rem * 0.9,
        }}
        onMount={
          (editor, monaco) => {
            monaco.languages.register({ id: 'avp' });
            monaco.languages.setMonarchTokensProvider('avp', Defs.AVPLanguage);

            monaco.editor.setModelLanguage(editor.getModel()!, 'avp');

            monaco.editor.defineTheme('avp', Defs.AVPLightTheme);
            monaco.editor.defineTheme('avp-dark', Defs.AVPDarkTheme);

            setMonaco([editor, monaco]);
          }
        }
        onChange={
          (value) => {
            if (!editing) return;

            setSrc(value || '');
          }
        }
        className="**:transition-none"
      />
    </div>
  );
}
