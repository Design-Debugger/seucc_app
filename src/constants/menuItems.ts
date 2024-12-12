export const menuItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
    children: [
      {
        title: 'Mission & Vision',
        path: '/about/mission-vision',
        description: 'Our purpose and future goals',
      },
      {
        title: 'Executive Committee',
        path: '/about/committee',
        description: 'Meet our leadership team',
      },
      {
        title: 'History',
        path: '/about/history',
        description: 'Our journey through time',
      },
    ],
  },
  {
    title: 'Activities',
    path: '/activities',
    children: [
      {
        title: 'Workshops',
        path: '/activities/workshops',
        description: 'Technical skill development sessions',
      },
      {
        title: 'Competitions',
        path: '/activities/competitions',
        description: 'Programming contests and hackathons',
      },
      {
        title: 'Projects',
        path: '/activities/projects',
        description: 'Student-led innovative projects',
      },
    ],
  },
  {
    title: 'Resources',
    path: '/resources',
    children: [
      {
        title: 'Learning Materials',
        path: '/resources/materials',
        description: 'Study resources and tutorials',
      },
      {
        title: 'Code Repository',
        path: '/resources/code',
        description: 'Open source projects and examples',
      },
      {
        title: 'Publications',
        path: '/resources/publications',
        description: 'Research papers and articles',
      },
    ],
  },
  {
    title: 'Events',
    path: '/events',
    children: [
      {
        title: 'Upcoming Events',
        path: '/events/upcoming',
        description: 'Future activities and programs',
      },
      {
        title: 'Past Events',
        path: '/events/past',
        description: 'Previous events archive',
      },
    ],
  },
  {
    title: 'Contact',
    path: '/contact',
  },
]
