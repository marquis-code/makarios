<template>
  <header 
    class="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-6xl rounded-full border" 
    :class="{ 'top-4 bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] border-white/60': scrolled, 'top-6 bg-white/60 backdrop-blur-lg shadow-xl border-white/40': !scrolled, '-translate-y-[150%] opacity-0': !isNavVisible, 'translate-y-0 opacity-100': isNavVisible }"
  >
    <nav class="container mx-auto flex items-center justify-between px-4 py-2 lg:px-6 lg:py-3" aria-label="Global">
      <!-- Logo on the left -->
      <div class="flex items-center">
        <NuxtLink to="/" class="logo-container relative group" @click="handleLogoClick">
          <div class="logo-wrapper overflow-hidden rounded-full relative">
            <img 
              src="@/assets/img/logo.jpeg" 
              class="h-10 w-10 lg:h-12 lg:w-12 object-cover transition-all duration-500 transform group-hover:scale-110" 
              :class="{ 'h-9 w-9 lg:h-10 lg:w-10': scrolled }"
              alt="Logo"
            />
            <div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </div>
          <div class="logo-pulse absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-100"></div>
        </NuxtLink>
      </div>

      <!-- Desktop navigation items in the center -->
      <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
        <div class="flex space-x-8">
          <!-- Home Link -->
          <NuxtLink
            to="/"
            @click="handleHomeClick"
            class="nav-link text-sm font-medium text-slate-700 hover:text-primary relative overflow-hidden group py-1.5 cursor-pointer transition-colors duration-300"
            :class="{ 'active-link text-primary': route.path === '/' && activeSection === '' }"
          >
            <span class="nav-text relative block">Home</span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300" 
                  :class="(route.path === '/' && activeSection === '') ? 'translate-y-0' : 'translate-y-1 group-hover:translate-y-0'"></span>
          </NuxtLink>

          <!-- About Hash Link -->
          <a
            href="#about"
            @click="handleHashClick($event, 'about')"
            class="nav-link text-sm font-medium text-slate-700 hover:text-primary relative overflow-hidden group py-1.5 cursor-pointer transition-colors duration-300"
            :class="{ 'active-link text-primary': route.path === '/' && activeSection === 'about' }"
          >
            <span class="nav-text relative block">About</span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300" 
                  :class="(route.path === '/' && activeSection === 'about') ? 'translate-y-0' : 'translate-y-1 group-hover:translate-y-0'"></span>
          </a>

          <!-- Donate Hash Link -->
          <a
            href="#donate"
            @click="handleHashClick($event, 'donate')"
            class="nav-link text-sm font-medium text-slate-700 hover:text-primary relative overflow-hidden group py-1.5 cursor-pointer transition-colors duration-300"
            :class="{ 'active-link text-primary': route.path === '/' && activeSection === 'donate' }"
          >
            <span class="nav-text relative block">Donate</span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300" 
                  :class="(route.path === '/' && activeSection === 'donate') ? 'translate-y-0' : 'translate-y-1 group-hover:translate-y-0'"></span>
          </a>

          <!-- Programs Hash Link -->
          <a
            href="#programs"
            @click="handleHashClick($event, 'programs')"
            class="nav-link text-sm font-medium text-slate-700 hover:text-primary relative overflow-hidden group py-1.5 cursor-pointer transition-colors duration-300"
            :class="{ 'active-link text-primary': route.path === '/' && activeSection === 'programs' }"
          >
            <span class="nav-text relative block">Our Impact</span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300" 
                  :class="(route.path === '/' && activeSection === 'programs') ? 'translate-y-0' : 'translate-y-1 group-hover:translate-y-0'"></span>
          </a>

          <!-- Impact Stories Hash Link -->
          <a
            href="#impact"
            @click="handleHashClick($event, 'impact')"
            class="nav-link text-sm font-medium text-slate-700 hover:text-primary relative overflow-hidden group py-1.5 cursor-pointer transition-colors duration-300"
            :class="{ 'active-link text-primary': route.path === '/' && activeSection === 'impact' }"
          >
            <span class="nav-text relative block">Stories</span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300" 
                  :class="(route.path === '/' && activeSection === 'impact') ? 'translate-y-0' : 'translate-y-1 group-hover:translate-y-0'"></span>
          </a>

          <NuxtLink
            to="/safe-passage"
            class="nav-link text-sm font-medium text-slate-700 hover:text-primary relative overflow-hidden group py-1.5 cursor-pointer transition-colors duration-300"
            :class="{ 'active-link text-primary': route.path.startsWith('/safe-passage') }"
          >
            <span class="nav-text relative block">Safe Passage</span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300" 
                  :class="route.path.startsWith('/safe-passage') ? 'translate-y-0' : 'translate-y-1 group-hover:translate-y-0'"></span>
          </NuxtLink>

          <!-- News Link -->
          <NuxtLink
            to="/news"
            class="nav-link text-sm font-medium text-slate-700 hover:text-primary relative overflow-hidden group py-1.5 cursor-pointer transition-colors duration-300"
            :class="{ 'active-link text-primary': route.path.startsWith('/news') }"
          >
            <span class="nav-text relative block">News</span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300" 
                  :class="route.path.startsWith('/news') ? 'translate-y-0' : 'translate-y-1 group-hover:translate-y-0'"></span>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Programs button on the right -->
      <div class="hidden lg:flex lg:items-center">
        <a 
          href="#kika" 
          @click="handleHashClick($event, 'kika')"
          class="cta-button text-xs font-semibold text-white bg-primary px-4 py-2 rounded-full hover:bg-primary-dark transition-all duration-300 flex items-center gap-2 relative overflow-hidden group cursor-pointer shadow-[0_4px_14px_0_rgba(6,78,59,0.39)] hover:shadow-[0_6px_20px_rgba(6,78,59,0.23)] hover:-translate-y-0.5"
          :class="{ 'bg-primary-dark': activeSection === 'kika' }"
        >
          <span class="relative z-10 tracking-wide">Kika's Exam</span>
          <span class="arrow-icon inline-block transition-all duration-300 group-hover:translate-x-1 relative z-10" aria-hidden="true">&rarr;</span>
        </a>
      </div>
      
      <!-- Mobile menu button -->
      <div class="lg:hidden">
        <button 
          type="button" 
          class="hamburger-button inline-flex items-center justify-center rounded-md p-2.5 text-slate-800 hover:bg-slate-100 transition-colors duration-200" 
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
    
    <!-- Premium Mobile Side Drawer -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="mobileMenuOpen" class="fixed inset-0 z-[100] lg:hidden flex justify-end">
          <!-- Glassmorphism Backdrop -->
          <div 
            class="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity"
            @click="closeMobileMenu"
          ></div>
          
          <!-- Drawer Content -->
          <div 
            class="relative w-[85%] max-w-sm h-full bg-white border-l border-slate-100 shadow-2xl flex flex-col transform transition-transform duration-500 ease-out"
          >
            <!-- Drawer Header -->
            <div class="flex items-center justify-between p-6 border-b border-slate-100">
              <div class="logo-wrapper overflow-hidden rounded-full relative">
                <img src="@/assets/img/logo.jpeg" class="h-10 w-10 object-cover rounded-full" alt="Logo" />
                <div class="absolute inset-0 rounded-full border border-primary/20"></div>
              </div>
              <button 
                @click="closeMobileMenu"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 transition-colors border border-slate-200"
              >
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <!-- Drawer Links -->
            <div class="flex flex-col flex-1 px-8 py-8 space-y-6 overflow-y-auto">
              <!-- Home -->
              <NuxtLink
                to="/"
                @click="handleMobileHomeClick"
                class="group flex items-center gap-4 text-base font-medium transition-all duration-300 hover:translate-x-2"
                :class="(route.path === '/' && activeSection === '') ? 'text-primary' : 'text-slate-700 hover:text-primary'"
              >
                <span class="w-6 h-[2px] transition-all duration-300" :class="(route.path === '/' && activeSection === '') ? 'bg-primary' : 'bg-slate-200 group-hover:bg-primary/50'"></span>
                Home
              </NuxtLink>

              <!-- About -->
              <a
                href="#about"
                @click="handleMobileHashClick($event, 'about')"
                class="group flex items-center gap-4 text-base font-medium transition-all duration-300 hover:translate-x-2"
                :class="(route.path === '/' && activeSection === 'about') ? 'text-primary' : 'text-slate-700 hover:text-primary'"
              >
                <span class="w-6 h-[2px] transition-all duration-300" :class="(route.path === '/' && activeSection === 'about') ? 'bg-primary' : 'bg-slate-200 group-hover:bg-primary/50'"></span>
                About
              </a>

              <!-- Safe Passage -->
              <NuxtLink
                to="/safe-passage"
                @click="closeMobileMenu"
                class="group flex items-center gap-4 text-base font-medium transition-all duration-300 hover:translate-x-2"
                :class="route.path.startsWith('/safe-passage') ? 'text-primary' : 'text-slate-700 hover:text-primary'"
              >
                <span class="w-6 h-[2px] transition-all duration-300" :class="route.path.startsWith('/safe-passage') ? 'bg-primary' : 'bg-slate-200 group-hover:bg-primary/50'"></span>
                Safe Passage
              </NuxtLink>

              <!-- Donate -->
              <a
                href="#donate"
                @click="handleMobileHashClick($event, 'donate')"
                class="group flex items-center gap-4 text-base font-medium transition-all duration-300 hover:translate-x-2"
                :class="(route.path === '/' && activeSection === 'donate') ? 'text-primary' : 'text-slate-700 hover:text-primary'"
              >
                <span class="w-6 h-[2px] transition-all duration-300" :class="(route.path === '/' && activeSection === 'donate') ? 'bg-primary' : 'bg-slate-200 group-hover:bg-primary/50'"></span>
                Donate
              </a>

              <!-- Our Impact -->
              <a
                href="#programs"
                @click="handleMobileHashClick($event, 'programs')"
                class="group flex items-center gap-4 text-base font-medium transition-all duration-300 hover:translate-x-2"
                :class="(route.path === '/' && activeSection === 'programs') ? 'text-primary' : 'text-slate-700 hover:text-primary'"
              >
                <span class="w-6 h-[2px] transition-all duration-300" :class="(route.path === '/' && activeSection === 'programs') ? 'bg-primary' : 'bg-slate-200 group-hover:bg-primary/50'"></span>
                Impact
              </a>

              <!-- Stories -->
              <a
                href="#impact"
                @click="handleMobileHashClick($event, 'impact')"
                class="group flex items-center gap-4 text-base font-medium transition-all duration-300 hover:translate-x-2"
                :class="(route.path === '/' && activeSection === 'impact') ? 'text-primary' : 'text-slate-700 hover:text-primary'"
              >
                <span class="w-6 h-[2px] transition-all duration-300" :class="(route.path === '/' && activeSection === 'impact') ? 'bg-primary' : 'bg-slate-200 group-hover:bg-primary/50'"></span>
                Stories
              </a>

              <!-- News -->
              <NuxtLink
                to="/news"
                @click="closeMobileMenu"
                class="group flex items-center gap-4 text-base font-medium transition-all duration-300 hover:translate-x-2"
                :class="route.path.startsWith('/news') ? 'text-primary' : 'text-slate-700 hover:text-primary'"
              >
                <span class="w-6 h-[2px] transition-all duration-300" :class="route.path.startsWith('/news') ? 'bg-primary' : 'bg-slate-200 group-hover:bg-primary/50'"></span>
                News
              </NuxtLink>
            </div>

            <!-- Call to action button at the bottom of the drawer -->
            <div class="p-6 border-t border-slate-100 pb-8">
              <a 
                href="#kika" 
                @click="handleMobileHashClick($event, 'kika')"
                class="group flex items-center justify-center w-full rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                :class="activeSection === 'kika' ? 'bg-primary-dark text-white' : 'bg-primary text-white shadow-md shadow-primary/20'"
              >
                Kika's Exam <span class="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
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
  if (typeof window === 'undefined') return;
  const sections = ['about', 'donate', 'programs', 'impact', 'kika']
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
      if (typeof window !== 'undefined' && window.location.hash) {
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
  --primary: #064e3B;
  --primary-dark: #033327;
  --secondary: #000000; /* emerald-900 */
}

.text-slate-300 {
  color: #CBD5E1; /* Tailwind slate-300 hex to fix invisible text on dark background */
}

.text-primary {
  color: var(--primary);
}

.bg-olg-blue {
  background-color: var(--secondary);
}

.bg-olg-blue\/10 {
  background-color: rgba(58, 117, 164, 0.1);
}

.hover\:bg-olg-blue\/10:hover {
  background-color: rgba(58, 117, 164, 0.1);
}

.btn-olg-green {
  background-color: var(--primary);
  color: white;
}
.btn-olg-green:hover {
  background-color: var(--primary-dark);
}

.bg-primary {
  background-color: var(--primary);
}

.hover\:bg-primary:hover {
  background-color: var(--primary-dark);
}

.hover\:text-primary:hover {
  color: var(--primary);
}

.border-primary {
  border-color: var(--primary);
}

/* Active link styles */
.nav-link.active-link {
  color: var(--primary);
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
/* Mobile Side Drawer Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active .transform,
.fade-leave-active .transform {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-enter-from .transform {
  transform: translateX(100%);
}
.fade-leave-to .transform {
  transform: translateX(100%);
}
</style>