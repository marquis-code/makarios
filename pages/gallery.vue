<template>
  <main class="min-h-screen bg-slate-50 pt-24 pb-20">
    <!-- Header Section -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
      <div class="inline-flex items-center justify-center space-x-2 bg-blue-50/80 px-4 py-2 rounded-full mb-6 border border-blue-100">
        <div class="w-2 h-2 rounded-full bg-[#003366] animate-pulse"></div>
        <span class="text-sm font-bold text-[#003366] tracking-widest uppercase">Moments</span>
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
        Association <span class="text-[#003366]">Gallery</span>
      </h1>
      <p class="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
        Explore highlights from our scientific conferences, events, and training programs across Nigeria.
      </p>
    </section>

    <!-- Filters -->
    <div class="max-w-7xl mx-auto px-6 lg:px-8 mb-12 flex flex-wrap justify-center gap-3">
      <button 
        @click="activeCategory = 'all'"
        :class="['px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300', activeCategory === 'all' ? 'bg-[#003366] text-white shadow-md shadow-[#003366]/20' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200']"
      >
        All Memories
      </button>
      <button 
        v-for="cat in categories" 
        :key="cat"
        @click="activeCategory = cat"
        :class="['px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 capitalize', activeCategory === cat ? 'bg-[#003366] text-white shadow-md shadow-[#003366]/20' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200']"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Gallery Masonry -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8">
      <div v-if="loading" class="flex flex-col items-center justify-center py-24 gap-4">
        <div class="w-12 h-12 border-4 border-slate-200 border-t-[#003366] rounded-full animate-spin"></div>
        <p class="text-sm font-bold text-slate-500 uppercase tracking-widest">Loading Moments...</p>
      </div>
      
      <div v-else-if="filteredItems.length === 0" class="text-center py-32 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
        <Icon name="lucide:image" size="48" class="text-slate-300 mx-auto mb-4" />
        <h3 class="text-xl font-bold text-slate-800 mb-2">No Images Found</h3>
        <p class="text-slate-500">Check back later for new additions to our gallery.</p>
      </div>

      <!-- CSS Columns Masonry -->
      <div v-else class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <div 
          v-for="(item, index) in filteredItems" 
          :key="item._id"
          class="group relative bg-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer break-inside-avoid"
          @click="openLightbox(index)"
        >
          <!-- Image -->
          <img 
            :src="item.imageUrl" 
            :alt="item.title || 'SCPSN Gallery Image'"
            class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span class="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-lg mb-2 w-fit">
              {{ item.category }}
            </span>
            <h3 v-if="item.title" class="text-white font-bold text-lg leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-md">
              {{ item.title }}
            </h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="lightboxOpen" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl">
          <!-- Close Button -->
          <button @click="closeLightbox" class="absolute top-6 right-6 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50 focus:outline-none focus:ring-2 focus:ring-white/20">
            <Icon name="lucide:x" size="28" />
          </button>
          
          <!-- Navigation -->
          <button @click="prevImage" class="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50 hidden sm:block focus:outline-none focus:ring-2 focus:ring-white/20">
            <Icon name="lucide:chevron-left" size="32" />
          </button>
          <button @click="nextImage" class="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50 hidden sm:block focus:outline-none focus:ring-2 focus:ring-white/20">
            <Icon name="lucide:chevron-right" size="32" />
          </button>

          <!-- Content -->
          <div v-if="currentLightboxItem" class="relative max-w-6xl w-full mx-auto px-4 lg:px-24 flex flex-col items-center">
            <img 
              :src="currentLightboxItem.imageUrl" 
              :alt="currentLightboxItem.title || 'Gallery Image'"
              class="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
            />
            
            <div class="text-center mt-6 max-w-2xl">
              <span class="inline-block px-3 py-1 bg-white/10 text-white text-sm font-bold uppercase tracking-widest rounded-full mb-3">
                {{ currentLightboxItem.category }}
              </span>
              <h2 v-if="currentLightboxItem.title" class="text-2xl font-bold text-white">{{ currentLightboxItem.title }}</h2>
              <p class="text-white/50 text-sm mt-3 font-medium tracking-widest uppercase">
                {{ currentImageIndex + 1 }} / {{ filteredItems.length }}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useGallery } from '@/composables/useGallery'

definePageMeta({
  layout: 'default'
})

const { loading, items, fetchPublicGallery } = useGallery()

const activeCategory = ref('all')
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

const categories = computed(() => {
  const cats = new Set(items.value.map(item => item.category))
  return Array.from(cats).sort()
})

const filteredItems = computed(() => {
  if (activeCategory.value === 'all') return items.value
  return items.value.filter(item => item.category === activeCategory.value)
})

const currentLightboxItem = computed(() => {
  return filteredItems.value[currentImageIndex.value]
})

onMounted(() => {
  fetchPublicGallery()
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

const openLightbox = (index) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  if (currentImageIndex.value < filteredItems.value.length - 1) {
    currentImageIndex.value++
  } else {
    currentImageIndex.value = 0
  }
}

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  } else {
    currentImageIndex.value = filteredItems.value.length - 1
  }
}

const handleKeydown = (e) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}
</script>

<style scoped>
/* Smooth rendering for masonry items */
.break-inside-avoid {
  break-inside: avoid;
}
::selection {
  background: #003366;
  color: white;
}
</style>
