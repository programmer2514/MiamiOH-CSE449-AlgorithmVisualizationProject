import {
  useEffect,
  useState,
} from 'react';

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
  const [editing, setEditing] = useState(false);
  const [src, setSrc] = useState(
    `
      a1: [1, 10, 5, 6, 4, 7, 19]
      key: 4
      Linear_Search: <function>
    `.replaceAll(/\n\s+/g, '\n').replaceAll(/^\n+|\n+$/g, ''),
  );

  const [editSrc, setEditSrc] = useState(src);

  function save() {
    setSrc(editSrc);
    setEditing(false);
  }

  function discard() {
    setEditSrc(src);
    setEditing(false);
  }

  const [lastValidSrc, setLastValidSrc] = useState(editSrc);

  useEffect(() => {
    const varsList = ['a1', 'key', 'Linear_Search'];
    const typesList = ['var', 'var', 'function'];

    if (editSrc.match(new RegExp(
      varsList.map(
        (v, i) => {
          switch (typesList[i]) {
            case 'function':
              return `${v}: <function>`;
            default:
              return `${v}: .*`;
          }
        },
      ).join('\\n'),
    ))) {
      setLastValidSrc(editSrc);
    } else {
      setEditSrc(lastValidSrc);
    }
  }, [editSrc]);

  return (
    <>
      <PaneHeader
        title="Variables"
        editing={editing}
        setEditing={setEditing}
        save={save}
        discard={discard}
        paneHeight={varsPaneHeight}
        setPaneHeight={setVarsPaneHeight}
        defaultPaneHeight={defaultPaneHeight}
        minPaneHeight={minPaneHeight}
      />
      <Monaco
        name="vars"
        src={editSrc}
        setSrc={setEditSrc}
        highlight={null}
        editing={editing}
        language="vars"
        lockToState={true}
      />
    </>
  );
}
