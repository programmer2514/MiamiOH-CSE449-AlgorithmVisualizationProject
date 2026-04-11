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

/**
 * Global application constants.
 *
 * @property {string} AppName
 *           The name of the application.
 * @property {string} AppVersion
 *           The version of the application.
 * @property {string} AppLicense
 *           The license of the application.
 * @property {string} AppURL
 *           The URL of the application.
 * @property {string} AppIssuesURL
 *           The public URL of the project issues page.
 * @property {string} AppSourceURL
 *           The public URL of the project source code.
 */
const RouteBaseName = '/MiamiOH-AVP-Demo/';
const Globals = {
  AppName: 'Algorithm Visualization Project',
  AppVersion: 'v0.0.1a',
  AppLicense: 'GPLv3',

  AppURL: 'http://localhost:5173',
  AppIssuesURL: 'https://gitlab.csi.miamioh.edu/2026-senior-design-projects/algorithm-visualization-project/algorithm-visualization-project/-/issues',
  AppSourceURL: 'https://gitlab.csi.miamioh.edu/2026-senior-design-projects/algorithm-visualization-project/algorithm-visualization-project',
  RouteBaseName: RouteBaseName,

  MenuLinksHome: [
    {
      icon: PlusCircle,
      text: 'Create...',
      href: `${RouteBaseName}run`,
      separateNext: false,
    },
    {
      icon: Folder,
      text: 'Open...',
      onClick: () => alert('TODO'),
      disabled: true,
      separateNext: true,
    },
    {
      icon: Import,
      text: 'Import...',
      onClick: () => alert('TODO'),
      disabled: true,
      separateNext: true,
    },
    {
      icon: Settings,
      text: 'Settings',
      onClick: () => alert('TODO'),
      disabled: true,
      separateNext: false,
    },
    {
      icon: HelpCircle,
      text: 'Wiki',
      href: `${RouteBaseName}wiki`,
      separateNext: false,
    },
    {
      icon: InfoCircle,
      text: 'About',
      onClick: () => alert('TODO'),
      disabled: true,
      separateNext: false,
    },
  ],
  MenuLinksRun: [
    {
      icon: PlusCircle,
      text: 'Create...',
      href: `${RouteBaseName}run`,
      separateNext: false,
    },
    {
      icon: Folder,
      text: 'Open...',
      onClick: () => alert('TODO'),
      disabled: true,
      separateNext: false,
    },
    {
      icon: FloppyDisk,
      text: 'Save...',
      onClick: () => alert('TODO'),
      disabled: true,
      separateNext: true,
    },
    {
      icon: Import,
      text: 'Import...',
      onClick: () => alert('TODO'),
      disabled: true,
      separateNext: false,
    },
    {
      icon: ShareIos,
      text: 'Export...',
      onClick: () => alert('TODO'),
      disabled: true,
      separateNext: true,
    },
    {
      icon: Settings,
      text: 'Settings',
      onClick: () => alert('TODO'),
      disabled: true,
      separateNext: false,
    },
    {
      icon: HelpCircle,
      text: 'Wiki',
      href: `${RouteBaseName}wiki`,
      separateNext: false,
    },
    {
      icon: InfoCircle,
      text: 'About',
      onClick: () => alert('TODO'),
      disabled: true,
      separateNext: false,
    },
  ],
} as const;

export default Globals;
