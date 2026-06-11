<template>
  <div class="bg-[#f8faf9] min-h-screen py-12 sm:py-16 font-sans relative overflow-hidden">
    <!-- Abstract background elements -->
    <div class="absolute top-0 right-0 w-[80vw] h-[80vw] bg-white rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
      
      <!-- Premium Header -->
      <div class="max-w-3xl mb-10 animate-fade-in-up">
        <h2 class="text-emerald-900 font-bold tracking-widest uppercase text-xs mb-2">Choose Your Impact</h2>
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
          The Recognition <br />
          <span class="text-emerald-900">Framework</span>
        </h1>
        <p class="text-lg text-slate-600 font-medium max-w-xl">
          Transform lives through literacy. Every contribution builds a legacy of education in our communities.
        </p>
      </div>

      <!-- Interactive Accordion Journey Mapping -->
      <div 
        class="flex flex-col lg:flex-row h-auto lg:h-[600px] w-full gap-4 lg:gap-2"
        @mouseleave="hoveredTier = null"
      >
        <div 
          v-for="(tier, index) in tiers" 
          :key="index"
          @mouseenter="hoveredTier = index"
          @click="openDonationModal(tier)"
          class="relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-end p-6 lg:p-8"
          :class="[
            hoveredTier === index ? 'lg:flex-[4] shadow-2xl lg:scale-[1.02] z-20' : (hoveredTier === null && index === 2 ? 'lg:flex-[3] shadow-xl z-10' : 'lg:flex-[1] opacity-90 hover:opacity-100 z-0'),
            tier.colorClass
          ]"
        >
          <!-- Background subtle glow -->
          <div v-if="hoveredTier === index || (hoveredTier === null && index === 2)" class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none transition-opacity duration-1000"></div>
          
          <!-- Content when Expanded (Default for mobile, Hovered/Default for Desktop) -->
          <div 
            class="transition-all duration-500 flex flex-col h-full w-full min-w-full lg:min-w-[300px] relative z-10"
            :class="hoveredTier === index || (hoveredTier === null && index === 2) ? 'opacity-100 translate-x-0' : 'lg:opacity-0 lg:hidden translate-x-4 lg:translate-x-0'"
          >
            <div class="mb-auto">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm" :class="tier.iconClass">
                {{ tier.icon }}
              </div>
              <h3 class="text-3xl lg:text-4xl font-black tracking-tight mb-2">{{ tier.name }}</h3>
              <p class="font-bold text-lg mb-6" :class="tier.textClass">{{ tier.subtitle }}</p>
              
              <ul class="space-y-3">
                <li v-for="(benefit, i) in tier.benefits.slice(0, 3)" :key="i" class="flex items-center gap-3 text-sm font-medium" :class="tier.name.includes('Bronze') || tier.name.includes('Silver') ? 'text-slate-600' : 'text-slate-200'">
                  <svg class="w-5 h-5 shrink-0" :class="tier.name.includes('Bronze') || tier.name.includes('Silver') ? 'text-emerald-600' : 'text-emerald-400'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                  {{ benefit }}
                </li>
              </ul>
            </div>

            <div class="mt-8 border-t pt-6" :class="tier.name.includes('Bronze') || tier.name.includes('Silver') ? 'border-slate-200' : 'border-white/20'">
              <div class="text-xs font-black mb-2 uppercase tracking-widest" :class="tier.name.includes('Bronze') || tier.name.includes('Silver') ? 'text-slate-400' : 'text-slate-400'">IMPACT RANGE</div>
              <div class="text-2xl font-black mb-4">{{ tier.range }}</div>
              <button class="w-full py-4 rounded-xl font-bold transition-all hover:scale-[1.02]" :class="tier.name.includes('Bronze') || tier.name.includes('Silver') ? 'bg-slate-900 text-white hover:bg-emerald-900' : 'bg-white text-slate-900 hover:bg-slate-100'">
                {{ tier.cta }}
              </button>
            </div>
          </div>

          <!-- Content when Collapsed (Vertical Text for Desktop) -->
          <div 
            class="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 hidden lg:flex"
            :class="hoveredTier !== index && (hoveredTier !== null || index !== 2) ? 'opacity-100 delay-200' : 'opacity-0 pointer-events-none'"
          >
            <div class="text-4xl mb-6 transition-transform duration-500 hover:scale-125">{{ tier.icon }}</div>
            <div class="origin-center -rotate-90 whitespace-nowrap text-2xl font-black tracking-widest uppercase mt-24">
              {{ tier.name }}
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Enhanced Donation Modal (Glassmorphic) -->
    <ClientOnly>
      <Teleport to="body">
      <Transition name="modal-scale">
        <div 
          v-if="showModal" 
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
          @click="closeModal"
        >
          <!-- Blur Backdrop -->
          <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-md"></div>
          
          <div 
            class="relative bg-white rounded-[2.5rem] shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col border border-white/20"
            @click.stop
          >
            <!-- Modal Header -->
            <div class="p-8 pb-6 border-b border-slate-100 bg-slate-50/50 backdrop-blur-sm sticky top-0 z-10 flex justify-between items-start">
              <div>
                <div class="flex items-center gap-3 mb-2">
                  <span class="text-3xl bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">{{ selectedTier?.icon }}</span>
                  <h3 class="text-2xl font-black text-slate-900">{{ selectedTier?.name }} TIER</h3>
                </div>
                <p class="text-sm font-bold text-emerald-900">{{ selectedTier?.subtitle }}</p>
              </div>
              <button 
                @click="closeModal"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Scrollable Content -->
            <div class="p-8 overflow-y-auto custom-scrollbar">
              <div class="space-y-8">
                <!-- Impact Summary -->
                <div class="bg-gradient-to-br from-emerald-900/10 to-transparent rounded-3xl p-6">
                  <h4 class="font-black text-slate-900 mb-2">Your Impact</h4>
                  <p class="text-slate-700 leading-relaxed font-medium">{{ selectedTier?.fullImpact }}</p>
                </div>

                <!-- Account Details -->
                <div>
                  <h4 class="font-black text-slate-900 mb-4 text-lg">Bank Transfer Details</h4>
                  
                  <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                    <div class="space-y-5">
                      <div class="flex flex-col sm:flex-row justify-between sm:items-center pb-4 border-b border-slate-100 gap-2">
                        <span class="text-sm font-bold text-slate-400">Account Name</span>
                        <div class="flex items-center justify-between sm:justify-end gap-3">
                          <span class="font-bold text-slate-900 text-right text-sm">Makarios Initiative</span>
                          <button @click="copyToClipboard('Makarios Initiative for Health and Humanitarian Development')" class="text-emerald-900 bg-emerald-900/10 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-emerald-900 hover:text-white transition-colors">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                          </button>
                        </div>
                      </div>
                      <div class="flex flex-col sm:flex-row justify-between sm:items-center pb-4 border-b border-slate-100 gap-2">
                        <span class="text-sm font-bold text-slate-400">Account Number</span>
                        <div class="flex items-center justify-between sm:justify-end gap-3">
                          <span class="font-mono text-lg font-black text-slate-900">4011401325</span>
                          <button @click="copyToClipboard('4011401325')" class="text-emerald-900 bg-emerald-900/10 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-emerald-900 hover:text-white transition-colors">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                          </button>
                        </div>
                      </div>
                      <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                        <span class="text-sm font-bold text-slate-400">Bank Name</span>
                        <div class="flex items-center justify-between sm:justify-end gap-3">
                          <span class="font-bold text-slate-900 text-sm">Fidelity Bank</span>
                          <button @click="copyToClipboard('Fidelity Bank')" class="text-emerald-900 bg-emerald-900/10 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-emerald-900 hover:text-white transition-colors">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Copy Success Message -->
                <div class="h-8 overflow-hidden">
                  <Transition name="slide-up">
                    <div v-if="copySuccess" class="bg-emerald-900/10 text-emerald-900 rounded-xl p-2 text-center text-sm font-bold flex justify-center items-center gap-2">
                      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                      Copied: {{ copySuccess }}
                    </div>
                  </Transition>
                </div>

                <!-- Next Steps Footer -->
                <div class="bg-slate-900 text-white rounded-3xl p-6 mt-4">
                  <h5 class="font-bold mb-3 flex items-center gap-2 text-sm">
                    <span class="w-6 h-6 rounded-full bg-emerald-900 flex items-center justify-center">1</span>
                    Make Transfer
                  </h5>
                  <h5 class="font-bold flex items-center gap-2 text-sm">
                    <span class="w-6 h-6 rounded-full bg-emerald-900 flex items-center justify-center">2</span>
                    Email Receipt to
                  </h5>
                  <a href="mailto:kika'sexamination@gmail.com" class="block ml-8 mt-1 text-[#4ade80] hover:text-white transition-colors underline decoration-[#4ade80]/30 underline-offset-4 text-sm font-bold">
                    kika'sexamination@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Tier {
  name: string
  subtitle: string
  icon: string
  range: string
  benefits: string[]
  cta: string
  fullImpact: string
  colorClass?: string
  iconClass?: string
  textClass?: string
}

