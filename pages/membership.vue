<template>
  <div class="min-h-screen bg-slate-50 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-0 w-[800px] h-[800px] bg-brand-dark/5 rounded-full blur-[140px] translate-x-1/3 pointer-events-none"></div>

    <div class="container mx-auto px-6 py-32 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-20 space-y-4">
          <span class="inline-block px-5 py-2 glass text-brand-cyan font-black text-xs tracking-[0.3em] rounded-full uppercase">
             Membership Registration
          </span>
          <h1 class="text-5xl md:text-7xl font-black text-brand-dark tracking-tighter leading-none">
             Join <span class="text-brand-cyan">SCPSN</span> Today.
          </h1>
          <p class="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Become a member of the Society for Cellular Pathology Scientists of Nigeria. Register online in just a few simple steps.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <!-- Info Column -->
          <div class="lg:col-span-5 space-y-8">
            <!-- About Card -->
            <div class="interactive-card p-10 space-y-6 border-l-4 border-l-brand-cyan">
              <h3 class="text-xl font-black text-brand-dark tracking-tight">About SCPSN</h3>
              <p class="text-slate-500 text-base leading-relaxed font-medium">
                Founded in 2007 in Ilorin, Kwara State, SCPSN is the official professional body for Histoscientists and Cytologists in Nigeria. We champion excellence in cellular pathology across the nation.
              </p>
            </div>

            <!-- Membership Fees Card -->
            <div class="interactive-card p-10 space-y-8">
              <h3 class="text-xl font-black text-brand-dark tracking-tight flex items-center gap-3">
                <LucideWallet class="text-brand-cyan" :size="24" />
                Membership Fees
              </h3>
              <div class="space-y-5">
                <div class="flex justify-between items-center p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <div>
                    <span class="text-sm font-bold text-slate-700">New Registration</span>
                    <p class="text-xs text-slate-400 mt-0.5">First-time members</p>
                  </div>
                  <span class="text-2xl font-black text-emerald-600">₦20,000</span>
                </div>
                <div class="flex justify-between items-center p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <div>
                    <span class="text-sm font-bold text-slate-700">Annual Renewal</span>
                    <p class="text-xs text-slate-400 mt-0.5">Existing members</p>
                  </div>
                  <span class="text-2xl font-black text-blue-600">₦10,000</span>
                </div>
              </div>
            </div>

            <!-- Benefits Card -->
            <div class="interactive-card p-10 bg-brand-dark text-white rounded-[40px] space-y-8 relative overflow-hidden group">
               <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] group-hover:scale-110 transition-transform"></div>
               <h3 class="text-xl font-black tracking-tight relative z-10 flex items-center gap-3">
                 <LucideAward class="text-brand-cyan" :size="24" />
                 Member Benefits
               </h3>
               <ul class="space-y-4 relative z-10">
                 <li v-for="benefit in benefits" :key="benefit" class="flex gap-4 group">
                    <LucideCheckCircle :size="18" class="text-brand-cyan shrink-0 mt-0.5" />
                    <span class="text-sm text-slate-300 font-medium leading-relaxed">{{ benefit }}</span>
                 </li>
               </ul>
            </div>
          </div>

          <!-- Form Column -->
          <div class="lg:col-span-7">
            <div class="interactive-card overflow-hidden">
               <div class="flex border-b border-slate-100">
                  <button
                    @click="goToStep(1)"
                    :class="['flex-1 py-6 text-xs font-bold tracking-wide transition-all relative', activeStep === 1 ? 'text-brand-dark' : 'text-slate-400']"
                  >
                    01. Personal Info
                    <div v-if="activeStep === 1" class="absolute bottom-0 left-0 right-0 h-1 bg-brand-cyan rounded-t-full"></div>
                  </button>
                  <button
                    @click="goToStep(2)"
                    :class="['flex-1 py-6 text-xs font-bold tracking-wide transition-all relative', activeStep === 2 ? 'text-brand-dark' : 'text-slate-400']"
                  >
                    02. Work Details
                    <div v-if="activeStep === 2" class="absolute bottom-0 left-0 right-0 h-1 bg-brand-cyan rounded-t-full"></div>
                  </button>
                  <button
                    @click="goToStep(3)"
                    :class="['flex-1 py-6 text-xs font-bold tracking-wide transition-all relative', activeStep === 3 ? 'text-brand-dark' : 'text-slate-400']"
                  >
                    03. Payment
                    <div v-if="activeStep === 3" class="absolute bottom-0 left-0 right-0 h-1 bg-brand-cyan rounded-t-full"></div>
                  </button>
               </div>

               <div class="p-10 lg:p-14 space-y-8 min-h-[500px]">
                  <!-- Step 1: Personal Info -->
                  <div v-if="activeStep === 1" class="space-y-6">
                    <div class="space-y-2">
                       <label class="text-sm font-bold text-slate-700 ml-1">Full Name <span class="text-red-400">*</span></label>
                       <input v-model="form.fullName" type="text" class="form-input" placeholder="e.g. MLS Julius Kayode" />
                    </div>
                    <div class="space-y-2">
                       <label class="text-sm font-bold text-slate-700 ml-1">Email Address <span class="text-red-400">*</span></label>
                       <input v-model="form.email" type="email" class="form-input" placeholder="e.g. julius@gmail.com" />
                    </div>
                    <div class="space-y-2">
                       <label class="text-sm font-bold text-slate-700 ml-1">Phone Number <span class="text-red-400">*</span></label>
                       <input v-model="form.phone" type="tel" class="form-input" placeholder="e.g. 08012345678" />
                    </div>
                    <div class="pt-6">
                       <button @click="goToStep(2)" :disabled="!form.fullName || !form.email || !form.phone" class="bg-black rounded-lg text-white text-sm w-full !py-4 disabled:opacity-40 disabled:cursor-not-allowed">Continue to Work Details</button>
                    </div>
                  </div>

                  <!-- Step 2: Work Details -->
                  <div v-if="activeStep === 2" class="space-y-6">
                     <div class="space-y-2">
                        <label class="text-sm font-bold text-slate-700 ml-1">Place of Work / Institution</label>
                        <input v-model="form.institution" type="text" class="form-input" placeholder="e.g. University of Ilorin Teaching Hospital" />
                     </div>
                     <div class="space-y-2">
                        <label class="text-sm font-bold text-slate-700 ml-1">Registration Type <span class="text-red-400">*</span></label>
                        <div class="flex gap-4">
                           <button
                             @click="form.membershipType = 'New'"
                             :class="['flex-1 p-6 rounded-2xl border-2 transition-all text-center group', form.membershipType === 'New' ? 'border-brand-cyan bg-brand-cyan/5' : 'border-slate-100 hover:border-slate-200']"
                           >
                              <p class="text-sm font-bold text-slate-600 mb-2">New Registration</p>
                              <p class="text-3xl font-black text-brand-dark">₦20,000</p>
                              <p class="text-xs text-slate-400 mt-1">First-time member</p>
                           </button>
                           <button
                             @click="form.membershipType = 'Renewal'"
                             :class="['flex-1 p-6 rounded-2xl border-2 transition-all text-center group', form.membershipType === 'Renewal' ? 'border-brand-cyan bg-brand-cyan/5' : 'border-slate-100 hover:border-slate-200']"
                           >
                              <p class="text-sm font-bold text-slate-600 mb-2">Annual Renewal</p>
                              <p class="text-3xl font-black text-brand-dark">₦10,000</p>
                              <p class="text-xs text-slate-400 mt-1">Existing member</p>
                           </button>
                        </div>
                     </div>
                     <div class="pt-6 flex gap-4">
                        <button @click="goToStep(1)" class="bg-black text-white rounded-lg !w-28 !py-2.5">Back</button>
                        <button @click="goToStep(3)" :disabled="!form.membershipType" class="bg-black text-white rounded-lg flex-1 !py-2.5 disabled:opacity-40 disabled:cursor-not-allowed">Continue to Payment</button>
                     </div>
                  </div>

                  <!-- Step 3: Payment -->
                  <div v-if="activeStep === 3" class="space-y-8">
                     <!-- Membership Dues Bank Details -->
                     <div class="bg-[#033958] p-8 md:p-10 rounded-[32px] text-white space-y-6 relative overflow-hidden">
                        <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                        <div class="space-y-2 relative z-10">
                           <p class="text-xs font-bold tracking-widest text-brand-cyan uppercase">Membership Dues Payment</p>
                           <h4 class="text-2xl font-black tracking-tight">UBA (United Bank for Africa)</h4>
                        </div>
                        <div class="grid grid-cols-2 gap-8 relative z-10">
                           <div class="space-y-1">
                              <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Account Number</p>
                              <p class="text-xl font-mono font-bold tracking-widest">1023844239</p>
                           </div>
                           <div class="space-y-1">
                              <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Account Name</p>
                              <p class="text-lg font-bold">SCPSN</p>
                           </div>
                        </div>
                        <div class="pt-4 border-t border-white/10 flex justify-between items-center relative z-10">
                           <p class="text-sm font-bold text-brand-cyan flex items-center gap-2">
                             <LucideWallet :size="14" />
                             {{ form.membershipType === 'Renewal' ? 'Renewal: ₦10,000' : 'New Registration: ₦20,000' }}
                           </p>
                           <button @click="copyToClipboard('1023844239')" class="flex items-center gap-1.5 text-xs font-bold text-white/60 hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-lg">
                             <LucideCopy :size="12" />
                             Copy
                           </button>
                        </div>
                     </div>

                     <!-- Upload Payment Proof -->
                     <div class="space-y-4">
                        <h5 class="text-sm font-bold text-slate-700 ml-1">Upload Payment Receipt <span class="text-red-400">*</span></h5>
                        <p class="text-xs text-slate-400 ml-1">After making your transfer, upload a screenshot or photo of your payment receipt below.</p>
                        <div
                          @click="$refs.proofFile.click()"
                          class="p-10 border-2 border-dashed border-slate-200 rounded-[32px] text-center space-y-4 cursor-pointer hover:border-brand-cyan hover:bg-brand-cyan/5 transition-all group"
                        >
                           <div v-if="!selectedFile" class="space-y-4">
                              <div class="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto text-slate-300 group-hover:text-brand-cyan group-hover:bg-white group-hover:shadow-lg transition-all">
                                 <LucideUpload :size="24" />
                              </div>
                              <p class="text-sm font-bold text-slate-500">Click to upload your payment receipt</p>
                              <p class="text-xs text-slate-400">PNG, JPG, or PDF — Max 5MB</p>
                           </div>
                           <div v-else class="flex items-center justify-center gap-3 text-brand-cyan font-bold">
                              <LucideFileCheck :size="20" />
                              <span class="text-sm truncate max-w-[250px]">{{ selectedFile.name }}</span>
                              <button @click.stop="selectedFile = null" class="ml-2 text-red-400 hover:text-red-600 transition-colors">
                                <LucideX :size="16" />
                              </button>
                           </div>
                        </div>
                        <input type="file" ref="proofFile" class="hidden" accept="image/*,.pdf" @change="handleFileSelected" />
                     </div>

                     <div class="pt-4 flex gap-4">
                        <button @click="goToStep(2)" :disabled="registering" class="bg-black text-white rounded-lg !w-28 !py-2.5">Back</button>
                        <button @click="submitEnrollment" :disabled="registering || !selectedFile" class="bg-black text-white rounded-lg flex-1 !py-2.5 disabled:opacity-40 disabled:cursor-not-allowed">
                           <span v-if="registering" class="flex items-center justify-center gap-2">
                             <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                             Submitting...
                           </span>
                           <span v-else>Submit Registration</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            <!-- Conference Bank Details Card -->
            <div class="mt-8 interactive-card p-8 md:p-10 bg-gradient-to-br from-slate-50 to-blue-50/50 space-y-5">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-white shrink-0">
                  <LucideCalendar :size="18" />
                </div>
                <div>
                  <h4 class="text-base font-black text-brand-dark">Conference Payments</h4>
                  <p class="text-xs text-slate-400">For annual scientific conference registration</p>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4 bg-white p-5 rounded-2xl border border-slate-100">
                <div class="space-y-1">
                  <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Bank</p>
                  <p class="text-sm font-black text-brand-dark">Access Bank</p>
                </div>
                <div class="space-y-1">
                  <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Account No.</p>
                  <p class="text-base font-mono font-bold text-brand-dark tracking-wider">0800585701</p>
                </div>
                <div class="space-y-1">
                  <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Account Name</p>
                  <p class="text-sm font-black text-brand-dark">SCPSN</p>
                </div>
              </div>
              <button @click="copyToClipboard('0800585701')" class="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-brand-dark transition-colors">
                <LucideCopy :size="12" />
                Copy conference account number
              </button>
            </div>

            <!-- Help Contact -->
            <div class="mt-8 flex flex-wrap justify-between items-center px-4 gap-4">
               <div>
                  <p class="text-xs font-bold text-slate-400 mb-1">Need help?</p>
                  <p class="text-sm font-bold text-brand-dark">info@scpsn.org.ng</p>
               </div>
               <NuxtLink to="/contact" class="flex items-center gap-2 text-brand-cyan font-bold text-sm hover:translate-x-1 transition-transform">
                  <LucideSend :size="14" />
                  Contact Us
               </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import {
  LucideCheckCircle,
  LucideWallet,
  LucideAward,
  LucideShieldCheck,
  LucideUpload,
  LucideFileCheck,
  LucideSend,
  LucideCopy,
  LucideX,
  LucideCalendar
} from 'lucide-vue-next'
import { useCustomToast } from '@/composables/core/useCustomToast'

