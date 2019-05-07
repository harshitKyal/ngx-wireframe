import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Party',
    icon: 'nb-layout-default',
    children: [
      {
        title: 'Add Party',
        link: '/pages/party/add-party',
      },
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
        title: 'Add Quality',
        link: '/pages/quality/add-quality',
      },
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
        title: 'Add User',
        link: '/pages/user/add-user',
      },
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
        title: 'Add Bill',
        link: '/pages/bill/add-bill',
      },
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
        title: 'Add Lot',
        link: '/pages/lot/add-lot',
      },
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
