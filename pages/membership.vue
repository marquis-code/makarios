<template>
  <div class="min-h-screen bg-white font-body">

    <!-- ─── HERO ─────────────────────────────────────────────── -->
    <section class="bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pb-20">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100">
            <LucideUsers :size="13" />
            Membership Registration
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Join <span class="text-[#1d4e89]">SCPSC</span> Today.
          </h1>
          <p class="text-[16px] text-slate-500 leading-relaxed max-w-[540px]">
            Become a member of the Society for Cellular Pathology Scientists of Nigeria. Register online in just a few simple steps.
          </p>
        </div>
      </div>
    </section>


    <!-- ─── MAIN CONTENT ─────────────────────────────────────── -->
    <section class="bg-slate-50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          <!-- ── Left: Info sidebar ── -->
          <div class="lg:col-span-4 space-y-5">

            <!-- About card -->
            <div class="bg-[#1d4e89] border border-blue-800 rounded-2xl p-7 relative overflow-hidden">
              <LucideFlaskConical
                :size="110"
                class="absolute -right-5 -bottom-5 opacity-[0.06] text-white pointer-events-none"
              />
              <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <LucideFlaskConical :size="18" class="text-white" />
              </div>
              <p class="text-[11px] font-semibold text-blue-300 tracking-widest uppercase mb-2">About SCPSC</p>
              <h3 class="text-[17px] font-bold text-white mb-3 leading-snug">
                Nigeria's premier cellular pathology body
              </h3>
              <p class="text-[13px] text-blue-200 leading-relaxed">
                Founded in 2007 in Ilorin, Kwara State, SCPSC is the official professional body for Histoscientists and Cytologists in Nigeria, championing excellence in cellular pathology across the nation.
              </p>
            </div>

            <!-- Membership fees card -->
            <div class="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <LucideWallet :size="18" class="text-[#1d4e89]" />
                </div>
                <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase">Membership fees</p>
              </div>
              <div class="space-y-3">
                <div class="flex items-center justify-between p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                  <div>
                    <p class="text-[13px] font-semibold text-slate-700">New Registration</p>
                    <p class="text-[12px] text-slate-400 mt-0.5">First-time members</p>
                  </div>
                  <span class="text-[20px] font-bold text-emerald-600">₦20,000</span>
                </div>
                <div class="flex items-center justify-between p-4 bg-blue-50 border border-blue-100 rounded-xl">
                  <div>
                    <p class="text-[13px] font-semibold text-slate-700">Annual Renewal</p>
                    <p class="text-[12px] text-slate-400 mt-0.5">Existing members</p>
                  </div>
                  <span class="text-[20px] font-bold text-[#1d4e89]">₦10,000<span class="text-[13px] font-normal text-slate-400">/yr</span></span>
                </div>
              </div>
            </div>

            <!-- Benefits card -->
            <div class="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300 relative overflow-hidden">
              <LucideAward
                :size="110"
                class="absolute -right-5 -bottom-5 opacity-[0.04] text-blue-800 pointer-events-none"
              />
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                  <LucideAward :size="18" class="text-amber-600" />
                </div>
                <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase">Member benefits</p>
              </div>
              <ul class="space-y-3">
                <li
                  v-for="benefit in benefits"
                  :key="benefit"
                  class="flex items-start gap-3"
                >
                  <LucideCheckCircle :size="15" class="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span class="text-[13px] text-slate-500 leading-relaxed">{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <!-- Help card -->
            <div class="bg-white border border-slate-200 rounded-2xl p-6 flex items-center justify-between hover:border-blue-200 transition-all duration-200">
              <div>
                <p class="text-[12px] font-semibold text-slate-400 mb-0.5">Need help?</p>
                <p class="text-[13px] font-semibold text-slate-700">info@SCPSC.org.ng</p>
              </div>
              <NuxtLink
                to="/contact"
                class="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1d4e89] hover:text-blue-800 transition-colors"
              >
                Contact us
                <LucideArrowRight :size="13" />
              </NuxtLink>
            </div>

          </div>


          <!-- ── Right: Stepper form ── -->
          <div class="lg:col-span-8 space-y-5">

            <!-- Step form card -->
            <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden">

              <!-- Step tabs -->
              <div class="flex border-b border-slate-100">
                <button
                  v-for="(step, i) in steps"
                  :key="i"
                  @click="goToStep(i + 1)"
                  :class="[
                    'flex-1 py-5 text-[13px] font-semibold transition-all relative',
                    activeStep === i + 1 ? 'text-[#1d4e89]' : 'text-slate-400 hover:text-slate-600'
                  ]"
                >
                  <span class="hidden sm:inline">{{ String(i + 1).padStart(2, '0') }}. </span>{{ step }}
                  <div
                    v-if="activeStep === i + 1"
                    class="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1d4e89] rounded-t-full"
                  />
                </button>
              </div>

              <!-- Progress bar -->
              <div class="h-1 bg-slate-100">
                <div
                  class="h-full bg-[#1d4e89] transition-all duration-500"
                  :style="{ width: `${(activeStep / 3) * 100}%` }"
                />
              </div>

              <div class="p-7 lg:p-10 min-h-[440px]">

                <!-- Step 1: Personal info -->
                <div v-if="activeStep === 1" class="space-y-5">
                  <div>
                    <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-1">Step 1</p>
                    <h2 class="text-[20px] font-bold text-slate-800 mb-6">Personal information</h2>
                  </div>
                  <div class="space-y-1.5">
                    <label class="text-[12px] font-semibold text-slate-500">Full Name <span class="text-red-400">*</span></label>
                    <input v-model="form.fullName" type="text" class="field" placeholder="e.g. MLS Julius Kayode" />
                  </div>
                  <div class="space-y-1.5">
                    <label class="text-[12px] font-semibold text-slate-500">Email Address <span class="text-red-400">*</span></label>
                    <input v-model="form.email" type="email" class="field" placeholder="e.g. julius@gmail.com" />
                  </div>
                  <div class="space-y-1.5">
                    <label class="text-[12px] font-semibold text-slate-500">Phone Number <span class="text-red-400">*</span></label>
                    <input v-model="form.phone" type="tel" class="field" placeholder="e.g. 08012345678" />
                  </div>
                  <div class="pt-3">
                    <button
                      @click="goToStep(2)"
                      :disabled="!form.fullName || !form.email || !form.phone"
                      class="w-full inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200"
                    >
                      Continue to work details
                      <LucideArrowRight :size="15" />
                    </button>
                  </div>
                </div>

                <!-- Step 2: Work details -->
                <div v-if="activeStep === 2" class="space-y-5">
                  <div>
                    <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-1">Step 2</p>
                    <h2 class="text-[20px] font-bold text-slate-800 mb-6">Work details</h2>
                  </div>
                  <div class="space-y-1.5">
                    <label class="text-[12px] font-semibold text-slate-500">Place of Work / Institution</label>
                    <input v-model="form.institution" type="text" class="field" placeholder="e.g. University of Ilorin Teaching Hospital" />
                  </div>
                  <div class="space-y-1.5">
                    <label class="text-[12px] font-semibold text-slate-500">Registration Type <span class="text-red-400">*</span></label>
                    <div class="grid sm:grid-cols-2 gap-4 pt-1">
                      <button
                        @click="form.membershipType = 'New'"
                        :class="[
                          'p-5 rounded-xl border-2 transition-all text-left',
                          form.membershipType === 'New'
                            ? 'border-[#1d4e89] bg-blue-50/60'
                            : 'border-slate-200 hover:border-blue-200 bg-white'
                        ]"
                      >
                        <div class="flex items-center justify-between mb-3">
                          <p class="text-[13px] font-semibold text-slate-700">New Registration</p>
                          <div
                            class="w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all"
                            :class="form.membershipType === 'New' ? 'border-[#1d4e89] bg-[#1d4e89]' : 'border-slate-300'"
                          >
                            <div v-if="form.membershipType === 'New'" class="w-1.5 h-1.5 rounded-full bg-white" />
                          </div>
                        </div>
                        <p class="text-[22px] font-bold text-slate-900">₦20,000</p>
                        <p class="text-[12px] text-slate-400 mt-0.5">First-time member — one-time fee</p>
                      </button>
                      <button
                        @click="form.membershipType = 'Renewal'"
                        :class="[
                          'p-5 rounded-xl border-2 transition-all text-left',
                          form.membershipType === 'Renewal'
                            ? 'border-[#1d4e89] bg-blue-50/60'
                            : 'border-slate-200 hover:border-blue-200 bg-white'
                        ]"
                      >
                        <div class="flex items-center justify-between mb-3">
                          <p class="text-[13px] font-semibold text-slate-700">Annual Renewal</p>
                          <div
                            class="w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all"
                            :class="form.membershipType === 'Renewal' ? 'border-[#1d4e89] bg-[#1d4e89]' : 'border-slate-300'"
                          >
                            <div v-if="form.membershipType === 'Renewal'" class="w-1.5 h-1.5 rounded-full bg-white" />
                          </div>
                        </div>
                        <p class="text-[22px] font-bold text-slate-900">₦10,000<span class="text-[13px] font-normal text-slate-400">/year</span></p>
                        <p class="text-[12px] text-slate-400 mt-0.5">Existing member</p>
                      </button>
                    </div>
                  </div>
                  <div class="pt-3 flex gap-3">
                    <button
                      @click="goToStep(1)"
                      class="inline-flex items-center gap-1.5 border border-slate-200 hover:border-slate-300 text-slate-600 text-[14px] font-semibold px-5 py-3.5 rounded-xl transition-colors duration-200"
                    >
                      <LucideChevronLeft :size="15" /> Back
                    </button>
                    <button
                      @click="goToStep(3)"
                      :disabled="!form.membershipType"
                      class="flex-1 inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200"
                    >
                      Continue to payment
                      <LucideArrowRight :size="15" />
                    </button>
                  </div>
                </div>

                <!-- Step 3: Payment -->
                <div v-if="activeStep === 3" class="space-y-6">
                  <div>
                    <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-1">Step 3</p>
                    <h2 class="text-[20px] font-bold text-slate-800 mb-6">Payment &amp; receipt</h2>
                  </div>

                  <!-- Bank details -->
                  <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5">
                    <div>
                      <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-1">Membership dues payment</p>
                      <h4 class="text-[17px] font-bold text-slate-800">UBA — United Bank for Africa</h4>
                    </div>
                    <div class="grid grid-cols-2 gap-5">
                      <div>
                        <p class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Account Number</p>
                        <p class="text-[18px] font-mono font-bold text-slate-800 tracking-widest">1023844239</p>
                      </div>
                      <div>
                        <p class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Account Name</p>
                        <p class="text-[16px] font-bold text-slate-800">SCPSC</p>
                      </div>
                    </div>
                    <div class="flex items-center justify-between pt-3 border-t border-slate-200">
                      <p class="text-[13px] font-semibold text-[#1d4e89] flex items-center gap-2">
                        <LucideWallet :size="14" />
                        {{ form.membershipType === 'Renewal' ? 'Renewal: ₦10,000' : 'New Registration: ₦20,000' }}
                      </p>
                      <button
                        @click="copyToClipboard('1023844239')"
                        class="inline-flex items-center gap-1.5 text-[12px] font-semibold text-slate-500 hover:text-[#1d4e89] bg-white border border-slate-200 hover:border-blue-200 px-3 py-1.5 rounded-lg transition-all"
                      >
                        <LucideCopy :size="12" /> Copy
                      </button>
                    </div>
                  </div>

                  <!-- Upload receipt -->
                  <div class="space-y-2">
                    <label class="text-[12px] font-semibold text-slate-500">
                      Upload Payment Receipt <span class="text-red-400">*</span>
                    </label>
                    <p class="text-[12px] text-slate-400">
                      After making your transfer, upload a screenshot or photo of your receipt.
                    </p>

                    <div
                      v-if="!selectedFile"
                      @click="$refs.proofFile.click()"
                      class="border border-dashed border-slate-300 hover:border-blue-300 bg-slate-50 hover:bg-blue-50/30 rounded-xl py-10 px-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 group"
                    >
                      <div class="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#1d4e89] mb-4 group-hover:-translate-y-1 transition-transform duration-200">
                        <LucideUpload :size="20" />
                      </div>
                      <p class="text-[14px] font-semibold text-slate-700 mb-1">Click to upload your receipt</p>
                      <p class="text-[12px] text-slate-400">PNG, JPG, or PDF — max 5MB</p>
                    </div>

                    <div
                      v-else
                      class="flex items-center justify-between p-4 bg-emerald-50 border border-emerald-200 rounded-xl"
                    >
                      <div class="flex items-center gap-3">
                        <div class="w-9 h-9 bg-white border border-emerald-200 rounded-lg flex items-center justify-center">
                          <LucideFileCheck :size="16" class="text-emerald-600" />
                        </div>
                        <div>
                          <p class="text-[13px] font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-[320px]">{{ selectedFile.name }}</p>
                          <p class="text-[11px] text-slate-400">{{ (selectedFile.size / 1024 / 1024).toFixed(2) }} MB</p>
                        </div>
                      </div>
                      <button
                        @click="selectedFile = null"
                        class="w-8 h-8 rounded-lg bg-white hover:bg-red-50 border border-slate-200 text-slate-400 hover:text-red-500 flex items-center justify-center transition-all"
                      >
                        <LucideX :size="14" />
                      </button>
                    </div>
                    <input type="file" ref="proofFile" class="hidden" accept="image/*,.pdf" @change="handleFileSelected" />
                  </div>

                  <div class="pt-1 flex gap-3">
                    <button
                      @click="goToStep(2)"
                      :disabled="registering"
                      class="inline-flex items-center gap-1.5 border border-slate-200 hover:border-slate-300 text-slate-600 text-[14px] font-semibold px-5 py-3.5 rounded-xl transition-colors duration-200"
                    >
                      <LucideChevronLeft :size="15" /> Back
                    </button>
                    <button
                      @click="submitEnrollment"
                      :disabled="registering || !selectedFile"
                      class="flex-1 inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200"
                    >
                      <div v-if="registering" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span v-if="registering">Submitting...</span>
                      <span v-else class="flex items-center gap-2">
                        Submit registration
                        <LucideArrowRight :size="15" />
                      </span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            <!-- Conference bank details -->
            <div class="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300">
              <div class="flex items-start gap-4 mb-5">
                <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <LucideCalendar :size="18" class="text-[#1d4e89]" />
                </div>
                <div>
                  <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-0.5">Conference payments</p>
                  <p class="text-[13px] text-slate-400">For annual scientific conference registration</p>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4 bg-slate-50 border border-slate-100 rounded-xl p-5 mb-4">
                <div>
                  <p class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Bank</p>
                  <p class="text-[13px] font-bold text-slate-800">Access Bank</p>
                </div>
                <div>
                  <p class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Account No.</p>
                  <p class="text-[14px] font-mono font-bold text-slate-800 tracking-wider">0800585701</p>
                </div>
                <div>
                  <p class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Account Name</p>
                  <p class="text-[13px] font-bold text-slate-800">SCPSC</p>
                </div>
              </div>
              <button
                @click="copyToClipboard('0800585701')"
                class="inline-flex items-center gap-1.5 text-[12px] font-semibold text-slate-400 hover:text-[#1d4e89] transition-colors"
              >
                <LucideCopy :size="12" /> Copy conference account number
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>

  </div>
