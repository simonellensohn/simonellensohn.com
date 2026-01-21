import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Services',
    to: '/services',
  },
  {
    label: 'Stack',
    to: '/stack',
  },
  {
    label: 'Uses',
    to: '/uses',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'CV',
    to: '/cv',
    target: '_blank',
  },
]
