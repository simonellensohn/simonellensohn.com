<script setup lang="ts">
import type { CvCollectionItem } from '@nuxt/content'

const { global } = useAppConfig()

defineProps<{
  page: CvCollectionItem
}>()
</script>

<template>
  <div class="flex flex-col sm:flex-row justify-between gap-10">
    <div class="flex flex-col gap-3">
      <div>
        <div class="flex items-center gap-2">
          <h1 class="text-3xl font-bold">
            {{ page.personal.name }}
          </h1>

          <CvPrintButton />
        </div>

        <p class="font-mono">
          {{ page.personal.role }}
        </p>
      </div>

      <div class="flex flex-col gap-1 text-sm">
        <a
          :href="page.personal.url.href"
          target="_blank"
          rel="noreferrer"
          class="flex w-fit items-center gap-2 font-mono hover:underline"
        >
          <UIcon
            name="i-heroicons-link"
            class="size-4 print:hidden"
          />
          <span class="hidden print:block">{{ page.personal.url.title }}:</span>
          <span>{{ page.personal.url.text }}</span>
        </a>

        <a
          :href="page.personal.location.href"
          target="_blank"
          rel="noreferrer"
          class="flex w-fit items-center gap-2 font-mono hover:underline"
        >
          <UIcon
            name="i-heroicons-map"
            class="size-4 print:hidden"
          />
          <span class="hidden print:block">{{ page.personal.location.title }}:</span>
          <span>
            {{ page.personal.location.text }}, <CvCurrentTime :timezone="page.personal.location.timezone" />
          </span>
        </a>

        <a
          v-for="contact in page.personal.contact"
          :key="contact.title"
          :href="contact.href"
          class="flex w-fit items-center gap-2 font-mono hover:underline"
        >
          <UIcon
            :name="contact.icon"
            class="size-4 print:hidden"
          />
          <span class="hidden print:block">{{ contact.title }}:</span>
          <span>{{ contact.text }}</span>
        </a>
      </div>
    </div>

    <NuxtImg
      class="order-first sm:order-last sm:self-center size-36 rounded-lg ring ring-default ring-offset-3 ring-offset-bg"
      :src="global.picture?.src!"
      :alt="global.picture?.alt!"
      width="144"
      height="144"
    />
  </div>
</template>
