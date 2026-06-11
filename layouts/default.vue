<template>
  <div>
  <slot />
  </div>
</template>

<script setup>
import { LucideClock, LucidePhone, LucideShield, LucideGlobe } from 'lucide-vue-next'
</script>

<style>
/* Global High-End Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(10px);
}
</style>
