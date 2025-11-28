import Monaco from '../Monaco';

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
 * @param {boolean} props.editing
 *        Whether the code pane is in editing mode
 */
export default function CodePane(
  {
    src,
    setSrc,
    highlight,
    editing,
  }:
  {
    src: string
    setSrc: (src: string) => void
    highlight: number | [number, number] | null
    editing: boolean
  },
) {
  return (
    <Monaco
      name="code"
      src={src}
      setSrc={setSrc}
      highlights={editing ? [] : [highlight]}
      greyouts={[]}
      editing={editing}
      bindSrc={false}
    />
  );
}
