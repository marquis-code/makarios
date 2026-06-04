<template>
  <footer class="bg-white border-t border-slate-100">

    <!-- ── Upper block ──────────────────────────────────────── -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        <!-- Brand column -->
        <div class="lg:col-span-4 space-y-6">
          <NuxtLink to="/" class="inline-flex items-center gap-3 group">
            <div class="w-10 h-10 rounded-xl border border-slate-200 overflow-hidden flex-shrink-0 group-hover:border-blue-200 transition-colors duration-300">
              <img
                src="@/assets/images/logo.jpeg"
                alt="SCPSN Logo"
                class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="flex flex-col leading-none gap-0.5">
              <span class="text-[14px] font-bold tracking-tight text-slate-900">
                {{ cmsConfig?.global?.siteName || 'SCPSN' }}
              </span>
              <span class="text-[9px] font-semibold tracking-[0.25em] text-blue-600 uppercase">Nigeria</span>
            </div>
          </NuxtLink>

          <p class="text-[14px] text-slate-500 leading-relaxed max-w-sm">
            {{ $t('footer.desc') }}
          </p>

          <!-- Social icons -->
          <div class="flex items-center gap-2.5">
            <a
              v-if="cmsConfig?.global?.socialLinks?.facebook"
              :href="cmsConfig.global.socialLinks.facebook"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="social-icon"
            >
              <LucideFacebook :size="15" />
            </a>
            <a
              v-if="cmsConfig?.global?.socialLinks?.twitter"
              :href="cmsConfig.global.socialLinks.twitter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              class="social-icon"
            >
              <LucideTwitter :size="15" />
            </a>
            <a
              v-if="cmsConfig?.global?.socialLinks?.linkedin"
              :href="cmsConfig.global.socialLinks.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="social-icon"
            >
              <LucideLinkedin :size="15" />
            </a>
            <a
              v-if="cmsConfig?.global?.socialLinks?.instagram"
              :href="cmsConfig.global.socialLinks.instagram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="social-icon"
            >
              <LucideInstagram :size="15" />
            </a>
          </div>

          <!-- Contact blurb -->
          <div class="pt-2 space-y-2">
            <a
              href="mailto:info@scpsn.org.ng"
              class="flex items-center gap-2 text-[13px] text-slate-500 hover:text-[#1d4e89] transition-colors group"
            >
              <LucideMail :size="13" class="flex-shrink-0 group-hover:text-[#1d4e89]" />
              info@scpsn.org.ng
            </a>
          </div>
        </div>

        <!-- Sitemap columns -->
        <div class="lg:col-span-5 grid grid-cols-2 gap-8">
          <div v-for="(links, groupTitle) in footerLinks" :key="groupTitle">
            <h4 class="text-[11px] font-semibold text-slate-400 tracking-widest uppercase mb-5">
              {{ groupTitle }}
            </h4>
            <ul class="space-y-3">
              <li v-for="link in links" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="text-[14px] text-slate-600 hover:text-[#1d4e89] transition-colors duration-200 font-medium inline-flex items-center gap-1.5 group"
                >
                  <span class="w-0 group-hover:w-2 h-px bg-blue-600 transition-all duration-300 flex-shrink-0"></span>
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter column -->
        <div class="lg:col-span-3 space-y-5">
          <div>
            <h4 class="text-[11px] font-semibold text-slate-400 tracking-widest uppercase mb-1.5">
              {{ $t('footer.updates') }}
            </h4>
            <p class="text-[14px] text-slate-500 leading-relaxed">
              {{ $t('footer.mailing_list') }}
            </p>
          </div>

          <!-- Email input -->
          <div class="relative">
            <input
              v-model="email"
              type="email"
              :placeholder="$t('footer.email_placeholder')"
              class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pr-14 text-[13px] text-slate-800 placeholder:text-slate-400
                     focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-400
                     transition-all duration-200"
            />
            <button
              class="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#1d4e89] hover:bg-blue-800 text-white rounded-lg flex items-center justify-center transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="loading"
              aria-label="Subscribe"
              @click="subscribeFooter"
            >
              <div v-if="loading" class="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <LucideArrowRight v-else :size="14" />
            </button>
          </div>

          <!-- Trust line -->
          <p class="text-[11px] text-slate-400 flex items-center gap-1.5">
            <LucideShieldCheck :size="12" class="text-emerald-500 flex-shrink-0" />
            No spam. Unsubscribe any time.
          </p>
        </div>

      </div>
    </div>

    <!-- ── Divider ─────────────────────────────────────────── -->
    <div class="border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-[12px] text-slate-400">
          &copy; {{ currentYear }} {{ cmsConfig?.global?.siteName || 'Society for Cellular Pathology Scientists of Nigeria' }}.
          All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <NuxtLink
            to="/privacy"
            class="text-[12px] text-slate-400 hover:text-[#1d4e89] transition-colors"
          >
            {{ $t('footer.privacy') }}
          </NuxtLink>
          <NuxtLink
            to="/terms"
            class="text-[12px] text-slate-400 hover:text-[#1d4e89] transition-colors"
          >
            {{ $t('footer.terms') }}
          </NuxtLink>
        </div>
      </div>
    </div>

  </footer>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import {
  LucideFacebook,
  LucideTwitter,
  LucideLinkedin,
  LucideInstagram,
  LucideArrowRight,
  LucideMail,
  LucideShieldCheck,
} from 'lucide-vue-next'
import { useNewsletter } from '@/composables/modules/newsletters/useNewsletter'
import { useCMS } from '@/composables/useCMS'

// ─── Types ───────────────────────────────────────────────────
interface FooterLink {
  label: string
  to: string
}

// ─── Composables ─────────────────────────────────────────────
const { cmsConfig } = useCMS()
const { loading, email, subscribeFooter } = useNewsletter()
const { t } = useI18n()

// ─── Computed ────────────────────────────────────────────────
const currentYear = computed<number>(() => new Date().getFullYear())

const footerLinks = computed<Record<string, FooterLink[]>>(() => ({
  [t('footer.quick_nav')]: [
    { label: t('footer.scientific_board'), to: '/about'                   },
    { label: t('footer.upcoming_conf'),    to: '/conferences'             },
    { label: t('footer.member_portal'),    to: 'https://member.scpsn.com' },
  ],
  [t('footer.resources')]: [
    { label: t('footer.journal_archives'),    to: '/abstracts' },
    { label: t('footer.protocol_guidelines'), to: '/about'     },
    { label: t('footer.gallery'),             to: '/gallery'   },
    { label: t('footer.news_media'),          to: '/'          },
    { label: t('footer.contact_support'),     to: '/contact'   },
  ],
}))
</script>


<style scoped>
/* ── Social icon button ────────────────────────────────────── */
.social-icon {
  @apply w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center
         text-slate-500 hover:text-[#1d4e89] hover:border-blue-200 hover:bg-blue-50
         transition-all duration-200;
}
</style>