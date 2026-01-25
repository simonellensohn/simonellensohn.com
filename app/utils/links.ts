import type { NavigationMenuItem } from '@nuxt/ui'

export const useNavLinks = () => {
  const { t } = useI18n()
  const localePath = useLocalePath()

  return computed<NavigationMenuItem[]>(() => [
    {
      'icon': 'i-heroicons-home',
      'to': localePath('/'),
      'aria-label': t('nav.home'),
    },
    {
      label: t('nav.services'),
      to: localePath('/services'),
    },
    {
      label: t('nav.stack'),
      to: localePath('/stack'),
    },
    {
      label: t('nav.uses'),
      to: localePath('/uses'),
    },
    {
      label: t('nav.about'),
      to: localePath('/about'),
    },
    {
      label: t('nav.cv'),
      to: localePath('/cv'),
    },
  ])
}
