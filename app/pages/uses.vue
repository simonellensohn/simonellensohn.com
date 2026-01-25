<script setup lang="ts">
const page = await usePageContent('uses')

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description,
})

const sequencedCategories = computed(() => {
  const delayStep = 0.1

  return page.value.categories.map((category) => {
    let itemDelayAccumulator = 0

    const itemsWithDelay = category.items.map((item) => {
      itemDelayAccumulator += delayStep

      return { ...item, delay: itemDelayAccumulator }
    })

    return {
      ...category,
      items: itemsWithDelay,
    }
  })
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
        <div
          v-for="category in sequencedCategories"
          :key="category.name"
          class="grid grid-cols-1 lg:grid-cols-3 lg:gap-8"
        >
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0 }"
            :in-view-options="{ once: true, margin: '-50px' }"
            class="lg:col-span-1 mb-4 lg:mb-0"
          >
            <h2 class="lg:sticky lg:top-16 text-xl font-semibold tracking-tight text-highlighted">
              {{ category.name }}
            </h2>
          </Motion>

          <div class="lg:col-span-2 space-y-8">
            <Motion
              v-for="item in category.items"
              :key="item.name"
              :initial="{ opacity: 0, y: 20 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.4, delay: item.delay }"
              :in-view-options="{ once: true, margin: '-50px' }"
              class="group relative pl-6 border-l border-default"
            >
              <NuxtLink
                v-if="item.url"
                :to="item.url"
                target="_blank"
                class="absolute inset-0 z-10"
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
                class="p-0 pt-2 gap-0 relative z-20"
              >
                <template #trailing>
                  <UIcon
                    name="i-lucide-arrow-right"
                    class="size-4 transition-all opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </template>
              </UButton>
            </Motion>
          </div>
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>
