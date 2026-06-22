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
    <ClientOnly>
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

        <!-- Gallery Fullscreen Modal -->
        <Transition name="modal-fade">
          <div 
            v-if="isGalleryModalOpen && activeGalleryItem" 
            class="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 md:p-8"
            @click.self="closeGalleryModal"
          >
            <button 
              @click="closeGalleryModal"
              class="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 transition-colors duration-200 text-white"
            >
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <template v-if="activeGalleryItem.type === 'video'">
              <video
                :src="activeGalleryItem.src"
                class="max-w-full max-h-full w-full md:w-auto rounded-xl shadow-2xl"
                controls
                autoplay
                playsinline
              ></video>
            </template>
            <template v-else>
              <img 
                :src="activeGalleryItem.src" 
                class="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain" 
                alt="Enlarged Asset"
              />
            </template>
          </div>
        </Transition>
      </Teleport>
    </ClientOnly>

    <!-- IDAC 2026 Programme Fliers Masonry -->
    <div class="mt-24 lg:mt-32 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16 animate-fade-in-up" style="animation-delay: 0.2s">
        <h3 class="text-3xl md:text-5xl font-black text-white mb-6">IDAC 2026 <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Campaign</span></h3>
        <p class="text-lg text-slate-400 font-medium max-w-2xl mx-auto">Explore our official programme banners and visual campaigns driving the change for the International Day of the African Child.</p>
      </div>
      
      <!-- CSS Masonry Grid -->
      <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        
        <div 
          v-for="(item, index) in galleryItems" 
          :key="index"
          class="break-inside-avoid relative group rounded-[2rem] overflow-hidden shadow-xl border border-white/5 bg-slate-800/50 hover:border-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1"
        >
          <template v-if="item.type === 'video'">
            <video 
              :src="item.src" 
              class="w-full h-auto rounded-[2rem] block" 
              controls
              playsinline
            ></video>
            <!-- Enlarge Button for Video -->
            <button 
              @click="openGalleryModal(item)"
              class="absolute top-4 right-4 w-10 h-10 bg-black/70 hover:bg-black/90 backdrop-blur-md rounded-full flex items-center justify-center transition-all z-10 shadow-lg border border-white/20"
              title="Enlarge Video"
            >
              <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
            </button>
          </template>
          
          <template v-else>
            <div @click="openGalleryModal(item)" class="cursor-pointer">
              <img :src="item.src" class="w-full h-auto rounded-[2rem] block" alt="IDAC Campaign Asset" />
              <div class="absolute inset-0 bg-emerald-900/40 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <!-- Enlarge icon -->
              <div class="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
              </div>
            </div>
          </template>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

import idac1 from '@/assets/img/idac1.jpeg'
import idac2 from '@/assets/img/idac2.jpeg'
import idac3 from '@/assets/img/idac3.jpeg'
import idac4 from '@/assets/img/idac4.jpeg'
import idac5 from '@/assets/img/idac5.jpeg'
import idac6 from '@/assets/img/idac6.jpeg'
import idac7 from '@/assets/img/idac7.jpeg'
import idac8 from '@/assets/img/idac8.jpeg'
import idac9 from '@/assets/img/idac9.mp4'

const promoVideo = ref<HTMLVideoElement | null>(null)
const modalVideo = ref<HTMLVideoElement | null>(null)
const isModalOpen = ref(false)

const videos = [
  '/videos/ensuring-access1.mp4',
  '/videos/ensuring-access2.mp4'
]

const currentVideoIndex = ref(0)
const currentVideoSrc = computed(() => videos[currentVideoIndex.value])

// Gallery State
const galleryItems = [
  { type: 'video', src: idac9 },
  { type: 'image', src: idac1 },
  { type: 'image', src: idac2 },
  { type: 'image', src: idac3 },
  { type: 'image', src: idac4 },
  { type: 'image', src: idac5 },
  { type: 'image', src: idac6 },
  { type: 'image', src: idac7 },
  { type: 'image', src: idac8 },
]

const isGalleryModalOpen = ref(false)
const activeGalleryItem = ref<{type: string, src: string} | null>(null)

const openGalleryModal = (item: {type: string, src: string}) => {
  activeGalleryItem.value = item
  isGalleryModalOpen.value = true
  document.body.style.overflow = 'hidden'
  promoVideo.value?.pause() // pause main hero video
}

const closeGalleryModal = () => {
  isGalleryModalOpen.value = false
  setTimeout(() => { activeGalleryItem.value = null }, 300)
  document.body.style.overflow = ''
  playVideo(promoVideo.value, true) // resume main hero video
}


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
  if (e.key === 'Escape') {
    if (isModalOpen.value) closeModal()
    if (isGalleryModalOpen.value) closeGalleryModal()
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