definePageMeta({
  layout: 'default'
})

const { showToast } = useCustomToast()

const API_BASE = import.meta.env.VITE_BASE_URL || 'http://localhost:3005/api'

const activeStep = ref(1)
const selectedFile = ref(null)
const proofFile = ref(null)
const registering = ref(false)

const form = ref({
  fullName: '',
  email: '',
  phone: '',
  institution: '',
  membershipType: ''
})

const benefits = [
  'Access to exclusive scientific publications and journals',
  'Discounted registration for the Annual Scientific Conference',
  'Eligibility to vote and hold office in the Society',
  'Access to the SCPSN mentorship network',
  'Professional development and training opportunities',
  'Networking with cellular pathology experts across Nigeria'
]

const goToStep = (step) => {
  activeStep.value = step
}

const handleFileSelected = (event) => {
  const file = event.target.files[0]
  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      showToast({ title: "File Too Large", message: "Please select a file smaller than 5MB.", toastType: "warning" })
      return
    }
    selectedFile.value = file
  }
}

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    showToast({ title: "Copied!", message: `Account number ${text} copied to clipboard.`, toastType: "success" })
  } catch {
    showToast({ title: "Copy Failed", message: "Please copy the account number manually.", toastType: "error" })
  }
}

const submitEnrollment = async () => {
    if (!form.value.fullName || !form.value.email || !form.value.phone) {
        showToast({ title: "Missing Information", message: "Please fill in your name, email, and phone number.", toastType: "warning" })
        activeStep.value = 1
        return
    }
    if (!form.value.membershipType) {
        showToast({ title: "Missing Information", message: "Please select your registration type (New or Renewal).", toastType: "warning" })
        activeStep.value = 2
        return
    }
    if (!selectedFile.value) {
        showToast({ title: "Receipt Required", message: "Please upload your payment receipt.", toastType: "warning" })
        return
    }

    const payload = new FormData()
    payload.append('fullName', form.value.fullName)
    payload.append('email', form.value.email)
    payload.append('phone', form.value.phone)
    payload.append('institution', form.value.institution || '')
    payload.append('membershipType', form.value.membershipType)
    payload.append('proofOfPayment', selectedFile.value)
    payload.append('password', 'Member@123')

    registering.value = true
    try {
        await axios.post(`${API_BASE}/auth/register`, payload, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        showToast({ title: "Registration Submitted!", message: "Your registration is being reviewed. You will receive an email confirmation shortly.", toastType: "success" })
        activeStep.value = 1
        selectedFile.value = null
        form.value = { fullName: '', email: '', phone: '', institution: '', membershipType: '' }
    } catch (e) {
        const msg = e?.response?.data?.message || "Something went wrong. Please try again or contact support."
        showToast({ title: "Submission Failed", message: msg, toastType: "error" })
    } finally {
        registering.value = false
    }
}
</script>

