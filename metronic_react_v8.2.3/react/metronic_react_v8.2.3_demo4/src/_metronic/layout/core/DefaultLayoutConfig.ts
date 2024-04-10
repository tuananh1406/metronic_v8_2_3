import {ILayout} from './LayoutModels'

export const DefaultLayoutConfig: ILayout = {
  main: {
    type: 'default',
    darkSkinEnabled: false,
    primaryColor: '#7239EA',
    pageBgWhite: false,
    iconType: 'duotone',
  },
  illustrations: {
    componentName: 'illustrations',
    set: 'dozzy-1',
  },
  loader: {
    display: false,
    type: 'default', // Set default|spinner-message|spinner-logo to hide or show page loader
  },
  scrolltop: {
    display: true,
  },
  header: {
    display: true, // Set true|false to show or hide Header
    width: 'fluid', // Set fixed|fluid to change width type
    fixed: {
      desktop: true, // Set true|false to set fixed Header for desktop mode
      tabletAndMobile: true, // Set true|false to set fixed Header for tablet and mobile modes
    },
    menuIcon: 'svg',
    menu: true,
  },
  megaMenu: {
    display: true, // Set true|false to show or hide Mega Menu
  },
  aside: {
    fixed: true,
    menuIcon: 'font',
  },
  content: {
    width: 'fixed', // Set fixed|fluid to change width
    layout: 'default',
  },
  toolbar: {
    display: false, // Display toolbar
  },
  footer: {
    width: 'fixed', // Set fixed|fluid to change width type
  },
  pageTitle: {
    display: true,
    breadCrumbs: true,
    description: false,
  },
}
