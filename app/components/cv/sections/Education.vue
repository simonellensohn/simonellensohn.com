<script setup lang="ts">
import type { CvCollectionItem } from '@nuxt/content'

defineProps<{
  page: CvCollectionItem
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <CvSectionTitle :title="page.education.title" />

    <div class="flex flex-col gap-3">
      <template
        v-for="education in page.education.history"
        :key="education.institution"
      >
        <div class="flex flex-col gap-1">
          <CvSectionTitle
            :href="education.href"
            :title="education.institution"
          />

          <span class="text-sm">{{ education.year }}</span>

          <CvSectionDescription :description="education.degree" />
        </div>
      </template>
    </div>
  </div>
</template>
