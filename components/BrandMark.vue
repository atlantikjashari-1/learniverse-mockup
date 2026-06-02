<template>
  <span class="brand-mark" aria-hidden="true">
    <svg :width="size" :height="size" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="2" opacity="0.32" />
      <path d="M6 20c4-7 16-7 20 0" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" />
      <circle cx="8" cy="18.5" r="2.6" fill="currentColor" />
      <circle cx="16" cy="12.5" r="2.6" fill="currentColor" />
      <circle cx="24" cy="18.5" r="2.6" fill="var(--accent)" />
    </svg>
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 28 })
</script>

<style scoped>
.brand-mark {
  display: inline-flex;
  color: var(--blue);
}
</style>
