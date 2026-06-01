<template>
  <div class="min-h-screen bg-slate-50 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-dark/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

    <div class="container mx-auto px-6 py-32 relative z-10">
      <div class="max-w-4xl mb-24 space-y-6">
        <span class="inline-block px-5 py-2 glass text-brand-cyan font-black text-sm  tracking-[0.3em] rounded-full">
           Global Events
        </span>
        <h1 class="text-6xl md:text-7xl font-black text-brand-dark tracking-tighter leading-none">
           Scientific <span class="text-gradient">Convergences</span>.
        </h1>
        <p class="text-xl text-slate-500 max-w-2xl font-medium leading-relaxed">
           Stay at the forefront of cellular pathology by attending our world-class congresses, specialized workshops, and research symposia.
        </p>
      </div>

      <!-- Featured Conference -->
      <div class="mb-32">
        <div class="glass-dark rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px] relative group">
          <div class="lg:w-1/2 relative overflow-hidden">
            <div class="absolute inset-0 bg-brand-dark/40 z-10"></div>
            <img src="https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg" class="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" alt="Featured Conference" />
            <div class="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent z-20"></div>
          </div>
          
          <div class="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center relative z-30">
            <div class="flex items-center gap-4 mb-8">
               <span class="w-12 h-[1px] bg-brand-cyan"></span>
               <span class="text-sm font-black  -[0.4em] text-brand-cyan">Next Major Event</span>
            </div>
            
            <h3 class="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">THE 2ND INTERNATIONAL <br/> CONGRES 2026.</h3>
            
            <p class="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
              Join elite practitioners in Abuja for an intensive exploration of "Strengthening Laboratory Capacity in Africa" through the lens of modern oncology diagnosis.
            </p>

            <div class="grid grid-cols-2 gap-10 mb-12">
               <div class="space-y-2">
                 <p class="text-[10px] text-brand-cyan font-black  tracking-widest">Date Range</p>
                 <div class="flex items-center gap-3 text-white">
                    <LucideCalendar :size="18" class="text-brand-cyan" />
                    <p class="text-lg font-bold">Sept 27 — 30, 2026</p>
                 </div>
               </div>
               <div class="space-y-2">
                 <p class="text-[10px] text-brand-cyan font-black  tracking-widest">Venue</p>
                 <div class="flex items-center gap-3 text-white">
                    <LucideMapPin :size="18" class="text-brand-cyan" />
                    <p class="text-lg font-bold">Abuja — Nigeria</p>
                 </div>
               </div>
            </div>

            <div class="flex flex-wrap gap-6">
              <button class="btn-premium">Secure Your Seat</button>
              <NuxtLink to="/abstracts" class="btn-outline-premium !text-white !border-white/10 !glass hover:!bg-white hover:!text-brand-dark">Submit Abstract</NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Past Conferences Heading -->
      <div class="flex items-center justify-between mb-16 px-2">
         <h3 class="text-3xl font-black text-brand-dark tracking-tighter">Event Archives</h3>
         <!-- {{ conferences }} -->
         <NuxtLink to="/" class="text-sm font-black  tracking-[0.2em] text-brand-cyan flex items-center gap-2 group">
            View All History
            <LucideArrowRight :size="16" class="group-hover:translate-x-1 transition-transform" />
         </NuxtLink>
      </div>

      <LoadingState v-if="loading" />
      
      <div v-else-if="conferences.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="conference in conferences" :key="conference._id" @click="selectedArchive = conference; isArchiveModalOpen = true" class="interactive-card p-0 group overflow-hidden h-[450px] cursor-pointer">
           <div class="h-2/3 overflow-hidden relative">
              <img :src="conference.bannerImage || 'https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg'" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" :alt="conference.title" />
              <div class="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-all"></div>
              <div class="absolute top-6 right-6 h-10 px-4 glass-dark rounded-xl flex items-center text-[10px] font-black text-white  tracking-widest">
                 {{ conference.startDate ? new Date(conference.startDate).getFullYear() : 'Archive' }}
              </div>
           </div>
           <div class="p-8 space-y-4">
              <p class="text-[10px] font-black text-brand-cyan  tracking-[0.2em]">{{ conference.startDate ? new Date(conference.startDate).toLocaleDateString() : '' }}</p>
              <h4 class="text-xl font-bold text-brand-dark leading-tight group-hover:text-brand-cyan transition-colors line-clamp-2">
                {{ conference.title }}
              </h4>
           </div>
        </div>
      </div>

    <EmptyState 
      v-else 
      title="No specialized events found in the archives." 
      message="Check back later for recent scientific updates and upcoming conferences." 
    />

    <!-- Archive Modal -->
    <div v-if="isArchiveModalOpen && selectedArchive" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm" @click="isArchiveModalOpen = false"></div>
      <div class="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10">
        <div class="p-8">
          <button @click="isArchiveModalOpen = false" class="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors">
            <LucideX :size="20" />
          </button>
          
          <div class="mb-8 pr-12">
             <span class="inline-block px-3 py-1 bg-brand-cyan/10 text-brand-cyan font-black text-[10px] tracking-widest rounded-lg mb-4 uppercase">
               Archived Event
             </span>
             <h2 class="text-3xl font-black text-brand-dark mb-4 leading-tight">{{ selectedArchive.title }}</h2>
             <div class="flex flex-wrap gap-6 text-sm font-bold text-slate-500">
               <div class="flex items-center gap-2 text-brand-cyan"><LucideCalendar :size="16" /> <span class="text-slate-600">{{ selectedArchive.startDate ? new Date(selectedArchive.startDate).toLocaleDateString() : 'TBA' }}</span></div>
               <div class="flex items-center gap-2 text-brand-cyan"><LucideMapPin :size="16" /> <span class="text-slate-600">{{ selectedArchive.venue || 'TBA' }}</span></div>
             </div>
          </div>
          
          <div class="space-y-6">
            <div v-if="selectedArchive.description">
              <h3 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Description</h3>
              <p class="text-slate-600 leading-relaxed font-medium whitespace-pre-wrap">{{ selectedArchive.description }}</p>
            </div>
            <div v-if="selectedArchive.location">
              <h3 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Full Address</h3>
              <p class="text-slate-600 leading-relaxed font-medium">{{ selectedArchive.location }}</p>
            </div>
            <div v-if="selectedArchive.pricing && selectedArchive.pricing.length">
              <h3 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Pricing</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div v-for="price in selectedArchive.pricing" :key="price._id" class="p-4 rounded-xl border border-slate-100 bg-slate-50">
                    <p class="text-sm font-bold text-slate-800 mb-1">{{ price.category }}</p>
                    <p class="text-brand-cyan font-black">₦{{ price.amount.toLocaleString() }}</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { 
  LucideCalendar, 
  LucideMapPin, 
  LucideArrowRight, 
  LucideDatabase,
  LucideX
} from 'lucide-vue-next'
import { useGetConferences } from '@/composables/modules/conferences/useGetConferences'
import { onMounted, ref } from 'vue'

const isArchiveModalOpen = ref(false)
const selectedArchive = ref(null)

const { loading, conferences, getConferences } = useGetConferences()

onMounted(() => {
  getConferences()
})
</script>
