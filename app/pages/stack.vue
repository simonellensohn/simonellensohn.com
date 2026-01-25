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

    <UPageSection :ui="{ container: '!pt-0' }">
      <div class="space-y-12">
        <Motion
          v-for="(category, index) in page.categories"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :animate="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.1 + (0.2 * index) }"
          class="flex flex-col"
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
          </div>
        </Motion>
      </div>
    </UPageSection>
  </UPage>
</template>
