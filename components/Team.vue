<template>
  <div class="bg-white py-24 md:py-32 overflow-hidden">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-5">
      <!-- Header Section -->
      <div 
        class="max-w-2xl xl:col-span-2 transform transition-all duration-1000"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
        ref="headerRef"
      >
        <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Meet Our 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
            Leadership Team
          </span>
        </h2>
        <p class="mt-6 text-lg/8 text-gray-600">
          Passionate leaders dedicated to 
          <span class="font-semibold text-blue-600">Empowering Education for Brighter Futures</span> 
          through innovative healthcare and humanitarian initiatives.
        </p>
      </div>

      <!-- Team Members List -->
      <ul role="list" class="divide-y divide-gray-200 xl:col-span-3">
        <!-- Dr Patrick Nwachi -->
        <li 
          class="flex flex-col gap-10 py-12 first:pt-0 last:pb-0 sm:flex-row transform transition-all duration-1000 hover:bg-gray-50 hover:rounded-xl hover:p-6 hover:-translate-y-2 hover:shadow-xl group"
          :class="{ 'translate-x-0 opacity-100': teamVisible, 'translate-x-20 opacity-0': !teamVisible }"
          ref="patrickRef"
        >
          <div class="relative">
            <img 
              class="aspect-4/5 w-52 flex-none rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl" 
              src="@/assets/img/male.jpeg" 
              alt="Dr Patrick Nwachi"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="max-w-xl flex-auto">
            <div class="flex items-center gap-3 mb-2">
              <h3 class="text-lg/8 font-semibold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Dr Patrick Nwachi 
              </h3>
              <div class="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                Founder & Director of MIHHD
              </div>
            </div>
            
            <!-- <p class="text-base/7 text-blue-600 font-medium mb-4">
              Consultant Family Physician | MIHHD Visionary Leader
            </p> -->
            
            <div class="space-y-3 text-base/7 text-gray-600">
              <p>
                <strong>Transforming Healthcare Through Compassion:</strong> Dr. Nwachi pioneered MIHHD's mission of integrating holistic medicine with humanitarian service. As a Fellow of the Medical College of Family Medicine with two decades of clinical excellence, he leads our vision of accessible, compassionate healthcare.
              </p>
              
              <p>
                <strong>Safe Passage Initiative:</strong> Founded this groundbreaking humanitarian project that has revolutionized healthcare delivery in underserved communities, embodying MIHHD's core values of service and impact.
              </p>
              
              <p class="text-sm italic text-gray-500">
                "Healing extends beyond medicine—it's about touching lives and building hope in communities that need it most."
              </p>
            </div>
            
            <ul role="list" class="mt-6 flex gap-x-6">
              <li>
                <a 
                  href="https://www.linkedin.com/in/patrick-nwachi-b33bb991" 
                  class="text-gray-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="sr-only">LinkedIn</span>
                  <svg class="size-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </li>
        
        <!-- Lauretta Patrick-Nwachi -->
        <li 
          class="flex flex-col gap-10 py-12 first:pt-0 last:pb-0 sm:flex-row transform transition-all duration-1000 hover:bg-gray-50 hover:rounded-xl hover:p-6 hover:-translate-y-2 hover:shadow-xl group"
          :class="{ 'translate-x-0 opacity-100': laurettaVisible, 'translate-x-20 opacity-0': !laurettaVisible }"
          ref="laurettaRef"
        >
          <div class="relative">
            <img 
              class="aspect-4/5 w-52 flex-none rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl" 
              src="@/assets/img/female.jpeg" 
              alt="Lauretta Patrick-Nwachi"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="max-w-xl flex-auto">
            <div class="flex items-center gap-3 mb-2">
              <h3 class="text-lg/8 font-semibold tracking-tight text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                Lauretta Patrick-Nwachi
              </h3>
              <div class="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                Co-founder & Director of MIHHD
              </div>
            </div>
            
            <!-- <p class="text-base/7 text-purple-600 font-medium mb-4">
              Strategic Operations Leader | MIHHD Growth Architect
            </p> -->
            
            <div class="space-y-3 text-base/7 text-gray-600">
              <p>
                <strong>Operational Excellence & Growth:</strong> With 6.5+ years steering MIHHD's strategic direction, Lauretta transforms vision into reality. Her expertise in team management and organizational development has been instrumental in scaling our humanitarian impact across communities.
              </p>
              
              <p>
                <strong>Innovation Through Collaboration:</strong> Leads cross-functional initiatives that bridge healthcare delivery with sustainable development, ensuring MIHHD's programs create lasting change in underserved populations.
              </p>
              
              <p class="text-sm italic text-gray-500">
                "True leadership means empowering others to create impact that extends far beyond what we can achieve alone."
              </p>
            </div>
            
            <ul role="list" class="mt-6 flex gap-x-6">
              <li>
                <a 
                  href="https://www.linkedin.com/in/lauretta-patrick-nwachi-02121484/" 
                  class="text-gray-400 hover:text-purple-500 transition-colors duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="sr-only">LinkedIn</span>
                  <svg class="size-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive refs for animations
const isVisible = ref(false)
const teamVisible = ref(false)
const laurettaVisible = ref(false)

// Template refs
const headerRef = ref<HTMLElement>()
const patrickRef = ref<HTMLElement>()
const laurettaRef = ref<HTMLElement>()

// Intersection Observer for scroll animations
let headerObserver: IntersectionObserver
let patrickObserver: IntersectionObserver
let laurettaObserver: IntersectionObserver

onMounted(() => {
  // Create intersection observers for scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '50px'
  }

  // Header observer
  headerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    })
  }, observerOptions)

  // Patrick observer
  patrickObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          teamVisible.value = true
        }, 300) // Stagger animation
      }
    })
  }, observerOptions)

  // Lauretta observer
  laurettaObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          laurettaVisible.value = true
        }, 600) // Stagger animation further
      }
    })
  }, observerOptions)

  // Start observing elements
  if (headerRef.value) headerObserver.observe(headerRef.value)
  if (patrickRef.value) patrickObserver.observe(patrickRef.value)
  if (laurettaRef.value) laurettaObserver.observe(laurettaRef.value)
})

onUnmounted(() => {
  // Cleanup observers
  if (headerObserver) headerObserver.disconnect()
  if (patrickObserver) patrickObserver.disconnect()
  if (laurettaObserver) laurettaObserver.disconnect()
})
</script>

<style scoped>
/* Additional custom animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.group:hover img {
  animation: float 3s ease-in-out infinite;
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>