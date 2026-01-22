<script setup lang="ts">
import type { CvCollectionItem } from '@nuxt/content'

defineProps<{
  page: CvCollectionItem
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <CvSectionTitle :title="page.interests.title" />

    <div class="hidden print:block text-sm">
      {{ page.interests.topics.join(', ') }}
    </div>

    <div class="print:hidden flex flex-wrap gap-2">
      <UBadge
        v-for="topic in page.interests.topics"
        :key="topic"
        size="lg"
        color="neutral"
        variant="soft"
      >
        {{ topic }}
      </UBadge>
    </div>
  </div>
</template>
