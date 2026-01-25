import type { Collections } from '@nuxt/content'
import { useRoute, useAsyncData, createError, type Ref } from '#imports'

export default async function<T extends keyof Collections>(source: T): Promise<Ref<Collections[T]>> {
  const route = useRoute()
  const locale = route.path.startsWith('/de') ? 'de' : 'en'

  const { data: page } = await useAsyncData(`${source}-${locale}`, () => {
    const path = source === 'index'
      ? `/${locale}`
      : `/${locale}/${source}`

    return queryCollection(source).path(path).first()
  })

  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found',
      fatal: true,
    })
  }

  return page as Ref<Collections[T]>
}
