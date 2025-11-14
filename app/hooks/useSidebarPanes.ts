import {
  useEffect,
  useState,
} from 'react';

/**
 * Provides a hook to read and edit toggle and height states of sidebar panes.
 */
export default function useSidebarPanes() {
  const [codePaneHeight, setCodePaneHeight] = useState(null as number | null);
  const [varsPaneHeight, setVarsPaneHeight] = useState(null as number | null);
  const [AIPaneHeight, setAIPaneHeight] = useState(null as number | null);
  const [defaultPaneHeight, setDefaultPaneHeight] = useState(0);
  const [maxPaneHeight, setMaxPaneHeight] = useState(0);

  useEffect(() => {
    if (codePaneHeight === null) return;
    localStorage.setItem('codePaneHeight', codePaneHeight.toString());
  }, [codePaneHeight]);

  useEffect(() => {
    if (varsPaneHeight === null) return;

    setCodePaneHeight(
      document.body.querySelector('main')!.clientHeight -
      varsPaneHeight -
      (AIPaneHeight || 0),
    );

    localStorage.setItem('varsPaneHeight', varsPaneHeight.toString());
  }, [varsPaneHeight]);

  useEffect(() => {
    if (AIPaneHeight === null) return;

    setVarsPaneHeight(
      document.body.querySelector('main')!.clientHeight -
      AIPaneHeight -
      (codePaneHeight || 0),
    );

    localStorage.setItem('AIPaneHeight', AIPaneHeight.toString());
  }, [AIPaneHeight]);

  useEffect(() => {
    setCodePaneHeight(
      parseInt(
        localStorage.getItem('codePaneHeight') ||
        (document.body.querySelector('main')!.clientHeight / 3).toString(),
      ),
    );

    setVarsPaneHeight(
      parseInt(
        localStorage.getItem('varsPaneHeight') ||
        (document.body.querySelector('main')!.clientHeight / 3).toString(),
      ),
    );

    setAIPaneHeight(
      parseInt(
        localStorage.getItem('AIPaneHeight') ||
        (document.body.querySelector('main')!.clientHeight / 3).toString(),
      ),
    );

    setDefaultPaneHeight(document.body.querySelector('main')!.clientHeight / 3);
    setMaxPaneHeight(document.body.querySelector('main')!.clientHeight);
  }, []);

  return [
    codePaneHeight,
    varsPaneHeight,
    setVarsPaneHeight,
    AIPaneHeight,
    setAIPaneHeight,
    defaultPaneHeight,
    0, // minPaneHeight
    maxPaneHeight,
  ] as const;
}
