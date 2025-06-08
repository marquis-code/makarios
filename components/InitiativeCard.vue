<template>
    <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      v-motion :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0 }">
      <div class="relative h-56 overflow-hidden">
        <img :src="image" :alt="title" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div class="p-6">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-500 text-white mb-2">{{ category }}</span>
            <h3 class="text-xl font-bold text-white">{{ title }}</h3>
          </div>
        </div>
      </div>
      <div class="p-6">
        <p class="text-gray-600 mb-4">{{ description }}</p>
        <NuxtLink :to="link" class="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors">
          Learn more
          <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-1" />
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  });
  </script>
  