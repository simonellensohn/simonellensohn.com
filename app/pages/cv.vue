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
    <UPageSection>
      <div class="flex flex-col gap-12">
        <CvSectionsPersonal :page />
        <CvSectionsProfile :page />
        <CvSectionsCoreFocus :page />
        <CvSectionsExperiences
          :page
          class="print:break-before-page"
        />
        <CvSectionsEducation :page />
        <CvSectionsLanguages :page />
        <CvSectionsInterests :page />
      </div>
    </UPageSection>
  </UPage>
</template>
