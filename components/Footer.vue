<template>
  <footer class="bg-[#033958] relative overflow-hidden pt-32 pb-16">
    <!-- Decorative Glow -->
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-24">
        <!-- Brand Block -->
        <div class="lg:col-span-1 space-y-8">
          <NuxtLink to="/" class="flex items-center gap-4 group">
            <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-xl group-hover:scale-110 transition-transform">
               <img src="@/assets/images/logo.jpeg" alt="Logo" class="object-contain" />
            </div>
            <div>
               <!-- <h3 class="text-base font-black text-white  tracking-tighter">SCPSN</h3> -->
               <!-- <p class="text-[10px] font-bold text-brand-cyan  leading-none">Instituting Excellence</p> -->
            </div>
          </NuxtLink>
          <p class="text-slate-400 text-base leading-relaxed font-medium">
            {{ $t('footer.desc') }}
          </p>
          <div class="flex gap-4">
            <a v-if="cmsConfig?.global?.socialLinks?.facebook" :href="cmsConfig.global.socialLinks.facebook" target="_blank" class="w-10 h-10 rounded-xl glass-dark flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-cyan transition-all duration-300">
               <LucideFacebook :size="18" />
            </a>
            <a v-if="cmsConfig?.global?.socialLinks?.twitter" :href="cmsConfig.global.socialLinks.twitter" target="_blank" class="w-10 h-10 rounded-xl glass-dark flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-cyan transition-all duration-300">
               <LucideTwitter :size="18" />
            </a>
            <a v-if="cmsConfig?.global?.socialLinks?.linkedin" :href="cmsConfig.global.socialLinks.linkedin" target="_blank" class="w-10 h-10 rounded-xl glass-dark flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-cyan transition-all duration-300">
               <LucideLinkedin :size="18" />
            </a>
            <a v-if="cmsConfig?.global?.socialLinks?.instagram" :href="cmsConfig.global.socialLinks.instagram" target="_blank" class="w-10 h-10 rounded-xl glass-dark flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-cyan transition-all duration-300">
               <LucideInstagram :size="18" />
            </a>
          </div>
        </div>

        <!-- Sitemap -->
        <div class="grid grid-cols-2 lg:col-span-2 gap-10">
          <div v-for="(group, title) in footerLinks" :key="title">
             <h4 class="text-sm font-black text-white  tracking-[0.2em] mb-8">{{ title }}</h4>
             <ul class="space-y-4">
                <li v-for="link in group" :key="link.to">
                   <NuxtLink :to="link.to" class="text-base text-slate-400 font-medium hover:text-brand-cyan transition-colors flex items-center group">
                      <span class="w-0 group-hover:w-3 h-[1px] bg-brand-cyan transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {{ link.label }}
                   </NuxtLink>
                </li>
             </ul>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="space-y-8">
           <h4 class="text-sm font-black text-white  tracking-[0.2em]">{{ $t('footer.updates') }}</h4>
           <p class="text-base text-slate-400 font-medium leading-relaxed">{{ $t('footer.mailing_list') }}</p>
           <div class="relative group">
              <input v-model="email" type="email" :placeholder="$t('footer.email_placeholder')" class="form-input !py-4 pr-16 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-brand-cyan">
               <button 
                @click="subscribeFooter" 
                :disabled="loading"
                class="absolute right-2 top-2 bottom-2 aspect-square bg-brand-cyan text-brand-dark rounded-xl flex items-center justify-center hover:scale-105 transition-all active:scale-95 disabled:opacity-50"
              >
                 <LucideArrowRight v-if="!loading" :size="18" />
                 <div v-else class="w-4 h-4 border-2 border-brand-dark/20 border-t-brand-dark rounded-full animate-spin"></div>
              </button>
           </div>
        </div>
      </div>

      <div class="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p class="text-[10px] font-black text-slate-500 ">
            &copy; {{ new Date().getFullYear() }} {{ cmsConfig?.global?.siteName || 'Society for Cellular Pathology Scientists of Nigeria' }}.
          </p>
         <div class="flex gap-8">
            <NuxtLink to="/privacy" class="text-[10px] font-black text-slate-500  hover:text-white transition-colors">{{ $t('footer.privacy') }}</NuxtLink>
            <NuxtLink to="/terms" class="text-[10px] font-black text-slate-500  hover:text-white transition-colors">{{ $t('footer.terms') }}</NuxtLink>
         </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { 
  LucideFacebook, 
  LucideTwitter, 
  LucideLinkedin, 
  LucideInstagram,
  LucideArrowRight 
} from 'lucide-vue-next'
import { useNewsletter } from '@/composables/modules/newsletters/useNewsletter'
import { useCMS } from '@/composables/useCMS'

const { cmsConfig } = useCMS()
const { loading, email, subscribeFooter } = useNewsletter()

const socials = [
  { icon: LucideFacebook },
  { icon: LucideTwitter },
  { icon: LucideLinkedin },
]

const { t } = useI18n()

const footerLinks = computed(() => ({
  [t('footer.quick_nav')]: [
    { label: t('footer.scientific_board'), to: '/about' },
    { label: t('footer.upcoming_conf'), to: '/conferences' },
    { label: t('footer.member_portal'), to: 'https://member.scpsn.com' },
    // { label: 'Payment Verification', to: '/payment' },
  ],
  [t('footer.resources')]: [
    { label: t('footer.journal_archives'), to: '/abstracts' },
    { label: t('footer.protocol_guidelines'), to: '/about' },
    { label: t('footer.gallery'), to: '/gallery' },
    { label: t('footer.news_media'), to: '/' },
    { label: t('footer.contact_support'), to: '/contact' },
  ]
}))
</script>
