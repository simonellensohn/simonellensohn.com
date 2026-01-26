<script setup lang="ts">
import type { NuxtError } from '#app'

const { locale } = useI18n()

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true,
  },
})

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
})

useSeoMeta({
  title: $t('error.404.title'),
  description: $t('error.404.message'),
})
</script>

<template>
  <UError
    :error
    :clear="{
      size: 'lg',
      color: 'primary',
      variant: 'solid',
      label: $t('error.clear_label'),
    }"
  />
</template>
