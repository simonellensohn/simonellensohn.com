<script setup lang="ts">
import type { CvCollectionItem } from '@nuxt/content'

defineProps<{
  page: CvCollectionItem
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-xl font-bold">
      {{ page.education.title }}
    </h2>

    <div class="flex flex-col gap-3">
      <template
        v-for="edu in page.education.history"
        :key="edu.institution"
      >
        <div class="flex flex-col gap-1">
          <div class="flex items-center justify-between gap-1">
            <a
              :href="edu.href"
              target="_blank"
              rel="noreferrer"
              class="font-semibold underline underline-offset-2"
            >
              {{ edu.institution }}
            </a>

            <span class="text-xs">{{ edu.year }}</span>
          </div>

          <p class="text-xs font-mono leading-relaxed">
            {{ edu.degree }}
          </p>
        </div>
      </template>
    </div>
  </div>
</template>
