import type { NavigationMenuItem } from '@nuxt/ui'

export function navLinks(locale: string, t: (key: string) => string): NavigationMenuItem[] {
  return [{
    icon: 'i-heroicons-home',
    to: locale === 'en' ? '/' : `/${locale}`,
  },
  {
    label: t('nav.services'),
    to: `/${locale}/services`,
  },
  {
    label: t('nav.stack'),
    to: `/${locale}/stack`,
  },
  {
    label: t('nav.uses'),
    to: `/${locale}/uses`,
  },
  {
    label: t('nav.about'),
    to: `/${locale}/about`,
  },
  {
    label: t('nav.cv'),
    to: `/${locale}/cv`,
    target: '_blank',
  }]
}
