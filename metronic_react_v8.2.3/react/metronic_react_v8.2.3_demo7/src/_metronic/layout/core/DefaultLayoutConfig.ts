import {ILayout} from './LayoutModels'

export const DefaultLayoutConfig: ILayout = {
  main: {
    type: 'default',
    darkSkinEnabled: true,
    primaryColor: '#04C8C8',
    pageBgWhite: false,
    iconType: 'duotone',
  },
  illustrations: {
    componentName: 'illustrations',
    set: 'sketchy-1',
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
    width: 'fixed', // Set fixed|fluid to change width type
    fixed: {
      desktop: true, // Set true|false to set fixed Header for desktop mode
      tabletAndMobile: true, // Set true|false to set fixed Header for tablet and mobile modes
    },
    menuIcon: 'font',
    menu: false,
  },
  megaMenu: {
    display: false, // Set true|false to show or hide Mega Menu
  },
  aside: {
    menu: 'main',
    secondaryDisplay: true,
    minimized: false,
    minimize: true,
    display: true,
    fixed: true,
    menuIcon: 'svg',
  },
  content: {
    width: 'fixed', // Set fixed|fluid to change width
    layout: 'default',
  },
  toolbar: {
    display: false, // Display toolbar
    width: 'fluid',
    fixed: {
      desktop: true,
      tabletAndMobileMode: false,
    },
  },
  footer: {
    width: 'fixed', // Set fixed|fluid to change width type
  },
  pageTitle: {
    display: true,
    breadCrumbs: true,
    description: false,
    responsive: true,
    responsiveBreakpoint: 'lg',
    responsiveTarget: '#kt_toolbar_container', // Responsive target selector
  },
}
