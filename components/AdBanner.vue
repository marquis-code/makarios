<template>
  <div v-if="adverts && adverts.length > 0" class="w-full relative group my-8">
    <a 
      :href="activeAdvert.targetUrl || '#'" 
      target="_blank" 
      rel="noopener noreferrer"
      @click="handleAdClick"
      class="block w-full rounded-3xl overflow-hidden relative shadow-2xl hover:shadow-[0_20px_50px_rgba(0,150,255,0.15)] transition-all duration-500 bg-white"
    >
      <!-- Sponsored Badge -->
      <div class="absolute top-4 right-4 z-30">
        <span class="px-3 py-1 bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-black  rounded-lg border border-white/20 shadow-lg">Sponsored</span>
      </div>

      <!-- Complex Layout if extended fields are provided -->
      <div v-if="hasComplexData" class="flex flex-col md:flex-row w-full bg-slate-50">
        <!-- Left Side: Image/Branding -->
        <div class="w-full md:w-2/5 relative min-h-[300px] overflow-hidden bg-slate-900">
          <!-- Blurred Background -->
          <img 
            :src="activeAdvert.imageUrl" 
            class="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110" 
            aria-hidden="true"
          />
          <!-- Foreground Image -->
          <img 
            :src="activeAdvert.imageUrl" 
            :alt="activeAdvert.title" 
            class="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700 z-10" 
          />
          <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 z-20 pointer-events-none">
            <h3 class="text-3xl font-black text-white drop-shadow-lg leading-tight">{{ activeAdvert.companyName || activeAdvert.title }}</h3>
            <p v-if="activeAdvert.description" class="text-white/90 mt-2 text-base">{{ activeAdvert.description }}</p>
          </div>
        </div>

        <!-- Right Side: Structured Data -->
        <div class="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <!-- Services -->
            <div v-if="activeAdvert.services && activeAdvert.services.length > 0">
              <div class="flex items-center gap-2 mb-4 text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m10 13 2 2 4-4"/></svg>
                <h4 class="font-bold text-base tracking-wider">Our Services</h4>
              </div>
              <ul class="space-y-2">
                <li v-for="(service, idx) in activeAdvert.services" :key="idx" class="flex items-start gap-2 text-base text-slate-700 font-medium">
                  <span class="text-blue-500 mt-0.5">•</span> {{ service }}
                </li>
              </ul>
            </div>

            <!-- Benefits -->
            <div v-if="activeAdvert.benefits && activeAdvert.benefits.length > 0">
              <div class="flex items-center gap-2 mb-4 text-amber-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <h4 class="font-bold text-base tracking-wider">Benefits</h4>
              </div>
              <ul class="space-y-2">
                <li v-for="(benefit, idx) in activeAdvert.benefits" :key="idx" class="flex items-start gap-2 text-base text-slate-700 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500 shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <!-- Target Audience -->
            <div v-if="activeAdvert.targetAudience && activeAdvert.targetAudience.length > 0">
              <div class="flex items-center gap-2 mb-4 text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <h4 class="font-bold text-base tracking-wider">Target Audience</h4>
              </div>
              <div class="flex flex-wrap gap-2">
                <span v-for="(audience, idx) in activeAdvert.targetAudience" :key="idx" class="px-3 py-1 bg-purple-50 text-purple-700 text-sm font-bold rounded-full">
                  {{ audience }}
                </span>
              </div>
            </div>
          </div>

          <!-- Contact Footer -->
          <div v-if="activeAdvert.contactPhone || activeAdvert.contactEmail || activeAdvert.contactAddress" class="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6">
            <div v-if="activeAdvert.contactPhone" class="flex items-center gap-2 text-slate-600 text-base font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              {{ activeAdvert.contactPhone }}
            </div>
            <div v-if="activeAdvert.contactEmail" class="flex items-center gap-2 text-slate-600 text-base font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              {{ activeAdvert.contactEmail }}
            </div>
            <div v-if="activeAdvert.contactAddress" class="flex items-center gap-2 text-slate-600 text-base font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              {{ activeAdvert.contactAddress }}
            </div>
          </div>
        </div>
      </div>

      <!-- Standard Image-Only Layout -->
      <div v-else class="w-full relative bg-slate-900 flex items-center justify-center min-h-[250px] overflow-hidden">
        <!-- Blurred background to fill space gracefully -->
        <img 
          :src="activeAdvert.imageUrl" 
          class="absolute inset-0 w-full h-full object-cover blur-3xl opacity-40 scale-110" 
          aria-hidden="true"
        />
        <!-- Actual advert image capped at a reasonable max height -->
        <img 
          :src="activeAdvert.imageUrl" 
          :alt="activeAdvert.title" 
          class="relative z-10 w-full max-h-[400px] object-contain group-hover:scale-[1.02] transition-transform duration-700 shadow-2xl my-4 px-4" 
        />
        
        <!-- Optional Ad content overlay if description exists -->
        <div v-if="activeAdvert.description || activeAdvert.title" class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h4 class="text-white font-bold text-lg leading-tight drop-shadow-md">{{ activeAdvert.title }}</h4>
          <p v-if="activeAdvert.description" class="text-white/80 text-base mt-1 max-w-2xl drop-shadow-md line-clamp-2">{{ activeAdvert.description }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAdverts } from '@/composables/modules/adverts/useAdverts'

const props = defineProps({
  adverts: {
    type: Array,
    required: true,
    default: () => []
  }
})

const { trackClick } = useAdverts()

const activeAdvert = computed(() => {
  return props.adverts[0]
})

const hasComplexData = computed(() => {
  const ad = activeAdvert.value
  if (!ad) return false
  return (ad.services && ad.services.length > 0) || 
         (ad.benefits && ad.benefits.length > 0) || 
         (ad.targetAudience && ad.targetAudience.length > 0) ||
         ad.companyName || ad.contactPhone
})

const handleAdClick = (e) => {
  if (activeAdvert.value?._id) {
    e.preventDefault()
    trackClick(activeAdvert.value._id, activeAdvert.value.targetUrl)
  }
}
</script>
