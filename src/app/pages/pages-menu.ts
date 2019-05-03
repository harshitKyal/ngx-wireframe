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
