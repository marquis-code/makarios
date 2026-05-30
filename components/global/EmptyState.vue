<template>
  <div class="w-full py-24 px-6 flex flex-col items-center justify-center text-center bg-white/50 backdrop-blur-sm rounded-3xl border border-slate-100">
    <div class="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 mb-6">
      <LucideInbox :size="40" stroke-width="1" />
    </div>
    <h3 class="text-xl font-black text-brand-blue mb-2">{{ title }}</h3>
    <p class="text-slate-500 max-w-sm mb-8 leading-relaxed font-medium text-base">{{ message }}</p>
    <slot>
      <NuxtLink v-if="action" :to="action.to" class="btn-premium px-8 py-3 text-[10px]">
        {{ action.label }}
      </NuxtLink>
    </slot>
  </div>
</template>

<script setup>
import { LucideInbox } from 'lucide-vue-next'

defineProps({
  title: {
    type: String,
    default: 'No Content Found'
  },
  message: {
    type: String,
    default: 'Check back later for recent scientific updates and archives.'
  },
  action: {
    type: Object,
    default: null
  }
})
</script>
