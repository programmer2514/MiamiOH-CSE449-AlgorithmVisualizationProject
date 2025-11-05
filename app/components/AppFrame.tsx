import { useRef } from 'react';

import { Iconoir } from 'iconoir-react';

import TopBar from './TopBar';
import MainMenu from './MainMenu';
import DarkModeToggle from './DarkModeToggle';

import useDarkMode from '../hooks/useDarkMode';

import DarkModeContext from '../contexts/DarkModeContext';

/**
 * Renders the main app frame around the passed children elements.
 *
 * `title`/`setTitle` and `sidebar`/`setSidebar` should be defined state
 * variables if the goal is for them to be mutable.
 *
 * @param {Object} props
 *        React props
 * @param {string} props.title
 *        The title to display in the header
 * @param {function | undefined} props.setTitle
 *        A function to update the header title
 * @param {boolean} props.mutable
 *        Whether the header title should be mutable
 * @param {boolean | undefined} props.sidebar
 *        Whether the sidebar is toggled
 * @param {function | undefined} props.setSidebar
 *        A function to update the sidebar state
 * @param {Array} props.menuLinks
 *        The links to display in the main menu
 * @param {React.ReactNode} props.children
 *        Child elements
 */
export default function AppFrame(
  {
    title,
    setTitle,
    mutable,
    sidebar,
    setSidebar,
    menuLinks,
    children,
  }:
  {
    title: string
    setTitle: ((title: string) => void) | undefined
    mutable: boolean
    sidebar: boolean | undefined
    setSidebar: ((value: boolean) => void) | undefined
    menuLinks: {
      icon: typeof Iconoir
      text: string
      href?: string
      onClick?: () => void
      separateNext: boolean
    }[]
    children: React.ReactNode
  },
) {
  const [isDark, setIsDark] = useDarkMode();

  const drawerTrigger = useRef<HTMLElement>(
    { click: () => {} } as HTMLElement,
  );
  const drawerPanel = useRef<HTMLElement>(
    { scrollTop: -1 } as HTMLElement,
  );

  return (
    <DarkModeContext value={isDark}>
      <header>
        <TopBar
          title={title}
          setTitle={setTitle}
          mutable={mutable}
          sidebar={sidebar}
          setSidebar={setSidebar}
          menuTrigger={drawerTrigger}
          menuPanel={drawerPanel}
        />
      </header>

      <MainMenu
        triggerRef={drawerTrigger}
        panelRef={drawerPanel}
        links={menuLinks}
      />

      <main className="h-[calc(100%-3.5rem+1px)]">
        {children}
      </main>

      <footer>
        <DarkModeToggle
          floating={!mutable}
          isDark={isDark}
          setIsDark={setIsDark}
        />
      </footer>
    </DarkModeContext>
  );
}
