<template>
  <div class="min-h-screen bg-white font-body">

    <!-- ─── HERO ─────────────────────────────────────────────── -->
    <section class="bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pb-20">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100">
            <LucideMail :size="13" />
            Newsletter Subscriptions
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Stay informed with <span class="text-[#1d4e89]">SCPSC</span> publications.
          </h1>
          <p class="text-[16px] text-slate-500 leading-relaxed max-w-[540px]">
            Subscribe to our specialized publications and receive cutting-edge research, clinical updates, and pathology news directly in your inbox.
          </p>
        </div>
      </div>
    </section>

    <!-- ─── MAIN CONTENT ─────────────────────────────────────── -->
    <section class="bg-slate-50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          <!-- ── Left: Categories ── -->
          <div class="lg:col-span-7 space-y-5">

            <!-- Section header -->
            <div class="flex items-center justify-between mb-2">
              <div>
                <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-1">Step 1</p>
                <h2 class="text-[20px] font-bold text-slate-800">Choose your categories</h2>
              </div>
              <span class="text-[12px] font-semibold text-slate-400 bg-white border border-slate-200 px-3 py-1.5 rounded-full">
                {{ activeCategories.length }} available
              </span>
            </div>

            <!-- Loading -->
            <div v-if="loading && categories.length === 0" class="py-16 flex justify-center">
              <div class="w-10 h-10 border-2 border-blue-100 border-t-[#1d4e89] rounded-full animate-spin"></div>
            </div>

            <!-- Empty state -->
            <div
              v-else-if="activeCategories.length === 0"
              class="py-16 text-center text-slate-400 bg-white border border-slate-200 rounded-2xl"
            >
              <LucideInbox :size="32" class="mx-auto mb-3 text-slate-300" />
              <p class="text-[14px] font-semibold text-slate-500">No newsletter categories available at the moment.</p>
              <p class="text-[13px] text-slate-400 mt-1">Please check back later.</p>
            </div>

            <!-- Category cards -->
            <div v-else class="space-y-3">
              <label
                v-for="cat in activeCategories"
                :key="cat._id"
                :class="[
                  'flex items-center gap-4 bg-white border-2 rounded-2xl p-5 cursor-pointer transition-all duration-200',
                  selectedCategories.includes(cat._id)
                    ? 'border-[#1d4e89] bg-blue-50/40 shadow-sm'
                    : 'border-slate-200 hover:border-blue-200 hover:shadow-sm'
                ]"
              >
                <!-- Icon badge -->
                <div
                  :class="[
                    'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all',
                    selectedCategories.includes(cat._id) ? 'bg-[#1d4e89]' : 'bg-slate-100'
                  ]"
                >
                  <LucideNewspaper
                    :size="16"
                    :class="selectedCategories.includes(cat._id) ? 'text-white' : 'text-slate-500'"
                  />
                </div>

                <!-- Text -->
                <div class="flex-grow">
                  <p class="text-[13px] font-semibold text-slate-800 mb-0.5">{{ cat.title }}</p>
                  <p class="text-[12px] text-slate-400 leading-relaxed">{{ cat.description }}</p>
                </div>

                <!-- Price -->
                <div class="text-right flex-shrink-0 mr-3">
                  <p class="text-[18px] font-bold leading-none" :class="cat.price === 0 ? 'text-emerald-600' : 'text-[#1d4e89]'">
                    {{ cat.price === 0 ? 'Free' : '₦' + cat.price.toLocaleString() }}
                  </p>
                  <p class="text-[11px] text-slate-400 mt-0.5">/ subscription</p>
                </div>

                <!-- Checkbox -->
                <input
                  type="checkbox"
                  :value="cat._id"
                  v-model="selectedCategories"
                  class="w-5 h-5 accent-[#1d4e89] flex-shrink-0 cursor-pointer"
                />
              </label>
            </div>

          </div>

          <!-- ── Right: Checkout panel ── -->
          <div class="lg:col-span-5">
            <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden sticky top-24">

              <!-- Panel header -->
              <div class="bg-[#1d4e89] px-7 py-6 relative overflow-hidden">
                <LucideReceipt
                  :size="100"
                  class="absolute -right-4 -bottom-4 text-white opacity-[0.06] pointer-events-none"
                />
                <p class="text-[11px] font-semibold text-blue-300 tracking-widest uppercase mb-1">Your subscription</p>
                <h3 class="text-[17px] font-bold text-white">Summary &amp; checkout</h3>
              </div>

              <div class="p-7 space-y-5">

                <!-- Cart items -->
                <div class="min-h-[80px]">
                  <div
                    v-if="selectedCategoriesData.length === 0"
                    class="border-2 border-dashed border-slate-200 rounded-xl py-6 text-center"
                  >
                    <LucideShoppingCart :size="22" class="mx-auto text-slate-300 mb-2" />
                    <p class="text-[12px] text-slate-400">Select categories to get started</p>
                  </div>
                  <div v-else class="space-y-0.5">
                    <div
                      v-for="cat in selectedCategoriesData"
                      :key="cat._id"
                      class="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0"
                    >
                      <span class="text-[12px] font-semibold text-slate-700 truncate pr-4">{{ cat.title }}</span>
                      <span
                        class="text-[13px] font-bold flex-shrink-0"
                        :class="cat.price === 0 ? 'text-emerald-600' : 'text-[#1d4e89]'"
                      >
                        {{ cat.price === 0 ? 'Free' : '₦' + cat.price.toLocaleString() }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Total -->
                <div class="flex items-end justify-between border-t border-slate-100 pt-4">
                  <p class="text-[12px] font-semibold text-slate-400">Total amount</p>
                  <p class="text-[24px] font-bold text-[#1d4e89]">₦{{ totalPrice.toLocaleString() }}</p>
                </div>

                <div class="border-t border-slate-100" />

                <!-- Step 2: Details -->
                <div class="space-y-3">
                  <div>
                    <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-0.5">Step 2</p>
                    <p class="text-[13px] font-bold text-slate-700 mb-3">Your details</p>
                  </div>
                  <div class="space-y-1.5">
                    <label class="text-[11px] font-semibold text-slate-400">Full Name <span class="text-red-400">*</span></label>
                    <input v-model="fullName" type="text" class="field" placeholder="e.g. MLS Jane Okonkwo" />
                  </div>
                  <div class="space-y-1.5">
                    <label class="text-[11px] font-semibold text-slate-400">Email Address <span class="text-red-400">*</span></label>
                    <input v-model="email" type="email" class="field" placeholder="e.g. jane@hospital.org" />
                  </div>
                </div>

                <!-- Step 3: Payment (only when total > 0) -->
                <template v-if="totalPrice > 0">
                  <div class="border-t border-slate-100" />
                  <div class="space-y-3">
                    <div>
                      <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-0.5">Step 3</p>
                      <p class="text-[13px] font-bold text-slate-700 mb-3">Payment</p>
                    </div>

                    <!-- Bank details -->
                    <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                      <p class="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Bank transfer details</p>
                      <div class="space-y-1.5">
                        <div class="flex justify-between text-[12px]">
                          <span class="text-slate-400 font-semibold">Bank</span>
                          <span class="font-bold text-slate-800">First Bank of Nigeria</span>
                        </div>
                        <div class="flex justify-between text-[12px]">
                          <span class="text-slate-400 font-semibold">Account No.</span>
                          <span class="font-mono font-bold text-slate-800 tracking-wider">2012345678</span>
                        </div>
                        <div class="flex justify-between text-[12px]">
                          <span class="text-slate-400 font-semibold">Account Name</span>
                          <span class="font-bold text-slate-800">SCPSC Dues</span>
                        </div>
                      </div>
                      <div class="flex items-center justify-between pt-2 border-t border-slate-200">
                        <p class="text-[11px] text-slate-500 italic">
                          Description: <strong class="text-[#1d4e89] not-italic">newsletter subscription</strong>
                        </p>
                        <button
                          @click="copyToClipboard('2012345678')"
                          class="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-[#1d4e89] bg-white border border-slate-200 hover:border-blue-200 px-2.5 py-1 rounded-lg transition-all"
                        >
                          <LucideCopy :size="11" /> Copy
                        </button>
                      </div>
                    </div>

                    <!-- Upload receipt -->
                    <div class="space-y-1.5">
                      <label class="text-[11px] font-semibold text-slate-400">
                        Proof of Payment <span class="text-red-400">*</span>
                      </label>

                      <div
                        v-if="!proofFile"
                        @click="$refs.proofFileInput.click()"
                        class="border border-dashed border-slate-300 hover:border-blue-300 bg-slate-50 hover:bg-blue-50/30 rounded-xl py-7 px-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 group"
                      >
                        <div class="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#1d4e89] mb-3 group-hover:-translate-y-1 transition-transform duration-200">
                          <LucideUpload :size="18" />
                        </div>
                        <p class="text-[13px] font-semibold text-slate-700 mb-0.5">Click to upload receipt</p>
                        <p class="text-[11px] text-slate-400">PNG, JPG, or PDF — max 5MB</p>
                      </div>

                      <div
                        v-else
                        class="flex items-center justify-between p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl"
                      >
                        <div class="flex items-center gap-2.5">
                          <div class="w-8 h-8 bg-white border border-emerald-200 rounded-lg flex items-center justify-center">
                            <LucideFileCheck :size="14" class="text-emerald-600" />
                          </div>
                          <div>
                            <p class="text-[12px] font-semibold text-slate-800 truncate max-w-[160px]">{{ proofFile.name }}</p>
                            <p class="text-[11px] text-slate-400">{{ (proofFile.size / 1024 / 1024).toFixed(2) }} MB</p>
                          </div>
                        </div>
                        <button
                          @click="proofFile = null"
                          class="w-7 h-7 rounded-lg bg-white hover:bg-red-50 border border-slate-200 text-slate-400 hover:text-red-500 flex items-center justify-center transition-all"
                        >
                          <LucideX :size="13" />
                        </button>
                      </div>
                      <input
                        type="file"
                        ref="proofFileInput"
                        class="hidden"
                        accept="image/*,.pdf"
                        @change="e => proofFile = e.target.files[0]"
                      />
                    </div>
                  </div>
                </template>

                <!-- Submit -->
                <button
                  @click="subscribe"
                  :disabled="loading || selectedCategories.length === 0"
                  class="w-full inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200"
                >
                  <div v-if="loading" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <LucideSend v-else :size="15" />
                  <span>{{ loading ? 'Submitting...' : totalPrice === 0 ? 'Subscribe now' : 'Submit subscription' }}</span>
                </button>

                <p class="text-[11px] text-center text-slate-400">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import {
  LucideMail,
  LucideNewspaper,
  LucideReceipt,
  LucideInbox,
  LucideShoppingCart,
  LucideUpload,
  LucideFileCheck,
  LucideCopy,
  LucideSend,
  LucideX,
} from 'lucide-vue-next'
import { useNewsletter } from '@/composables/modules/newsletters/useNewsletter'
import { useCustomToast } from '@/composables/core/useCustomToast'

definePageMeta({ layout: 'default' })

const { showToast } = useCustomToast()
const { loading, email, fullName, categories, selectedCategories, proofFile, fetchCategories, subscribe } = useNewsletter()

onMounted(() => {
  fetchCategories()
})

const activeCategories = computed(() => categories.value.filter(c => c.isActive))

const selectedCategoriesData = computed(() =>
  activeCategories.value.filter(c => selectedCategories.value.includes(c._id))
)

const totalPrice = computed(() =>
  selectedCategoriesData.value.reduce((sum, c) => sum + c.price, 0)
)

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    showToast({ title: 'Copied!', message: `Account number ${text} copied to clipboard.`, toastType: 'success' })
  } catch {
    showToast({ title: 'Copy Failed', message: 'Please copy the account number manually.', toastType: 'error' })
  }
}
</script>

<style scoped>
.font-body {
  font-family: 'DM Sans', 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
}
.field {
  @apply w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[13px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200;
}
</style>