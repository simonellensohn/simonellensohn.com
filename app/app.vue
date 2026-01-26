<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()
const colorMode = useColorMode()

const color = computed(() =>
  colorMode.value === 'dark' ? '#020618' : 'white',
)

useHead({
  meta: [
    {
      charset: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      key: 'theme-color',
      name: 'theme-color',
      content: color,
    },
  ],
  link: [
    {
      rel: 'icon',
      href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>',
    },
  ],
  htmlAttrs: {
    lang: locale.value,
  },
})

useSeoMeta({
  titleTemplate: '%s - Simon Ellensohn',
})

// defineOgImageComponent('Frame', {
//   title: 'Simon Ellensohn',
//   description: 'Freelance Full Stack Developer',
// })
</script>

<template>
  <UApp :locale="locales[locale]">
    <NuxtLayout>
      <UMain class="relative min-h-full">
        <NuxtPage />
      </UMain>
    </NuxtLayout>
  </UApp>
</template>
