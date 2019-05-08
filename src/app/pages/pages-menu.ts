import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Party',
    icon: 'nb-layout-default',
    children: [
      {
        title: 'View Party',
        link: '/pages/party/view-party',
      },
    ],
  },
  {
    title: 'Quality',
    icon: 'nb-layout-default',
    children: [
      {
        title: 'View Quality',
        link: '/pages/quality/view-quality',
      },
    ],
  },
  {
    title: 'User',
    icon: 'nb-layout-default',
    children: [
      {
        title: 'View User',
        link: '/pages/user/view-user',
      },
    ],
  },
  {
    title: 'Bill',
    icon: 'nb-layout-default',
    children: [
      {
        title: 'View Bill',
        link: '/pages/bill/view-bill-list',
      },
    ],
  },
  {
    title: 'Lot',
    icon: 'nb-layout-default',
    children: [
      {
        title: 'View Lot',
        link: '/pages/lot/view-lot-list',
      },
    ],
  },
  // {
  //   title: 'Quality',
  //   icon: 'nb-layout-default',
  //   children: [
  //     {
  //       title: 'Websites',
  //       link: '/pages/websites',
  //     },
  //   ],
  // },
  // {
  //   title: 'User',
  //   icon: 'nb-layout-default',
  //   children: [
  //     {
  //       title: 'Websites',
  //       link: '/pages/websites',
  //     },
  //   ],
  // },
];
