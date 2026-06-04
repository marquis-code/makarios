<template>
  <div class="min-h-screen bg-white font-body">

    <!-- ─── HERO ─────────────────────────────────────────────── -->
    <section class="bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pb-20">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100">
            <LucideCalendar :size="13" />
            Precision Consultations
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Schedule a
            <span class="text-[#1d4e89]"> Professional Session.</span>
          </h1>
          <p class="text-[16px] text-slate-500 leading-relaxed max-w-[540px]">
            Book clinical diagnoses, scientific consultations, or lab walkthroughs with Nigeria's premier cellular pathology experts.
          </p>
        </div>
      </div>
    </section>


    <!-- ─── MAIN CONTENT ─────────────────────────────────────── -->
    <section class="bg-slate-50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          <!-- ── Left: Booking Form ── -->
          <div class="lg:col-span-7">
            <div class="bg-white border border-slate-200 rounded-2xl p-7 lg:p-10">

              <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2">Book your session</p>
              <h2 class="text-[22px] font-bold text-slate-800 mb-7 leading-snug">Appointment details</h2>

              <form @submit.prevent="handleSubmit" class="space-y-5">

                <!-- Name + Email -->
                <div class="grid sm:grid-cols-2 gap-5">
                  <div class="space-y-1.5">
                    <label class="text-[12px] font-semibold text-slate-500">Full Legal Name</label>
                    <input
                      v-model="appointment.fullName"
                      type="text"
                      placeholder="Dr. John Doe"
                      class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200"
                      required
                    />
                  </div>
                  <div class="space-y-1.5">
                    <label class="text-[12px] font-semibold text-slate-500">Email Address</label>
                    <input
                      v-model="appointment.email"
                      type="email"
                      placeholder="john@scientific.ng"
                      class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <!-- Service category -->
                <div class="space-y-1.5">
                  <label class="text-[12px] font-semibold text-slate-500">Service Category</label>
                  <div class="relative">
                    <select
                      v-model="appointment.purpose"
                      class="w-full bg-slate-50 border border-slate-200 text-slate-800 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200 appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled selected>Select a professional service</option>
                      <option>Histopathology Case Review</option>
                      <option>Cytopathology Consultation</option>
                      <option>Molecular Diagnostic Advisory</option>
                      <option>Laboratory Quality Audit</option>
                      <option>Scientific Equipment Training</option>
                    </select>
                    <LucideChevronDown
                      class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      :size="16"
                    />
                  </div>
                </div>

                <!-- Date + Time -->
                <div class="grid sm:grid-cols-2 gap-5">
                  <div class="space-y-1.5">
                    <label class="text-[12px] font-semibold text-slate-500">Preferred Date</label>
                    <input
                      v-model="appointment.date"
                      type="date"
                      class="w-full bg-slate-50 border border-slate-200 text-slate-800 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200"
                      required
                    />
                  </div>
                  <div class="space-y-1.5">
                    <label class="text-[12px] font-semibold text-slate-500">Preferred Time</label>
                    <input
                      v-model="appointment.time"
                      type="time"
                      class="w-full bg-slate-50 border border-slate-200 text-slate-800 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <!-- Message -->
                <div class="space-y-1.5">
                  <label class="text-[12px] font-semibold text-slate-500">Case Summary / Inquiry</label>
                  <textarea
                    v-model="appointment.message"
                    rows="5"
                    placeholder="Briefly describe the clinical context or scientific inquiry..."
                    class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-4 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200 resize-none leading-relaxed"
                  />
                </div>

                <!-- Submit -->
                <div class="pt-2">
                  <button
                    type="submit"
                    :disabled="loading"
                    class="w-full inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200"
                  >
                    <div v-if="loading" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span v-if="loading">Confirming reservation...</span>
                    <span v-else class="flex items-center gap-2">
                      Confirm reservation
                      <LucideArrowRight :size="15" />
                    </span>
                  </button>
                </div>

              </form>
            </div>
          </div>


          <!-- ── Right: Info sidebar ── -->
          <div class="lg:col-span-5 space-y-5">

            <!-- Integrity card -->
            <div class="bg-[#1d4e89] border border-blue-800 rounded-2xl p-7 relative overflow-hidden">
              <LucideShieldCheck
                :size="110"
                class="absolute -right-5 -bottom-5 opacity-[0.06] text-white pointer-events-none"
              />
              <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <LucideShieldCheck :size="20" class="text-white" />
              </div>
              <p class="text-[11px] font-semibold text-blue-300 tracking-widest uppercase mb-2">Scientific integrity</p>
              <h3 class="text-[18px] font-bold text-white mb-3 leading-snug">Guaranteed quality at every step</h3>
              <p class="text-[13px] text-blue-200 leading-relaxed">
                Every appointment is handled by board-certified Cellular Pathology Scientists under the strict guidelines of MDCN and international scientific standards.
              </p>
            </div>

            <!-- Why book card -->
            <div class="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300">
              <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-6">Why book with us?</p>
              <div class="space-y-5">
                <div
                  v-for="(feat, i) in features"
                  :key="i"
                  class="flex items-start gap-4 group"
                >
                  <div
                    class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    :class="featureColors[i % featureColors.length].bg"
                  >
                    <component
                      :is="feat.icon"
                      :size="18"
                      :class="featureColors[i % featureColors.length].icon"
                    />
                  </div>
                  <div>
                    <p class="text-[14px] font-semibold text-slate-800 mb-0.5">{{ feat.title }}</p>
                    <p class="text-[13px] text-slate-400 leading-relaxed">{{ feat.desc }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Regional hubs card -->
            <div class="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300">
              <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-5">Regional support hubs</p>
              <div class="grid grid-cols-2 gap-3">
                <div
                  v-for="hub in hubs"
                  :key="hub.city"
                  class="bg-slate-50 border border-slate-100 rounded-xl p-4 hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-200"
                >
                  <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    <LucideMapPin :size="15" class="text-[#1d4e89]" />
                  </div>
                  <p class="text-[13px] font-bold text-slate-800">{{ hub.city }}</p>
                  <p class="text-[11px] text-slate-400 font-medium mt-0.5">{{ hub.role }}</p>
                </div>
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
  LucideArrowRight,
  LucideShieldCheck,
  LucideMicroscope,
  LucideFlaskConical,
  LucideClock,
  LucideGlobe,
  LucideCalendar,
  LucideChevronDown,
  LucideMapPin,
} from 'lucide-vue-next'
import { useCreateAppointment } from '@/composables/modules/appointments/useCreateAppointment'

const { loading, appointment, submitAppointment } = useCreateAppointment()

const features = [
  {
    title: 'Global benchmarks',
    desc: 'Consultations aligned with international diagnostic standards.',
    icon: LucideGlobe,
  },
  {
    title: 'Advanced analytics',
    desc: 'Utilizing modern histopathology processing technologies.',
    icon: LucideMicroscope,
  },
  {
    title: 'Quick turnaround',
    desc: 'Efficient case review within 48–72 business hours.',
    icon: LucideClock,
  },
]

const featureColors = [
  { bg: 'bg-blue-50',  icon: 'text-[#1d4e89]' },
  { bg: 'bg-green-50', icon: 'text-green-700'  },
  { bg: 'bg-amber-50', icon: 'text-amber-700'  },
]

const hubs = [
  { city: 'Abuja',  role: 'Headquarters'  },
  { city: 'Lagos',  role: 'Coastal Hub'   },
  { city: 'Kano',   role: 'Northern Hub'  },
  { city: 'Enugu',  role: 'Eastern Hub'   },
]

const handleSubmit = async () => {
  await submitAppointment()
}
</script>


<style scoped>
.font-body {
  font-family: 'DM Sans', 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
}
</style>