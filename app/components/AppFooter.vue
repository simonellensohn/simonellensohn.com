<script setup lang="ts">
const { footer } = useAppConfig()
const { setLocale, locales, locale } = useI18n()
</script>

<template>
  <UFooter
    class="z-10 bg-default print:hidden"
    :ui="{ left: 'text-muted text-xs' }"
  >
    <template #left>
      {{ footer.credits }}
    </template>

    <template #right>
      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
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
