<template>
  <section class="relative bg-slate-900 pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden text-white font-sans">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-emerald-900/30 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-[-20%] -left-40 w-[40vw] h-[40vw] bg-emerald-800/20 rounded-full blur-[150px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      
      <div class="w-full lg:w-5/12 flex flex-col justify-center animate-fade-in-up">
        <div class="inline-flex items-center gap-3 mb-6">
          <span class="px-4 py-1.5 rounded-full bg-emerald-900/40 border border-emerald-500/20 text-emerald-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            June 25, 2026
          </span>
          <span class="text-sm font-bold text-slate-400 tracking-wider uppercase">Special Initiative</span>
        </div>
        
        <h2 class="text-2xl md:text-3xl font-black tracking-tight leading-[1.1] mb-6 text-white">
          Day of the <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">African Child</span>
        </h2>
        
        <div class="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md mb-8 relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
          <div class="absolute -right-6 -bottom-6 text-6xl opacity-10 font-serif pointer-events-none transition-transform duration-700 group-hover:scale-110">"</div>
          <p class="text-lg md:text-xl text-emerald-50 font-serif leading-relaxed relative z-10">
            "Ensuring universal access to water, sanitation, and hygiene for every child in Africa."
          </p>
        </div>

        <p class="text-base md:text-lg text-slate-400 font-medium mb-8">
          Watch our documentary series highlighting the critical importance of WASH (Water, Sanitation, and Hygiene) resources in African communities and our ongoing commitment to a healthier future.
        </p>

        <div class="flex flex-wrap items-center gap-4">
          <a href="#donate" class="group relative overflow-hidden rounded-xl font-bold text-base px-6 py-3 bg-emerald-500 text-slate-900 hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300 hover:-translate-y-1">
            <span class="relative z-10 flex items-center gap-2">
              Support Our Mission
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </a>
        </div>
      </div>

      <div class="w-full lg:w-7/12 relative">
        <div class="relative">
          
          <div class="absolute -inset-4 bg-gradient-to-r from-emerald-900/0 via-emerald-900/10 to-emerald-900/0 rounded-[3rem] blur-xl -z-10"></div>

          <div class="group relative rounded-3xl overflow-hidden bg-slate-800 shadow-2xl border border-white/10 transform transition-transform duration-500 hover:-translate-y-2">
            <div class="aspect-video lg:aspect-[4/3] relative">
              <video 
                ref="promoVideo"
                class="w-full h-full object-cover cursor-pointer"
                autoplay
                muted
                loop
                playsinline
                preload="auto"
                @ended="handleVideoEnded"
                @click="openModal"
              >
                <source :src="currentVideoSrc" type="video/mp4" />
              </video>

              <!-- Play icon overlay hint -->
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <div class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>

    <!-- Fullscreen Modal -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div 
          v-if="isModalOpen" 
          class="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 md:p-8"
          @click.self="closeModal"
        >
          <!-- Close button -->
          <button 
            @click="closeModal"
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
            playsinline
            @ended="handleModalVideoEnded"
          >
            <source :src="currentVideoSrc" type="video/mp4" />
          </video>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

const promoVideo = ref<HTMLVideoElement | null>(null)
const modalVideo = ref<HTMLVideoElement | null>(null)
const isModalOpen = ref(false)

const videos = [
  '/videos/ensuring-access1.mp4',
  '/videos/ensuring-access2.mp4'
]

const currentVideoIndex = ref(0)
const currentVideoSrc = computed(() => videos[currentVideoIndex.value])

const playVideo = async (el: HTMLVideoElement | null, muted = true) => {
  if (!el) return
  el.muted = muted
  try {
    await el.play()
  } catch (err) {
    console.warn('Autoplay prevented:', err)
  }
}

const handleVideoEnded = () => {
  currentVideoIndex.value = (currentVideoIndex.value + 1) % videos.length
}

const handleModalVideoEnded = () => {
  currentVideoIndex.value = (currentVideoIndex.value + 1) % videos.length
}

// Reload + play the inline preview video when source changes
watch(currentVideoSrc, async (newSrc) => {
  await nextTick()

  const el = promoVideo.value
  if (el) {
    el.load()
    await playVideo(el, true)
  }

  // Keep modal video in sync if open
  if (isModalOpen.value && modalVideo.value) {
    modalVideo.value.load()
    await playVideo(modalVideo.value, false)
  }
})

const openModal = async () => {
  isModalOpen.value = true

  // pause the background preview to avoid double audio/cpu usage
  promoVideo.value?.pause()

  await nextTick()

  const el = modalVideo.value
  if (el) {
    // sync modal video to current source/time
    el.load()
    await playVideo(el, false)
  }

  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  if (modalVideo.value) {
    modalVideo.value.pause()
  }
  isModalOpen.value = false
  document.body.style.overflow = ''

  // resume background preview
  playVideo(promoVideo.value, true)
}

const handleEscKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(async () => {
  await nextTick()
  const el = promoVideo.value
  if (el) {
    el.load()
    await playVideo(el, true)
  }
  window.addEventListener('keydown', handleEscKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscKey)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>