const tiers: Tier[] = [
  {
    name: 'Bronze',
    subtitle: 'Foundational Support',
    icon: '📜',
    range: '1-99 copies',
    benefits: ['Digital Certificate', 'Online Donor Roll'],
    cta: 'Start Impact',
    fullImpact: 'Your donation will provide books to individual students and create the foundation for literacy growth.',
    colorClass: 'bg-white text-slate-900 border-2 border-slate-100',
    iconClass: 'bg-slate-100 text-slate-600',
    textClass: 'text-slate-600'
  },
  {
    name: 'Silver',
    subtitle: 'Classroom Champion',
    icon: '🥈',
    range: '100-199 copies',
    benefits: ['Physical Certificate', 'Custom Bookplates'],
    cta: 'Equip Classrooms',
    fullImpact: 'Your donation will equip an entire classroom with books, directly impacting 30-40 students.',
    colorClass: 'bg-slate-100 text-slate-900 border border-slate-200',
    iconClass: 'bg-white text-slate-600',
    textClass: 'text-slate-600'
  },
  {
    name: 'Gold',
    subtitle: 'Educational Partner',
    icon: '🥇',
    range: '200-499 copies',
    benefits: ['Named Bookshelf', 'Premium Report', 'VIP Event Access', 'Stewardship Gift'],
    cta: 'Become Partner',
    fullImpact: 'Your donation will transform multiple classrooms or an entire school section.',
    colorClass: 'bg-emerald-900 text-white',
    iconClass: 'bg-white/20 text-white',
    textClass: 'text-emerald-300'
  },
  {
    name: 'Platinum',
    subtitle: 'Legacy Builder',
    icon: '💎',
    range: '500-999 copies',
    benefits: ['Library Section', 'Video Testimonial'],
    cta: 'Build Legacy',
    fullImpact: 'Your donation will establish dedicated library spaces, impacting hundreds of students.',
    colorClass: 'bg-slate-900 text-white',
    iconClass: 'bg-white/10 text-white',
    textClass: 'text-emerald-400'
  },
  {
    name: 'Diamond',
    subtitle: 'Transformational',
    icon: '👑',
    range: '1,000+ copies',
    benefits: ['Learning Center', 'Advisory Role'],
    cta: 'Transform Lives',
    fullImpact: 'Your donation will create comprehensive learning centers that serve entire communities.',
    colorClass: 'bg-gradient-to-br from-emerald-800 to-slate-900 text-white',
    iconClass: 'bg-white/10 text-white',
    textClass: 'text-emerald-300'
  }
]

