import {
  Drawer,
  List,
  Typography,
} from '@material-tailwind/react';

import { Iconoir } from 'iconoir-react';

import Globals from '../globals';

import FlexSpacer from './FlexSpacer';

/**
 * Renders the main menu sidebar panel.
 *
 * @param {Object} props
 *        React props
 * @param {React.RefObject} props.triggerRef
 *        An element reference that opens the main menu on click
 * @param {React.RefObject} props.panelRef
 *        An element reference that contains the main menu panel
 * @param {object[]} props.links
 *        The links to display in the main menu
 */
export default function MainMenu(
  {
    triggerRef,
    panelRef,
    links,
  }:
  {
    triggerRef: React.RefObject<HTMLElement>
    panelRef: React.RefObject<HTMLElement>
    links: {
      icon: typeof Iconoir
      text: string
      href?: string
      onClick?: () => void
      separateNext: boolean
    }[]
  },
) {
  return (
    <Drawer>
      <Drawer.Trigger
        ref={triggerRef}
        className="hidden"
        aria-hidden
      />
      <Drawer.Overlay>
        <Drawer.Panel
          ref={panelRef}
          placement="left"
          className="border-t-0 p-2 flex flex-col w-fit max-w-[67vw] max-h-screen overflow-y-scroll rounded-r-md"
        >
          <header className="-mx-2 px-4 py-3.25 border-b border-secondary sticky top-0 bg-background -translate-y-2">
            <Typography
              variant="h1"
              className="text-lg! font-medium inline-block"
            >
              {Globals.AppName}
            </Typography>
            <Typography
              variant="h2"
              className="text-sm! inline-block ml-1"
            >
              {Globals.AppVersion}
            </Typography>
          </header>

          <nav>
            <List className="text-lg -mt-1 mb-1 gap-0">
              {
                links.map(
                  (
                    { icon: Icon, text, href, onClick, separateNext },
                  ) => (
                    <a key={text} href={href} onClick={onClick}>
                      <List.Item className="p-2 text-primary">
                        <List.ItemStart>
                          <Icon className="h-6 w-6 stroke-2" role="presentation" />
                        </List.ItemStart>
                        {text}
                      </List.Item>
                      {separateNext && <div role="presentation" className="border-b border-secondary my-1" />}
                    </a>
                  ),
                )
              }
            </List>
          </nav>

          <FlexSpacer />

          <footer className="-mx-2 px-4 pt-3 pb-1.25 border-t border-secondary">
            <Typography
              className="text-sm! text-secondary-foreground"
            >
              Licensed under the
              {` ${Globals.AppLicense}`}
            </Typography>
            <Typography
              className="text-sm! text-secondary-foreground"
            >
              &copy;
              {` ${new Date().getFullYear()} `}
              Miami University
            </Typography>
            <Typography
              className="text-sm! text-secondary-foreground"
            >
              <a
                href={Globals.AppIssuesURL}
                target="_blank"
                rel="noreferrer"
                className="underline text-info"
              >
                Report an Issue
              </a>
              {` | `}
              <a
                href={Globals.AppSourceURL}
                target="_blank"
                rel="noreferrer"
                className="underline text-info"
              >
                Source Code
              </a>
            </Typography>
          </footer>
        </Drawer.Panel>
      </Drawer.Overlay>
    </Drawer>
  );
}
