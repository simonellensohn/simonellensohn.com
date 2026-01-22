<script setup lang="ts">
import type { CvCollectionItem } from '@nuxt/content'

defineProps<{
  page: CvCollectionItem
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <CvSectionTitle :title="page.languages.title" />

    <div
      v-for="language in page.languages.speaks"
      :key="language.name"
      class="flex flex-col gap-2"
    >
      <div class="flex items-end gap-2">
        <span class="font-semibold">
          {{ language.name }}
        </span>

        <CvSectionDescription :description="`/ ${language.level}`" />
      </div>
    </div>
  </div>
</template>
