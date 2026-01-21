import type { Collections } from '@nuxt/content'

export default async function<T extends keyof Collections>(source: T) {
  const { locale } = useI18n()

  const { data: page } = await useAsyncData(`${source}-${locale.value}`, () => {
    const path = source === 'index'
      ? `/${locale.value}`
      : `/${locale.value}/${source}`

    return queryCollection(source).path(path).first()
  }, {
    watch: [locale],
  })

  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found',
      fatal: true,
    })
  }

  return page
}
