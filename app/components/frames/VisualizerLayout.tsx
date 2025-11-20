import ResizeHandle from '../ResizeHandle';

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
 * @param {number | null} props.codePaneHeight
 *        The height in px of the code pane
 * @param {number | null} props.varsPaneHeight
 *        The height in px of the variables pane
 * @param {function} props.setVarsPaneHeight
 *        A function to update the height of the variables pane
 * @param {number | null} props.AIPaneHeight
 *        The height in px of the AI pane
 * @param {function} props.setAIPaneHeight
 *        A function to update the height of the AI pane
 * @param {number} props.defaultPaneHeight
 *        The default height in px of a pane
 * @param {number} props.minPaneHeight
 *        The minimum height in px of a pane
 * @param {number} props.maxPaneHeight
 *        The maximum height in px of a pane
 */
export default function VisualizerLayout(
  {
    sidebar,
    sidebarDefaultWidth,
    sidebarMinWidth,
    sidebarMaxWidth,
    sidebarWidth,
    setSidebarWidth,
    codePaneHeight,
    varsPaneHeight,
    setVarsPaneHeight,
    AIPaneHeight,
    setAIPaneHeight,
    defaultPaneHeight,
    minPaneHeight,
    maxPaneHeight,
    children,
  }:
  {
    sidebar: boolean | null
    sidebarDefaultWidth: number
    sidebarMinWidth: number
    sidebarMaxWidth: number
    sidebarWidth: number | null
    setSidebarWidth: (width: number | null) => void
    codePaneHeight: number | null
    varsPaneHeight: number | null
    setVarsPaneHeight: (height: number) => void
    AIPaneHeight: number | null
    setAIPaneHeight: (height: number) => void
    defaultPaneHeight: number
    minPaneHeight: number
    maxPaneHeight: number
    children: React.ReactNode[]
  },
) {
  return (
    <>
      <div className="flex w-full h-full">
        <section className="grow">
          {children[0]}
        </section>
        {
          ((sidebar === null) ? true : sidebar) && (
            <aside
              style={{ width: `${(sidebarWidth || 0)}px` }}
              className="flex flex-col border-l border-secondary transition-none overflow-hidden"
            >
              <ResizeHandle
                position="left"
                size={sidebarWidth}
                otherSize={sidebarMaxWidth}
                setSize={setSidebarWidth}
                defaultSize={sidebarDefaultWidth}
                minSize={sidebarMinWidth}
                maxSize={sidebarMaxWidth}
              />
              <section
                style={{ height: `${(codePaneHeight || 0)}px` }}
                className="transition-none overflow-hidden"
              >
                {children[1]}
              </section>
              <section
                style={{ height: `${(varsPaneHeight || 0)}px` }}
                className="transition-none border-t border-secondary overflow-hidden"
              >
                <ResizeHandle
                  position="top"
                  size={varsPaneHeight}
                  otherSize={codePaneHeight}
                  setSize={setVarsPaneHeight}
                  defaultSize={defaultPaneHeight}
                  minSize={minPaneHeight}
                  maxSize={maxPaneHeight}
                />
                {children[2]}
              </section>
              <section
                style={{ height: `${(AIPaneHeight || 0)}px` }}
                className="transition-none border-t border-secondary overflow-hidden"
              >
                <ResizeHandle
                  position="top"
                  size={AIPaneHeight}
                  otherSize={varsPaneHeight}
                  setSize={setAIPaneHeight}
                  defaultSize={defaultPaneHeight}
                  minSize={minPaneHeight}
                  maxSize={maxPaneHeight}
                />
                {children[3]}
              </section>
            </aside>
          )
        }
      </div>
    </>
  );
}
