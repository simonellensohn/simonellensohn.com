<script setup lang="ts">
import type { CvCollectionItem } from '@nuxt/content'

defineProps<{
  page: CvCollectionItem
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-xl font-bold">
      {{ page.experiences.title }}
    </h2>

    <div class="flex flex-col gap-3">
      <template
        v-for="(job, index) in page.experiences.history"
        :key="`${job.role}-${index}`"
      >
        <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-1">
            <div class="flex items-baseline justify-between">
              <a
                :href="job.company.href"
                target="_blank"
                rel="noreferrer"
                class="font-semibold underline underline-offset-2"
              >
                {{ job.company.name }}
              </a>

              <span class="text-xs">{{ job.dates }}</span>
            </div>

            <span class="font-mono text-sm">{{ job.role }}</span>

            <div class="flex flex-wrap gap-x-3 gap-y-1 text-xs text-neutral-500">
              <span
                v-if="job.industry"
                class="flex items-center gap-1"
              >
                <UIcon
                  name="i-heroicons-building-office"
                  class="size-3"
                />
                {{ job.industry }}
              </span>

              <span
                v-if="job.team_size"
                class="flex items-center gap-1"
              >
                <UIcon
                  name="i-heroicons-users"
                  class="size-3"
                />
                {{ job.team_size }}
              </span>

              <span
                v-if="job.location"
                class="flex items-center gap-1"
              >
                <UIcon
                  name="i-heroicons-map"
                  class="size-3"
                />
                {{ job.location }}
              </span>
            </div>
          </div>

          <p class="font-mono text-xs leading-relaxed">
            {{ job.description }}
          </p>

          <div
            v-if="job.stack"
            class="flex flex-wrap items-center gap-1.5"
          >
            <span class="hidden print:block text-sm">Stack</span>
            <UBadge
              v-for="tech in job.stack"
              :key="tech"
              size="sm"
              color="neutral"
              variant="soft"
            >
              {{ tech }}
            </UBadge>
          </div>
        </div>

        <hr
          v-if="page.experiences.history.length - 1 !== index"
          class="border-default"
        >
      </template>
    </div>
  </div>
</template>
