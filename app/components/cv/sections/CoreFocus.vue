<script setup lang="ts">
import type { CvCollectionItem } from '@nuxt/content'

defineProps<{
  page: CvCollectionItem
}>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <CvSectionTitle :title="page.core_focus.title" />

    <div class="flex flex-col gap-6">
      <div
        v-for="point in page.core_focus.points"
        :key="point.title"
        class="flex flex-col gap-2"
      >
        <h3 class="font-semibold">
          {{ point.title }}
        </h3>

        <CvSectionDescription :description="point.description" />
      </div>
    </div>
  </div>
</template>
