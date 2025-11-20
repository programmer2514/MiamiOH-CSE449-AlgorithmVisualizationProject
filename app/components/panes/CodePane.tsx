import { useState } from 'react';

import PaneHeader from '../headers/PaneHeader';

import Monaco from '../Monaco';

import useEditSrc from '../../hooks/useEditSrc';

/**
 * Renders the code pane for the visualizer.
 *
 * @param {Object} props
 *        React props
 * @param {string | null} props.src
 *        The source code to display
 * @param {function} props.setSrc
 *        A function to update the source code
 * @param {number | [number, number] | null} props.highlight
 *        The line range to highlight
 * @param {function} props.setHighlight
 *        A function to update the highlighted line range
 * @param {number | null} props.codePaneHeight
 *        The height in px of the code pane
 * @param {function} props.setCodePaneHeight
 *        A function to update the height of the code pane
 * @param {number} props.defaultPaneHeight
 *        The default height in px of a pane
 * @param {number} props.minPaneHeight
 *        The minimum height in px of a pane
 */
export default function CodePane(
  {
    src,
    setSrc,
    highlight,
    codePaneHeight,
    setCodePaneHeight,
    defaultPaneHeight,
    minPaneHeight,
  }:
  {
    src: string
    setSrc: (src: string) => void
    highlight: number | [number, number] | null
    codePaneHeight: number | null
    setCodePaneHeight: (height: number) => void
    defaultPaneHeight: number
    minPaneHeight: number
  },
) {
  const [editing, setEditing] = useState(false);

  const [
    editSrc,
    setEditSrc,
    save,
    discard,
  ] = useEditSrc({
    src,
    setSrc,
    onSave: () => setEditing(false),
    onDiscard: () => setEditing(false),
  });

  return (
    <>
      <PaneHeader
        title="Source Code"
        editing={editing}
        setEditing={setEditing}
        save={save}
        discard={discard}
        paneHeight={codePaneHeight}
        setPaneHeight={setCodePaneHeight}
        defaultPaneHeight={defaultPaneHeight}
        minPaneHeight={minPaneHeight}
      />
      <Monaco
        name="code"
        src={editSrc}
        setSrc={setEditSrc}
        highlight={editing ? null : highlight}
        editing={editing}
        language="avp"
        lockToState={false}
      />
    </>
  );
}
