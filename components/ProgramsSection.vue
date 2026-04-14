<template>
  <div class="bg-white py-24 sm:py-32 overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-base font-semibold leading-7 text-[#3a75a4] uppercase tracking-widest">Recent Milestone</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">IDAC 2025 Book Launch</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          A successful gathering of educators, community leaders, and advocates celebrating the official launch of "Kika's Examination".
        </p>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        <div v-for="(stat, index) in eventStats" :key="index" class="flex flex-col items-center p-6 bg-slate-50 rounded-2xl">
          <dt class="text-sm font-medium text-gray-500">{{ stat.label }}</dt>
          <dd class="text-3xl font-bold text-[#3a75a4] tracking-tight">{{ stat.value }}</dd>
        </div>
      </div>

      <!-- Video Highlight -->
      <div class="mb-24">
        <div class="relative group aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
          <video 
            ref="videoPlayer"
            class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            controls
            poster="@/assets/img/cover-image.jpeg"
          >
            <source :src="videoLunch1" type="video/mp4">
          </video>
          <div v-if="!isVideoPlaying" class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
              <Play class="w-10 h-10 text-white fill-current" />
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery Highlights -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          v-for="(image, index) in galleryHighlights" 
          :key="index"
          class="relative group aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
          @click="openImageModal(image)"
        >
          <img 
            :src="image.url" 
            :alt="image.caption" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p class="text-white text-xs font-medium">{{ image.caption }}</p>
          </div>
        </div>
      </div>

      <!-- Secondary Videos -->
      <div class="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(video, index) in secondaryVideos" 
          :key="index"
          class="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300 cursor-pointer group"
          @click="openVideoModal(video)"
        >
          <div class="relative w-full sm:w-48 aspect-video rounded-xl overflow-hidden shadow-sm bg-gray-100 flex-shrink-0">
             <img src="@/assets/img/cover-image.jpeg" class="w-full h-full object-cover" />
            <div class="absolute inset-0 flex items-center justify-center">
              <Play class="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-300" />
            </div>
          </div>
          <div>
            <h3 class="text-lg font-bold text-gray-900 mb-2 truncate">{{ video.title }}</h3>
            <p class="text-sm text-gray-500 line-clamp-2">{{ video.description }}</p>
            <span class="mt-4 inline-flex items-center text-xs font-semibold text-[#3a75a4]">
              Watch Video <span class="ml-1">→</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <Transition name="fade">
      <div v-if="selectedImage" class="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/95 backdrop-blur-sm" @click="selectedImage = null">
        <div class="relative max-w-4xl w-full" @click.stop>
          <img :src="selectedImage.url" class="w-full h-auto rounded-2xl shadow-2xl" />
          <p class="mt-4 text-center text-white font-medium">{{ selectedImage.caption }}</p>
          <button @click="selectedImage = null" class="absolute -top-12 right-0 text-white hover:text-gray-300">
            <X class="w-8 h-8" />
          </button>
        </div>
      </div>
    </Transition>

    <Transition name="fade">
      <div v-if="selectedVideo" class="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/95 backdrop-blur-sm" @click="selectedVideo = null">
        <div class="relative max-w-4xl w-full" @click.stop>
          <div class="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <video :src="selectedVideo.url" controls autoplay class="w-full h-full"></video>
          </div>
          <p class="mt-4 text-center text-white font-medium">{{ selectedVideo.title }}</p>
          <button @click="selectedVideo = null" class="absolute -top-12 right-0 text-white hover:text-gray-300">
            <X class="w-8 h-8" />
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Play, X } from 'lucide-vue-next'

// Assets
import content1 from "@/assets/img/kika-lunch1.jpeg";
import content2 from "@/assets/img/kika-lunch2.jpeg";
import content3 from "@/assets/img/kika-lunch3.jpeg";
import content4 from "@/assets/img/kika-lunch4.jpeg";
import content5 from "@/assets/img/kika-lunch5.jpeg";
import content6 from "@/assets/img/kika-lunch6.jpeg";
import content7 from "@/assets/img/kika-lunch7.jpeg";
import content8 from "@/assets/img/kika-lunch8.jpeg";

import videoLunch1 from "@/assets/videos/book-lunch/kika-video1.mp4"
import videoLunch2 from "@/assets/videos/book-lunch/kika-video2.mp4"
import videoLunch3 from "@/assets/videos/book-lunch/kika-video3.mp4"
import videoLunch4 from "@/assets/videos/book-lunch/kika-video5.mp4"

const videoPlayer = ref<HTMLVideoElement>()
const isVideoPlaying = ref(false)
const selectedImage = ref<any>(null)
const selectedVideo = ref<any>(null)

const eventStats = [
  { label: 'Event Theme', value: 'IDAC 2025' },
  { label: 'Attendees', value: '1,300+' },
  { label: 'Guest Speakers', value: '9' },
  { label: 'Status', value: 'Successful' }
]

const galleryHighlights = [
  { url: content1, caption: "Distinguished guests at the opening ceremony." },
  { url: content2, caption: "Keynote address by Dr Cosmas Maduka CON." },
  { url: content3, caption: "Unveiling the official book copies." },
  { url: content4, caption: "Panel discussion on academic integrity." },
  { url: content5, caption: "Interactive Q&A session with attendees." },
  { url: content6, caption: "Awarding outstanding young leaders." },
  { url: content7, caption: "Group photo with organizers and speakers." },
  { url: content8, caption: "Networking with community stakeholders." }
]

const secondaryVideos = [
  { 
    title: "Keynote Highlights", 
    description: "Crucial insights from our guest speakers on children's moral education.",
    url: videoLunch2
  },
  { 
    title: "Official Presentation", 
    description: "The moment 'Kika's Examination' was introduced to our educational partners.",
    url: videoLunch3
  }
]

const openImageModal = (image: any) => selectedImage.value = image
const openVideoModal = (video: any) => selectedVideo.value = video
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.tracking-widest {
  letter-spacing: 0.2em;
}
</style>
