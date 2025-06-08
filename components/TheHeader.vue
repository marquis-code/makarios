<template>
  <header ref="headerRef" class="sticky top-0 z-50 bg-white shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <img src="@/assets/img/logo.png" alt="MAKARIOS Initiative Logo" class="h-10" />
          <div>
            <h1 class="text-xl font-bold text-primary-800">MAKARIOS</h1>
            <p class="text-xs text-gray-600">Initiative</p>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path" 
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            active-class="text-primary-600 font-bold">
            {{ item.name }}
          </NuxtLink>
          <NuxtLink to="/donate" class="btn btn-primary">
            Donate Now
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-gray-700">
          <Icon v-if="!isMenuOpen" name="heroicons:bars-3" class="w-6 h-6" />
          <Icon v-else name="heroicons:x-mark" class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isMenuOpen" class="md:hidden bg-white shadow-lg">
      <div class="container mx-auto px-4 py-4">
        <nav class="flex flex-col space-y-4">
          <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path" 
            class="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
            active-class="text-primary-600 font-bold"
            @click="isMenuOpen = false">
            {{ item.name }}
          </NuxtLink>
          <NuxtLink to="/donate" class="btn btn-primary w-full text-center" @click="isMenuOpen = false">
            Donate Now
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { onClickOutside, useWindowSize } from '@vueuse/core';

const isMenuOpen = ref(false);
const headerRef = ref<HTMLElement>();

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Initiatives', path: '/initiatives' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

// Close mobile menu when clicking outside
const onClickOutsideHandler = () => {
  isMenuOpen.value = false;
};

onClickOutside(headerRef, onClickOutsideHandler);

// Close mobile menu when window is resized to desktop size
const { width } = useWindowSize();
watch(width, (newWidth) => {
  if (newWidth >= 768) {
    isMenuOpen.value = false;
  }
});
</script>