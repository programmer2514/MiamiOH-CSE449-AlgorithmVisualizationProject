import PaneHeader from '../headers/PaneHeader';

/**
 * Renders the AI pane for the visualizer.
 *
 * @param {Object} props
 *        React props
 * @param {number | null} props.AIPaneHeight
 *        The height in px of the code pane
 * @param {function} props.setAIPaneHeight
 *        A function to update the height of the code pane
 * @param {number} props.defaultPaneHeight
 *        The default height in px of a pane
 * @param {number} props.minPaneHeight
 *        The minimum height in px of a pane
 */
export default function VarsPane(
  {
    AIPaneHeight,
    setAIPaneHeight,
    defaultPaneHeight,
    minPaneHeight,
  }:
  {
    AIPaneHeight: number | null
    setAIPaneHeight: (height: number) => void
    defaultPaneHeight: number
    minPaneHeight: number
  },
) {
  return (
    <>
      <PaneHeader
        title="AlgoAI"
        editing={undefined}
        setEditing={undefined}
        save={undefined}
        discard={undefined}
        paneHeight={AIPaneHeight}
        setPaneHeight={setAIPaneHeight}
        defaultPaneHeight={defaultPaneHeight}
        minPaneHeight={minPaneHeight}
      />
      <p>Placeholder</p>
    </>
  );
}
