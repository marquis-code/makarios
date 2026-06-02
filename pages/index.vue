<template>
  <div class="overflow-hidden">
    <!-- Premium Hero Section -->
    <section class="relative h-screen min-h-[750px] overflow-hidden flex items-center justify-center">
      <div 
        v-for="(slide, index) in activeSlides" 
        :key="index"
        :class="['absolute inset-0 transition-all duration-[2000ms] ease-out', activeSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none']"
      >
        <div class="absolute inset-0 bg-black/60 z-10"></div>
        <div class="absolute inset-0 bg-gradient-to-tr from-[#033958] via-transparent to-black/40 z-10"></div>
        <img :src="slide.image" class="w-full h-full object-cover" :alt="slide.title" />
        
        <div class="absolute inset-0 z-20 container mx-auto px-6 flex flex-col justify-center">
          <div class="max-w-4xl space-y-6 md:space-y-10" :class="activeSlide === index ? 'translate-y-0 opacity-100 transition-all duration-1000 delay-500' : 'translate-y-20 opacity-0'">
             <div class="flex">
               <span class="px-5 py-2 glass text-brand-cyan font-black text-sm  tracking-[0.3em] rounded-full border border-white/20">
                 {{ slide.tag }}
               </span>
             </div>
             <h1 class="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[1] tracking-tighter drop-shadow-2xl">
               {{ slide.title }}<span class="text-brand-accent">.</span>
             </h1>
             <p class="text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed font-medium drop-shadow-lg opacity-90">
               {{ slide.desc }}
             </p>
             <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
               <NuxtLink to="/membership" class="text-sm font-black bg-black text-white px-6 py-3 text-center rounded-lg">Join the Society</NuxtLink>
               <NuxtLink to="/about" class="text-sm font-black bg-black text-white px-6 py-3 rounded-lg text-center !glass">Our Mission</NuxtLink>
             </div>
          </div>
        </div>
      </div>

      <!-- Slide Controls -->
      <div class="absolute bottom-12 right-12 z-30 flex items-center gap-6">
        <button 
          v-for="i in activeSlides.length" 
          :key="i"
          @click="activeSlide = i-1"
          :class="['h-1.5 transition-all duration-500 rounded-full', activeSlide === i-1 ? 'w-20 bg-brand-cyan' : 'w-4 bg-white/30']"
        ></button>
      </div>
    </section>

    <!-- Infinite Scroll Marquee -->
    <section class="py-12 bg-slate-900 overflow-hidden relative border-y border-white/5">
       <div class="marquee-container">
          <div class="marquee-content">
             <div v-for="(item, i) in marqueeItems" :key="i" class="glass-dark px-10 py-6 rounded-2xl flex items-center gap-6 border border-white/5">
                <div class="w-12 h-12 bg-brand-cyan/20 rounded-xl flex items-center justify-center text-brand-cyan">
                   <component :is="item.icon" :size="24" />
                </div>
                <div>
                   <p class="text-sm font-black  text-slate-400">{{ item.tag }}</p>
                   <p class="text-white font-bold">{{ item.label }}</p>
                </div>
             </div>
             <!-- Duplicate for seamless scroll -->
             <div v-for="(item, i) in marqueeItems" :key="'dup-'+i" class="glass-dark px-10 py-6 rounded-2xl flex items-center gap-6 border border-white/5">
                <div class="w-12 h-12 bg-brand-cyan/20 rounded-xl flex items-center justify-center text-brand-cyan">
                   <component :is="item.icon" :size="24" />
                </div>
                <div>
                   <p class="text-sm font-black  text-slate-400">{{ item.tag }}</p>
                   <p class="text-white font-bold">{{ item.label }}</p>
                </div>
             </div>
          </div>
       </div>
    </section>

    <!-- AdBanner: BELOW_HERO -->
    <section v-if="groupedAdverts.BELOW_HERO?.length" class="bg-white pt-16 pb-8">
      <div class="container mx-auto px-6">
        <AdBanner :adverts="groupedAdverts.BELOW_HERO" />
      </div>
    </section>



    <!-- Latest Happenings Section -->
    <section v-if="upcomingConferences.length > 0" class="py-24 bg-slate-50 relative">
       <div class="container mx-auto px-6">
          <div class="flex items-center justify-between mb-16">
             <h2 class="text-4xl md:text-5xl font-black text-brand-dark tracking-tighter">{{ $t('home.latest_happenings') }}</h2>
             <NuxtLink to="/conferences" class="text-sm font-black tracking-[0.2em] text-brand-cyan flex items-center gap-2 group">
                {{ $t('home.view_all_events') }}
                <LucideArrowRight :size="16" class="group-hover:translate-x-1 transition-transform" />
             </NuxtLink>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <NuxtLink 
              v-for="conference in upcomingConferences" 
              :key="conference._id" 
              :to="`/conferences/${conference._id}`"
              class="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 group block hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
               <div class="h-56 overflow-hidden relative bg-slate-100 flex items-center justify-center p-4">
                  <img :src="conference.bannerImage || 'https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg'" class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" :alt="conference.title" />
                  <div class="absolute top-4 right-4 h-8 px-3 glass-dark rounded-lg flex items-center text-[10px] font-black text-white tracking-widest z-10">
                     {{ conference.startDate ? new Date(conference.startDate).toLocaleDateString() : 'Upcoming' }}
                  </div>
               </div>
               <div class="p-8 space-y-4">
                  <div class="flex items-center gap-2 text-brand-cyan text-sm font-bold">
                     <LucideMapPin :size="16" />
                     <span>{{ conference.venue || 'TBA' }}</span>
                  </div>
                  <h4 class="text-xl font-bold text-brand-dark leading-tight group-hover:text-brand-cyan transition-colors line-clamp-2">
                    {{ conference.title }}
                  </h4>
                  <p class="text-slate-500 line-clamp-3 text-sm">{{ conference.description }}</p>
                  <span class="inline-block mt-4 text-sm font-black text-brand-blue group-hover:text-brand-cyan transition-colors">{{ $t('home.read_more') }} &rarr;</span>
               </div>
            </NuxtLink>
          </div>
       </div>
    </section>

    <!-- Core Pillars Section -->
    <section class="py-32 bg-white relative">
       <div class="container mx-auto px-6">
          <div class="flex flex-col lg:flex-row justify-between items-end gap-10 mb-24">
             <div class="max-w-2xl space-y-6">
                <h2 class="text-5xl md:text-6xl font-black text-brand-blue tracking-tighter">
                   {{ cmsConfig?.public?.home?.homeHeaders?.pillarsTitle || $t('home.advancing_frontiers') }}
                </h2>
                <p class="text-lg text-slate-500 leading-relaxed font-medium">
                   {{ cmsConfig?.public?.home?.homeHeaders?.pillarsSubtitle || $t('home.society_committed') }}
                </p>
             </div>
             <NuxtLink to="/about" class="btn-outline-premium">{{ $t('home.learn_more') }}</NuxtLink>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div v-for="(p, i) in activePillars" :key="i" class="p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:border-brand-cyan/30 hover:shadow-2xl hover:shadow-cyan-900/5 transition-all duration-500 group">
                <div class="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                   <component :is="p.icon" :size="28" />
                </div>
                <h3 class="text-2xl font-black text-brand-blue mb-4 leading-tight">{{ p.title }}</h3>
                <p class="text-slate-500 leading-relaxed font-medium text-base">{{ p.desc }}</p>
             </div>
          </div>
       </div>
    </section>

    <!-- Scientific Excellence Stats -->
    <section class="py-24 bg-brand-blue overflow-hidden relative">
       <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div class="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-cyan rounded-full blur-[160px]"></div>
          <div class="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-red rounded-full blur-[160px]"></div>
       </div>
       
       <div class="container mx-auto px-6 relative z-10">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-12">
             <div v-for="s in activeStats" :key="s.label" class="text-center animate-on-scroll">
                <div class="text-6xl font-black text-white tracking-tighter">{{ s.value }}<span class="text-brand-cyan">+</span></div>
                <div class="text-base font-black  tracking-[0.3em] text-brand-cyan">{{ s.label }}</div>
             </div>
          </div>
       </div>
    </section>

    <!-- AdBanner: IN_CONTENT_1 -->
    <section v-if="groupedAdverts.IN_CONTENT_1?.length" class="bg-white py-16">
      <div class="container mx-auto px-6">
        <AdBanner :adverts="groupedAdverts.IN_CONTENT_1" />
      </div>
    </section>

    <!-- Cinematic Video Section -->
    <!-- <section class="relative h-[80vh] min-h-[600px] overflow-hidden flex items-center justify-center">
       <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-brand-blue/60 backdrop-blur-[2px] z-10"></div>
          <video 
            autoplay 
            muted 
            loop 
            playsinline 
            class="w-full h-full object-cover scale-110"
          >
             <source src="@/assets/images/intro.mp4" type="video/mp4">
          </video>
       </div>

       <div class="container mx-auto px-6 relative z-20">
          <div class="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[4rem] border border-white/20 shadow-2xl text-center space-y-8 animate-on-scroll">
             <LucidePlayCircle :size="80" class="mx-auto text-brand-cyan animate-pulse cursor-pointer hover:scale-110 transition-transform" />
             <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter">Advancing Diagnostics <br/> <span class="text-brand-cyan">With Every Slide.</span></h2>
             <p class="text-xl text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto">
                "Our commitment to precision in cellular diagnosis is not just a standard—it's a promise to the patients whose lives depend on our scientific mastery."
             </p>
             <div class="pt-6">
                <div class="inline-flex items-center gap-4 px-6 py-2 glass-dark rounded-full">
                   <span class="w-2 h-2 bg-brand-red rounded-full animate-ping"></span>
                   <span class="text-sm font-black text-white  leading-none">SCPSN Documentary Premiering 2026</span>
                </div>
             </div>
          </div>
       </div>
    </section> -->

    <!-- Project Scientific Initiatives -->
    <section class="py-32 bg-white relative overflow-hidden">
       <!-- Subtle Background Accents -->
       <div class="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <LucideDna :size="800" class="absolute -top-40 -left-60 text-brand-blue rotate-12" />
       </div>

       <div class="container mx-auto px-6 relative z-10">
          <div class="flex flex-col md:flex-row justify-between items-center gap-10 mb-24">
             <div class="space-y-4">
                <h2 class="text-5xl font-black text-brand-blue tracking-tighter">
                   {{ cmsConfig?.public?.home?.homeHeaders?.initiativesTitle || $t('home.strategic_initiatives') }}
                </h2>
                <p class="text-slate-500 font-medium text-lg">
                   {{ cmsConfig?.public?.home?.homeHeaders?.initiativesSubtitle || $t('home.leading_transformations') }}
                </p>
             </div>
             <div class="flex gap-4">
                <button class="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all duration-300">
                   <LucideArrowLeft :size="20" />
                </button>
                <button class="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all duration-300">
                   <LucideArrowRight :size="20" />
                </button>
             </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
             <div v-for="(ini, i) in activeInitiatives" :key="i" class="initiative-card group p-1 tracking-tight">
                <div class="bg-slate-50 rounded-[3rem] p-12 h-full border border-slate-100 group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-500 relative overflow-hidden">
                   <div class="absolute -right-10 -bottom-10 opacity-[0.05] group-hover:opacity-10 text-brand-blue group-hover:text-white transition-all">
                      <component :is="ini.icon" :size="200" />
                   </div>
                   
                   <div class="relative z-10 space-y-8">
                      <div class="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform duration-500">
                         <component :is="ini.icon" :size="24" />
                      </div>
                      <div class="space-y-4">
                         <h3 class="text-2xl font-black text-brand-blue group-hover:text-white transition-colors leading-tight">{{ ini.title }}</h3>
                         <p class="text-slate-500 group-hover:text-slate-200 transition-colors font-medium text-base leading-relaxed">{{ ini.desc }}</p>
                      </div>
                      <NuxtLink :to="ini.to" class="flex items-center gap-3 text-base font-black text-brand-red group-hover:text-brand-cyan transition-colors  pt-4">
                         {{ $t('home.exploration') }}
                         <LucideArrowRight :size="16" />
                      </NuxtLink>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>

    <!-- Dynamic Sponsors Marquee -->
    <section v-if="sponsors.length > 0" class="py-16 bg-slate-50 border-y border-slate-200 overflow-hidden">
       <div class="container mx-auto px-6 mb-10 text-center">
          <p class="text-sm font-black text-slate-400  -[0.4em]">{{ $t('home.global_collab_sponsors') }}</p>
       </div>
       <div class="flex items-center gap-16 animate-marquee whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500 px-10">
          <div v-for="n in 10" :key="n" class="flex items-center gap-16">
             <template v-for="sponsor in sponsors" :key="sponsor._id">
                <a v-if="sponsor.websiteUrl" :href="sponsor.websiteUrl" target="_blank" class="block">
                   <img v-if="sponsor.logoUrl" :src="sponsor.logoUrl" :alt="sponsor.name" class="h-12 object-contain" />
                   <span v-else class="text-3xl font-black text-slate-300 tracking-tighter">{{ sponsor.name }}</span>
                </a>
                <div v-else>
                   <img v-if="sponsor.logoUrl" :src="sponsor.logoUrl" :alt="sponsor.name" class="h-12 object-contain" />
                   <span v-else class="text-3xl font-black text-slate-300 tracking-tighter">{{ sponsor.name }}</span>
                </div>
             </template>
          </div>
       </div>
    </section>
    
    <!-- Static Marquee Fallback if no sponsors -->
    <section v-else class="py-16 bg-slate-50 border-y border-slate-200 overflow-hidden">
       <div class="container mx-auto px-6 mb-10 text-center">
          <p class="text-sm font-black text-slate-400  -[0.4em]">{{ $t('home.global_collab') }}</p>
       </div>
       <div class="flex items-center gap-16 animate-marquee whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500 px-10">
          <div v-for="n in 10" :key="n" class="flex items-center gap-16 grayscale">
             <span class="text-3xl font-black text-slate-300 tracking-tighter">WHO</span>
             <span class="text-3xl font-black text-slate-300 tracking-tighter">IFCC</span>
             <span class="text-3xl font-black text-slate-300 tracking-tighter">ASCP</span>
             <span class="text-3xl font-black text-slate-300 tracking-tighter">IPH</span>
             <span class="text-3xl font-black text-slate-300 tracking-tighter">MLSCN</span>
          </div>
       </div>
    </section>

    <!-- Membership Tiers Section -->
    <section class="py-32 bg-white relative">
       <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-20 space-y-6">
             <h2 class="text-5xl font-black text-brand-blue tracking-tighter">{{ $t('home.member_tiers') }}</h2>
             <p class="text-slate-500 font-medium">{{ $t('home.join_community') }}</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-10">
             <div v-for="(tier, i) in activeTiers" :key="i" class="p-12 rounded-[3rem] border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                <h3 class="text-2xl font-black text-brand-blue mb-2">{{ tier.title }}</h3>
                <div class="text-4xl font-black text-brand-cyan mb-8">₦{{ tier.price }}<span class="text-base text-slate-400 font-bold">/year</span></div>
                <ul class="space-y-4 mb-10">
                   <li v-for="feat in tier.features" :key="feat" class="flex items-center gap-3 text-base font-medium text-slate-500">
                      <LucideShieldCheck class="text-emerald-500" :size="16" />
                      {{ feat }}
                   </li>
                </ul>
                <NuxtLink to="/membership" class="block w-full py-4 text-center bg-brand-blue text-white rounded-2xl text-base font-black  hover:bg-brand-red transition-colors">
                  {{ tier.title.includes('Renewal') ? $t('home.renew_now') : $t('home.join_now') }}
                </NuxtLink>
             </div>
          </div>
       </div>
    </section>

    <!-- AdBanner: ABOVE_FOOTER -->
    <section v-if="groupedAdverts.ABOVE_FOOTER?.length" class="bg-slate-50 pt-16 pb-8">
      <div class="container mx-auto px-6">
        <AdBanner :adverts="groupedAdverts.ABOVE_FOOTER" />
      </div>
    </section>

    <!-- Leadership & Scientific Board Preview -->
    <section class="py-32 bg-slate-50">
       <div class="container mx-auto px-6">
          <div class="text-center max-w-3xl mx-auto mb-20 space-y-6">
             <h2 class="text-5xl font-black text-brand-blue tracking-tighter">{{ $t('home.our_board') }}</h2>
             <p class="text-slate-500 font-medium">{{ $t('home.board_subtitle') }}</p>
          </div>

          <div v-if="loadingExcos" class="flex justify-center py-20">
             <div class="animate-spin rounded-xl h-10 w-10 border-t-2 border-brand-blue"></div>
          </div>

          <div v-else-if="excos.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-10">
             <div v-for="exco in excos" :key="exco._id" class="relative group overflow-hidden rounded-[2rem] aspect-[4/5] bg-white border border-slate-100 shadow-sm transition-all hover:shadow-xl">
                <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-80 z-10 transition-opacity group-hover:opacity-100"></div>
                
                <img v-if="exco.profilePicture" :src="exco.profilePicture" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" :alt="exco.name" />
                <div v-else class="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                   <LucideUser :size="64" />
                </div>

                <div class="absolute bottom-8 left-8 right-8 z-20">
                   <p class="text-brand-cyan font-black  tracking-[0.2em] text-[8px] mb-1.5">{{ exco.position || 'Executive Member' }}</p>
                   <h3 class="text-xl font-black text-white leading-tight">{{ exco.name }}</h3>
                </div>
             </div>
          </div>

          <EmptyState 
            v-else 
            :title="$t('home.board_under_constitution')" 
            :message="$t('home.board_finalizing')"
          />
       </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useGetExcos } from '@/composables/modules/excos/useGetExcos'
