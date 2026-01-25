<script setup lang="ts">
const { locale } = useI18n()

const props = defineProps<{
  timezone: string
}>()

const timeZoneName = new Intl.DateTimeFormat(locale.value, {
  timeZone: props.timezone,
  timeZoneName: 'shortOffset',
})
  .formatToParts()
  .find(x => x.type === 'timeZoneName')!.value

const now = useNow({ interval: 1000 })
const time = computed(() => {
  return now.value.toLocaleTimeString(locale.value, {
    timeZone: props.timezone,
  })
})
</script>

<template>
  <span>
    {{ timeZoneName }}

    <ClientOnly>
      <span class="print:hidden">{{ time }}</span>
    </ClientOnly>
  </span>
</template>
