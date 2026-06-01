<template>
  <div class="min-h-screen pt-32 pb-20 bg-slate-50 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center space-y-6 mb-20 animate-on-scroll">
        <span class="inline-block px-4 py-1.5 glass text-brand-cyan font-black text-[10px]  tracking-[0.3em] rounded-full border border-brand-cyan/20">
          Precision Consultations
        </span>
        <h1 class="text-5xl md:text-7xl font-black text-brand-dark tracking-tighter leading-none">
          Schedule A <span class="text-gradient">Professional Session</span>.
        </h1>
        <p class="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Book clinical diagnoses, scientific consultations, or lab walkthroughs with Nigeria's premier cellular pathology experts.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
        <!-- Booking Form -->
        <div class="lg:col-span-7 animate-on-scroll">
          <div class="glass p-8 md:p-12 rounded-[3rem] border border-white/40 shadow-2xl relative overflow-hidden group">
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-brand-cyan/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            
            <form @submit.prevent="handleSubmit" class="relative z-10 space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-2">
                  <label class="text-[10px] font-black text-brand-dark  ml-4">Full Legal Name</label>
                  <input v-model="appointment.fullName" type="text" placeholder="Dr. John Doe" class="form-input" required />
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] font-black text-brand-dark  ml-4">Email Address</label>
                  <input v-model="appointment.email" type="email" placeholder="john@scientific.ng" class="form-input" required />
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-[10px] font-black text-brand-dark  ml-4">Service Category</label>
                <select v-model="appointment.purpose" class="form-input appearance-none cursor-pointer" required>
                  <option value="" disabled selected>Select a professional service</option>
                  <option>Histopathology Case Review</option>
                  <option>Cytopathology Consultation</option>
                  <option>Molecular Diagnostic Advisory</option>
                  <option>Laboratory Quality Audit</option>
                  <option>Scientific Equipment Training</option>
                </select>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-2">
                  <label class="text-[10px] font-black text-brand-dark  ml-4">Preferred Date</label>
                  <input v-model="appointment.date" type="date" class="form-input" required />
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] font-black text-brand-dark  ml-4">Preferred Time Slice</label>
                  <input v-model="appointment.time" type="time" class="form-input" required />
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-[10px] font-black text-brand-dark  ml-4">Case Summary / Inquiry</label>
                <textarea v-model="appointment.message" rows="4" placeholder="Briefly describe the clinical context or scientific inquiry..." class="form-input !py-3 !px-8 !rounded-[24px] resize-none pb-12"></textarea>
              </div>

              <button type="submit" :disabled="loading" class="w-full btn-premium !py-4 group">
                <span v-if="loading" class="flex items-center justify-center gap-3">
                   <div class="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                   TRANSMITTING...
                </span>
                <span v-else class="flex items-center justify-center gap-3">
                  CONFIRM RESERVATION
                  <LucideArrowRight :size="18" class="group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </form>
          </div>
        </div>

        <!-- Info Sidebar -->
        <div class="lg:col-span-5 space-y-10 animate-on-scroll">
          <div class="interactive-card p-10 bg-brand-dark text-white border-none group">
            <LucideShieldCheck :size="48" class="text-brand-cyan mb-8" />
            <h3 class="text-2xl font-black mb-4 tracking-tight">Scientific Integrity Guaranteed.</h3>
            <p class="text-slate-300 text-base leading-relaxed font-medium">
              Every appointment is handled by board-certified Cellular Pathology Scientists under the strict guidelines of MDCN and scientific international standards.
            </p>
          </div>

          <div class="space-y-6">
            <h4 class="text-[10px] font-black text-slate-400  tracking-[0.3em] ml-2">Why Book With Us?</h4>
            <div v-for="(feat, i) in features" :key="i" class="flex gap-6 group">
              <div class="h-12 w-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-brand-dark group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300">
                <component :is="feat.icon" :size="20" />
              </div>
              <div class="space-y-1">
                <p class="font-black text-brand-dark text-base  tracking-tight">{{ feat.title }}</p>
                <p class="text-sm text-slate-400 leading-relaxed">{{ feat.desc }}</p>
              </div>
            </div>
          </div>

          <div class="glass p-8 rounded-[2.5rem] border-brand-cyan/10">
            <p class="text-center text-[10px] font-black text-slate-400  mb-6">Regional Support Hubs</p>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 bg-slate-50/50 rounded-2xl text-center space-y-1">
                <p class="text-[10px] font-black text-brand-dark">ABUJA</p>
                <p class="text-[9px] text-slate-400 font-bold ">Headquarters</p>
              </div>
              <div class="p-4 bg-slate-50/50 rounded-2xl text-center space-y-1">
                <p class="text-[10px] font-black text-brand-dark">LAGOS</p>
                <p class="text-[9px] text-slate-400 font-bold ">Coastal Hub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { 
  LucideArrowRight, 
  LucideShieldCheck, 
  LucideMicroscope, 
  LucideFlaskConical, 
  LucideClock, 
  LucideGlobe 
} from 'lucide-vue-next'
import { useCreateAppointment } from '@/composables/modules/appointments/useCreateAppointment'

const { loading, appointment, submitAppointment } = useCreateAppointment()

const features = [
  { title: 'Global Benchmarks', desc: 'Consultations aligned with international diagnostic standards.', icon: LucideGlobe },
  { title: 'Advanced Analytics', desc: 'Utilizing modern histopathology processing technologies.', icon: LucideMicroscope },
  { title: 'Quick Turnaround', desc: 'Efficient case review within 48-72 business hours.', icon: LucideClock }
]

const handleSubmit = async () => {
  await submitAppointment()
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
