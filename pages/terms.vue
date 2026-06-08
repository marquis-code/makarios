<template>
  <div class="pt-32 pb-24 font-body bg-slate-50 min-h-screen">
    <div class="container mx-auto px-6 max-w-3xl">
      <div class="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
        <div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-[11px] font-semibold px-4 py-2 rounded-full mb-6 border border-blue-100">
          <LucideFileText :size="14" />
          Legal Document
        </div>
        
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">Terms of Use</h1>
        
        <div class="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed">
          <p class="mb-8 text-[15px]">By accessing this portal, you agree to comply with the professional standards set by the SCPSC scientific board.</p>
          
          <h2 class="text-[20px] font-bold text-slate-800 mt-10 mb-4 border-b border-slate-100 pb-2">1. Membership Conduct</h2>
          <p class="mb-8 text-[14px]">All members must adhere to the Ethical Code of Conduct for Medical Laboratory Scientists in Nigeria.</p>
          
          <h2 class="text-[20px] font-bold text-slate-800 mt-10 mb-4 border-b border-slate-100 pb-2">2. Intellectual Property</h2>
          <p class="mb-8 text-[14px]">Scientific journals and abstracts accessed through this portal are protected material.</p>
          
          <div class="mt-16 pt-6 border-t border-slate-100">
            <p class="text-[11px] font-semibold tracking-widest uppercase text-slate-400">Last Updated: March 2026</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LucideFileText } from 'lucide-vue-next'
</script>

<style scoped>
.font-body {
  font-family: 'DM Sans', 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
}
</style>
