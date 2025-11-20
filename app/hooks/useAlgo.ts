import {
  useEffect,
  useState,
} from 'react';

/**
 * Provides a hook to load and read algorithm data.
 *
 * @param {Object} props
 *        React props
 * @param {function} props.setTitle
 *        A function to update the header title
 * @param {React.RefObject} props.loader
 *        A reference to the loading overlay
 */
export default function useAlgo(
  {
    setTitle,
    loader,
  }:
  {
    setTitle: (title: string) => void
    loader: React.RefObject<HTMLDivElement>
  },
) {
  const [src, setSrc] = useState('');
  const [comp, setComp] = useState([] as object);
  const [error, setError] = useState('');
  const [didLoad, setDidLoad] = useState(false);
  const [didCompile, setDidCompile] = useState(false);

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
      loader.current.remove();
    }
  }, []);

  useEffect(() => {
    if (!error) return;

    setComp({ error });
    setSrc(error);
    setTitle(error);

    loader.current.remove();
  }, [error]);

  useEffect(() => {
    if (didLoad && didCompile)
      loader.current.remove();
  }, [didLoad, didCompile]);

  return [
    src,
    setSrc,
    comp,
    setComp,
  ] as const;
}
