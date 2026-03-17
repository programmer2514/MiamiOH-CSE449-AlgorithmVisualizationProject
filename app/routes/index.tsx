import {
  Folder,
  HelpCircle,
  Import,
  InfoCircle,
  PlusCircle,
  Settings,
} from 'iconoir-react';

import Globals from '../globals';

import AppFrame from '../components/frames/AppFrame';

import PageMeta from '../components/PageMeta';
import SearchProvider from '../components/SearchProvider';

import LinearSearchDark from '../resources/img/linear-search_dark.png';
import LinearSearchLight from '../resources/img/linear-search_light.png';

/**
 * Renders the "Getting Started" page.
 *
 * This is the main landing page and should list available algorithms, allowing
 * the user to find and select one, or to create their own.
 */
export default function Index() {
  return (
    <>
      <PageMeta
        title="Home"
        description="Select an algorithm or create your own to begin learning."
      />
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
        <SearchProvider
          cards={
            [
              {
                img: [LinearSearchLight, LinearSearchDark],
                title: 'Linear Search',
                tags: [
                  'Easy',
                  'Array',
                  'Brute Force',
                  'Search',
                ],
                href: `${Globals.RouteBaseName}run?algorithm=linear_search`,
              },
            ]
          }
        />
      </AppFrame>
    </>
  );
}
