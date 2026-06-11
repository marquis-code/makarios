<template>
    <section class="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <img :src="backgroundImage" alt="Hero Background" class="w-full h-full object-cover" />
      </div>
      
      <div class="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div class="max-w-3xl" v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">{{ title }}</h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-100">{{ subtitle }}</p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink :to="primaryButtonLink" class="btn btn-secondary">
              {{ primaryButtonText }}
            </NuxtLink>
            <NuxtLink :to="secondaryButtonLink" class="btn bg-white text-primary-800 hover:bg-gray-100">
              {{ secondaryButtonText }}
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full h-auto">
          <path fill="#ffffff" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  defineProps({
    backgroundImage: {
      type: String,
      default: '/images/hero-bg.jpg'
    },
    title: {
      type: String,
      default: 'Improving Lives Through Health & Humanitarian Projects'
    },
    subtitle: {
      type: String,
      default: 'MAKARIOS Initiative is dedicated to improving health outcomes and empowering communities through sustainable development programs.'
    },
    primaryButtonText: {
      type: String,
      default: 'Our Initiatives'
    },
    primaryButtonLink: {
      type: String,
      default: '/initiatives'
    },
    secondaryButtonText: {
      type: String,
      default: 'Donate Now'
    },
    secondaryButtonLink: {
      type: String,
      default: '/donate'
    }
  });
  </script>
  