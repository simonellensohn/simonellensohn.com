<script setup lang="ts">
import type { CvCollectionItem } from '@nuxt/content'

defineProps<{
  page: CvCollectionItem
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <CvSectionTitle :title="page.profile.title" />
    <CvSectionDescription :description="page.profile.content" />
  </div>
</template>
