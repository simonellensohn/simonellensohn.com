<script setup lang="ts">
import type { CvCollectionItem } from '@nuxt/content'

defineProps<{
  page: CvCollectionItem
}>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-xl font-bold">
      {{ page.core_focus.title }}
    </h2>

    <div class="flex flex-col gap-6">
      <div
        v-for="point in page.core_focus.points"
        :key="point.title"
        class="flex flex-col gap-2"
      >
        <h3 class="font-semibold text-sm">
          {{ point.title }}
        </h3>

        <MDC
          class="text-xs font-mono leading-relaxed"
          :value="point.description"
          unwrap="p"
        />
      </div>
    </div>
  </div>
</template>
