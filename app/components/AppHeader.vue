<script setup lang="ts">
const links = computed(() => [
  {
    'icon': 'i-heroicons-home',
    'to': '/',
    'aria-label': $t('nav.home'),
  },
  {
    label: $t('nav.services'),
    to: '/services',
  },
  {
    label: $t('nav.stack'),
    to: '/stack',
  },
  {
    label: $t('nav.uses'),
    to: '/uses',
  },
  {
    label: $t('nav.about'),
    to: '/about',
  },
  {
    label: $t('nav.cv'),
    to: '/cv',
  },
])
</script>

<template>
  <div class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10 overflow-x-scroll">
    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
      :ui="{ link: 'px-2 py-1' }"
    >
      <template #list-trailing>
        <ColorModeButton class="hidden sm:inline-flex" />
      </template>
    </UNavigationMenu>
  </div>
</template>
