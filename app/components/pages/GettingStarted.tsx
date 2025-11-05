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
import SearchProvider from '../SearchProvider';

import PlaceholderImg from '../../resources/img/placeholder.png';

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
      <SearchProvider
        cards={
          [
            {
              img: PlaceholderImg,
              title: 'Algo #5',
              tags: [
                'Algorithm',
                'Numbered',
                'Example Tag #1',
              ],
              href: '/run',
            },
            {
              img: PlaceholderImg,
              title: 'Algo #2',
              tags: [
                'Numbered',
                'Algorithm',
                'Example Tag #2',
              ],
              href: '/run',
            },
            {
              img: PlaceholderImg,
              title: 'Something',
              tags: [
                'Just Text',
                'Other Example Tag',
              ],
              href: '/run',
            },
            {
              img: PlaceholderImg,
              title: 'Something Else',
              tags: [
                'Just Text',
                'Other Example Tag',
              ],
              href: '/run',
            },
            {
              img: PlaceholderImg,
              title: 'Title',
              tags: [
                'Oooo Tags',
                'Fancy Information',
                'Example Tag #1',
              ],
              href: '/run',
            },
            {
              img: PlaceholderImg,
              title: 'Title 2',
              tags: [
                'Oooo Tags',
                'Fancy Information',
                'Example Tag #2',
                'Numbered',
              ],
              href: '/run',
            },
            {
              img: PlaceholderImg,
              title: 'ABCDE',
              tags: [
                'Just Text',
                'Fancy Information',
                'Algorithm',
              ],
              href: '/run',
            },
          ]
        }
      />
    </AppFrame>
  );
}
