<template>
  <div class="pt-32 pb-24">
    <section class="container mx-auto px-6 max-w-5xl">
       <div class="text-center space-y-6 mb-20">
          <h1 class="text-5xl md:text-7xl font-black text-brand-blue tracking-tighter">Secure <span class="text-brand-cyan">Dues & Payments</span></h1>
          <p class="text-slate-500 font-medium text-lg max-w-2xl mx-auto">Centralized hub for membership subscriptions, conference registrations, and archival access fees.</p>
       </div>

       <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div v-for="pay in paymentCategories" :key="pay.title" class="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-brand-blue/5 hover:border-brand-cyan/30 transition-all duration-500 group">
             <div class="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all">
                <component :is="pay.icon" :size="28" />
             </div>
             <h3 class="text-2xl font-black text-brand-blue mb-4">{{ pay.title }}</h3>
             <p class="text-slate-500 font-medium mb-10 leading-relaxed">{{ pay.desc }}</p>
             <button class="btn-premium w-full py-4 text-[10px]">Initialize Payment</button>
          </div>
       </div>

       <div class="mt-20 p-10 bg-slate-50 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 border border-white">
          <div class="flex items-center gap-6">
             <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-500 shadow-lg">
                <LucideShieldCheck :size="24" />
             </div>
             <div>
                <p class="font-black text-brand-blue  text-[10px]">Verified Transaction</p>
                <p class="text-slate-500 text-base font-medium">All payments are secured via Paystack & Flutterwave.</p>
             </div>
          </div>
          <NuxtLink to="/contact" class="text-brand-blue font-black  text-[10px] hover:text-brand-cyan transition-colors">Payment Support</NuxtLink>
       </div>
    </section>
  </div>
</template>

<script setup>
import { LucideCreditCard, LucideAward, LucideShieldCheck } from 'lucide-vue-next'

const paymentCategories = [
  { title: 'Membership Dues', desc: 'Annual professional registration for practicing scientists.', icon: LucideCreditCard },
  { title: 'Conference Fees', desc: 'Registration for upcoming annual scientific meetings.', icon: LucideAward },
]
</script>
