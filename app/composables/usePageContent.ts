import type { Collections } from '@nuxt/content'
import { useAsyncData, useI18n, createError, type Ref } from '#imports'

export default async function<T extends keyof Collections>(source: T): Promise<Ref<Collections[T]>> {
  const { locale, t } = useI18n()

  const { data: page } = await useAsyncData(`${source}-${locale.value}`, async () => {
    let content = await queryCollection(source)
      .where('stem', '=', `${locale.value}/${source}`)
      .first()

    if (!content && locale.value !== 'en') {
      content = await queryCollection(source)
        .where('stem', '=', `en/${source}`)
        .first()
    }

    return content
  }, {
    watch: [locale],
  })

  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: t('error.404.title'),
      statusText: t('error.404.message'),
      fatal: true,
    })
  }

  return page as Ref<Collections[T]>
}