import { useAdverts } from '@/composables/modules/adverts/useAdverts'
import { useSponsors } from '@/composables/modules/sponsors/useSponsors'
import { useGetConferences } from '@/composables/modules/conferences/useGetConferences'
import { useCMS } from '@/composables/useCMS'
// import hero1 from "@/assets/images/hero1.jpg"
// import hero2 from "@/assets/images/hero2.jpg"
// import hero3 from "@/assets/images/hero3.jpg"
import hero1 from "@/assets/images/gallery/photo4.jpeg"
import hero2 from "@/assets/images/gallery/photo3.jpeg"
import hero3 from "@/assets/images/gallery/photo2.jpeg"

const { cmsConfig } = useCMS()

const { loading: loadingExcos, excos, getExcos } = useGetExcos()
const { groupedAdverts, fetchAdverts } = useAdverts()
const { sponsors, fetchSponsors } = useSponsors()
const { loading: loadingConferences, conferences, getConferences } = useGetConferences()

const upcomingEvent = computed(() => {
  return conferences.value.find(c => c.status === 'upcoming') || null
})

const upcomingConferences = computed(() => {
  return [...conferences.value]
    .filter(c => c.status === 'upcoming')
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3)
})
import { 
    LucideMicroscope, 
    LucideFlaskConical, 
    LucideGraduationCap, 
    LucideGlobe,
    LucideLibrary,
    LucideDna,
    LucideStethoscope,
    LucideUsers,
    LucideCalendar,
    LucideAward,
    LucidePlayCircle,
    LucideArrowLeft,
    LucideArrowRight,
    LucideShieldCheck,
    LucideUser,
    LucideMapPin
} from 'lucide-vue-next'

