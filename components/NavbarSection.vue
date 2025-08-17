<template>
  <header 
    class="fixed inset-x-0 top-0 z-50 bg-white transition-all duration-500" 
    :class="{ 'shadow-lg': scrolled, 'transform -translate-y-full': !isNavVisible }"
  >
    <nav class="container mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
      <!-- Logo on the left -->
      <div class="flex items-center">
        <NuxtLink to="/" class="logo-container relative group" @click="handleLogoClick">
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
          <!-- Home Link -->
          <NuxtLink
            to="/"
            @click="handleHomeClick"
            class="nav-link text-base font-semibold text-olg-blue hover:text-olg-green relative overflow-hidden group py-2 cursor-pointer"
            :class="{ 'active-link text-olg-green': route.path === '/' && activeSection === '' }"
          >
            <span class="nav-text relative block">Home</span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-olg-green transform transition-transform duration-300" 
                  :class="(route.path === '/' && activeSection === '') ? 'translate-y-0' : 'translate-y-1 group-hover:translate-y-0'"></span>
          </NuxtLink>

          <!-- About Hash Link -->
          <a
            href="#about"
            @click="handleHashClick($event, 'about')"
            class="nav-link text-base font-semibold text-olg-blue hover:text-olg-green relative overflow-hidden group py-2 cursor-pointer"
            :class="{ 'active-link text-olg-green': route.path === '/' && activeSection === 'about' }"
          >
            <span class="nav-text relative block">About</span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-olg-green transform transition-transform duration-300" 
                  :class="(route.path === '/' && activeSection === 'about') ? 'translate-y-0' : 'translate-y-1 group-hover:translate-y-0'"></span>
          </a>

          <!-- Safe Passage Link -->

          <!-- Donate Hash Link -->
          <a
            href="#donate"
            @click="handleHashClick($event, 'donate')"
            class="nav-link text-base font-semibold text-olg-blue hover:text-olg-green relative overflow-hidden group py-2 cursor-pointer"
            :class="{ 'active-link text-olg-green': route.path === '/' && activeSection === 'donate' }"
          >
            <span class="nav-text relative block">Donate</span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-olg-green transform transition-transform duration-300" 
                  :class="(route.path === '/' && activeSection === 'donate') ? 'translate-y-0' : 'translate-y-1 group-hover:translate-y-0'"></span>
          </a>

          <!-- Testimonials Hash Link -->
          <a
            href="#testimonials"
            @click="handleHashClick($event, 'testimonials')"
            class="nav-link text-base font-semibold text-olg-blue hover:text-olg-green relative overflow-hidden group py-2 cursor-pointer"
            :class="{ 'active-link text-olg-green': route.path === '/' && activeSection === 'testimonials' }"
          >
            <span class="nav-text relative block">Testimonials</span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-olg-green transform transition-transform duration-300" 
                  :class="(route.path === '/' && activeSection === 'testimonials') ? 'translate-y-0' : 'translate-y-1 group-hover:translate-y-0'"></span>
          </a>

          <NuxtLink
            to="/safe-passage"
            class="nav-link text-base font-semibold text-olg-blue hover:text-olg-green relative overflow-hidden group py-2 cursor-pointer"
            :class="{ 'active-link text-olg-green': route.path.startsWith('/safe-passage') }"
          >
            <span class="nav-text relative block">Safe Passage Initiative</span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-olg-green transform transition-transform duration-300" 
                  :class="route.path.startsWith('/safe-passage') ? 'translate-y-0' : 'translate-y-1 group-hover:translate-y-0'"></span>
          </NuxtLink>

          <!-- News Link -->
          <NuxtLink
            to="/news"
            class="nav-link text-base font-semibold text-olg-blue hover:text-olg-green relative overflow-hidden group py-2 cursor-pointer"
            :class="{ 'active-link text-olg-green': route.path.startsWith('/news') }"
          >
            <span class="nav-text relative block">News</span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-olg-green transform transition-transform duration-300" 
                  :class="route.path.startsWith('/news') ? 'translate-y-0' : 'translate-y-1 group-hover:translate-y-0'"></span>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Programs button on the right -->
      <div class="hidden lg:flex lg:items-center">
        <a 
          href="#kika" 
          @click="handleHashClick($event, 'kika')"
          class="cta-button text-base font-semibold text-white bg-olg-blue px-6 py-3 rounded-md hover:bg-olg-green transition-all duration-300 flex items-center gap-2 relative overflow-hidden group cursor-pointer"
          :class="{ 'bg-olg-green': activeSection === 'kika' }"
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
    
    <!-- Mobile menu -->
    <div 
      class="lg:hidden overflow-hidden transition-all duration-500 ease-in-out"
      :class="mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'"
    >
      <div class="bg-white px-6 py-4 shadow-lg">
        <div class="space-y-1">
          <!-- Mobile Home -->
          <NuxtLink
            to="/"
            @click="handleMobileHomeClick"
            class="mobile-nav-item block rounded-lg px-3 py-2 text-base font-semibold transition-all duration-300 cursor-pointer"
            :class="[
              (route.path === '/' && activeSection === '') 
                ? 'bg-olg-blue/10 text-olg-green border-l-4 border-olg-green pl-4' 
                : 'text-olg-blue hover:bg-olg-blue/10 hover:pl-4'
            ]"
          >
            Home
          </NuxtLink>

          <!-- Mobile About -->
          <a
            href="#about"
            @click="handleMobileHashClick($event, 'about')"
            class="mobile-nav-item block rounded-lg px-3 py-2 text-base font-semibold transition-all duration-300 cursor-pointer"
            :class="[
              (route.path === '/' && activeSection === 'about') 
                ? 'bg-olg-blue/10 text-olg-green border-l-4 border-olg-green pl-4' 
                : 'text-olg-blue hover:bg-olg-blue/10 hover:pl-4'
            ]"
          >
            About
          </a>

          <!-- Mobile Safe Passage -->
          <NuxtLink
            to="/safe-passage"
            @click="closeMobileMenu"
            class="mobile-nav-item block rounded-lg px-3 py-2 text-base font-semibold transition-all duration-300 cursor-pointer"
            :class="[
              route.path.startsWith('/safe-passage') 
                ? 'bg-olg-blue/10 text-olg-green border-l-4 border-olg-green pl-4' 
                : 'text-olg-blue hover:bg-olg-blue/10 hover:pl-4'
            ]"
          >
            Safe Passage Initiative
          </NuxtLink>

          <!-- Mobile Donate -->
          <a
            href="#donate"
            @click="handleMobileHashClick($event, 'donate')"
            class="mobile-nav-item block rounded-lg px-3 py-2 text-base font-semibold transition-all duration-300 cursor-pointer"
            :class="[
              (route.path === '/' && activeSection === 'donate') 
                ? 'bg-olg-blue/10 text-olg-green border-l-4 border-olg-green pl-4' 
                : 'text-olg-blue hover:bg-olg-blue/10 hover:pl-4'
            ]"
          >
            Donate
          </a>

          <!-- Mobile Testimonials -->
          <a
            href="#testimonials"
            @click="handleMobileHashClick($event, 'testimonials')"
            class="mobile-nav-item block rounded-lg px-3 py-2 text-base font-semibold transition-all duration-300 cursor-pointer"
            :class="[
              (route.path === '/' && activeSection === 'testimonials') 
                ? 'bg-olg-blue/10 text-olg-green border-l-4 border-olg-green pl-4' 
                : 'text-olg-blue hover:bg-olg-blue/10 hover:pl-4'
            ]"
          >
            Testimonials
          </a>

          <!-- Mobile News -->
          <NuxtLink
            to="/news"
            @click="closeMobileMenu"
            class="mobile-nav-item block rounded-lg px-3 py-2 text-base font-semibold transition-all duration-300 cursor-pointer"
            :class="[
              route.path.startsWith('/news') 
                ? 'bg-olg-blue/10 text-olg-green border-l-4 border-olg-green pl-4' 
                : 'text-olg-blue hover:bg-olg-blue/10 hover:pl-4'
            ]"
          >
            News
          </NuxtLink>
          
          <div class="pt-4 mt-4 border-t border-gray-200">
            <a 
              href="#kika" 
              @click="handleMobileHashClick($event, 'kika')"
              class="mobile-cta flex items-center justify-between rounded-lg px-3 py-3 text-base font-semibold transition-all duration-300 cursor-pointer text-white bg-olg-blue hover:bg-olg-green"
              :class="{ 'bg-olg-green': activeSection === 'kika' }"
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
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Reactive state
const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const lastScrollY = ref(0)
const isNavVisible = ref(true)
const activeSection = ref('')

