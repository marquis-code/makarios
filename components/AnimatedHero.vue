<template>
  <main class="relative bg-slate-50 min-h-[90vh] overflow-hidden flex items-center">
    
    <!-- Ultra-minimal abstract shapes -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-emerald-900/5 blur-3xl"></div>
      <div class="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-900/10 blur-[100px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 py-10 lg:py-16 flex flex-col lg:flex-row items-center gap-10">
      
      <!-- Left Editorial Content -->
      <div class="w-full lg:w-1/2 relative z-20">
        <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white shadow-sm border border-slate-100 mb-8 animate-fade-in-up">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-900 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-900"></span>
          </span>
          <span class="text-sm font-bold text-slate-700 tracking-wider uppercase">{{ currentSlide.badge }}</span>
        </div>

        <Transition name="editorial-fade" mode="out-in">
          <div :key="currentIndex" class="w-full">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
              <span class="block overflow-hidden pb-2">
                <span class="block animate-slide-up-word" style="animation-delay: 100ms">{{ currentSlide.titleWords[0] }}</span>
              </span>
              <span class="block overflow-hidden pb-2">
                <span class="block text-emerald-900 animate-slide-up-word" style="animation-delay: 200ms">{{ currentSlide.titleWords.slice(1).join(' ') }}</span>
              </span>
            </h1>

            <p class="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-lg mb-8 animate-fade-in-up delay-300">
              {{ currentSlide.description }}
            </p>

            <div class="flex flex-wrap gap-4 animate-fade-in-up delay-400">
              <button 
                v-for="(btn, i) in currentSlide.buttons" :key="i"
                @click="handleButtonClick(btn)"
                class="group relative overflow-hidden rounded-full font-bold text-lg px-8 py-4 transition-all duration-300"
                :class="btn.primary ? 'bg-emerald-900 text-white hover:shadow-2xl hover:shadow-emerald-900/40 hover:-translate-y-1' : 'bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1'"
              >
                <span class="relative z-10 flex items-center gap-2">
                  {{ btn.text }}
                  <svg v-if="btn.primary" class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <!-- Hover effect fill -->
                <div v-if="btn.primary" class="absolute inset-0 bg-[#1b4e20] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></div>
              </button>
            </div>
          </div>
        </Transition>

        <!-- Slide Controls -->
        <div class="mt-8 flex items-center gap-6 animate-fade-in-up delay-500">
          <div class="flex gap-2">
            <button 
              v-for="(_, idx) in slides" :key="idx"
              @click="setCurrentSlide(idx)"
              class="h-1.5 rounded-full transition-all duration-500"
              :class="idx === currentIndex ? 'w-12 bg-emerald-900' : 'w-4 bg-slate-300 hover:bg-slate-400'"
              :aria-label="`Slide ${idx + 1}`"
            ></button>
          </div>
          <div class="text-slate-400 font-bold text-sm tracking-widest">
            0{{ currentIndex + 1 }} / 0{{ slides.length }}
          </div>
        </div>
      </div>

      <!-- Right Glassmorphic Frame Image -->
      <div class="w-full lg:w-1/2 relative z-10 h-[500px] lg:h-[700px] animate-fade-in-scale">
        <div class="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-slate-200 shadow-2xl shadow-slate-900/10 border-4 border-white/60 transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out group">
          <Transition name="editorial-fade" mode="out-in">
            <video 
              :key="currentIndex"
              ref="heroVideo"
              class="w-full h-full object-cover cursor-pointer"
              autoplay 
              loop 
              muted 
              playsinline
              preload="auto"
              @click="openFullscreen"
            >
              <source :src="currentSlide.video" type="video/mp4" />
            </video>
          </Transition>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>

          <!-- Play icon overlay hint -->
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
            <div class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
              <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>

        <!-- Floating Glass Widget 1 -->
        <div class="absolute top-12 -left-12 bg-white/80 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-xl shadow-emerald-900/10 transform -rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 hidden md:block">
          <div class="w-12 h-12 rounded-2xl bg-emerald-900/10 text-emerald-900 flex items-center justify-center text-2xl mb-3">
            📚
          </div>
          <div class="text-2xl font-black text-slate-900 tracking-tight">50K+</div>
          <div class="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">Lives Changed</div>
        </div>

        <!-- Floating Glass Widget 2 -->
        <div class="absolute bottom-16 -right-8 bg-emerald-900/90 backdrop-blur-xl border border-emerald-900 p-6 rounded-3xl shadow-2xl shadow-emerald-900/30 transform rotate-6 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 hidden md:block text-white">
          <div class="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center text-2xl mb-3">
            🌍
          </div>
          <div class="text-2xl font-black tracking-tight">120+</div>
          <div class="text-sm font-bold text-white/80 uppercase tracking-widest mt-1">Communities</div>
        </div>
      </div>
    </div>

    <!-- Enhanced Modal -->
    <ClientOnly>
      <Teleport to="body">
      <Transition name="modal" appear>
        <div 
          v-if="showModal" 
          class="fixed inset-0 bg-slate-900/40 backdrop-blur-md flex items-center justify-center z-50 p-4"
          @click.self="closeModal"
        >
          <div class="bg-white rounded-[2.5rem] p-10 max-w-lg w-full shadow-2xl relative overflow-hidden border border-slate-100">
            <div class="absolute -top-20 -right-20 w-64 h-64 bg-emerald-900/5 rounded-full blur-3xl pointer-events-none"></div>
            <div class="relative z-10 text-center">
              <div class="w-20 h-20 bg-emerald-900/10 rounded-3xl mx-auto mb-8 flex items-center justify-center text-emerald-900">
                <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-3xl font-black text-slate-900 mb-4 tracking-tight">Kika's Examination</h3>
              <p class="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                Join us for the exciting launch of Kika's comprehensive examination preparation books designed to help students excel in their studies.
              </p>
              
              <div class="flex flex-col gap-3">
                <a href="#kika"
                  @click="showModal = false"
                  class="w-full px-8 py-4 bg-emerald-900 text-white font-bold rounded-2xl hover:bg-[#1b4e20] transition-colors shadow-lg shadow-emerald-900/30 text-lg flex justify-center items-center gap-2"
                >
                  Learn More
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <button
                  @click="closeModal"
                  class="w-full px-8 py-4 bg-slate-50 text-slate-600 font-bold rounded-2xl hover:bg-slate-100 transition-colors text-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      </Teleport>
    </ClientOnly>

    <!-- Fullscreen Video Modal -->
    <ClientOnly>
      <Teleport to="body">
        <Transition name="modal-fade">
          <div 
            v-if="isVideoModalOpen" 
            class="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 md:p-8"
            @click.self="closeFullscreen"
          >
            <button 
              @click="closeFullscreen"
              class="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 transition-colors duration-200 text-white"
              aria-label="Close video"
            >
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <video
              ref="modalVideo"
              class="max-w-full max-h-full w-full md:w-auto rounded-xl shadow-2xl"
              controls
              autoplay
              loop
              playsinline
            >
              <source :src="currentSlide.video" type="video/mp4" />
            </video>
          </div>
        </Transition>
      </Teleport>
    </ClientOnly>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, onBeforeUnmount, watch, nextTick } from 'vue'

