import {
  useState,
  useRef,
} from 'react';

import Loader from './Loader';
import CodePane from './CodePane';

import useAlgo from '../hooks/useAlgo';
import VisualizerLayout from './VisualizerLayout';

/**
 * Renders a visualizer complete with collapsible sidebar. Includes animation,
 * code tracing, variables, and [TODO] AI panes.
 *
 * @param {Object} props
 *        React props
 * @param {boolean | null} props.sidebar
 *        Whether the sidebar is toggled
 * @param {function} props.setTitle
 *        A function to update the header title
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
    setTitle: ((value: string | null) => void)
  },
) {
  const loader = useRef({ remove: () => {} } as HTMLDivElement);

  const [highlight, setHighlight] =
    useState(null as number | [number, number] | null);

  const [
    src,
    setSrc,
    comp,
    setComp,
  ] = useAlgo({ setTitle, loader });

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
      >
        <p>Main</p>
        <CodePane
          src={src}
          setSrc={setSrc}
          highlight={highlight}
          setHighlight={setHighlight}
        />
        <p>Vars</p>
        <p>AI</p>
      </VisualizerLayout>
    </>
  );
}