</template>


<script setup>
import { ref } from 'vue'
import axios from 'axios'
import {
  LucideUsers,
  LucideFlaskConical,
  LucideCheckCircle,
  LucideWallet,
  LucideAward,
  LucideUpload,
  LucideFileCheck,
  LucideArrowRight,
  LucideChevronLeft,
  LucideCopy,
  LucideX,
  LucideCalendar,
} from 'lucide-vue-next'
import { useCustomToast } from '@/composables/core/useCustomToast'

definePageMeta({ layout: 'default' })

const { showToast } = useCustomToast()
const API_BASE = import.meta.env.VITE_BASE_URL || 'https://spsn-backend.onrender.com/api'

const activeStep   = ref(1)
const selectedFile = ref(null)
const proofFile    = ref(null)
const registering  = ref(false)

const steps = ['Personal Info', 'Work Details', 'Payment']

const form = ref({
  fullName: '',
  email: '',
  phone: '',
  institution: '',
  membershipType: '',
})

const benefits = [
  'Access to exclusive scientific publications and journals',
  'Discounted registration for the Annual Scientific Conference',
  'Eligibility to vote and hold office in the Society',
  'Access to the SCPSC mentorship network',
  'Professional development and training opportunities',
  'Networking with cellular pathology experts across Nigeria',
]

