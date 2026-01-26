<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2',
    }"
  >
    <template #title>
      <Motion
        :initial="{ opacity: 0, transform: 'translateY(20px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 }"
        :in-view-options="{ once: true }"
      >
        {{ page.experience.title }}
      </Motion>
    </template>

    <template #description>
      <div class="flex flex-col gap-2">
        <Motion
          v-for="(experience, index) in page.experience.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="text-muted flex items-center text-nowrap gap-2"
        >
          <p class="text-sm">
            {{ experience.date }}
          </p>

          <USeparator />

          <ULink
            v-if="experience.company"
            class="flex items-center justify-end flex-wrap gap-1"
            :to="experience.company.url"
            target="_blank"
          >
            <span class="text-sm">{{ experience.position }}</span>
            <span class="font-medium">{{ experience.company.name }}</span>
          </ULink>

          <span
            v-else
            class="text-sm"
          >
            {{ experience.position }}
          </span>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>
