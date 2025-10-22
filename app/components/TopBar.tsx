import React, {
  useEffect,
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

import FlexSpacer from './FlexSpacer';

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
 * @param {boolean | undefined} props.sidebar
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
    sidebar: boolean | undefined
    setSidebar: ((value: boolean) => void) | undefined
    menuTrigger: React.RefObject<HTMLElement>
    menuPanel: React.RefObject<HTMLElement>
  },
) {
  const [width, setWidth] = useState(0);

  const span = useRef({ offsetWidth: 0 } as HTMLPreElement);
  const input = useRef({ value: '' } as HTMLInputElement);

  if (setTitle) {
    // This is a bit hacky but it's the only reliable method I can find.
    // Subscribes an interval on page load that updates the width of the input
    // box every 100ms until the it remains the same for 1 full second.
    useEffect(() => {
      let prevWidth = 0;
      let sameCount = 0;

      const interval = setInterval(() => {
        if (span.current.offsetWidth == prevWidth) {
          sameCount++;
          if (sameCount == 10) {
            clearInterval(interval);
          }

          return;
        }

        setWidth(span.current.offsetWidth);
        prevWidth = span.current.offsetWidth;
      }, 100);
    }, []);

    // Using a layout effect here to avoid jittery repaints while typing
    useLayoutEffect(() => {
      // If the content is empty, set it to '<unnamed>' to avoid 0-width input
      if (title.length === 0) {
        setTitle('<unnamed>');
        input.current.value = '<unnamed>';
      }

      setWidth(span.current.offsetWidth);
    }, [title]);
  }

  return (
    <>
      <Navbar className="rounded-none flex items-center border-t-0 border-l-0 border-r-0 shadow-none">
        <IconButton
          variant="ghost"
          aria-label="Main Menu"
          onClick={() => {
            menuTrigger.current.click();
            const interval = setInterval(() => {
              if (menuPanel.current?.scrollTop) {
                menuPanel.current.scrollTop = 0;
                clearInterval(interval);
              }
            }, 10);
          }}
        >
          <Menu className="stroke-2 w-6 h-6" />
        </IconButton>

        {
          mutable && setTitle ?
            (
              <>
                <pre ref={span} className="text-lg font-medium font-body p-1 opacity-0 absolute pointer-events-none">{title}</pre>
                <Input
                  ref={input}
                  size="lg"
                  defaultValue={title}
                  className="text-lg! font-medium ml-1 border-0 shadow-none p-1 transition-none"
                  style={{ width }}
                  onChange={event => setTitle(event.target.value)}
                />
              </>
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
                  className="-scale-x-100"
                  onClick={() => setSidebar(!sidebar)}
                >
                  {
                    sidebar ?
                      <SidebarCollapse className="stroke-2 w-6 h-6" /> :
                      <SidebarExpand className="stroke-2 w-6 h-6" />
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
          variant="ghost"
          aria-label="Get Help"
        >
          <HelpCircle className="stroke-2 w-6 h-6" />
        </IconButton>
      </Navbar>
    </>
  );
}
