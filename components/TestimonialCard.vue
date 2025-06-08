<template>
    <div class="bg-white rounded-xl shadow-lg p-6 md:p-8" 
      v-motion :initial="{ opacity: 0, scale: 0.9 }" :enter="{ opacity: 1, scale: 1 }">
      <div class="flex items-center mb-4">
        <div class="text-primary-500">
          <Icon name="heroicons:chat-bubble-bottom-center-text" class="w-10 h-10" />
        </div>
      </div>
      <blockquote class="text-gray-700 mb-6">
        <p class="text-lg italic">{{ quote }}</p>
      </blockquote>
      <div class="flex items-center">
        <div class="mr-4">
          <img :src="image" :alt="name" class="w-12 h-12 rounded-full object-cover" />
        </div>
        <div>
          <div class="font-bold">{{ name }}</div>
          <div class="text-sm text-gray-500">{{ role }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    quote: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: '/placeholder.svg?height=100&width=100'
    }
  });
  </script>
  