interface Button {
  text: string
  primary?: boolean
  secondary?: boolean
  action?: string
}

interface Slide {
  id: number
  badge: string
  title: string
  description: string
  buttons: Button[]
}

const rawSlides = [
  {
    id: 1,
    badge: 'Makarios Initiative',
    title: 'Improving Lives Through Education',
    description: 'We are dedicated to improving health outcomes and empowering communities through sustainable, transformative development programs.',
    buttons: [
      { text: "Kika's Examination", action: 'openModal', primary: true },
      { text: 'Explore Impact', action: '#impact', secondary: true }
    ],
    video: '/videos/ensuring-access1.mp4'
  },
  {
    id: 2,
    badge: 'Education for All',
    title: 'Empowering Education for Brighter Futures',
    description: 'Breaking barriers and creating opportunities through innovative educational programs and resources that transform communities across Nigeria.',
    buttons: [
      { text: 'Join Our Mission', action: 'openModal', primary: true },
      { text: 'View Programs', action: '#about', secondary: true }
    ],
    video: '/videos/ensuring-access2.mp4'
  }
]

const slides = ref<any[]>(
  rawSlides.map(s => {
    const words = s.title.split(' ');
    const firstWord = words[0];
    const rest = words.slice(1);
    return { ...s, titleWords: [firstWord, ...rest] }
  })
)

