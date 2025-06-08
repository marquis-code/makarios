<template>
  <header 
    class="fixed inset-x-0 top-0 z-50 bg-white transition-all duration-500" 
    :class="{ 'shadow-lg': scrolled }"
  >
    <nav class="container mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
      <!-- Logo on the left -->
      <div class="flex items-center">
        <NuxtLink to="/" class="logo-container relative group">
          <div class="logo-wrapper overflow-hidden rounded-full relative">
            <img 
              src="@/assets/img/logo.jpeg" 
              class="h-12 w-12 lg:h-16 lg:w-16 object-cover transition-all duration-500 transform group-hover:scale-110" 
              :class="{ 'h-10 w-10 lg:h-14 lg:w-14': scrolled }"
              alt="Logo"
            />
            <div class="absolute inset-0 bg-olg-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </div>
          <div class="logo-pulse absolute inset-0 rounded-full border-2 border-olg-green opacity-0 group-hover:opacity-100"></div>
        </NuxtLink>
      </div>

      <!-- Desktop navigation items in the center -->
      <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
        <div class="flex space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name" 
            :to="item.path" 
            class="nav-link text-base font-semibold text-olg-blue hover:text-olg-green relative overflow-hidden group py-2"
            :class="{ 'active-link text-olg-green': isActive(item.path) }"
          >
            <span class="nav-text relative block">{{ item.name }}</span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-olg-green transform transition-transform duration-300" 
                  :class="isActive(item.path) ? 'translate-y-0' : 'translate-y-1 group-hover:translate-y-0'"></span>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Programs button on the right -->
      <div class="hidden lg:flex lg:items-center">
        <a 
          href="#kika" 
          class="cta-button text-base font-semibold text-white bg-olg-blue px-6 py-3 rounded-md hover:bg-olg-green transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
          :class="{ 'bg-olg-green': isActive('/programs') }"
        >
          <span class="relative z-10">Kika's Examination</span>
          <span class="arrow-icon inline-block transition-all duration-300 group-hover:translate-x-1 relative z-10" aria-hidden="true">&rarr;</span>
          <span class="absolute inset-0 bg-olg-green transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </a>
      </div>
      
      <!-- Mobile menu button -->
      <div class="lg:hidden">
        <button 
          type="button" 
          class="hamburger-button inline-flex items-center justify-center rounded-md p-2.5 text-olg-blue hover:bg-olg-blue/10 transition-colors duration-200" 
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <span class="sr-only">Open main menu</span>
          <div class="relative w-6 h-6">
            <span 
              class="hamburger-line absolute block h-0.5 bg-current transform transition-all duration-300"
              :class="[
                mobileMenuOpen ? 'rotate-45 top-3 w-6' : 'top-1.5 w-6',
              ]"
            ></span>
            <span 
              class="hamburger-line absolute top-3 block h-0.5 bg-current transform transition-all duration-300"
              :class="[
                mobileMenuOpen ? 'opacity-0 w-6' : 'opacity-100 w-6',
              ]"
            ></span>
            <span 
              class="hamburger-line absolute block h-0.5 bg-current transform transition-all duration-300"
              :class="[
                mobileMenuOpen ? '-rotate-45 top-3 w-6' : 'top-4.5 w-6',
              ]"
            ></span>
          </div>
        </button>
      </div>
    </nav>
    
    <!-- Mobile menu with enhanced animations and active states -->
    <div 
      class="lg:hidden overflow-hidden transition-all duration-500 ease-in-out"
      :class="mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'"
    >
      <div class="bg-white px-6 py-4 shadow-lg">
        <div class="space-y-1">
          <NuxtLink 
            v-for="(item, index) in navigation" 
            :key="item.name" 
            :to="item.path" 
            class="mobile-nav-item block rounded-lg px-3 py-2 text-base font-semibold transition-all duration-300"
            :class="[
              isActive(item.path) 
                ? 'bg-olg-blue/10 text-olg-green border-l-4 border-olg-green pl-4' 
                : 'text-olg-blue hover:bg-olg-blue/10 hover:pl-4'
            ]"
            :style="{ 
              transitionDelay: `${index * 70}ms`,
              transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
              opacity: mobileMenuOpen ? '1' : '0'
            }"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
          
          <div class="pt-4 mt-4 border-t border-gray-200">
            <a 
              href="#kika" 
              class="mobile-cta flex items-center justify-between rounded-lg px-3 py-3 text-base font-semibold transition-all duration-300"
              :class="[
                isActive('/programs') 
                  ? 'bg-olg-green text-white' 
                  : 'text-white bg-olg-blue hover:bg-olg-green'
              ]"
              :style="{ 
                transitionDelay: `${navigation.length * 70 + 100}ms`,
                transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                opacity: mobileMenuOpen ? '1' : '0'
              }"
              @click="mobileMenuOpen = false"
            >
              Kika's Examination
              <span aria-hidden="true" class="text-white transition-transform duration-300">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Safe Passage Initiative', path: '/safe-passage' },
  { name: 'Donate', path: '/#donate' },
  { name: 'Testimonials', path: '/#testimonials' },
  { name: 'News', path: '/news' },
]

