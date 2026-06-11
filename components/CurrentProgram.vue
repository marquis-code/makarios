<template>
    <div class="min-h-screen bg-gradient-to-br from-orange-100 to-peach-200 p-4">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg border-2 border-red-500 mb-4">
            <span class="text-black font-bold text-xl mr-2">NTA</span>
            <span class="bg-red-500 text-white px-3 py-1 rounded text-lg font-bold mr-2">10</span>
            <span class="text-sm text-gray-600">LAGOS</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-bold text-orange-600 mb-2">The Sunday Show</h1>
          <p class="text-xl text-gray-700">Book Review Special</p>
        </div>
  
        <!-- Main Content Grid -->
        <div class="grid lg:grid-cols-2 gap-8 mb-8">
          <!-- Event Image Section -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="p-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
              <h2 class="text-2xl font-bold mb-2">📸 Event Highlights</h2>
              <p class="opacity-90">Behind the scenes moments</p>
            </div>
            
            <div class="p-6">
              <div class="aspect-video bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <img src="@/assets/img/sunday-show.jpeg" />
                <!-- <div class="text-center text-white">
                  <div class="text-6xl mb-4">🎪</div>
                  <h3 class="text-2xl font-bold">Event Image</h3>
                  <p class="text-sm opacity-90">Replace with your event image</p>
                </div> -->
              </div>
            </div>
          </div>
  
          <!-- Video Section -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="p-6 bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <h2 class="text-2xl font-bold mb-2">🎥 Live Preview</h2>
              <p class="opacity-90">Watch the Sunday Show promo</p>
            </div>
            
            <div class="p-6">
              <div class="aspect-video bg-black rounded-lg overflow-hidden">
                <video 
                  ref="videoPlayer"
                  class="w-full h-full object-cover"
                  controls
                  @error="onVideoError"
                >
                  <source src="/assets/videos/sunday-show.mp4" type="video/mp4">
                  <div class="w-full h-full bg-gray-800 flex items-center justify-center text-white">
                    <div class="text-center">
                      <div class="text-4xl mb-4">📹</div>
                      <p>Video not available</p>
                    </div>
                  </div>
                </video>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Event Details -->
        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <!-- Date & Time -->
          <div class="bg-white rounded-xl shadow-lg p-6 text-center">
            <div class="text-4xl mb-3">📅</div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Date & Time</h3>
            <p class="text-lg font-semibold text-purple-600">August 17th, 2025</p>
            <p class="text-gray-600">1:30 - 2:30 PM</p>
          </div>
  
          <!-- Host -->
          <div class="bg-white rounded-xl shadow-lg p-6 text-center">
            <div class="text-4xl mb-3">👩‍💼</div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Featured Host</h3>
            <p class="text-lg font-semibold text-purple-600">Mrs Lauretta Patrick-Nwachi</p>
            <p class="text-sm text-gray-600">Director, Makarios Initiative</p>
          </div>
  
          <!-- Book Review -->
          <div class="bg-white rounded-xl shadow-lg p-6 text-center">
            <div class="text-4xl mb-3">📚</div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Book Review</h3>
            <p class="text-lg font-semibold text-purple-600">Kika's Examination</p>
            <p class="text-sm text-gray-600">A must-read story</p>
          </div>
        </div>
  
        <!-- Social Media Footer -->
        <div class="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white text-center">
          <h3 class="text-xl font-bold mb-4">Follow Us</h3>
          <div class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div class="flex items-center space-x-2">
              <span class="text-xl">📘</span>
              <span>NTA CH10 Prime Media</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-xl">📺</span>
              <span>nta lagoschannel 10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  const videoPlayer = ref<HTMLVideoElement>()
  
  const onVideoLoad = () => {
    console.log('Video is loading...')
  }
  
  const onVideoError = () => {
    console.log('Video failed to load')
  }
  
  onMounted(() => {
    // Ensure video plays automatically when component mounts
    if (videoPlayer.value) {
      videoPlayer.value.play().catch(err => {
        console.log('Autoplay prevented:', err)
      })
    }
  })
  
  // SEO Meta
  useHead({
    title: 'The Sunday Show - Book Review Special',
    meta: [
      { name: 'description', content: 'Join us for The Sunday Show featuring a book review with Mrs Lauretta Patrick-Nwachi. August 17th, 2025 on NTA Lagos Channel 10.' }
    ]
  })
  </script>
  
  <style scoped>
  .aspect-video {
    aspect-ratio: 16 / 16;
  }
  
  @media (max-width: 768px) {
    .text-6xl { 
      font-size: 3rem; 
    }
  }
  </style>