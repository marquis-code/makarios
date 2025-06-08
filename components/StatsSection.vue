<template>
    <section class="bg-primary-900 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="(stat, index) in stats" :key="index" class="text-center" 
            v-motion :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 } }">
            <div class="text-4xl md:text-5xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-sm md:text-base text-gray-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  defineProps({
    stats: {
      type: Array,
      default: () => [
        { value: '100+', label: 'TBAs Trained' },
        { value: '3+', label: 'States Reached' },
        { value: '8+', label: 'Years of Impact' },
        { value: '1000+', label: 'Lives Improved' }
      ]
    }
  });
  </script>
  