const marqueeItems = ref([
  { tag: 'Focus', label: 'Precision Diagnostics', icon: LucideMicroscope },
  { tag: 'Focus', label: 'Cellular Analysis', icon: LucideFlaskConical },
  { tag: 'Focus', label: 'Molecular Research', icon: LucideDna },
  { tag: 'Focus', label: 'Global Collaboration', icon: LucideGlobe },
  { tag: 'Focus', label: 'Professional Training', icon: LucideGraduationCap }
])

const activeSlide = ref(0)
let timer = null

const activeSlides = computed(() => {
  if (cmsConfig.value?.public?.home?.slides?.length) {
    return cmsConfig.value.public.home.slides.map(s => ({
       tag: s.tag,
       title: s.title,
       desc: s.desc,
       image: s.image || hero2
    }))
  }
  return [
    {
      tag: 'Welcome to SCPSN',
      title: 'Precision in Cellular Pathology',
      desc: 'Empowering medical laboratory scientists specializing in Histopathology and Cytopathology through innovation and global excellence.',
      image: hero1
    },
    {
      tag: 'Academic Mastery',
      title: 'The Future of Histology',
      desc: 'Setting the benchmark for laboratory practices in Nigeria and the West African sub-region through rigorous standardization.',
      image: hero2
      // image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070&auto=format&fit=crop'
    },
    {
      tag: 'Scientific Innovation',
      title: 'Mastery in Diagnostics',
      desc: 'Access advanced research resources, international conference materials, and world-class scientific journals.',
      image: hero3
    }
  ]
})

