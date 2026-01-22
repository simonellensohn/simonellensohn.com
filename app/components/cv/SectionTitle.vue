<script setup lang="ts">
defineProps<{
  title: string
  href?: string
}>()
</script>

<template>
  <a
    v-if="href"
    :href="href"
    target="_blank"
    rel="noreferrer"
    class="text-lg font-semibold underline underline-offset-2"
  >
    {{ title }}
  </a>

  <h2
    v-else
    class="text-2xl font-bold"
  >
    {{ title }}
  </h2>
</template>
