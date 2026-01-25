<script setup lang="ts">
const print = () => window.print()
</script>

<template>
  <UButton
    type="button"
    class="print:hidden cursor-pointer"
    icon="i-heroicons-printer"
    size="md"
    color="neutral"
    variant="outline"
    @click="print"
  />
</template>
