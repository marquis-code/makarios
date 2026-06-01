<template>
  <div class="min-h-screen bg-slate-50 relative overflow-hidden flex items-center justify-center">
    <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-dark/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10 max-w-lg">
      <div class="interactive-card p-12 lg:p-16 flex flex-col items-center text-center space-y-10">
        <div class="relative">
           <div class="w-24 h-24 bg-brand-cyan/10 rounded-[32px] flex items-center justify-center text-brand-cyan group">
             <LucideLoader2 :size="40" class="animate-spin text-brand-cyan" />
           </div>
           <div class="absolute -inset-4 bg-brand-cyan/20 rounded-full blur-2xl animate-pulse -z-10"></div>
        </div>

        <div class="space-y-4">
           <h2 class="text-3xl font-black text-brand-dark tracking-tighter uppercase">Securing Payment.</h2>
           <p class="text-slate-500 font-medium leading-relaxed">
             Synchronizing with financial gateways to verify transaction: 
             <span class="block mt-2 font-black text-sm text-brand-cyan tracking-widest uppercase">{{ $route.query.reference || 'VALIDATING...' }}</span>
           </p>
        </div>
        
        <div class="w-full space-y-4">
           <div class="flex justify-between items-center text-[10px] font-black text-brand-dark  px-1">
              <span>Verification Sequence</span>
              <span class="text-brand-cyan">{{ progress }}%</span>
           </div>
           <div class="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-0.5 border border-slate-200">
              <div class="bg-brand-cyan h-full rounded-full transition-all duration-1000 shadow-sm" :style="{ width: progress + '%' }"></div>
           </div>
        </div>

        <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] animate-pulse">
           DO NOT REFRESH OR DISCONNECT
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LucideLoader2 } from 'lucide-vue-next'
import { useVerifyPayment } from '@/composables/modules/payments/usePayments'
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const progress = ref(0)
const router = useRouter()
const route = useRoute()
const { loading, paymentStatus, verifyPayment } = useVerifyPayment()

onMounted(async () => {
  const reference = String(route.query.reference || '')
  
  // Animate progress bar simulation
  const interval = setInterval(() => {
    if (progress.value < 85) progress.value += 2
  }, 100)

  // Actually verify the payment from backend
  if (reference) {
    try {
      await verifyPayment(reference)
    } catch (e) {
      console.error('Payment verification failed', e)
    }
  }

  // Complete progress bar logic
  clearInterval(interval)
  progress.value = 100

  // Final redirect after verification
  setTimeout(() => {
    router.push('/membership')
  }, 2000)
})
</script>
