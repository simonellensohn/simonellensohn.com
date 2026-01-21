<script setup lang="ts">
const page = await usePageContent('stack')

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
      <div class="space-y-12">
        <div
          v-for="category in page.categories"
          :key="category.name"
        >
          <h2 class="text-xl font-semibold tracking-tight text-highlighted mb-6 border-b border-default pb-2">
            {{ category.name }}
          </h2>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <UButton
              v-for="tech in category.technologies"
              :key="tech.name"
              :icon="tech.icon"
              :to="tech.url"
              target="_blank"
            >
              {{ tech.name }}
            </UButton>
            <!-- <div v-for="tech in category.technologies" :key="tech.name"
              class="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <UIcon :name="tech.icon" class="w-6 h-6" />
              <span class="font-medium">{{ tech.name }}</span>
            </div> -->
          </div>
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>
