<script setup lang="ts">
const { locale } = useI18n()

const print = () => {
  useTrackEvent('print_cv', {
    props: {
      locale: locale.value,
    },
  })

  window.print()
}
</script>

<template>
  <UButton
    type="button"
    class="print:hidden cursor-pointer"
    icon="i-heroicons-printer"
    size="md"
    color="neutral"
    variant="outline"
    @click="print"
  />
</template>