// Handle logo click
const handleLogoClick = () => {
  activeSection.value = ''
  if (route.path !== '/') {
    router.push('/')
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Handle home click
const handleHomeClick = () => {
  activeSection.value = ''
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Handle hash link clicks
const handleHashClick = (event: Event, sectionId: string) => {
  event.preventDefault()
  
  if (route.path !== '/') {
    // Navigate to home first, then scroll to section
    router.push('/').then(() => {
      nextTick(() => {
        setTimeout(() => scrollToElement(sectionId), 300)
      })
    })
  } else {
    // Already on home page, just scroll
    scrollToElement(sectionId)
  }
}

// Handle mobile clicks
const handleMobileHomeClick = () => {
  mobileMenuOpen.value = false
  activeSection.value = ''
  if (route.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const handleMobileHashClick = (event: Event, sectionId: string) => {
  event.preventDefault()
  mobileMenuOpen.value = false
  
  if (route.path !== '/') {
    router.push('/').then(() => {
      nextTick(() => {
        setTimeout(() => scrollToElement(sectionId), 300)
      })
    })
  } else {
    scrollToElement(sectionId)
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Scroll to specific element
const scrollToElement = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 100
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
    
    activeSection.value = sectionId
    history.replaceState(null, '', `#${sectionId}`)
  }
}

// Enhanced scroll handler
const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  scrolled.value = currentScrollY > 20
  
  if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    isNavVisible.value = false
  } else {
    isNavVisible.value = true
  }
  
  lastScrollY.value = currentScrollY
  
  if (route.path === '/') {
    updateActiveSection()
  }
}

// Update active section based on scroll position
const updateActiveSection = () => {
  const sections = ['about', 'donate', 'testimonials', 'kika']
  const headerHeight = 120
  let currentSection = ''
  
  if (window.scrollY < 100) {
    currentSection = ''
  } else {
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId)
      if (element) {
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + window.pageYOffset
        const elementBottom = elementTop + rect.height
        const scrollTop = window.pageYOffset + headerHeight
        
        if (scrollTop >= elementTop && scrollTop < elementBottom) {
          currentSection = sectionId
          break
        }
      }
    }
  }
  
  if (currentSection !== activeSection.value) {
    activeSection.value = currentSection
    const newHash = currentSection ? `#${currentSection}` : ''
    if (window.location.hash !== newHash) {
      history.replaceState(null, '', window.location.pathname + newHash)
    }
  }
}

// Close mobile menu when window is resized
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

// Handle initial hash on page load
const handleInitialHash = () => {
  if (typeof window !== 'undefined' && window.location.hash) {
    const hash = window.location.hash.replace('#', '')
    if (route.path === '/') {
      nextTick(() => {
        setTimeout(() => {
          scrollToElement(hash)
        }, 500)
      })
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleClickOutside)
  
  handleScroll()
  handleInitialHash()
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
    document.removeEventListener('click', handleClickOutside)
  }
})

// Watch for route changes
watch(() => route.path, (newPath) => {
  mobileMenuOpen.value = false
  
  if (newPath === '/') {
    nextTick(() => {
      if (window.location.hash) {
        const hash = window.location.hash.replace('#', '')
        setTimeout(() => scrollToElement(hash), 200)
      } else {
        activeSection.value = ''
        updateActiveSection()
      }
    })
  } else {
    activeSection.value = ''
  }
}, { immediate: true })

// Watch for hash changes
watch(() => route.hash, (newHash) => {
  if (route.path === '/' && newHash) {
    const sectionId = newHash.replace('#', '')
    setTimeout(() => scrollToElement(sectionId), 100)
  }
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

/* Animations */
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

/* Logo styles */
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

.logo-pulse {
  animation: pulse 1.5s infinite;
}

/* Header styles */
@media (min-width: 1024px) {
  nav {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
}

header {
  transition: transform 0.3s ease-in-out;
}
</style>