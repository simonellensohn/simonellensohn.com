<script setup lang="ts">
const { socialLinks } = useAppConfig()
const { setLocale, locales, locale } = useI18n()
const credits = `© ${new Date().getFullYear()} • Simon Ellensohn`

watch(locale, () => window.scrollTo({ top: 0 }))
</script>

<template>
  <UFooter
    class="z-10 bg-default"
    :ui="{ left: 'text-muted text-xs' }"
  >
    <template #left>
      {{ credits }}
    </template>

    <template #right>
      <UButton
        v-for="(link, index) of socialLinks"
        :key="index"
        v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
      />
    </template>

    <div class="flex gap-2 items-center">
      <UButton
        v-for="_locale of locales"
        :key="_locale.code"
        :label="_locale.code.toUpperCase()"
        color="neutral"
        :variant="_locale.code === locale ? 'solid' : 'outline'"
        class="px-4"
        @click="setLocale(_locale.code)"
      />
    </div>
  </UFooter>
</template>
