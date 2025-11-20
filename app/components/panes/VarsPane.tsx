import { useState } from 'react';

import PaneHeader from '../headers/PaneHeader';

import Monaco from '../Monaco';

/**
 * Renders the vars pane for the visualizer.
 *
 * @param {Object} props
 *        React props
 * @param {number | null} props.varsPaneHeight
 *        The height in px of the code pane
 * @param {function} props.setVarsPaneHeight
 *        A function to update the height of the code pane
 * @param {number} props.defaultPaneHeight
 *        The default height in px of a pane
 * @param {number} props.minPaneHeight
 *        The minimum height in px of a pane
 */
export default function VarsPane(
  {
    varsPaneHeight,
    setVarsPaneHeight,
    defaultPaneHeight,
    minPaneHeight,
  }:
  {
    varsPaneHeight: number | null
    setVarsPaneHeight: (height: number) => void
    defaultPaneHeight: number
    minPaneHeight: number
  },
) {
  const [src, setSrc] = useState(
    `
      a1: [1, 10, 5, 6, 4, 7, 19]
      key: 4
      Linear_Search(a, k): <function>
    `.replaceAll(/\n\s+/g, '\n').replaceAll(/^\n+|\n+$/g, ''),
  );

  return (
    <>
      <PaneHeader
        title="Variables"
        editing={undefined}
        setEditing={undefined}
        save={undefined}
        discard={undefined}
        paneHeight={varsPaneHeight}
        setPaneHeight={setVarsPaneHeight}
        defaultPaneHeight={defaultPaneHeight}
        minPaneHeight={minPaneHeight}
      />
      <Monaco
        name="vars"
        src={src}
        setSrc={setSrc}
        highlight={null}
        editing={false}
        language="vars"
      />
    </>
  );
}