const goToStep = (step) => { activeStep.value = step }

const handleFileSelected = (event) => {
  const file = event.target.files[0]
  if (!file) return
  if (file.size > 5 * 1024 * 1024) {
    showToast({ title: 'File Too Large', message: 'Please select a file smaller than 5MB.', toastType: 'warning' })
    return
  }
  selectedFile.value = file
}

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    showToast({ title: 'Copied!', message: `Account number ${text} copied to clipboard.`, toastType: 'success' })
  } catch {
    showToast({ title: 'Copy Failed', message: 'Please copy the account number manually.', toastType: 'error' })
  }
}

const submitEnrollment = async () => {
  if (!form.value.fullName || !form.value.email || !form.value.phone) {
    showToast({ title: 'Missing Information', message: 'Please fill in your name, email, and phone number.', toastType: 'warning' })
    activeStep.value = 1
    return
  }
  if (!form.value.membershipType) {
    showToast({ title: 'Missing Information', message: 'Please select your registration type.', toastType: 'warning' })
    activeStep.value = 2
    return
  }
  if (!selectedFile.value) {
    showToast({ title: 'Receipt Required', message: 'Please upload your payment receipt.', toastType: 'warning' })
    return
  }

  const payload = new FormData()
  payload.append('fullName',      form.value.fullName)
  payload.append('email',         form.value.email)
  payload.append('phone',         form.value.phone)
  payload.append('institution',   form.value.institution || '')
  payload.append('membershipType', form.value.membershipType)
  payload.append('proofOfPayment', selectedFile.value)
  payload.append('password',      'Member@123')

  registering.value = true
  try {
    await axios.post(`${API_BASE}/auth/register`, payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    showToast({
      title: 'Registration Submitted!',
      message: 'Your registration is being reviewed. You will receive an email confirmation shortly.',
      toastType: 'success',
    })
    activeStep.value = 1
    selectedFile.value = null
    form.value = { fullName: '', email: '', phone: '', institution: '', membershipType: '' }
  } catch (e) {
    const msg = e?.response?.data?.message || 'Something went wrong. Please try again or contact support.'
    showToast({ title: 'Submission Failed', message: msg, toastType: 'error' })
  } finally {
    registering.value = false
  }
}
</script>


<style scoped>
.font-body {
  font-family: 'DM Sans', 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
}
.field {
  @apply w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200;
}
</style>