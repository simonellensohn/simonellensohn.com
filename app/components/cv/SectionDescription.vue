<script setup lang="ts">
defineProps<{
  description: string
}>()
</script>

<template>
  <MDC
    class="text-sm font-mono leading-relaxed"
    :value="description"
    unwrap="p"
  />
</template>
