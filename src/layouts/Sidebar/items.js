export const sidebarItems = [
  {
    name: 'Overview',
    path: '/',
  },
  {
    name: 'Customers',
    path: '/customers',
  },
  {
    name: 'Installations',
    path: '/installations',
    hasNestedRoutes: true,
    nestedRoutes: [
      {
        name: 'Installations',
        path: '/installations',
      },
      {
        name: 'Installation Feedback',
        path: '/installations/feedback',
      },
      {
        name: 'Installation Zones',
        path: '/installations/zones',
      },
      {
        name: 'Installation Summary',
        path: '/installations/summary',
      },
      {
        name: 'Installation Counter',
        path: '/installations/counter',
      },
      {
        name: 'Installation Times',
        path: '/installations/times',
      },
      {
        name: 'Team Assigned Installation',
        path: '/installations/team-assigned',
      },
    ],
  },
  {
    name: 'Retrievals',
    path: '/retrievals',
  },
  {
    name: 'Relocations',
    path: '/relocations',
  },
  {
    name: 'Scheduling',
    path: '/scheduling',
    hasNestedRoutes: true,
    nestedRoutes: [
      {
        name: 'Schedule',
        path: '/scheduling',
      },

      {
        name: 'Routing and Clustering ',
        path: '/scheduling/routing',
      },
      {
        name: 'Teams',
        path: '/scheduling/teams',
      },
    ],
  },
  {
    name: 'Base Stations',
    path: '/base-station',
  },
  {
    name: 'Leads',
    path: '/leads',
  },
  {
    name: 'No LOS',
    path: '/no-los',
  },
  {
    name: 'Refunds',
    path: '/refunds',
  },
  {
    name: 'Budget',
    path: '/budget',
  },
  {
    name: 'User Assigned Installation',
    path: '/assigned-installation',
  },
  {
    name: 'Others',
    path: '/others',
  },
];

export const nestedSidebarItems = (pathname) =>
  sidebarItems
    .filter((item) => item.hasNestedRoutes === true)
    .find((link) => link.path === pathname)?.nestedRoutes;

  
    