import {
  useEffect,
  useState,
} from 'react';

/**
 * Provides a hook to load and read algorithm data.
 */
export default function useAlgo(
  {
    setTitle,
    loader,
  }:
  {
    setTitle: (title: string | null) => void
    loader: React.RefObject<HTMLDivElement>
  },
) {
  const [src, setSrc] = useState(null as string | null);
  const [comp, setComp] = useState(null as object | null);
  const [algo, setAlgo] = useState('');

  useEffect(() => {
    const algoParam = new URLSearchParams(window.location.search).get('algo');

    if (algoParam) {
      fetch(`/code/${algoParam}.avp`)
        .then(res => res.text())
        .then(text => setSrc(text))
        .catch(() => setSrc('ERROR'));

      fetch(`/json/${algoParam}.json`)
        .then(res => res.json())
        .then(json => setComp(json))
        .catch(() => {
          setComp({ error: 'ERROR' });
          setSrc('ERROR');
        });

      setAlgo(algoParam);
    } else {
      setSrc('');
      setComp([]);
    }
  }, []);

  useEffect(() => {
    if (src === null || comp === null) return;

    loader.current.remove();

    if (src === 'ERROR') {
      setSrc(`Failed to load algorithm ${algo}: File does not exist`);
    } else {
      setTitle(src.match(/\/\/ (.*)\r?\n/)?.[1] || '<unnamed>');
    }
  }, [src, comp]);

  return [
    src,
    setSrc,
    comp,
    setComp,
  ] as const;
}
