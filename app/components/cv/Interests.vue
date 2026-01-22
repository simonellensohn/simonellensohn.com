<script setup lang="ts">
import type { CvCollectionItem } from '@nuxt/content'

defineProps<{
  page: CvCollectionItem
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-xl font-bold">
      {{ page.interests.title }}
    </h2>

    <div class="flex flex-wrap gap-2">
      <UBadge
        v-for="topic in page.interests.topics"
        :key="topic"
        size="md"
        color="neutral"
        variant="soft"
      >
        {{ topic }}
      </UBadge>
    </div>
  </div>
</template>
