import {
  Folder,
  HelpCircle,
  Import,
  InfoCircle,
  PlusCircle,
  Settings,
} from 'iconoir-react';

import Globals from '../../globals';
import AppFrame from '../AppFrame';

/**
 * Renders the "Getting Started" page.
 *
 * This is the main landing page and should list available algorithms, allowing
 * the user to find and select one, or to create their own.
 */
export default function GettingStarted() {
  return (
    <AppFrame
      title={Globals.AppName}
      setTitle={undefined}
      mutable={false}
      sidebar={undefined}
      setSidebar={undefined}
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
            separateNext: true,
          },
          {
            icon: Import,
            text: 'Import...',
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
      Getting Started Page
    </AppFrame>
  );
}
