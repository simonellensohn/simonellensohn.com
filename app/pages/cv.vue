<script setup lang="ts">
const page = await usePageContent('cv')

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description,
})
</script>

<template>
  <UPage v-if="page">
    <UPageSection
      :ui="{
        container: 'print:py-0',
      }"
    >
      <div class="flex flex-col gap-6 space-y-12">
        <CvPersonal :page />
        <CvProfile :page />
        <CvCoreFocus :page />
        <CvExperiences :page />
        <CvEducation :page />
        <CvLanguages :page />
        <CvInterests :page />
      </div>
    </UPageSection>
  </UPage>
</template>
