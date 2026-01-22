<script setup lang="ts">
import type { CvCollectionItem } from '@nuxt/content'

defineProps<{
  page: CvCollectionItem
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-xl font-bold">
      {{ page.languages.title }}
    </h2>

    <div
      v-for="language in page.languages.speaks"
      :key="language.name"
      class="flex flex-col gap-2"
    >
      <div class="flex items-end gap-2">
        <span class="font-semibold">
          {{ language.name }}
        </span>

        <span class="text-xs font-mono leading-relaxed">
          / {{ language.level }}
        </span>
      </div>
    </div>
  </div>
</template>
