<template>
  <div class="min-h-screen bg-white font-body">

    <!-- ─── HERO ─────────────────────────────────────────────── -->
    <section class="bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pb-20">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100">
            <LucideImage :size="13" />
            Moments
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Association
            <span class="text-[#1d4e89]"> Gallery.</span>
          </h1>
          <p class="text-[16px] text-slate-500 leading-relaxed max-w-[540px]">
            Explore highlights from our scientific conferences, events, and training programs across Nigeria.
          </p>
        </div>
      </div>
    </section>


    <!-- ─── FILTERS ──────────────────────────────────────────── -->
    <section class="bg-slate-50 border-b border-slate-100 sticky top-0 z-30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex flex-wrap gap-2">
          <button
            @click="activeCategory = 'all'"
            :class="[
              'px-5 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200',
              activeCategory === 'all'
                ? 'bg-[#1d4e89] text-white'
                : 'bg-white border border-slate-200 text-slate-500 hover:border-blue-200 hover:text-[#1d4e89]'
            ]"
          >
            All memories
          </button>
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              'px-5 py-2 rounded-xl text-[13px] font-semibold transition-all duration-200 capitalize',
              activeCategory === cat
                ? 'bg-[#1d4e89] text-white'
                : 'bg-white border border-slate-200 text-slate-500 hover:border-blue-200 hover:text-[#1d4e89]'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>


    <!-- ─── GALLERY ──────────────────────────────────────────── -->
    <section class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        <!-- Loading -->
        <div v-if="loading" class="flex flex-col items-center justify-center py-24 gap-4">
          <div class="w-8 h-8 border-2 border-blue-700 border-t-transparent rounded-full animate-spin" />
          <p class="text-[13px] font-semibold text-slate-400 tracking-wide">Loading moments...</p>
        </div>

        <!-- Empty -->
        <div
          v-else-if="filteredItems.length === 0"
          class="text-center py-24 bg-slate-50 rounded-2xl border border-slate-200"
        >
          <div class="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
            <LucideImage :size="24" class="text-blue-300" />
          </div>
          <p class="text-[15px] font-semibold text-slate-700 mb-1">No images found</p>
          <p class="text-[13px] text-slate-400">Check back later for new additions to our gallery.</p>
        </div>

        <!-- Masonry grid -->
        <div v-else class="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          <div
            v-for="(item, index) in filteredItems"
            :key="item._id"
            class="group relative bg-slate-100 rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 cursor-pointer break-inside-avoid"
            @click="openLightbox(index)"
          >
            <!-- Image -->
            <img
              :src="item.imageUrl"
              :alt="item.title || 'SCPSC Gallery Image'"
              class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />

            <!-- Hover overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span
                v-if="item.category"
                class="inline-block px-2.5 py-1 bg-white/15 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-widest rounded-lg mb-2 w-fit border border-white/20"
              >
                {{ item.category }}
              </span>
              <h3
                v-if="item.title"
                class="text-white font-semibold text-[15px] leading-snug translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
              >
                {{ item.title }}
              </h3>
            </div>

            <!-- Expand icon -->
            <div class="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-white/60">
              <LucideExpand :size="14" class="text-slate-700" />
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- ─── LIGHTBOX ─────────────────────────────────────────── -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-250 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="lightboxOpen"
          class="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 backdrop-blur-md"
          @click.self="closeLightbox"
        >

          <!-- Close -->
          <button
            @click="closeLightbox"
            class="absolute top-5 right-5 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all z-50"
            aria-label="Close lightbox"
          >
            <LucideX :size="18" />
          </button>

          <!-- Prev -->
          <button
            @click="prevImage"
            class="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all z-50 hidden sm:flex"
            aria-label="Previous image"
          >
            <LucideChevronLeft :size="20" />
          </button>

          <!-- Next -->
          <button
            @click="nextImage"
            class="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all z-50 hidden sm:flex"
            aria-label="Next image"
          >
            <LucideChevronRight :size="20" />
          </button>

          <!-- Image + caption -->
          <div
            v-if="currentLightboxItem"
            class="relative max-w-5xl w-full mx-auto px-4 sm:px-16 lg:px-24 flex flex-col items-center"
          >
            <img
              :src="currentLightboxItem.imageUrl"
              :alt="currentLightboxItem.title || 'Gallery image'"
              class="max-h-[78vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
            />

            <div class="text-center mt-5 max-w-xl">
              <span
                v-if="currentLightboxItem.category"
                class="inline-block px-3 py-1 bg-white/10 border border-white/10 text-white/80 text-[11px] font-semibold uppercase tracking-widest rounded-lg mb-2"
              >
                {{ currentLightboxItem.category }}
              </span>
              <h2
                v-if="currentLightboxItem.title"
                class="text-[17px] font-semibold text-white leading-snug"
              >
                {{ currentLightboxItem.title }}
              </h2>
              <p class="text-white/30 text-[12px] font-medium mt-2 tracking-widest uppercase">
                {{ currentImageIndex + 1 }} / {{ filteredItems.length }}
              </p>
            </div>
          </div>

        </div>
      </Transition>
    </Teleport>

  </div>
</template>


<script setup>
import {
  LucideImage,
  LucideExpand,
  LucideX,
  LucideChevronLeft,
  LucideChevronRight,
} from 'lucide-vue-next'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useGallery } from '@/composables/useGallery'

definePageMeta({ layout: 'default' })

const { loading, items, fetchPublicGallery } = useGallery()

const activeCategory  = ref('all')
const lightboxOpen    = ref(false)
const currentImageIndex = ref(0)

const categories = computed(() => {
  const cats = new Set(items.value.map(item => item.category).filter(Boolean))
  return Array.from(cats).sort()
})

const filteredItems = computed(() =>
  activeCategory.value === 'all'
    ? items.value
    : items.value.filter(item => item.category === activeCategory.value)
)

const currentLightboxItem = computed(() =>
  filteredItems.value[currentImageIndex.value]
)

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
  currentImageIndex.value =
    currentImageIndex.value < filteredItems.value.length - 1
      ? currentImageIndex.value + 1
      : 0
}

const prevImage = () => {
  currentImageIndex.value =
    currentImageIndex.value > 0
      ? currentImageIndex.value - 1
      : filteredItems.value.length - 1
}

const handleKeydown = (e) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape')      closeLightbox()
  if (e.key === 'ArrowRight')  nextImage()
  if (e.key === 'ArrowLeft')   prevImage()
}

onMounted(() => {
  fetchPublicGallery()
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>


<style scoped>
.font-body {
  font-family: 'DM Sans', 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
}
.break-inside-avoid {
  break-inside: avoid;
}
</style>