const activePillars = computed(() => {
  if (cmsConfig.value?.public?.home?.pillars?.length) {
    return cmsConfig.value.public.home.pillars.map((p, i) => ({
      title: p.title,
      desc: p.desc,
      icon: [LucideDna, LucideFlaskConical, LucideLibrary, LucideStethoscope][i % 4]
    }))
  }
  return [
    { title: 'Advanced Research', desc: 'Facilitating cutting-edge investigative studies in molecular diagnostics and genomic pathology.', icon: LucideDna },
    { title: 'Standardization', desc: 'Implementing national and regional protocols for high-precision histopathology processing.', icon: LucideFlaskConical },
    { title: 'Digital Library', desc: 'Exclusive access to our secure vault of peer-reviewed scientific journals and newsletters.', icon: LucideLibrary },
    { title: 'Mastery Portal', desc: 'Improving diagnostic accuracy through continuous training and international collaboration.', icon: LucideStethoscope },
  ]
})

const activeStats = computed(() => {
  if (cmsConfig.value?.public?.home?.stats?.length) {
    return cmsConfig.value.public.home.stats.map((s, i) => ({
      label: s.label,
      value: s.value,
      icon: [LucideUsers, LucideCalendar, LucideFlaskConical, LucideAward][i % 4]
    }))
  }
  return [
    { label: 'Qualified Scientists', value: '1,200', icon: LucideUsers },
    { label: 'Scientific Events', value: '82', icon: LucideCalendar },
    { label: 'Lab Networks', value: '450', icon: LucideFlaskConical },
    { label: 'Awards Issued', value: '45', icon: LucideAward },
  ]
})

