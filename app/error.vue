<script setup lang="ts">
import type { NuxtError } from '#app'

const { locale, t } = useI18n()

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true,
  },
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
})

useSeoMeta({
  title: 'Page not found',
  description: 'I\'m sorry but this page could not be found.',
})
</script>

<template>
  <div>
    <AppHeader :links="navLinks(locale, t)" />

    <UMain>
      <UContainer>
        <UPage>
          <UError :error="error" />
        </UPage>
      </UContainer>
    </UMain>

    <AppFooter />

    <UToaster />
  </div>
</template>