const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const lastScrollY = ref(0)
const isNavVisible = ref(true)

// Function to check if a route is active
const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Enhanced scroll handler with hide-on-scroll-down behavior
const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  // Determine if scrolled past threshold
  scrolled.value = currentScrollY > 20
  
  // Hide navbar on scroll down, show on scroll up
  if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    isNavVisible.value = false
  } else {
    isNavVisible.value = true
  }
  
  lastScrollY.value = currentScrollY
}

// Close mobile menu when window is resized to desktop size
const handleResize = () => {
  if (window.innerWidth >= 1024 && mobileMenuOpen.value) {
    mobileMenuOpen.value = false
  }
}

// Close mobile menu when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (mobileMenuOpen.value && !target.closest('nav')) {
    mobileMenuOpen.value = false
  }
}

// Initialize animations when component is mounted
const initAnimations = () => {
  // Add staggered entrance animations for desktop nav items
  const navLinks = document.querySelectorAll('.nav-link')
  navLinks.forEach((link, index) => {
    link.classList.add('animate-fade-in')
    ;(link as HTMLElement).style.animationDelay = `${index * 100}ms`
  })
  
  // Logo entrance animation
  const logo = document.querySelector('.logo-container')
  if (logo) {
    logo.classList.add('animate-logo-entrance')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleClickOutside)
  
  handleScroll() // Check initial scroll position
  
  // Initialize animations after a short delay
  setTimeout(initAnimations, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', handleClickOutside)
})

// Watch for route changes to close mobile menu and update active states
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<style>
:root {
  --olg-blue: #3a75a4;
  --olg-green: #a6d5a0;
}

.text-olg-blue {
  color: var(--olg-blue);
}

.text-olg-green {
  color: var(--olg-green);
}

.bg-olg-blue {
  background-color: var(--olg-blue);
}

.bg-olg-blue\/10 {
  background-color: rgba(58, 117, 164, 0.1);
}

.hover\:bg-olg-blue\/10:hover {
  background-color: rgba(58, 117, 164, 0.1);
}

.bg-olg-green {
  background-color: var(--olg-green);
}

.hover\:bg-olg-green:hover {
  background-color: var(--olg-green);
}

.hover\:text-olg-green:hover {
  color: var(--olg-green);
}

.border-olg-green {
  border-color: var(--olg-green);
}

/* Active link styles */
.active-link {
  color: var(--olg-green);
}

.active-link .nav-text {
  font-weight: 700;
}

/* Animation keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes logoEntrance {
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(-10deg);
  }
  60% {
    transform: scale(1.1) rotate(5deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.4;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

@keyframes navTextEntrance {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Applied animations */
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-logo-entrance {
  animation: logoEntrance 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.logo-pulse {
  animation: pulse 1.5s infinite;
}

.nav-text {
  display: inline-block;
  transition: transform 0.3s;
}

.nav-link:hover .nav-text {
  transform: translateY(-2px);
}

/* Hamburger button animations */
.hamburger-line {
  transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.hamburger-button:hover .hamburger-line:nth-child(1) {
  width: 50%;
}

.hamburger-button:hover .hamburger-line:nth-child(3) {
  width: 75%;
}

/* Mobile menu item animations */
.mobile-nav-item {
  transition: all 0.3s ease;
}

/* CTA button animation */
.cta-button:hover .arrow-icon {
  animation: arrowBounce 1s infinite;
}

@keyframes arrowBounce {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(3px);
  }
}

/* Logo container styles */
.logo-container {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.logo-wrapper {
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo-container:hover {
  transform: translateY(-2px);
}

/* Add extra padding to the navbar to accommodate the larger logo */
@media (min-width: 1024px) {
  nav {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
}
</style>