<template>
  <header
    class="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
    :class="isMobileMenuOpen ? 'h-screen lg:h-auto' : ''"
  >
    <!-- ── Main nav bar ── -->
    <div
      class="mx-auto transition-all duration-500"
      :class="[
        isScrolled || !isHomePage
          ? 'max-w-full border-b border-slate-100 bg-white shadow-sm px-0'
          : 'max-w-7xl mt-4 px-4 sm:px-6'
      ]"
    >
      <nav
        class="flex items-center justify-between transition-all duration-300"
        :class="[
          isScrolled || !isHomePage
            ? 'px-4 sm:px-6 lg:px-8 py-3.5 bg-white'
            : 'bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm'
        ]"
      >
        <!-- ── Logo ── -->
        <NuxtLink
          to="/"
          class="flex items-center gap-3 group relative z-[110]"
          @click="isMobileMenuOpen = false"
        >
          <div class="w-9 h-9 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0 group-hover:border-blue-200 transition-colors duration-300">
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

        <!-- ── Desktop links ── -->
        <div class="hidden lg:flex items-center gap-0.5">
          <template v-for="link in navigation" :key="link.label">

            <!-- Simple link -->
            <NuxtLink
              v-if="!link.children"
              :to="link.to"
              class="nav-link"
              active-class="nav-link--active"
            >
              {{ link.label }}
            </NuxtLink>

            <!-- Dropdown -->
            <div
              v-else
              class="relative"
              @mouseenter="openDropdown(link.label)"
              @mouseleave="scheduleClose(link.label)"
            >
              <button
                class="nav-link flex items-center gap-1.5"
                :class="activeDropdown === link.label ? 'text-[#1d4e89] bg-blue-50' : ''"
              >
                {{ link.label }}
                <LucideChevronDown
                  :size="13"
                  class="transition-transform duration-300 text-slate-400"
                  :class="activeDropdown === link.label ? 'rotate-180 text-blue-600' : ''"
                />
              </button>

              <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 translate-y-1 scale-95"
                enter-to-class="opacity-100 translate-y-0 scale-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0 scale-100"
                leave-to-class="opacity-0 translate-y-1 scale-95"
              >
                <div
                  v-if="activeDropdown === link.label"
                  class="absolute top-[calc(100%+8px)] left-0 w-64 z-[200] origin-top-left"
                  @mouseenter="cancelClose(link.label)"
                  @mouseleave="scheduleClose(link.label)"
                >
                  <!-- Arrow tip -->
                  <div class="absolute -top-1.5 left-5 w-3 h-3 bg-white border-l border-t border-slate-200 rotate-45 z-10"></div>

                  <div class="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden p-2 space-y-0.5">
                    <NuxtLink
                      v-for="child in link.children"
                      :key="child.to"
                      :to="child.to"
                      class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors duration-200 group/item"
                      @click="activeDropdown = null"
                    >
                      <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover/item:bg-[#1d4e89] group-hover/item:text-white transition-colors duration-200">
                        <component :is="child.icon" :size="14" v-if="child.icon" />
                        <span v-else class="text-[11px] font-semibold">{{ child.label.charAt(0) }}</span>
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <span class="text-[13px] font-semibold text-slate-800 leading-none">{{ child.label }}</span>
                        <span v-if="child.description" class="text-[11px] text-slate-400">{{ child.description }}</span>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </Transition>
            </div>

          </template>
        </div>

        <!-- ── Desktop right side ── -->
        <div class="hidden lg:flex items-center gap-2">
          <LanguageSwitcher class="text-slate-500" />

          <NuxtLink
            to="/appointments"
            class="inline-flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-semibold text-slate-600 hover:text-[#1d4e89] rounded-xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200"
          >
            <LucideCalendar :size="13" />
            {{ $t('nav.bookings') }}
          </NuxtLink>

          <a
            href="https://member.scpsn.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-semibold bg-[#1d4e89] hover:bg-blue-800 text-white rounded-xl transition-colors duration-200 shadow-sm"
          >
            <LucideUser :size="13" />
            {{ $t('nav.become_member') }}
          </a>
        </div>

        <!-- ── Mobile hamburger ── -->
        <button
          class="lg:hidden relative z-[110] w-9 h-9 rounded-xl border border-slate-200 bg-white flex flex-col items-center justify-center gap-[5px] hover:bg-slate-50 transition-colors"
          aria-label="Toggle navigation menu"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span :class="['ham-bar', isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : '']" />
          <span :class="['ham-bar w-3 self-end mr-2', isMobileMenuOpen ? 'opacity-0 translate-x-2' : '']" />
          <span :class="['ham-bar', isMobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : '']" />
        </button>
      </nav>
    </div>

    <!-- ── Mobile fullscreen menu ── -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden fixed inset-0 z-[105] bg-white flex flex-col pt-24 pb-8 px-5 overflow-y-auto"
      >
        <!-- Explicit close -->
        <button
          class="absolute top-5 right-5 w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors z-[120]"
          aria-label="Close menu"
          @click="isMobileMenuOpen = false"
        >
          <LucideX :size="18" />
        </button>

        <!-- Nav links -->
        <nav class="flex flex-col relative z-10 mb-auto">
          <template v-for="(link, i) in navigation" :key="link.label">

            <!-- With children -->
            <div v-if="link.children" class="border-b border-slate-100">
              <button
                class="w-full flex items-center justify-between py-4 group"
                @click="toggleMobileSubmenu(link.label)"
              >
                <div class="flex items-center gap-4">
                  <span class="text-[10px] font-semibold text-blue-300 font-mono tabular-nums">{{ String(i + 1).padStart(2, '0') }}</span>
                  <span class="text-[22px] font-bold text-slate-800 tracking-tight group-hover:text-[#1d4e89] transition-colors duration-200">
                    {{ link.label }}
                  </span>
                </div>
                <LucideChevronDown
                  :size="18"
                  class="text-slate-400 transition-transform duration-300"
                  :class="activeMobileSubmenu === link.label ? 'rotate-180 text-blue-600' : ''"
                />
              </button>

              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0"
              >
                <div v-show="activeMobileSubmenu === link.label" class="pl-10 pb-4 space-y-3 overflow-hidden">
                  <NuxtLink
                    v-for="child in link.children"
                    :key="child.to"
                    :to="child.to"
                    class="flex items-center gap-3 group/child py-1"
                    @click="isMobileMenuOpen = false"
                  >
                    <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover/child:bg-[#1d4e89] group-hover/child:text-white transition-colors duration-200">
                      <component :is="child.icon" :size="14" v-if="child.icon" />
                      <span v-else class="text-[11px] font-semibold">{{ child.label.charAt(0) }}</span>
                    </div>
                    <div>
                      <p class="text-[14px] font-semibold text-slate-700 group-hover/child:text-[#1d4e89] transition-colors">{{ child.label }}</p>
                      <p v-if="child.description" class="text-[11px] text-slate-400">{{ child.description }}</p>
                    </div>
                  </NuxtLink>
                </div>
              </Transition>
            </div>

            <NuxtLink
              v-else
              :to="link.to"
              class="flex items-center gap-4 py-4 border-b border-slate-100 group"
              @click="isMobileMenuOpen = false"
            >
              <span class="text-[10px] font-semibold text-blue-300 font-mono tabular-nums">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="text-[22px] font-bold text-slate-800 tracking-tight group-hover:text-[#1d4e89] group-hover:translate-x-1 transition-all duration-200">
                {{ link.label }}
              </span>
            </NuxtLink>

          </template>
        </nav>

        <!-- Mobile CTA block -->
        <div class="pt-8 space-y-3 relative z-10 border-t border-slate-100 mt-8">
          <div class="grid grid-cols-2 gap-3">
            <NuxtLink
              to="/appointments"
              class="flex items-center justify-center gap-2 py-3 text-[13px] font-semibold text-slate-700 border border-slate-200 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-colors"
              @click="isMobileMenuOpen = false"
            >
              <LucideCalendar :size="14" />
              {{ $t('nav.bookings') }}
            </NuxtLink>
            <a
              href="https://member.scpsn.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2 py-3 text-[13px] font-semibold bg-[#1d4e89] text-white rounded-xl hover:bg-blue-800 transition-colors"
              @click="isMobileMenuOpen = false"
            >
              <LucideUser :size="14" />
              {{ $t('nav.become_member') }}
            </a>
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-slate-100">
            <div>
              <p class="text-[10px] font-semibold tracking-widest text-slate-400 uppercase mb-0.5">{{ $t('nav.official_inquiries') }}</p>
              <p class="text-[13px] font-semibold text-slate-700">info@scpsn.org.ng</p>
            </div>
            <a
              href="mailto:info@scpsn.org.ng"
              class="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#1d4e89] hover:border-blue-200 hover:bg-blue-50 transition-all"
              aria-label="Send email"
            >
              <LucideArrowUpRight :size="15" />
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>


<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import {
  LucideCalendar,
  LucideArrowUpRight,
  LucideUser,
  LucideChevronDown,
  LucideBookOpen,
  LucideUsers,
  LucideGlobe,
  LucideX,
  type LucideIcon,
} from 'lucide-vue-next'
import LanguageSwitcher from '@/components/core/LanguageSwitcher.vue'
import { useCMS } from '@/composables/useCMS'

// ─── Types ───────────────────────────────────────────────────
interface NavChild {
  label: string
  to: string
  icon?: LucideIcon
  description?: string
}
interface NavLink {
  label: string
  to?: string
  children?: NavChild[]
}

// ─── Composables ─────────────────────────────────────────────
const { cmsConfig } = useCMS()
const { t } = useI18n()
const route = useRoute()

// ─── State ───────────────────────────────────────────────────
const isScrolled         = ref<boolean>(false)
const isMobileMenuOpen   = ref<boolean>(false)
const activeMobileSubmenu = ref<string | null>(null)
const activeDropdown     = ref<string | null>(null)
const closeTimers        = ref<Record<string, ReturnType<typeof setTimeout>>>({})

// ─── Computed ────────────────────────────────────────────────
const isHomePage = computed<boolean>(() => route.path === '/')

const navigation = computed<NavLink[]>(() => [
  {
    label: t('nav.science'),
    children: [
      { label: t('nav.scientific_board'), to: '/about',     icon: LucideUsers,    description: t('nav.scientific_excellence') },
      { label: t('nav.abstracts'),        to: '/abstracts', icon: LucideBookOpen, description: t('nav.research_pubs') },
    ],
  },
  { label: t('nav.events'),      to: '/conferences' },
  { label: t('nav.newsletters'), to: '/newsletters'  },
  { label: t('nav.gallery'),     to: '/gallery'      },
  { label: t('nav.contact'),     to: '/contact'      },
])

// ─── Scroll handler ──────────────────────────────────────────
const handleScroll = (): void => {
  isScrolled.value = window.scrollY > 30
}

// ─── Dropdown helpers ────────────────────────────────────────
const openDropdown = (label: string): void => {
  if (closeTimers.value[label]) {
    clearTimeout(closeTimers.value[label])
    delete closeTimers.value[label]
  }
  activeDropdown.value = label
}

const scheduleClose = (label: string): void => {
  closeTimers.value[label] = setTimeout(() => {
    if (activeDropdown.value === label) activeDropdown.value = null
    delete closeTimers.value[label]
  }, 120)
}

const cancelClose = (label: string): void => {
  if (closeTimers.value[label]) {
    clearTimeout(closeTimers.value[label])
    delete closeTimers.value[label]
  }
}

const toggleMobileSubmenu = (label: string): void => {
  activeMobileSubmenu.value = activeMobileSubmenu.value === label ? null : label
}

// ─── Lifecycle ───────────────────────────────────────────────
onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  Object.values(closeTimers.value).forEach(clearTimeout)
})

watch(() => route.path, () => {
  isMobileMenuOpen.value    = false
  activeMobileSubmenu.value = null
  activeDropdown.value      = null
})
</script>


<style scoped>
/* ── Nav link pill ─────────────────────────────────────────── */
.nav-link {
  @apply px-3.5 py-2 text-[14px] font-semibold text-slate-600 rounded-xl
         hover:text-[#1d4e89] hover:bg-blue-50
         transition-all duration-200 cursor-pointer;
}
.nav-link--active {
  @apply text-[#1d4e89] bg-blue-50;
}

/* ── Hamburger bars ────────────────────────────────────────── */
.ham-bar {
  @apply block w-4 h-[1.5px] rounded-full bg-slate-700 transition-all duration-300;
}

/* ── Hide scrollbar on mobile menu ────────────────────────── */
.overflow-y-auto::-webkit-scrollbar { display: none; }
.overflow-y-auto { -ms-overflow-style: none; scrollbar-width: none; }
</style>