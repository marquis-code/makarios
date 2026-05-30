<template>
  <Transition name="fade">
    <div v-if="loading" class="fixed inset-0 z-[1000] bg-slate-50 flex items-center justify-center overflow-hidden">
      <!-- Decorative Background Orbs -->
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div class="relative flex flex-col items-center gap-8">
        <!-- Pulse Rings -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-32 h-32 border-2 border-brand-cyan/30 rounded-full animate-ping-slow"></div>
          <div class="absolute w-40 h-40 border-2 border-brand-blue/20 rounded-full animate-ping-slower"></div>
        </div>

        <!-- Central Logo -->
        <div class="relative w-32 h-32 bg-white rounded-3xl p-4 shadow-2xl flex items-center justify-center animate-pulse-gentle">
          <img src="@/assets/images/logo.jpeg" alt="SCPSN Logo" class="object-contain" />
        </div>

        <!-- Text Indicator -->
        <div class="flex flex-col items-center">
          <h2 class="text-[11px] font-black  -[0.4em] text-brand-blue mb-1">SCPSN Scientific Portal</h2>
          <div class="flex gap-1.5 mt-2">
            <span v-for="i in 3" :key="i" class="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce" :style="{ animationDelay: `${i * 150}ms` }"></span>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
@keyframes ping-slow {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(3); opacity: 0; }
}

@keyframes ping-slower {
  0% { transform: scale(1); opacity: 0.5; }
  100% { transform: scale(4); opacity: 0; }
}

@keyframes pulse-gentle {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-ping-slow {
  animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-ping-slower {
  animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-pulse-gentle {
  animation: pulse-gentle 2s ease-in-out infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
