import {
  useEffect,
  useState,
} from 'react';

import {
  type Step,
} from '../types';

import Globals from '../globals';

import useInterpreter from './useInterpreter';

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
  const [error, setError] = useState(null as string | null);
  const [didLoad, setDidLoad] = useState(false);

  const [
    _,
    __,
    interpreterTrace,
    interpreterError,
  ] = useInterpreter(src);

  useEffect(() => {
    const algo = new URLSearchParams(window.location.search).get('algorithm');

    if (algo) {
      fetch(`${Globals.RouteBaseName}code/${algo}.avp`)
        .then(res => res.text())
        .then((text) => {
          const title = text.match(/\/\/ (.*)\r?\n/);

          if (title !== null) {
            setSrc(text.replace(/\/\/.*\r?\n\r?\n/, ''));
            setTitle(title[1]);
          } else if (!error) {
            setError(`Error: [line 1:0] Failed to load algorithm '${algo}': Incorrect file format`);
          }
        })
        .catch(() => {
          if (error) return;
          setError(`Error: [line 1:0] Failed to load algorithm '${algo}': File not found`);
        });
    } else {
      setTitle('<unnamed>');
    }
  }, []);

  useEffect(() => {
    if (!error) return;

    setComp([]);
    setDidLoad(true);
  }, [error]);

  useEffect(() => {
    setLoaderHidden(didLoad);
  }, [didLoad]);

  useEffect(() => {
    setDidLoad(false);

    if (interpreterError) {
      setError(interpreterError);
      return;
    }

    setComp(JSON.parse(interpreterTrace || '[]'));
    setError(null);
    setDidLoad(true);
  }, [interpreterTrace, interpreterError]);

  return [
    src,
    setSrc,
    comp,
    error,
  ] as const;
}
