<template>
  <section id="recent-programme" class="relative bg-slate-50 pt-24 pb-24 overflow-hidden font-sans border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      
      <!-- Header Section -->
      <div class="text-center mb-16 animate-fade-in-up flex flex-col items-center">
        <div class="inline-flex items-center gap-3 mb-6">
          <span class="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase shadow-sm">
            Latest Updates
          </span>
        </div>
        <h3 class="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
          Recent <span class="text-primary">Programme Highlights</span>
        </h3>
        <p class="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Witness the transformative impact of our most recent initiatives. Through engaging imagery and video, explore the moments that define our commitment to community empowerment and sustainable change.
        </p>
      </div>

      <!-- Grid / Carousel Layout -->
      <div class="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 sm:mx-0 sm:px-0 scrollbar-hide">
        <div 
          v-for="(item, index) in mediaItems" 
          :key="index"
          class="flex-none w-[85vw] sm:w-auto snap-center relative group rounded-xl overflow-hidden bg-white transition-all duration-500 transform hover:-translate-y-1 shadow-md hover:shadow-xl border border-slate-100"
          :style="{ animationDelay: `${(index % 6) * 0.1}s` }"
        >
          <template v-if="item.type === 'video'">
            <div class="relative w-full">
              <video 
                :src="item.src" 
                class="w-full aspect-video rounded-xl block object-cover" 
                playsinline
                muted
                loop
                onmouseover="this.play()"
                onmouseout="this.pause()"
              ></video>
              <!-- Video Overlay & Play Button -->
              <div @click="openModal(item, index)" class="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 cursor-pointer flex items-center justify-center">
                <div class="w-16 h-16 bg-primary hover:bg-primary-dark rounded-full flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110 shadow-lg border border-white/20">
                  <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            </div>
          </template>
          
          <template v-else>
            <div @click="openModal(item, index)" class="cursor-pointer relative overflow-hidden">
              <img 
                :src="item.src" 
                class="w-full aspect-video rounded-xl block object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Recent Programme Highlight" 
                loading="lazy" 
              />
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-opacity duration-500 pointer-events-none"></div>
              
              <!-- Hover Enlarge Icon -->
              <div class="absolute bottom-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 pointer-events-none z-10 shadow-lg">
                <svg class="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Fullscreen Modal -->
    <ClientOnly>
      <Teleport to="body">
        <Transition name="modal-fade">
          <div 
            v-if="isModalOpen && activeItem" 
            class="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            @click.self="closeModal"
          >
            <!-- Close button -->
            <button 
              @click="closeModal"
              class="absolute top-4 right-4 md:top-8 md:right-8 z-50 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300 text-white hover:rotate-90"
              aria-label="Close"
            >
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Navigation Arrows -->
            <button 
              @click.stop="prevItem"
              class="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300 text-white"
              aria-label="Previous"
            >
              <svg class="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              @click.stop="nextItem"
              class="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300 text-white"
              aria-label="Next"
            >
              <svg class="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <!-- Media Container -->
            <div class="relative max-w-5xl w-full h-full flex flex-col items-center justify-center p-4">
              <template v-if="activeItem.type === 'video'">
                <video
                  ref="modalVideoRef"
                  :src="activeItem.src"
                  class="max-w-full max-h-full rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] outline-none border border-white/10"
                  controls
                  autoplay
                  playsinline
                  @loadedmetadata="restoreVideoTime"
                ></video>
              </template>
              <template v-else>
                <img 
                  :src="activeItem.src" 
                  class="max-w-full max-h-full rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] object-contain select-none" 
                  alt="Enlarged Highlight"
                />
              </template>
              
              <!-- Counter -->
              <div v-if="activeIndex !== null" class="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm font-semibold tracking-widest bg-black/50 backdrop-blur-md py-2 px-6 rounded-full mx-auto w-max">
                {{ activeIndex + 1 }} / {{ mediaItems.length }}
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Generate media items based on directory contents
const mediaItems = Array.from({ length: 29 }, (_, i) => ({
  type: 'image',
  src: `/recent/recent${i + 1}.jpeg`
})).concat(
  Array.from({ length: 4 }, (_, i) => ({
    type: 'video',
    src: `/recent/recent${30 + i}.mp4`
  }))
)

const isModalOpen = ref(false)
const activeItem = ref<{type: string, src: string} | null>(null)
const activeIndex = ref<number | null>(null)
const modalVideoRef = ref<HTMLVideoElement | null>(null)
const savedVideoTimes = ref<Record<string, number>>({})

const saveVideoTime = () => {
  if (activeItem.value?.type === 'video' && modalVideoRef.value) {
    savedVideoTimes.value[activeItem.value.src] = modalVideoRef.value.currentTime
    modalVideoRef.value.pause()
  }
}

const restoreVideoTime = (e: Event) => {
  const video = e.target as HTMLVideoElement
  if (activeItem.value && savedVideoTimes.value[activeItem.value.src]) {
    video.currentTime = savedVideoTimes.value[activeItem.value.src]
  }
}

const openModal = (item: {type: string, src: string}, index: number) => {
  activeItem.value = item
  activeIndex.value = index
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  saveVideoTime()
  isModalOpen.value = false
  setTimeout(() => { 
    activeItem.value = null
    activeIndex.value = null
  }, 300)
  document.body.style.overflow = ''
}

const nextItem = (e: Event) => {
  e?.stopPropagation();
  saveVideoTime()
  if (activeIndex.value !== null) {
    activeIndex.value = (activeIndex.value + 1) % mediaItems.length;
    activeItem.value = mediaItems[activeIndex.value];
  }
}

const prevItem = (e: Event) => {
  e?.stopPropagation();
  saveVideoTime()
  if (activeIndex.value !== null) {
    activeIndex.value = (activeIndex.value - 1 + mediaItems.length) % mediaItems.length;
    activeItem.value = mediaItems[activeIndex.value];
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (isModalOpen.value) {
    if (e.key === 'Escape') {
      closeModal()
    } else if (e.key === 'ArrowRight') {
      nextItem(e as any)
    } else if (e.key === 'ArrowLeft') {
      prevItem(e as any)
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

<style scoped>
.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .rounded-2xl,
.modal-fade-leave-active .rounded-2xl {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-fade-enter-from .rounded-2xl,
.modal-fade-leave-to .rounded-2xl {
  transform: scale(0.95);
}
</style>
