<template>
  <div class="min-h-screen flex flex-col font-sans bg-slate-50 relative overflow-hidden">
    <!-- <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-dark/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

    <div class="glass relative z-[60] border-b border-white/20 hidden md:block">
      <div class="container mx-auto px-12 py-3 flex justify-between items-center">
        <div class="flex items-center gap-8">
          <span class="flex items-center gap-2 text-[10px] font-black text-brand-dark  tracking-[0.2em]">
            <LucideShield :size="14" class="text-brand-cyan" />
            SCIENTIFIC_INTEGRITY_VERIFIED
          </span>
          <div class="h-3 w-[1px] bg-slate-200"></div>
          <span class="flex items-center gap-2 text-[10px] font-black text-brand-dark  tracking-[0.2em]">
            <LucideGlobe :size="14" class="text-brand-cyan" />
            NIGERIA'S PREMIER CELLULAR PATHOLOGY BODY
          </span>
        </div>
        <div class="flex items-center gap-6">
          <span class="flex items-center gap-2 text-[10px] font-black text-brand-dark  tracking-[0.2em]">
            <LucidePhone :size="14" class="text-brand-cyan" />
            CONNECT: +234 901 437 7191
          </span>
        </div>
      </div>
    </div> -->

    <Header />
    
    <main class="flex-grow relative z-10">
      <slot />
    </main>

    <Footer />

    <!-- AI Chat Widget -->
    <AIChatWidget />
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
