<script setup lang="ts">
const { locale, t } = useI18n()
</script>

<template>
  <div>
    <UContainer class="sm:border-x border-default pt-10">
      <AppHeader :links="navLinks(locale, t)" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>
