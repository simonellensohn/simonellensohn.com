<script setup>
defineProps({
  title: { type: String, required: false },
  description: { type: String, required: false },
  bg: { type: String, required: false, default: 'linear-gradient(to bottom right, #171717, #131313)' },
})
</script>

<template>
  <div
    class="relative h-full w-full flex items-center justify-center bg-neutral-900 text-white border-2 border-white"
    :style="{ backgroundImage: bg }"
  >
    <div class="flex flex-col items-center text-center">
      <h1
        class="flex gap-4 text-7xl font-bold"
        style="display: block; line-clamp: 2; text-overflow: ellipsis;"
      >
        {{ title }}
      </h1>
      <p
        class="text-2xl max-w-3xl"
        style="display: block; line-clamp: 3; text-overflow: ellipsis;"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
