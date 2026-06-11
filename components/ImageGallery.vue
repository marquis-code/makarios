<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(image, index) in images" :key="index" 
        class="relative overflow-hidden rounded-lg cursor-pointer group"
        @click="openLightbox(index)"
        v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: index * 100 } }">
        <img :src="image.src" :alt="image.alt" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Icon name="heroicons:magnifying-glass-plus" class="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  
    <!-- Lightbox -->
    <div v-if="lightboxOpen" class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center" @click="closeLightbox">
      <div class="relative max-w-4xl w-full">
        <button @click.stop="prevImage" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
          <Icon name="heroicons:chevron-left" class="w-10 h-10" />
        </button>
        
        <img :src="images[currentImageIndex].src" :alt="images[currentImageIndex].alt" class="w-full h-auto max-h-[80vh] object-contain" />
        
        <button @click.stop="nextImage" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
          <Icon name="heroicons:chevron-right" class="w-10 h-10" />
        </button>
        
        <button @click.stop="closeLightbox" class="absolute top-4 right-4 text-white">
          <Icon name="heroicons:x-mark" class="w-8 h-8" />
        </button>
        
        <div class="absolute bottom-4 left-0 right-0 text-center text-white">
          <p>{{ images[currentImageIndex].alt }}</p>
          <p class="text-sm text-gray-300">{{ currentImageIndex + 1 }} / {{ images.length }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import { Icon } from '@iconify/vue';
  
  const props = defineProps({
    images: {
      type: Array,
      required: true
    }
  });
  
  const lightboxOpen = ref(false);
  const currentImageIndex = ref(0);
  
  function openLightbox(index: number) {
    currentImageIndex.value = index;
    lightboxOpen.value = true;
    document.body.style.overflow = 'hidden';
  }
  
  function closeLightbox() {
    lightboxOpen.value = false;
    document.body.style.overflow = '';
  }
  
  function nextImage(e: Event) {
    e.stopPropagation();
    currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
  }
  
  function prevImage(e: Event) {
    e.stopPropagation();
    currentImageIndex.value = (currentImageIndex.value - 1 + props.images.length) % props.images.length;
  }
  
  // Close lightbox on escape key
  onMounted(() => {
    window.addEventListener('keydown', (e) => {
      if (lightboxOpen.value) {
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowRight') {
          currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
        } else if (e.key === 'ArrowLeft') {
          currentImageIndex.value = (currentImageIndex.value - 1 + props.images.length) % props.images.length;
        }
      }
    });
  });
  
  onUnmounted(() => {
    window.removeEventListener('keydown', () => {});
  });
  </script>
  