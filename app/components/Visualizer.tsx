import {
  useState,
  useRef,
} from 'react';

import VisualizerLayout from './frames/VisualizerLayout';

import CodePane from './panes/CodePane';
import VarsPane from './panes/VarsPane';
import AIPane from './panes/AIPane';

import Loader from './Loader';

import useAlgo from '../hooks/useAlgo';
import useSidebarPanes from '../hooks/useSidebarPanes';

/**
 * Renders a visualizer complete with collapsible sidebar. Includes animation,
 * code tracing, variables, and [TODO] AI panes.
 *
 * @param {Object} props
 *        React props
 * @param {boolean | null} props.sidebar
 *        Whether the sidebar is toggled
 * @param {number} props.sidebarDefaultWidth
 *        The default width in px of the sidebar
 * @param {number} props.sidebarMinWidth
 *        The minimum width in px of the sidebar
 * @param {number} props.sidebarMaxWidth
 *        The maximum width in px of the sidebar
 * @param {number | null} props.sidebarWidth
 *        The current width in px of the sidebar
 * @param {function} props.setSidebarWidth
 *        A function to update the width of the sidebar
 */
export default function Visualizer(
  {
    sidebar,
    sidebarDefaultWidth,
    sidebarMinWidth,
    sidebarMaxWidth,
    sidebarWidth,
    setSidebarWidth,
    setTitle,
  }:
  {
    sidebar: boolean | null
    sidebarDefaultWidth: number
    sidebarMinWidth: number
    sidebarMaxWidth: number
    sidebarWidth: number | null
    setSidebarWidth: (width: number | null) => void
    setTitle: ((value: string) => void)
  },
) {
  const loader = useRef({ remove: () => {} } as HTMLDivElement);

  const [highlight, setHighlight] =
    useState([4, 12] as number | [number, number] | null);

  const [
    src,
    setSrc,
    comp,
    setComp,
  ] = useAlgo({ setTitle, loader });

  /*
  const [
    numSteps,
    step,
    setStep,
    stepData,
    vars,
  ] = useSteps(comp);
  */

  const [
    codePaneHeight,
    setCodePaneHeight,
    varsPaneHeight,
    setVarsPaneHeight,
    AIPaneHeight,
    setAIPaneHeight,
    defaultPaneHeight,
    minPaneHeight,
    maxPaneHeight,
  ] = useSidebarPanes();

  return (
    <>
      <Loader ref={loader} />
      <VisualizerLayout
        sidebar={sidebar}
        sidebarDefaultWidth={sidebarDefaultWidth}
        sidebarMinWidth={sidebarMinWidth}
        sidebarMaxWidth={sidebarMaxWidth}
        sidebarWidth={sidebarWidth}
        setSidebarWidth={setSidebarWidth}
        codePaneHeight={codePaneHeight}
        varsPaneHeight={varsPaneHeight}
        setVarsPaneHeight={setVarsPaneHeight}
        AIPaneHeight={AIPaneHeight}
        setAIPaneHeight={setAIPaneHeight}
        defaultPaneHeight={defaultPaneHeight}
        minPaneHeight={minPaneHeight}
        maxPaneHeight={maxPaneHeight}
      >
        <p>Placeholder</p>
        <CodePane
          src={src}
          setSrc={setSrc}
          highlight={highlight}
          codePaneHeight={codePaneHeight}
          setCodePaneHeight={setCodePaneHeight}
          defaultPaneHeight={defaultPaneHeight}
          minPaneHeight={minPaneHeight}
        />
        <VarsPane
          varsPaneHeight={varsPaneHeight}
          setVarsPaneHeight={setVarsPaneHeight}
          defaultPaneHeight={defaultPaneHeight}
          minPaneHeight={minPaneHeight}
        />
        <AIPane
          AIPaneHeight={AIPaneHeight}
          setAIPaneHeight={setAIPaneHeight}
          defaultPaneHeight={defaultPaneHeight}
          minPaneHeight={minPaneHeight}
        />
      </VisualizerLayout>
    </>
  );
}
