<template>
  <div class="min-h-screen bg-white">
    <LoadingState v-if="loading" class="pt-32" />
    
    <template v-else-if="conference">
      <!-- Full Bleed Hero Section -->
      <section class="relative h-[60vh] min-h-[500px] w-full bg-slate-900 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img :src="conference.bannerImage || 'https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg'" class="w-full h-full object-cover opacity-40" :alt="conference.title" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div class="container mx-auto px-6 relative z-10 h-full flex flex-col justify-end pb-20">
          <NuxtLink to="/conferences" class="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors mb-8 w-fit">
            <LucideArrowLeft :size="16" /> Back to All Events
          </NuxtLink>
          
          <div class="max-w-4xl">
            <span class="inline-block px-4 py-1.5 bg-brand-cyan/20 text-brand-cyan font-black text-[11px] tracking-[0.2em] rounded-full mb-6 uppercase border border-brand-cyan/30 backdrop-blur-md">
              {{ conference.status ? conference.status : 'UPCOMING EVENT' }}
            </span>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6">
              {{ conference.title }}
            </h1>
            <div class="flex flex-wrap items-center gap-8 text-slate-300 font-medium">
              <div class="flex items-center gap-3">
                <LucideCalendar class="text-brand-cyan" :size="20" />
                <span class="text-lg">{{ conference.startDate ? new Date(conference.startDate).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Date TBA' }}</span>
              </div>
              <div class="flex items-center gap-3">
                <LucideMapPin class="text-brand-cyan" :size="20" />
                <span class="text-lg">{{ conference.venue || 'Venue TBA' }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Content Section (2-Column Layout) -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="flex flex-col lg:flex-row gap-16 items-start">
            
            <!-- Main Content (Left) -->
            <div class="w-full lg:w-2/3 space-y-16">
              
              <!-- About Event -->
              <div v-if="conference.description">
                <h2 class="text-3xl font-black text-slate-900 tracking-tight mb-8">About the Event</h2>
                <div class="prose prose-lg prose-slate max-w-none">
                  <p class="text-slate-600 leading-relaxed whitespace-pre-wrap">{{ conference.description }}</p>
                </div>
              </div>

              <!-- Location Details -->
              <div v-if="conference.location">
                <h2 class="text-3xl font-black text-slate-900 tracking-tight mb-8">Location Details</h2>
                <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <div class="flex items-start gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brand-cyan shrink-0 mt-1 shadow-sm border border-slate-100">
                      <LucideMapPin :size="24" />
                    </div>
                    <div>
                      <h4 class="text-xl font-bold text-slate-900 mb-2">{{ conference.venue }}</h4>
                      <p class="text-slate-500 leading-relaxed">{{ conference.location }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Program Gallery -->
              <div v-if="allGalleryImages && allGalleryImages.length > 0">
                <h2 class="text-3xl font-black text-slate-900 tracking-tight mb-8">Program Gallery</h2>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
                  <div v-for="(img, idx) in allGalleryImages" :key="idx" 
                       @click="selectedImage = img"
                       class="rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                       :class="idx % 3 === 0 ? 'col-span-2 row-span-2' : ''">
                    <img :src="img" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
              </div>

            </div>

            <!-- Sticky Sidebar (Right) -->
            <div class="w-full lg:w-1/3 lg:sticky lg:top-32 space-y-8">
              
              <!-- Registration Box -->
              <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <h3 class="text-2xl font-black text-slate-900 tracking-tight mb-6">Registration</h3>
                
                <div v-if="conference.pricing && conference.pricing.length" class="space-y-4 mb-8">
                  <div v-for="price in conference.pricing" :key="price._id" class="flex justify-between items-center p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-brand-cyan/30 transition-colors">
                    <span class="font-bold text-slate-700">{{ price.label || price.category }}</span>
                    <span class="text-xl font-black text-brand-cyan">
                      {{ (price.label && (price.label.includes('Africa') || price.label.includes('USD'))) ? '$' : '₦' }}{{ price.amount.toLocaleString() }}
                    </span>
                  </div>
                </div>
                <div v-else class="mb-8">
                  <p class="text-slate-500 font-medium">Pricing information is currently unavailable or this event is free.</p>
                </div>

                <button v-if="conference.status === 'upcoming'" class="w-full py-4 bg-brand-blue text-white rounded-xl font-black text-lg hover:bg-brand-red transition-colors shadow-lg shadow-brand-blue/30">
                  Register Now
                </button>
                <button v-else disabled class="w-full py-4 bg-slate-200 text-slate-400 rounded-xl font-black text-lg cursor-not-allowed">
                  Registration Closed
                </button>
                <p class="text-center text-sm font-medium text-slate-400 mt-4">Secure checkout powered by SCPSN.</p>
              </div>

              <!-- Organizer Info / Share -->
              <div class="bg-brand-dark p-8 rounded-[2rem] text-white">
                <h4 class="text-lg font-bold mb-4">Organizer</h4>
                <div class="flex items-center gap-4 mb-6">
                   <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2 shadow-inner">
                     <span class="text-brand-dark font-black text-xs">SCPSN</span>
                   </div>
                   <div>
                     <p class="font-bold text-white">SCPSN Nigeria</p>
                     <p class="text-slate-400 text-sm">Society of Cellular Pathology</p>
                   </div>
                </div>
                <div class="pt-6 border-t border-white/10 flex justify-between items-center">
                  <span class="text-sm font-medium text-slate-400">Share this event</span>
                  <div class="flex gap-4 text-white">
                     <button class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-cyan hover:text-brand-dark transition-all">
                       <LucideShare2 :size="16"/>
                     </button>
                     <button class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-cyan hover:text-brand-dark transition-all">
                       <LucideLink :size="16"/>
                     </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      
      <!-- Image Lightbox Modal -->
      <div v-if="selectedImage" 
           class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
           @click="selectedImage = null">
        <button class="absolute top-6 right-6 text-white hover:text-brand-cyan transition-colors" @click="selectedImage = null">
          <LucideX :size="32" />
        </button>
        <img :src="selectedImage" class="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl" @click.stop />
      </div>

    </template>

    <EmptyState 
      v-else 
      title="Event Not Found" 
      message="The conference details could not be found." 
      class="pt-32"
    />
  </div>
</template>

<script setup>
import { 
  LucideCalendar, 
  LucideMapPin, 
  LucideArrowLeft,
  LucideShare2,
  LucideLink,
  LucideX
} from 'lucide-vue-next'
import { useGetConference } from '@/composables/modules/conferences/useGetConference'
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const selectedImage = ref(null)
const { loading, conference, getConference } = useGetConference()

const allGalleryImages = computed(() => {
  if (!conference.value) return []
  const images = []
  if (conference.value.bannerImage) {
    images.push(conference.value.bannerImage)
  }
  if (conference.value.galleryImages?.length) {
    images.push(...conference.value.galleryImages)
  }
  return images
})

onMounted(() => {
  if (route.params.id) {
    getConference(route.params.id)
  }
})
</script>
