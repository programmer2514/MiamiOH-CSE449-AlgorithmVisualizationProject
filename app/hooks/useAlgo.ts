import {
  useEffect,
  useState,
  useContext,
} from 'react';

import ModifiedContext from '../contexts/ModifiedContext';

import {
  type Step,
} from '../types';

/**
 * Provides a hook to load and read algorithm data.
 *
 * @param {Object} props
 *        React props
 * @param {function} props.setTitle
 *        A function to update the header title
 * @param {function} props.setLoaderHidden
 *        A function to update the loader hidden state
 */
export default function useAlgo(
  {
    setTitle,
    setLoaderHidden,
  }:
  {
    setTitle: (title: string) => void
    setLoaderHidden: (hidden: boolean) => void
  },
) {
  const [src, setSrc] = useState('');
  const [comp, setComp] = useState([] as Step[]);
  const [error, setError] = useState('');
  const [didLoad, setDidLoad] = useState(false);
  const [didCompile, setDidCompile] = useState(false);

  const [modified] = useContext(ModifiedContext);

  useEffect(() => {
    const algo = new URLSearchParams(window.location.search).get('algo');

    if (algo) {
      fetch(`/code/${algo}.avp`)
        .then(res => res.text())
        .then((text) => {
          const title = text.match(/\/\/ (.*)\r?\n/);

          if (title !== null) {
            setSrc(text.replace(/\/\/.*\r?\n\r?\n/, ''));
            setTitle(title[1]);
            setDidLoad(true);
          } else if (!error) {
            setError(`Failed to load algorithm '${algo}': Incorrect file format`);
          }
        })
        .then(() => {
          if (error) return;
          fetch(`/json/${algo}.json`)
            .then(res => res.json())
            .then((json) => {
              setComp(json);
              setDidCompile(true);
            })
            .catch(() => {
              if (error) return;
              setError(`Failed to load algorithm '${algo}': Compilation error`);
            });
        })
        .catch(() => {
          if (error) return;
          setError(`Failed to load algorithm '${algo}': File not found`);
        });
    } else {
      setTitle('<unnamed>');
      setDidLoad(true);
      setDidCompile(true);
    }
  }, []);

  useEffect(() => {
    if (!error) return;

    setComp([{
      line: -1,
      actions: [],
    }]);
    setTitle(error);
    setSrc(error);

    setLoaderHidden(true);
  }, [error]);

  useEffect(() => {
    setLoaderHidden(didLoad && didCompile);
  }, [didLoad, didCompile]);

  useEffect(() => {
    if (modified) {
      setDidCompile(false);

      alert('TODO: Code should be recompiled here');
      fetch(`/json/${'TODO'}.json`)
        .then(res => res.json())
        .then((json) => {
          setComp(json);
          setDidCompile(true);
        })
        .catch(() => {
          alert('Failed to compile algorithm!');
          setComp([{
            line: -1,
            actions: [],
          }]);
          setLoaderHidden(true);
        });
    }
  }, [modified]);

  return [
    src,
    setSrc,
    comp,
  ] as const;
}