const showModal = ref(false)
const selectedTier = ref<Tier | null>(null)
const copySuccess = ref('')
const hoveredTier = ref<number | null>(null)

const openDonationModal = (tier: Tier) => {
  selectedTier.value = tier
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  copySuccess.value = ''
}

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    copySuccess.value = text
    setTimeout(() => { copySuccess.value = '' }, 3000)
  } catch (err) {
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    copySuccess.value = text
    setTimeout(() => { copySuccess.value = '' }, 3000)
  }
}

// Mouse tracking effect for bento grid
const updateMousePosition = (e: MouseEvent) => {
  const cards = document.querySelectorAll('.bento-card')
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    ;(card as HTMLElement).style.setProperty('--mouse-x', `${x}px`)
    ;(card as HTMLElement).style.setProperty('--mouse-y', `${y}px`)
  })
}
</script>

<style scoped>
/* Bento Grid Styles */
.bento-card {
  position: relative;
  border-radius: 2.5rem;
  padding: 2.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(0,0,0,0.05);
}

.bento-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Mouse tracking spotlight effect */
.bento-spotlight {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    rgba(46, 125, 50, 0.06),
    transparent 40%
  );
  pointer-events: none;
  z-index: 1;
}

.bg-emerald-900 .bento-spotlight {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.15),
    transparent 40%
  );
}

.bento-card:hover .bento-spotlight {
  opacity: 1;
}

/* Animations */
.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Modal Transitions */
.modal-scale-enter-active,
.modal-scale-leave-active {
  transition: opacity 0.3s ease;
}
.modal-scale-enter-from,
.modal-scale-leave-to {
  opacity: 0;
}
.modal-scale-enter-active > div:nth-child(2),
.modal-scale-leave-active > div:nth-child(2) {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}
.modal-scale-enter-from > div:nth-child(2) {
  transform: scale(0.95) translateY(20px);
  opacity: 0;
}
.modal-scale-leave-to > div:nth-child(2) {
  transform: scale(0.98) translateY(10px);
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Custom Scrollbar for Modal */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>