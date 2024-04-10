type Tab = {
  link:
    | 'projects'
    | 'menu'
    | 'subscription'
    | 'tasks'
    | 'notifications'
    | 'authors';
  icon: string;
  tooltip:
    | 'Projects'
    | 'Menu'
    | 'Subscription'
    | 'Tasks'
    | 'Notifications'
    | 'Authors';
};

const tabs: ReadonlyArray<Tab> = [
  {
    link: 'projects',
    icon: './assets/media/icons/duotune/general/gen025.svg',
    tooltip: 'Projects',
  },
  {
    link: 'menu',
    icon: './assets/media/icons/duotune/finance/fin006.svg',
    tooltip: 'Menu',
  },
  {
    link: 'subscription',
    icon: './assets/media/icons/duotune/general/gen032.svg',
    tooltip: 'Subscription',
  },
  {
    link: 'tasks',
    icon: './assets/media/icons/duotune/general/gen048.svg',
    tooltip: 'Tasks',
  },
  {
    link: 'notifications',
    icon: './assets/media/icons/duotune/abstract/abs027.svg',
    tooltip: 'Notifications',
  },
  {
    link: 'authors',
    icon: './assets/media/icons/duotune/files/fil005.svg',
    tooltip: 'Authors',
  },
];

export { tabs, Tab };
