<template>
  <div>
    <UContainer class="min-h-screen flex flex-col justify-between print:p-0 print:border-none sm:border-x border-default pt-10">
      <AppHeader class="print:hidden" />
      <slot />
      <AppFooter class="print:hidden" />
    </UContainer>
  </div>
</template>
