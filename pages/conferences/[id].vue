<template>
  <div class="min-h-screen bg-slate-50 relative overflow-hidden pt-24 pb-32">
    <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10 max-w-4xl">
      <NuxtLink to="/conferences" class="inline-flex items-center gap-2 text-sm font-black text-slate-500 hover:text-brand-cyan transition-colors mb-10">
        <LucideArrowLeft :size="16" /> Back to Conferences
      </NuxtLink>

      <LoadingState v-if="loading" />
      
      <div v-else-if="conference" class="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
        <!-- Banner Image -->
        <div class="w-full h-80 sm:h-[400px] bg-slate-100 relative">
          <img :src="conference.bannerImage || 'https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg'" class="w-full h-full object-contain" :alt="conference.title" />
          <div class="absolute top-6 right-6 h-10 px-4 glass-dark rounded-xl flex items-center text-[10px] font-black text-white tracking-widest z-10">
            {{ conference.status ? conference.status.toUpperCase() : 'EVENT' }}
          </div>
        </div>

        <!-- Content -->
        <div class="p-10 md:p-16">
          <div class="mb-10">
             <span class="inline-block px-3 py-1 bg-brand-cyan/10 text-brand-cyan font-black text-[10px] tracking-widest rounded-lg mb-4 uppercase">
               {{ conference.startDate ? new Date(conference.startDate).getFullYear() : 'Special Event' }}
             </span>
             <h1 class="text-4xl md:text-5xl font-black text-brand-dark mb-6 leading-tight">{{ conference.title }}</h1>
             
             <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-bold text-slate-500 mb-8 border-b border-slate-100 pb-8">
               <div class="flex items-center gap-3">
                 <div class="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0">
                    <LucideCalendar :size="18" />
                 </div>
                 <div>
                    <p class="text-[10px] uppercase tracking-widest text-slate-400">Date</p>
                    <span class="text-slate-700 text-base">{{ conference.startDate ? new Date(conference.startDate).toLocaleDateString() : 'TBA' }}</span>
                 </div>
               </div>
               <div class="flex items-center gap-3">
                 <div class="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0">
                    <LucideMapPin :size="18" />
                 </div>
                 <div>
                    <p class="text-[10px] uppercase tracking-widest text-slate-400">Location</p>
                    <span class="text-slate-700 text-base">{{ conference.venue || 'TBA' }}</span>
                 </div>
               </div>
             </div>
          </div>
          
          <div class="space-y-10">
            <div v-if="conference.description">
              <h3 class="text-sm font-black text-brand-dark uppercase tracking-widest mb-4 flex items-center gap-2">
                <LucideInfo :size="16" class="text-brand-cyan"/> Description
              </h3>
              <p class="text-slate-600 text-lg leading-relaxed font-medium whitespace-pre-wrap">{{ conference.description }}</p>
            </div>
            
            <div v-if="conference.location">
              <h3 class="text-sm font-black text-brand-dark uppercase tracking-widest mb-4 flex items-center gap-2">
                <LucideMapPin :size="16" class="text-brand-cyan"/> Full Address
              </h3>
              <p class="text-slate-600 text-lg leading-relaxed font-medium">{{ conference.location }}</p>
            </div>
            
            <div v-if="conference.pricing && conference.pricing.length">
              <h3 class="text-sm font-black text-brand-dark uppercase tracking-widest mb-4 flex items-center gap-2">
                <LucideTag :size="16" class="text-brand-cyan"/> Registration Pricing
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div v-for="price in conference.pricing" :key="price._id" class="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-brand-cyan/30 transition-colors">
                    <p class="text-sm font-bold text-slate-800 mb-2">{{ price.category }}</p>
                    <p class="text-2xl text-brand-cyan font-black">₦{{ price.amount.toLocaleString() }}</p>
                 </div>
              </div>
            </div>
          </div>

          <div class="mt-12 pt-8 border-t border-slate-100 flex justify-end">
            <button v-if="conference.status === 'upcoming'" class="btn-premium">Register for Event</button>
          </div>
        </div>
      </div>
      
      <EmptyState 
        v-else 
        title="Event Not Found" 
        message="The conference details could not be found." 
      />
    </div>
  </div>
</template>

<script setup>
import { 
  LucideCalendar, 
  LucideMapPin, 
  LucideArrowLeft,
  LucideInfo,
  LucideTag
} from 'lucide-vue-next'
import { useGetConference } from '@/composables/modules/conferences/useGetConference'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { loading, conference, getConference } = useGetConference()

onMounted(() => {
  if (route.params.id) {
    getConference(route.params.id)
  }
})
</script>
