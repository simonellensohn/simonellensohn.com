<script setup lang="ts">
import type { CvCollectionItem } from '@nuxt/content'

defineProps<{
  page: CvCollectionItem
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-xl font-bold">
      {{ page.profile.title }}
    </h2>

    <MDC
      class="text-xs font-mono leading-relaxed"
      :value="page.profile.content"
      unwrap="p"
    />
  </div>
</template>
