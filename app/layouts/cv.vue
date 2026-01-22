<script setup lang="ts">
const { locale, t } = useI18n()
</script>

<template>
  <div>
    <UContainer class="print:p-0 print:border-none sm:border-x border-default pt-10">
      <AppHeader
        class="print:hidden"
        :links="navLinks(locale, t)"
      />

      <slot />

      <AppFooter class="print:hidden" />
    </UContainer>
  </div>
</template>
