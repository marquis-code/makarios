<template>
    <div class="bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="p-6 md:p-8">
        <h3 class="text-xl font-bold mb-4 text-primary-800">{{ title }}</h3>
        <p class="text-gray-600 mb-6">{{ description }}</p>
        
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium text-gray-700">{{ progress }}% of {{ goal }}</span>
            <span class="text-sm font-medium text-primary-600">{{ raised }} raised</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div class="bg-primary-600 h-2.5 rounded-full" :style="{ width: `${progress}%` }"></div>
          </div>
        </div>
        
        <NuxtLink :to="link" class="btn btn-primary w-full">
          {{ buttonText }}
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
    progress: {
      type: Number,
      default: 0
    },
    goal: {
      type: String,
      default: 'N1,000,000'
    },
    raised: {
      type: String,
      default: 'N0'
    },
    buttonText: {
      type: String,
      default: 'Donate Now'
    },
    link: {
      type: String,
      default: '/donate'
    }
  });
  </script>
  