import {ILayout} from './LayoutModels'

export const DefaultLayoutConfig: ILayout = {
  main: {
    type: 'default',
    darkSkinEnabled: true,
    primaryColor: '#009EF7',
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
    width: 'fluid', // Set fixed|fluid to change width type
    left: 'menu',
    fixed: {
      desktop: true, // Set true|false to set fixed Header for desktop mode
      tabletAndMobile: true, // Set true|false to set fixed Header for tablet and mobile modes
    },
    menuIcon: 'font',
    menu: true,
  },
  megaMenu: {
    display: true, // Set true|false to show or hide Mega Menu
  },
  aside: {
    display: true,
    fixed: true,
    menuIcon: 'font',
  },
  content: {
    width: 'fixed', // Set fixed|fluid to change width
    layout: 'default',
  },
  toolbar: {
    display: true, // Display toolbar
    width: 'fluid',
    fixed: {
      desktop: true,
      tabletAndMobileMode: false,
    },
  },
  footer: {
    width: 'fluid', // Set fixed|fluid to change width type
  },
  pageTitle: {
    display: true,
    breadCrumbs: true,
    description: true,
    responsive: true,
    responsiveBreakpoint: 'lg',
    responsiveTarget: '#kt_toolbar_container', // Responsive target selector
  },
}
