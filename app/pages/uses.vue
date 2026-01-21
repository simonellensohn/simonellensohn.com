<script setup lang="ts">
const page = await usePageContent('uses')

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description,
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start',
      }"
    />

    <UPageSection
      :ui="{
        container: '!pt-0',
      }"
    >
      <div
        v-for="category in page.categories"
        :key="category.name"
        class="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 last:mb-0"
      >
        <div class="lg:col-span-1 mb-4 lg:mb-0">
          <h2 class="lg:sticky lg:top-16 text-xl font-semibold tracking-tight text-highlighted">
            {{ category.name }}
          </h2>
        </div>

        <div class="lg:col-span-2 space-y-8">
          <div
            v-for="item in category.items"
            :key="item.name"
            class="group relative pl-6 border-l border-default"
          >
            <NuxtLink
              v-if="item.url"
              :to="item.url"
              class="absolute inset-0"
            />

            <h3 class="mb-1 text-lg font-semibold text-highlighted">
              {{ item.name }}
            </h3>

            <div class="text-sm font-medium text-muted">
              {{ item.description }}
            </div>

            <UButton
              v-if="item.url"
              target="_blank"
              label="Learn more"
              variant="link"
              class="p-0 pt-2 gap-0"
            >
              <template #trailing>
                <UIcon
                  name="i-lucide-arrow-right"
                  class="size-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </template>
            </UButton>
          </div>
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>
