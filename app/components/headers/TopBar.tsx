import React, {
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import {
  IconButton,
  Input,
  Navbar,
  Typography,
} from '@material-tailwind/react';

import {
  HelpCircle,
  Menu,
  SidebarCollapse,
  SidebarExpand,
} from 'iconoir-react';

import FlexSpacer from '../FlexSpacer';

import ModifiedContext from '../../contexts/ModifiedContext';

/**
 * Renders the title and navigation bar.
 *
 * `title`/`setTitle` and `sidebar`/`setSidebar` should be defined state
 * variables if the intent is for them to be mutable.
 *
 * @param {Object} props
 *        React props
 * @param {string} props.title
 *        The title to display
 * @param {function | undefined} props.setTitle
 *        A function to update the title
 * @param {boolean} props.mutable
 *        Whether the title is mutable
 * @param {boolean | null | undefined} props.sidebar
 *        Whether the sidebar is toggled
 * @param {function | undefined} props.setSidebar
 *        A function to update the sidebar state
 * @param {React.RefObject} props.menuTrigger
 *        An element reference that opens the main menu on click
 * @param {React.RefObject} props.menuPanel
 *        An element reference that contains the main menu panel
 */
export default function TopBar(
  {
    title,
    setTitle,
    mutable,
    sidebar,
    setSidebar,
    menuTrigger,
    menuPanel,
  }:
  {
    title: string
    setTitle: ((title: string) => void) | undefined
    mutable: boolean
    sidebar: boolean | null | undefined
    setSidebar: ((value: boolean | null) => void) | undefined
    menuTrigger: React.RefObject<HTMLElement>
    menuPanel: React.RefObject<HTMLElement>
  },
) {
  const [modified, setModified] = useContext(ModifiedContext);

  const [width, setWidth] = useState(0);

  const span = useRef({ offsetWidth: 0 } as HTMLSpanElement);
  const input = useRef({ value: '' } as HTMLInputElement);

  if (setTitle) {
    // Using a layout effect here to avoid jittery repaints while typing
    useLayoutEffect(() => {
      // If the content is empty, set it to '<unnamed>' to avoid 0-width input
      if (title.length === 0) {
        setTitle('<unnamed>');
        input.current.value = '<unnamed>';
      }

      setWidth(span.current?.offsetWidth ?? 0);
    }, [title, span]);
  }

  return (
    <>
      <Navbar className="rounded-none flex items-center border-t-0 border-l-0 border-r-0 shadow-none">
        <IconButton
          variant="ghost"
          aria-label="Main Menu"
          title="Main Menu"
          onClick={() => {
            menuTrigger.current.click();
            const interval = setInterval(() => {
              if (menuPanel.current.scrollTop) {
                menuPanel.current.scrollTop = 0;
                clearInterval(interval);
              }
            }, 10);
          }}
          aria-haspopup="dialog"
          className="cursor-pointer"
        >
          <Menu className="stroke-2 w-6 h-6" role="presentation" />
        </IconButton>

        {
          mutable && setTitle ?
            (
              <div className="flex items-center">
                <span
                  ref={span}
                  className="text-lg font-medium font-body p-1 opacity-0 absolute pointer-events-none"
                  aria-hidden
                >
                  {title}
                </span>
                <Input
                  ref={input}
                  type="text"
                  size="lg"
                  defaultValue={title}
                  className="text-lg! font-medium ml-1 border-0 shadow-none p-1 transition-none"
                  style={{ width }}
                  onChange={
                    (event) => {
                      setTitle(event.target.value);
                      setModified(true);
                    }
                  }
                  aria-label="Algorithm name"
                />
                {
                  modified && (
                    <Typography
                      type="h2"
                      className="text-sm! font-light opacity-50 ml-2 pointer-events-none"
                    >
                      Modified
                    </Typography>
                  )
                }
              </div>
            ) :
            (
              <Typography
                type="h1"
                className="text-lg! font-medium ml-2"
              >
                {title}
              </Typography>
            )
        }

        <FlexSpacer />

        {
          (sidebar !== undefined && setSidebar) ?
            (
              <>
                <IconButton
                  variant="ghost"
                  aria-label="Toggle Sidebar"
                  title="Toggle Sidebar"
                  className="-scale-x-100 cursor-pointer"
                  onClick={
                    () => setSidebar(!((sidebar === null) ? true : sidebar))
                  }
                >
                  {
                    ((sidebar === null) ? true : sidebar) ?
                      <SidebarCollapse className="stroke-2 w-6 h-6" role="presentation" /> :
                      <SidebarExpand className="stroke-2 w-6 h-6" role="presentation" />
                  }
                </IconButton>
                <div
                  role="separator"
                  className="w-px h-8 mx-2 bg-secondary dark:bg-secondary-dark"
                />
              </>
            ) :
            (<></>)
        }

        <IconButton
          as="a"
          variant="ghost"
          aria-label="Get Help"
          title="Get Help"
          href="/wiki"
          target="_blank"
        >
          <HelpCircle className="stroke-2 w-6 h-6" role="presentation" />
        </IconButton>
      </Navbar>
    </>
  );
}
