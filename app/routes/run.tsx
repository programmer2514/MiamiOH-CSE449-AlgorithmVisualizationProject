import {
  FloppyDisk,
  Folder,
  HelpCircle,
  Import,
  InfoCircle,
  PlusCircle,
  Settings,
  ShareIos,
} from 'iconoir-react';

import PageMeta from '../components/PageMeta';
import AppFrame from '../components/AppFrame';
import Visualizer from '../components/Visualizer';

import useTitle from '../hooks/useTitle';
import useSidebar from '../hooks/useSidebar';

/**
 * Renders the "Run" page.
 *
 * This is the main app page and should provide a fully interactive
 * visualization of the selected algorithm.
 */
export default function Run() {
  const [title, setTitle] = useTitle();
  const [
    sidebar,
    setSidebar,
    sidebarDefaultWidth,
    sidebarMinWidth,
    sidebarMaxWidth,
    sidebarWidth,
    setSidebarWidth,
  ] = useSidebar();

  return (
    <>
      <PageMeta
        title={((title === null) ? '<unnamed>' : title)}
        description="Visualize and learn about this algorithm for free."
      />
      <AppFrame
        title={title}
        setTitle={setTitle}
        mutable={true}
        sidebar={sidebar}
        setSidebar={setSidebar}
        menuLinks={
          [
            {
              icon: PlusCircle,
              text: 'Create...',
              separateNext: false,
            },
            {
              icon: Folder,
              text: 'Open...',
              separateNext: false,
            },
            {
              icon: FloppyDisk,
              text: 'Save...',
              separateNext: true,
            },
            {
              icon: Import,
              text: 'Import...',
              separateNext: false,
            },
            {
              icon: ShareIos,
              text: 'Export...',
              separateNext: true,
            },
            {
              icon: Settings,
              text: 'Settings',
              separateNext: false,
            },
            {
              icon: HelpCircle,
              text: 'Wiki',
              separateNext: false,
            },
            {
              icon: InfoCircle,
              text: 'About',
              separateNext: false,
            },
          ]
        }
      >
        <Visualizer
          sidebar={sidebar}
          sidebarDefaultWidth={sidebarDefaultWidth}
          sidebarMinWidth={sidebarMinWidth}
          sidebarMaxWidth={sidebarMaxWidth}
          sidebarWidth={sidebarWidth}
          setSidebarWidth={setSidebarWidth}
          setTitle={setTitle}
        />
      </AppFrame>
    </>
  );
}
