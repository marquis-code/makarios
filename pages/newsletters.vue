<template>
  <main class="min-h-screen bg-slate-50 pt-24 pb-32">
    <!-- Hero Section -->
    <section class="bg-brand-blue py-20 relative overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-10">
        <div class="absolute top-10 left-10 w-64 h-64 bg-brand-cyan rounded-full blur-[100px]"></div>
        <div class="absolute bottom-10 right-10 w-64 h-64 bg-brand-red rounded-full blur-[100px]"></div>
      </div>
      <div class="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <h1 class="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">Premium Scientific <span class="text-brand-cyan">Newsletters</span></h1>
        <p class="text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
          Subscribe to our specialized publications to receive cutting-edge research, clinical updates, and pathology news directly in your inbox.
        </p>
      </div>
    </section>

    <!-- Subscription Section -->
    <section class="container mx-auto px-6 mt-16 max-w-6xl">
      <div class="flex flex-col lg:flex-row gap-12">
        
        <!-- Categories Selection -->
        <div class="flex-grow space-y-8">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-black text-brand-blue">Available Categories</h2>
            <span class="text-base font-bold text-slate-400">{{ activeCategories.length }} available</span>
          </div>

          <div v-if="loading && categories.length === 0" class="py-12 flex justify-center">
            <div class="w-10 h-10 border-4 border-brand-cyan/30 border-t-brand-cyan rounded-full animate-spin"></div>
          </div>

          <div v-else-if="activeCategories.length === 0" class="py-12 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">
            No newsletter categories available at the moment. Please check back later.
          </div>

          <div v-else class="space-y-4">
            <label 
              v-for="cat in activeCategories" 
              :key="cat._id"
              :class="['relative p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-center bg-white hover:shadow-md', 
                selectedCategories.includes(cat._id) ? 'border-brand-blue ring-2 ring-brand-blue/10 shadow-sm' : 'border-slate-100 hover:border-slate-300'
              ]"
            >
              <div class="flex-grow pr-6">
                <h3 class="text-base font-black text-slate-800 mb-1">{{ cat.title }}</h3>
                <p class="text-sm text-slate-500">{{ cat.description }}</p>
              </div>
              <div class="shrink-0 text-right mr-6">
                <span class="text-xl font-black text-brand-cyan block leading-none">{{ cat.price === 0 ? 'Free' : '₦' + cat.price.toLocaleString() }}</span>
                <span class="text-xs font-bold text-slate-400">/ subscription</span>
              </div>
              <div class="shrink-0 flex items-center justify-center">
                <input 
                  type="checkbox" 
                  :value="cat._id" 
                  v-model="selectedCategories"
                  class="w-6 h-6 text-brand-blue border-slate-300 rounded focus:ring-brand-blue cursor-pointer"
                />
              </div>
            </label>
          </div>
        </div>

        <!-- Checkout Panel -->
        <div class="w-full lg:w-[400px] shrink-0">
          <div class="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sticky top-32">
            <h3 class="text-xl font-black text-brand-blue mb-6">Your Subscription</h3>
            
            <div class="space-y-4 mb-8 min-h-[100px]">
              <div v-if="selectedCategoriesData.length === 0" class="text-base text-slate-400 text-center py-6 border-2 border-dashed border-slate-100 rounded-xl">
                Please select at least one newsletter category from the list.
              </div>
              
              <div v-for="cat in selectedCategoriesData" :key="cat._id" class="flex justify-between items-center text-base">
                <span class="font-semibold text-slate-700 truncate pr-4">{{ cat.title }}</span>
                <span class="font-black text-brand-blue shrink-0">{{ cat.price === 0 ? 'Free' : '₦' + cat.price.toLocaleString() }}</span>
              </div>
            </div>

            <div class="border-t border-slate-100 pt-6 mb-8">
              <div class="flex justify-between items-end">
                <span class="text-base font-bold text-slate-400 ">Total Total</span>
                <span class="text-3xl font-black text-brand-red">₦{{ totalPrice.toLocaleString() }}</span>
              </div>
            </div>

            <form @submit.prevent="subscribe" class="space-y-4">
              <div>
                <label class="block text-sm font-bold text-slate-600 tracking-wider mb-2">Full Name</label>
                <input v-model="fullName" type="text" placeholder="Dr. Jane Doe" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all" />
              </div>
              <div>
                <label class="block text-sm font-bold text-slate-600 tracking-wider mb-2">Email Address</label>
                <input v-model="email" type="email" placeholder="jane@hospital.org" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all" />
              </div>
              
              <div v-if="totalPrice > 0" class="mt-6 pt-6 border-t border-slate-100">
                <div class="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-4 mb-4">
                   <h4 class="text-sm font-black text-brand-blue mb-2">Bank Transfer Details</h4>
                   <p class="text-xs text-slate-600 mb-1">Please transfer <strong>₦{{ totalPrice.toLocaleString() }}</strong> to the SCPSN dues account below:</p>
                   <div class="mt-2 space-y-1">
                      <p class="text-sm"><span class="font-bold text-slate-500">Bank:</span> <span class="font-black text-slate-800">First Bank of Nigeria</span></p>
                      <p class="text-sm"><span class="font-bold text-slate-500">Account No:</span> <span class="font-black text-slate-800">2012345678</span></p>
                      <p class="text-sm"><span class="font-bold text-slate-500">Account Name:</span> <span class="font-black text-slate-800">SCPSN Dues</span></p>
                   </div>
                   <p class="text-xs text-slate-500 mt-3 border-t border-brand-blue/10 pt-2 italic">Transfer description must be: <strong>payment for new letter subscription</strong></p>
                </div>

                <div>
                  <label class="block text-sm font-bold text-slate-600 tracking-wider mb-2">Upload Proof of Payment</label>
                  <input type="file" @change="e => proofFile = e.target.files[0]" accept="image/*,.pdf" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all text-sm" />
                </div>
              </div>

              <button 
                type="submit" 
                :disabled="loading || selectedCategories.length === 0"
                class="w-full text-sm rounded-lg bg-black text-white py-4 mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3 transition-colors hover:bg-slate-800"
              >
                <span v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                {{ totalPrice === 0 ? 'Subscribe Now' : 'Submit Subscription' }}
              </button>
            </form>
            
            <p class="text-sm text-center text-slate-400 mt-6 font-medium">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useNewsletter } from '@/composables/modules/newsletters/useNewsletter'

const { loading, email, fullName, categories, selectedCategories, proofFile, fetchCategories, subscribe } = useNewsletter()

onMounted(() => {
  fetchCategories()
})

const activeCategories = computed(() => {
  return categories.value.filter(c => c.isActive)
})

const selectedCategoriesData = computed(() => {
  return activeCategories.value.filter(c => selectedCategories.value.includes(c._id))
})

const totalPrice = computed(() => {
  return selectedCategoriesData.value.reduce((sum, c) => sum + c.price, 0)
})
</script>
