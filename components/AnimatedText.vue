<template>
    <div class="animated-text-container" ref="containerRef">
      <span 
        v-for="(char, index) in characters" 
        :key="index" 
        class="animated-char"
        :style="{ 
          '--delay': `${index * 0.03}s`,
          '--color': color
        }"
      >
        {{ char }}
      </span>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { useIntersectionObserver } from '@vueuse/core'
  
  const props = defineProps<{
    text: string
    color?: string
  }>()
  
  const characters = computed(() => props.text.split(''))
  const containerRef = ref<HTMLElement | null>(null)
  
  onMounted(() => {
    if (containerRef.value) {
      useIntersectionObserver(
        containerRef,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            containerRef.value?.classList.add('animate')
          }
        },
        { threshold: 0.3 }
      )
    }
  })
  </script>
  
  <style scoped>
  .animated-text-container {
    display: inline-block;
  }
  
  .animated-char {
    display: inline-block;
    opacity: 0;
    transform: translateY(20px);
    color: var(--color, inherit);
    transition: opacity 0.3s ease, transform 0.3s ease;
    transition-delay: var(--delay);
  }
  
  .animate .animated-char {
    opacity: 1;
    transform: translateY(0);
  }
  </style>
  
  