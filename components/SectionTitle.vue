<template>
    <div class="text-center mb-12" v-motion :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0 }">
      <h2 class="text-3xl md:text-4xl font-bold mb-4" :class="titleColor">{{ title }}</h2>
      <div v-if="subtitle" class="max-w-3xl mx-auto">
        <p class="text-lg text-gray-600">{{ subtitle }}</p>
      </div>
      <div v-if="$slots.default" class="max-w-3xl mx-auto">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    titleColor: {
      type: String,
      default: 'text-primary-800'
    }
  });
  </script>
  