const activeInitiatives = computed(() => {
  if (cmsConfig.value?.public?.home?.initiatives?.length) {
    return cmsConfig.value.public.home.initiatives.map((ini, i) => ({
      title: ini.title,
      desc: ini.desc,
      icon: [LucideGlobe, LucideMicroscope, LucideDna][i % 3],
      to: '/about'
    }))
  }
  return [
    { title: 'Digital Pathology Expansion', desc: 'Implementing Al-driven diagnostic tools in laboratories across Nigeria.', icon: LucideGlobe, to: '/about' },
    { title: 'Cancer Screening Project', desc: 'Collaborating with oncology centers for early histopathology detection.', icon: LucideMicroscope, to: '/conferences' },
    { title: 'Molecular Genetics Hub', desc: 'A dedicated research initiative for genomic cellular analysis.', icon: LucideDna, to: '/abstracts' },
  ]
})

const activeTiers = computed(() => {
  if (cmsConfig.value?.public?.home?.tiers?.length) {
    return cmsConfig.value.public.home.tiers
  }
  return [
    { title: 'New Registration', price: '20,000', features: ['Full association membership', 'Voting rights', 'Journal access', 'Conference discounts'] },
    { title: 'Membership Renewal', price: '10,000', features: ['Maintain active status', 'Continuous journal access', 'Resource vault', 'Mentorship'] }
  ]
})

onMounted(() => {
  fetchAdverts()
  fetchSponsors()
  getConferences()
  getExcos()
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))

  timer = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % activeSlides.value.length
  }, 6000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 40s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

.text-gradient {
  background: linear-gradient(to right, #1d4e89, #28AAE1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
