<template>
  <div class="min-h-screen bg-white font-body">

    <!-- ─── HERO ─────────────────────────────────────────────── -->
    <section class="bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pb-20">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100">
            <LucideMessagesSquare :size="13" />
            Strategic Hub
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Connect With
            <span class="text-[#1d4e89]"> SCPSN.</span>
          </h1>
          <p class="text-[16px] text-slate-500 leading-relaxed max-w-[540px]">
            Direct engagement for scientific inquiries, appointments, and laboratory consultations with Nigeria's premier cellular pathology body.
          </p>
        </div>
      </div>
    </section>


    <!-- ─── CONTACT INFO STRIP ───────────────────────────────── -->
    <section class="bg-slate-50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="grid sm:grid-cols-3 gap-4">
          <div
            v-for="info in contactInfo"
            :key="info.title"
            class="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-300 flex items-start gap-4"
          >
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              :class="info.colors.bg"
            >
              <component :is="info.icon" :size="18" :class="info.colors.icon" />
            </div>
            <div>
              <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-1">{{ info.title }}</p>
              <p
                v-for="line in info.lines"
                :key="line"
                class="text-[13px] font-medium text-slate-700 leading-relaxed"
              >
                {{ line }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ─── MAIN: FORM + SIDEBAR ─────────────────────────────── -->
    <section class="bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          <!-- ── Left: Form card ── -->
          <div class="lg:col-span-7">
            <div class="bg-white border border-slate-200 rounded-2xl p-7 lg:p-10">

              <!-- Success state -->
              <div
                v-if="success || enquirySuccess"
                class="flex flex-col items-center justify-center text-center py-16"
              >
                <div class="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-5">
                  <LucideCheckCircle :size="28" class="text-green-600" />
                </div>
                <p class="text-[11px] font-semibold text-green-600 tracking-widest uppercase mb-2">Success</p>
                <h3 class="text-[22px] font-bold text-slate-800 mb-3 leading-snug">Request received</h3>
                <p class="text-[14px] text-slate-400 max-w-xs mx-auto leading-relaxed mb-8">
                  Your engagement has been added to our queue. A representative will be in touch shortly.
                </p>
                <button
                  @click="success = false; enquirySuccess = false"
                  class="inline-flex items-center gap-2 bg-[#1d4e89] hover:bg-blue-800 text-white text-[14px] font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
                >
                  New engagement
                </button>
              </div>

              <template v-else>
                <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2">Get in touch</p>
                <h2 class="text-[22px] font-bold text-slate-800 mb-7 leading-snug">Send us a message</h2>

                <!-- Tab toggle -->
                <div class="flex p-1 bg-slate-100 rounded-xl border border-slate-200 mb-8">
                  <button
                    @click="contactTab = 'appointment'"
                    :class="[
                      'flex-1 py-2.5 text-[13px] font-semibold rounded-lg transition-all',
                      contactTab === 'appointment'
                        ? 'bg-white text-[#1d4e89] shadow-sm border border-slate-200'
                        : 'text-slate-400 hover:text-slate-600'
                    ]"
                  >
                    Appointment
                  </button>
                  <button
                    @click="contactTab = 'enquiry'"
                    :class="[
                      'flex-1 py-2.5 text-[13px] font-semibold rounded-lg transition-all',
                      contactTab === 'enquiry'
                        ? 'bg-white text-[#1d4e89] shadow-sm border border-slate-200'
                        : 'text-slate-400 hover:text-slate-600'
                    ]"
                  >
                    General inquiry
                  </button>
                </div>

                <!-- Appointment form -->
                <form
                  v-if="contactTab === 'appointment'"
                  @submit.prevent="submitAppointment"
                  class="space-y-5"
                >
                  <div class="grid sm:grid-cols-2 gap-5">
                    <div class="space-y-1.5">
                      <label class="text-[12px] font-semibold text-slate-500">Designation &amp; Name</label>
                      <input
                        v-model="appointment.fullName"
                        type="text"
                        placeholder="Dr. John Doe, MLS"
                        class="field"
                        required
                      />
                    </div>
                    <div class="space-y-1.5">
                      <label class="text-[12px] font-semibold text-slate-500">Official Email</label>
                      <input
                        v-model="appointment.email"
                        type="email"
                        placeholder="john@example.com"
                        class="field"
                        required
                      />
                    </div>
                  </div>

                  <div class="grid sm:grid-cols-2 gap-5">
                    <div class="space-y-1.5">
                      <label class="text-[12px] font-semibold text-slate-500">Priority Date</label>
                      <input
                        v-model="appointment.date"
                        type="date"
                        class="field"
                        required
                      />
                    </div>
                    <div class="space-y-1.5">
                      <label class="text-[12px] font-semibold text-slate-500">Engagement Intent</label>
                      <div class="relative">
                        <select
                          v-model="appointment.purpose"
                          class="field appearance-none cursor-pointer pr-9"
                          required
                        >
                          <option value="" disabled>Select engagement type</option>
                          <option>Membership Protocols</option>
                          <option>Conference Sponsorship</option>
                          <option>Scientific Governance</option>
                          <option>Laboratory Validation</option>
                        </select>
                        <LucideChevronDown
                          class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                          :size="16"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-[12px] font-semibold text-slate-500">Brief Context</label>
                    <textarea
                      v-model="appointment.message"
                      rows="5"
                      placeholder="Provide strategic details..."
                      class="field resize-none leading-relaxed"
                    />
                  </div>

                  <div class="pt-2">
                    <button
                      type="submit"
                      :disabled="loading"
                      class="w-full inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200"
                    >
                      <div v-if="loading" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span v-if="loading">Submitting...</span>
                      <span v-else class="flex items-center gap-2">
                        Formalize appointment
                        <LucideArrowRight :size="15" />
                      </span>
                    </button>
                  </div>
                </form>

                <!-- Enquiry form -->
                <form
                  v-else
                  @submit.prevent="submitEnquiry"
                  class="space-y-5"
                >
                  <div class="space-y-1.5">
                    <label class="text-[12px] font-semibold text-slate-500">Your Name</label>
                    <input
                      v-model="enquiryPayload.fullName"
                      type="text"
                      placeholder="Full name"
                      class="field"
                      required
                    />
                  </div>
                  <div class="space-y-1.5">
                    <label class="text-[12px] font-semibold text-slate-500">Email Address</label>
                    <input
                      v-model="enquiryPayload.email"
                      type="email"
                      placeholder="john@example.com"
                      class="field"
                      required
                    />
                  </div>
                  <div class="space-y-1.5">
                    <label class="text-[12px] font-semibold text-slate-500">Message</label>
                    <textarea
                      v-model="enquiryPayload.message"
                      rows="6"
                      placeholder="How can we help you today?"
                      class="field resize-none leading-relaxed"
                    />
                  </div>
                  <div class="pt-2">
                    <button
                      type="submit"
                      :disabled="enquiryLoading"
                      class="w-full inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200"
                    >
                      <div v-if="enquiryLoading" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span v-if="enquiryLoading">Sending...</span>
                      <span v-else class="flex items-center gap-2">
                        Send message
                        <LucideArrowRight :size="15" />
                      </span>
                    </button>
                  </div>
                </form>
              </template>

            </div>
          </div>


          <!-- ── Right: Sidebar ── -->
          <div class="lg:col-span-5 space-y-5">

            <!-- Operating hours -->
            <div class="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <LucideClock :size="18" class="text-[#1d4e89]" />
                </div>
                <div>
                  <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase">Operational hours</p>
                </div>
              </div>
              <div class="space-y-3">
                <div
                  v-for="schedule in operatingHours"
                  :key="schedule.days"
                  class="flex items-center justify-between py-3 border-b border-slate-100 last:border-0 last:pb-0"
                >
                  <span class="text-[13px] font-medium text-slate-500">{{ schedule.days }}</span>
                  <span
                    class="text-[12px] font-semibold px-3 py-1 rounded-lg"
                    :class="schedule.status === 'Closed'
                      ? 'bg-red-50 text-red-500 border border-red-100'
                      : 'bg-blue-50 text-[#1d4e89] border border-blue-100'"
                  >
                    {{ schedule.time }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Strategic note card -->
            <div class="bg-[#1d4e89] border border-blue-800 rounded-2xl p-7 relative overflow-hidden">
              <LucideGlobe
                :size="110"
                class="absolute -right-5 -bottom-5 opacity-[0.06] text-white pointer-events-none"
              />
              <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <LucideGlobe :size="18" class="text-white" />
              </div>
              <p class="text-[11px] font-semibold text-blue-300 tracking-widest uppercase mb-2">Strategic appointments</p>
              <h3 class="text-[18px] font-bold text-white mb-3 leading-snug">
                Engage with our executive scientific board
              </h3>
              <p class="text-[13px] text-blue-200 leading-relaxed">
                Formalize your engagement through our priority scheduling system for conferences, governance, and laboratory collaborations.
              </p>
            </div>

            <!-- Newsletter signup -->
            <div class="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300 relative overflow-hidden">
              <LucideMail
                :size="110"
                class="absolute -right-5 -bottom-5 opacity-[0.04] text-blue-800 pointer-events-none"
              />
              <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2">Newsletter</p>
              <h3 class="text-[17px] font-bold text-slate-800 mb-3 leading-snug">Join our scientific network</h3>
              <p class="text-[13px] text-slate-500 leading-relaxed mb-6">
                Receive prioritized updates on conference abstracts and legislative pathology news.
              </p>

              <div class="space-y-3">
                <input
                  v-model="newsletterFullName"
                  type="text"
                  placeholder="Full name"
                  class="field"
                />
                <input
                  v-model="newsletterEmail"
                  type="email"
                  placeholder="Official email address"
                  class="field"
                />

                <!-- Categories -->
                <div v-if="newsletterCategories.length > 0" class="space-y-2 pt-1">
                  <p class="text-[12px] font-semibold text-slate-500">Select newsletters</p>
                  <div class="space-y-2 max-h-36 overflow-y-auto">
                    <label
                      v-for="cat in newsletterCategories"
                      :key="cat._id"
                      class="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:border-blue-200 hover:bg-blue-50/30 transition-colors"
                    >
                      <input
                        type="checkbox"
                        :value="cat._id"
                        v-model="selectedCategories"
                        class="w-4 h-4 rounded border-slate-300 text-[#1d4e89] focus:ring-blue-200"
                      />
                      <div>
                        <p class="text-[13px] font-semibold text-slate-800">{{ cat.title }}</p>
                        <p
                          class="text-[11px] font-medium"
                          :class="cat.price > 0 ? 'text-[#1d4e89]' : 'text-emerald-600'"
                        >
                          {{ cat.price > 0 ? `₦${cat.price.toLocaleString()} / year` : 'Free subscription' }}
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                <!-- Proof of payment -->
                <div v-if="needsPayment" class="space-y-1.5 pt-2 border-t border-slate-100">
                  <p class="text-[12px] font-semibold text-slate-500">
                    Proof of payment
                    <span class="text-[#1d4e89]">— ₦{{ totalAmount.toLocaleString() }}</span>
                  </p>
                  <input
                    type="file"
                    @change="e => proofFile = e.target.files[0]"
                    accept="image/*,.pdf"
                    class="w-full text-[12px] text-slate-500 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-[12px] file:font-semibold file:bg-blue-50 file:text-[#1d4e89] hover:file:bg-blue-100 cursor-pointer border border-slate-200 rounded-xl p-2 bg-white transition-colors"
                  />
                </div>

                <button
                  @click="subscribeNewsletter"
                  :disabled="newsletterLoading"
                  class="w-full inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3 rounded-xl transition-colors duration-200 mt-1"
                >
                  <div v-if="newsletterLoading" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span v-if="newsletterLoading">Joining...</span>
                  <span v-else class="flex items-center gap-2">
                    Join the network
                    <LucideArrowRight :size="15" />
                  </span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

  </div>
</template>


<script setup>
import {
  LucideMapPin,
  LucideMail,
  LucidePhone,
  LucideCheckCircle,
  LucideClock,
  LucideChevronDown,
  LucideMessagesSquare,
  LucideGlobe,
  LucideArrowRight,
} from 'lucide-vue-next'
import { useCreateAppointment } from '@/composables/modules/appointments/useCreateAppointment'
import { useNewsletter } from '@/composables/modules/newsletters/useNewsletter'
import { useSubmitEnquiry } from '@/composables/modules/enquiries/useSubmitEnquiry'
import { ref, onMounted, computed } from 'vue'

const contactTab = ref('appointment')

const { loading, success, appointment, submitAppointment } = useCreateAppointment()
const { loading: enquiryLoading, success: enquirySuccess, payload: enquiryPayload, submitEnquiry } = useSubmitEnquiry()
const {
  loading: newsletterLoading,
  email: newsletterEmail,
  fullName: newsletterFullName,
  categories: newsletterCategories,
  selectedCategories,
  proofFile,
  fetchCategories,
  subscribe: subscribeNewsletter,
} = useNewsletter()

const totalAmount = computed(() => {
  if (!newsletterCategories.value) return 0
  return newsletterCategories.value
    .filter(c => selectedCategories.value.includes(c._id))
    .reduce((sum, c) => sum + c.price, 0)
})

const needsPayment = computed(() => totalAmount.value > 0)

onMounted(() => {
  fetchCategories()
})

const contactInfo = [
  {
    title: 'Physical address',
    icon: LucideMapPin,
    lines: ['Chemical Laboratory', 'National Hospital Abuja, Nigeria'],
    colors: { bg: 'bg-blue-50', icon: 'text-[#1d4e89]' },
  },
  {
    title: 'Digital portal',
    icon: LucideGlobe,
    lines: ['info@scpsn.org.ng', 'admin@scpsn.org.ng'],
    colors: { bg: 'bg-teal-50', icon: 'text-teal-700' },
  },
  {
    title: 'Direct line',
    icon: LucidePhone,
    lines: ['+234 901 437 7191', '+234 809 371 6175'],
    colors: { bg: 'bg-green-50', icon: 'text-green-700' },
  },
]

const operatingHours = [
  { days: 'Mon — Fri', time: '08:00 – 17:00 (GMT+1)', status: 'Active'  },
  { days: 'Saturday',  time: '10:00 – 14:00 (GMT+1)', status: 'Limited' },
  { days: 'Sunday',    time: 'Closed',                 status: 'Closed'  },
]
</script>


<style scoped>
.font-body {
  font-family: 'DM Sans', 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
}

.field {
  @apply w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200;
}
</style>