const currentIndex = ref(0)
const showModal = ref(false)
const isVideoModalOpen = ref(false)

const currentSlide = computed(() => slides.value[currentIndex.value])

const heroVideo = ref<HTMLVideoElement | null>(null)
const modalVideo = ref<HTMLVideoElement | null>(null)

const playVideo = async (el: HTMLVideoElement | null, muted = true) => {
  if (!el) return
  el.muted = muted
  try {
    await el.play()
  } catch (err) {
    console.warn('Autoplay prevented:', err)
  }
}

const setCurrentSlide = (index: number) => { currentIndex.value = index }

const handleButtonClick = (btn: Button) => {
  if (btn.action === 'openModal') {
    showModal.value = true
  } else if (btn.action?.startsWith('#')) {
    document.querySelector(btn.action)?.scrollIntoView({ behavior: 'smooth' })
  }
}

const closeModal = () => {
  showModal.value = false
}

const openFullscreen = async () => {
  isVideoModalOpen.value = true

  // pause background video to avoid double playback
  heroVideo.value?.pause()

  await nextTick()

  const el = modalVideo.value
  if (el) {
    el.load()
    await playVideo(el, false)
  }

  document.body.style.overflow = 'hidden'
}

const closeFullscreen = () => {
  if (modalVideo.value) {
    modalVideo.value.pause()
  }
  isVideoModalOpen.value = false
  document.body.style.overflow = ''

  // resume background preview
  playVideo(heroVideo.value, true)
}

const handleEscKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isVideoModalOpen.value) {
    closeFullscreen()
  }
}

// Reload + play the hero video whenever the slide (and thus source) changes
watch(currentIndex, async () => {
  await nextTick()
  const el = heroVideo.value
  if (el) {
    el.load()
    await playVideo(el, true)
  }

  // keep modal video in sync if open
  if (isVideoModalOpen.value && modalVideo.value) {
    modalVideo.value.load()
    await playVideo(modalVideo.value, false)
  }
})

let slideTimer: ReturnType<typeof setInterval>

onMounted(async () => {
  await nextTick()
  const el = heroVideo.value
  if (el) {
    el.load()
    await playVideo(el, true)
  }

  window.addEventListener('keydown', handleEscKey)

  slideTimer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length
  }, 8000)

  onUnmounted(() => {
    clearInterval(slideTimer)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscKey)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Editorial Title Animations */
.animate-slide-up-word {
  animation: slideUpWord 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  transform: translateY(100%);
  opacity: 0;
}

@keyframes slideUpWord {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in-scale {
  opacity: 0;
  animation: fadeInScale 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInScale {
  from { opacity: 0; transform: scale(0.95) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }

/* Transitions */
.editorial-fade-enter-active,
.editorial-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.editorial-fade-enter-from { opacity: 0; transform: translateY(10px); }
.editorial-fade-leave-to { opacity: 0; transform: translateY(-10px); }

/* Modal */
.modal-enter-active, .modal-leave-active { transition: opacity 0.3s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-active > div, .modal-leave-active > div { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease; }
.modal-enter-from > div { transform: scale(0.95) translateY(20px); opacity: 0; }
.modal-leave-to > div { transform: scale(1.02) translateY(-10px); opacity: 0; }

/* Fullscreen video modal */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>