export default defineAppConfig({
  global: {
    picture: {
      src: '/about/avatar.webp',
      alt: 'My profile picture',
    },
    meetingLink: 'https://cal.com/simon-ellensohn-5xny7u',
    email: 'ellensohn.simon@gmail.com',
    available: true,
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral',
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description:
          'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted',
      },
    },
  },
  footer: {
    credits: `© ${new Date().getFullYear()} • Simon Ellensohn`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/simonellensohn',
        'target': '_blank',
        'aria-label': 'Simon on GitHub',
      },
      {
        'icon': 'i-simple-icons-linkedin',
        'to': 'https://www.linkedin.com/in/simon-ellensohn',
        'target': '_blank',
        'aria-label': 'Simon on LinkedIn',
      },
      {
        'icon': 'i-simple-icons-discord',
        'to': 'https://discord.com/users/149650220592922625',
        'target': '_blank',
        'aria-label': 'Simon on Discord',
      },
      {
        'icon': 'i-simple-icons-bluesky',
        'to': 'https://bsky.app/profile/simonellensohn.com',
        'target': '_blank',
        'aria-label': 'Simon on Bluesky',
      },
      {
        'icon': 'i-simple-icons-x',
        'to': 'https://x.com/simon_ellensohn',
        'target': '_blank',
        'aria-label': 'Simon on Twitter *cough* X',
      },
    ],
  },
})
