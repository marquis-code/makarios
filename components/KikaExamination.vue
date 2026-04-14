<template>
  <div class="relative bg-slate-50 py-24 sm:py-32 overflow-hidden">
    <!-- Subtle Background Element -->
    <div class="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#3a75a4] to-[#4ade80] opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-base font-semibold leading-7 text-[#3a75a4] uppercase tracking-widest">Educational Resource</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Kika's Examination</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          A compelling narrative designed to instill moral courage and academic integrity in the next generation.
        </p>
      </div>

      <!-- Book Hero Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <!-- Book Cover -->
        <div class="relative group max-w-md mx-auto lg:mx-0">
          <div class="aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1">
            <img 
              src="@/assets/img/book-cover.jpeg" 
              alt="Kika's Examination" 
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Pricing Badge -->
          <div class="absolute -bottom-6 -right-6 bg-emerald-600 text-white px-8 py-3 rounded-full font-bold shadow-xl border-4 border-white">
            ₦5,000 per copy
          </div>
        </div>

        <!-- Book Info -->
        <div class="flex flex-col justify-center">
          <h3 class="text-3xl font-bold text-gray-900 mb-6">Building Moral Resilience</h3>
          <p class="text-lg text-gray-600 leading-relaxed mb-8">
            Based on a true-life story, "Kika's Examination" follows a young girl's journey to stand firm against examination malpractice. It is an essential tool for parents and educators to discuss values and the importance of honest achievement.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="(benefit, index) in benefits" :key="index" class="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
              <span class="text-2xl">{{ benefit.icon }}</span>
              <div>
                <h4 class="font-bold text-gray-900 text-sm">{{ benefit.title }}</h4>
                <p class="text-gray-500 text-xs mt-1">{{ benefit.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Video Gallery -->
      <div class="mb-24">
        <div class="text-center mb-12">
          <h3 class="text-2xl font-bold text-gray-900">Voices of Impact</h3>
          <p class="text-gray-500 mt-2">Hear from students and educators transformed by the message.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(video, index) in videoTestimonials.slice(0, 3)" :key="index" class="group relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-lg cursor-pointer" @click="openVideo(video)">
            <img :src="video.poster" class="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 flex items-center justify-center">
              <Play class="w-12 h-12 text-white/90 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>

      <!-- Distribution Gallery -->
      <div>
        <div class="text-center mb-12">
          <h3 class="text-2xl font-bold text-gray-900">Distribution Gallery</h3>
          <p class="text-gray-500 mt-2">Reaching schools and communities across the region.</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div v-for="(img, index) in distributionImages" :key="index" class="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <img :src="img" class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </div>

    <!-- Video Modal -->
    <Transition name="fade">
      <div v-if="selectedVideo" class="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/95 backdrop-blur-sm" @click="selectedVideo = null">
        <div class="relative max-w-4xl w-full" @click.stop>
          <div class="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <video :src="selectedVideo.src" id="modal-video" controls autoplay class="w-full h-full"></video>
          </div>
          <button @click="selectedVideo = null" class="absolute -top-12 right-0 text-white">
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
import bookCover from "@/assets/img/book-cover.jpeg"
import kika1 from "@/assets/img/kika/kika1.jpeg"
import kika2 from "@/assets/img/kika/kika2.jpeg"
import kika3 from "@/assets/img/kika/kika3.jpeg"
import kika4 from "@/assets/img/kika/kika4.jpeg"
import kika5 from "@/assets/img/kika/kika5.jpeg"
import kika6 from "@/assets/img/kika/kika6.jpeg"
import kika7 from "@/assets/img/kika/kika7.jpeg"
import kika8 from "@/assets/img/kika/kika8.jpeg"
import kika9 from "@/assets/img/kika/kika9.jpeg"
import kika10 from "@/assets/img/kika/kika10.jpeg"
import kika11 from "@/assets/img/kika/kika11.jpeg"
import kika12 from "@/assets/img/kika/kika12.jpeg"

import video1 from "@/assets/videos/kika/book/kika-examination1.mp4"
import video2 from "@/assets/videos/kika/book/kika-examination2.mp4"
import video3 from "@/assets/videos/kika/book/kika-examination3.mp4"

const selectedVideo = ref<any>(null)

const benefits = [
  { icon: '🛡️', title: 'Moral Resilience', desc: 'Help children stand against unethical academic practices.' },
  { icon: '🎓', title: 'Academic Success', desc: 'Inspired by a true story of excellence through hard work.' },
  { icon: '🤝', title: 'Better Society', desc: 'Building a culture of integrity from the grassroots.' },
  { icon: '🏠', title: 'Family Values', desc: 'Perfect for shared reading and family discussions.' }
]

const videoTestimonials = [
  { src: video1, poster: bookCover, title: "Student Impact" },
  { src: video2, poster: bookCover, title: "Educator Perspective" },
  { src: video3, poster: bookCover, title: "Community Launch" }
]

const distributionImages = [kika1, kika2, kika3, kika4, kika5, kika6, kika7, kika8, kika9, kika10, kika11, kika12]

const openVideo = (video: any) => selectedVideo.value = video
</script>

<style scoped>
.tracking-widest {
  letter-spacing: 0.2em;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
