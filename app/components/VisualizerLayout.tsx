import ResizeHandle from './ResizeHandle';

import useSidebarPanes from '../hooks/useSidebarPanes';

/**
 * Renders a visualizer complete with collapsible sidebar. Includes animation,
 * code tracing, variables, and [TODO] AI panes.
 *
 * @param {Object} props
 *        React props
 */
export default function VisualizerLayout(
  {
    sidebar,
    sidebarDefaultWidth,
    sidebarMinWidth,
    sidebarMaxWidth,
    sidebarWidth,
    setSidebarWidth,
    children,
  }:
  {
    sidebar: boolean | null
    sidebarDefaultWidth: number
    sidebarMinWidth: number
    sidebarMaxWidth: number
    sidebarWidth: number | null
    setSidebarWidth: (width: number | null) => void
    children: React.ReactNode[]
  },
) {
  const [
    codePaneHeight,
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
