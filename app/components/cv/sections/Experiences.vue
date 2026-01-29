<script setup lang="ts">
import type { CvCollectionItem } from '@nuxt/content'

defineProps<{
  page: CvCollectionItem
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <CvSectionTitle :title="page.experiences.title" />

    <div class="flex flex-col gap-3">
      <template
        v-for="(job, index) in page.experiences.history"
        :key="`${job.role}-${index}`"
      >
        <div class="flex flex-col gap-2 print:gap-1 print:break-inside-avoid">
          <div class="flex flex-col gap-1">
            <div class="flex items-baseline justify-between">
              <CvSectionTitle
                :href="job.company.href"
                :title="job.company.name"
              />

              <span class="text-sm">{{ job.dates }}</span>
            </div>

            <span class="font-mono text-sm print:hidden">{{ job.role }}</span>

            <div class="flex print:flex-col flex-wrap gap-x-3 gap-y-1 text-sm opacity-80 print:opacity-100">
              <span class="hidden print:flex items-center gap-1">
                <span class="font-bold block">Role:</span>
                {{ job.role }}
              </span>

              <span
                v-if="job.industry"
                class="flex items-center gap-1"
              >
                <UIcon
                  name="i-heroicons-building-office"
                  class="size-4 print:hidden"
                />
                <span class="hidden print:block font-bold">{{ page.experiences.industry }}:</span>
                {{ job.industry }}
              </span>

              <span
                v-if="job.team_size"
                class="flex items-center gap-1"
              >
                <UIcon
                  name="i-heroicons-users"
                  class="size-4 print:hidden"
                />
                <span class="hidden print:block font-bold">{{ page.experiences.team_size }}:</span>
                {{ job.team_size }}
              </span>

              <span
                v-if="job.location"
                class="flex items-center gap-1"
              >
                <UIcon
                  name="i-heroicons-map"
                  class="size-4 print:hidden"
                />
                <span class="hidden print:block font-bold">{{ page.experiences.location }}:</span>
                {{ job.location }}
              </span>
            </div>
          </div>

          <CvSectionDescription
            class="print:order-last print:mt-1"
            :description="job.description"
          />

          <template v-if="job.stack">
            <div class="hidden print:block text-sm opacity-80 print:opacity-100">
              <span class="font-bold">Stack:</span> {{ job.stack.join(', ') }}
            </div>

            <div class="print:hidden flex flex-wrap items-center gap-1.5">
              <UBadge
                v-for="tech in job.stack"
                :key="tech"
                color="neutral"
                variant="soft"
              >
                {{ tech }}
              </UBadge>
            </div>
          </template>
        </div>

        <hr
          v-if="page.experiences.history.length - 1 !== index"
          class="border-default"
        >
      </template>
    </div>
  </div>
</template>
