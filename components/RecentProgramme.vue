<template>
  <section class="relative bg-slate-900 pt-24 pb-24 overflow-hidden text-white font-sans border-t border-white/5">
    
    <!-- Background Accents -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-indigo-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-emerald-600/20 rounded-full blur-[150px] mix-blend-screen"></div>
    </div>

    <div class="max-w-[90rem] mx-auto px-6 lg:px-8 relative z-10">
      
      <!-- Header Section -->
      <div class="text-center mb-20 animate-fade-in-up flex flex-col items-center">
        <div class="inline-flex items-center gap-3 mb-6">
          <span class="px-4 py-1.5 rounded-full bg-indigo-900/40 border border-indigo-500/20 text-indigo-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(79,70,229,0.2)]">
            Latest Updates
          </span>
        </div>
        <h3 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
          Recent <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">Programme Highlights</span>
        </h3>
        <p class="text-lg md:text-xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
          Witness the transformative impact of our most recent initiatives. Through engaging imagery and video, explore the moments that define our commitment to community empowerment and sustainable change.
        </p>
      </div>

      <!-- Masonry Grid -->
      <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        <div 
          v-for="(item, index) in mediaItems" 
          :key="index"
          class="break-inside-avoid relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800/40 backdrop-blur-sm hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(79,70,229,0.2)] transition-all duration-500 transform hover:-translate-y-2"
          :style="{ animationDelay: `${(index % 8) * 0.1}s` }"
        >
          <template v-if="item.type === 'video'">
            <div class="relative w-full">
              <video 
                :src="item.src" 
                class="w-full h-auto rounded-3xl block object-cover" 
                playsinline
                muted
                loop
                onmouseover="this.play()"
                onmouseout="this.pause()"
              ></video>
              <!-- Video Overlay & Play Button -->
              <div @click="openModal(item)" class="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 cursor-pointer flex items-center justify-center">
                <div class="w-14 h-14 bg-indigo-600/90 hover:bg-indigo-500 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110 shadow-[0_0_20px_rgba(79,70,229,0.5)] border border-white/20">
                  <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            </div>
          </template>
          
          <template v-else>
            <div @click="openModal(item)" class="cursor-pointer relative overflow-hidden">
              <img 
                :src="item.src" 
                class="w-full h-auto rounded-3xl block object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Recent Programme Highlight" 
                loading="lazy" 
              />
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <!-- Hover Enlarge Icon -->
              <div class="absolute bottom-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 pointer-events-none z-10 shadow-lg">
                <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
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
            class="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
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

            <!-- Media Container -->
            <div class="relative max-w-7xl w-full h-full flex items-center justify-center p-4">
              <template v-if="activeItem.type === 'video'">
                <video
                  :src="activeItem.src"
                  class="max-w-full max-h-full rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] outline-none border border-white/10"
                  controls
                  autoplay
                  playsinline
                ></video>
              </template>
              <template v-else>
                <img 
                  :src="activeItem.src" 
                  class="max-w-full max-h-full rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] object-contain select-none" 
                  alt="Enlarged Highlight"
                />
              </template>
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

const openModal = (item: {type: string, src: string}) => {
  activeItem.value = item
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => { activeItem.value = null }, 300)
  document.body.style.overflow = ''
}

const handleEscKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
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
