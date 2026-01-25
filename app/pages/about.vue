<script setup lang="ts">
const { global } = useAppConfig()
const page = await usePageContent('about')

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
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start',
      }"
    >
      <Motion
        :initial="{ opacity: 0, rotate: '0' }"
        :animate="{ opacity: 1, rotate: '4deg' }"
        :transition="{ delay: 0.1, duration: 0.5 }"
        :while-hover="{ rotate: '0', transition: { duration: 0.5 } }"
      >
        <NuxtImg
          class="rounded-lg ring ring-default ring-offset-3 ring-offset-bg"
          :src="global.picture?.src!"
          :alt="global.picture?.alt!"
          width="144"
          height="144"
        />
      </Motion>
    </UPageHero>

    <UPageSection :ui="{ container: '!pt-0' }">
      <Motion
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.1 }"
        :in-view-options="{ once: true }"
      >
        <MDC
          :value="page.content"
          unwrap="p"
        />

        <div class="flex flex-row justify-center items-center py-10 -space-x-8">
          <PolaroidItem
            v-for="(image, index) in page.images"
            :key="index"
            :image="image"
            :index
          />
        </div>
      </Motion>
    </UPageSection>
  </UPage>
</template>
