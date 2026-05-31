<template>
  <header
    class="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
    :class="[
      (isScrolled || !isHomePage) ? 'py-3' : 'py-5',
      isMobileMenuOpen ? 'h-screen bg-brand-dark lg:h-auto' : ''
    ]"
  >
    <div class="container mx-auto px-4 sm:px-6">
      <nav
        :class="[
          'relative w-full transition-all duration-700 flex items-center justify-between px-5 sm:px-7 py-3',
          (isScrolled || !isHomePage)
            ? 'nav-glass rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        ]"
      >
        <!-- ── Logo ── -->
        <NuxtLink to="/" class="flex items-center gap-3 relative z-[110] group" @click="isMobileMenuOpen = false">
          <div class="logo-wrap w-10 h-10 rounded-xl overflow-hidden border border-white/20 shadow-lg group-hover:shadow-brand-cyan/30 transition-all duration-500">
            <img
              src="@/assets/images/logo.jpeg"
              alt="Logo"
              class="w-full h-full object-contain scale-105 group-hover:scale-110 transition-transform duration-500"
            />
            <!-- <img
              :src="cmsConfig?.global?.logoUrl || '/_nuxt/assets/images/logo.jpeg'"
              alt="Logo"
              class="w-full h-full object-contain scale-105 group-hover:scale-110 transition-transform duration-500"
            /> -->
          </div>
          <div class="flex flex-col leading-none">
            <span class="text-[15px] font-black tracking-tight text-white">
              {{ cmsConfig?.global?.siteName || 'SCPSN' }}
            </span>
            <span class="text-[8px] font-extrabold tracking-[0.3em] text-brand-cyan ">Nigeria</span>
          </div>
        </NuxtLink>

        <!-- ── Desktop Nav ── -->
        <div class="hidden lg:flex items-center gap-0.5">
          <template v-for="link in navigation" :key="link.label">

            <!-- Simple link -->
            <NuxtLink
              v-if="!link.children"
              :to="link.to"
              class="nav-pill"
              active-class="nav-pill--active"
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
              <button class="nav-pill flex items-center gap-1.5">
                {{ link.label }}
                <LucideChevronDown
                  :size="13"
                  :class="['transition-transform duration-300', activeDropdown === link.label ? 'rotate-180 text-brand-cyan' : '']"
                />
              </button>

              <!-- Dropdown panel -->
              <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 scale-95 -translate-y-1"
                enter-to-class="opacity-100 scale-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 scale-100 translate-y-0"
                leave-to-class="opacity-0 scale-95 -translate-y-1"
              >
                <div
                  v-if="activeDropdown === link.label"
                  class="dropdown-panel absolute top-[calc(100%+10px)] left-0 w-60 z-[200]"
                  @mouseenter="cancelClose(link.label)"
                  @mouseleave="scheduleClose(link.label)"
                >
                  <!-- Arrow tip -->
                  <div class="absolute -top-1.5 left-6 w-3 h-3 bg-brand-dark/95 border-l border-t border-white/10 rotate-45"></div>

                  <div class="dropdown-inner rounded-2xl p-2 space-y-0.5 overflow-hidden">
                    <NuxtLink
                      v-for="child in link.children"
                      :key="child.to"
                      :to="child.to"
                      class="dropdown-item group/item flex items-center gap-3 px-3 py-3 rounded-xl"
                      @click="activeDropdown = null"
                    >
                      <div class="icon-box w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-brand-cyan bg-brand-cyan/10 group-hover/item:bg-brand-cyan group-hover/item:text-brand-dark transition-all duration-300">
                        <component :is="child.icon" :size="15" v-if="child.icon" />
                        <span v-else class="text-[11px] font-black">{{ child.label.charAt(0) }}</span>
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <span class="text-[11px] font-black text-white tracking-wider  leading-none">{{ child.label }}</span>
                        <span v-if="child.description" class="text-[9px] text-white/40 tracking-wide">{{ child.description }}</span>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </Transition>
            </div>
          </template>
        </div>

        <!-- ── Desktop CTA & Lang Switcher ── -->
        <div class="hidden lg:flex items-center gap-2.5">


          <NuxtLink to="/appointments" class="cta-ghost group flex items-center gap-2">
            <LucideCalendar :size="13" class="group-hover:rotate-12 transition-transform duration-300" />
            <span>Bookings</span>
          </NuxtLink>
          <a href="https://member.scpsn.com/" class="cta-solid py-3 flex items-center gap-2">
            <LucideUser :size="13" />
            <span>Become a Member</span>
          </a>
        </div>

        <!-- ── Mobile hamburger ── -->
        <button
          class="lg:hidden relative z-[110] w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-[5px] glass-btn"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="Toggle menu"
        >
          <span :class="['bar', isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : '']"></span>
          <span :class="['bar w-3 self-start ml-[10px]', isMobileMenuOpen ? 'opacity-0 -translate-x-3' : '']"></span>
          <span :class="['bar', isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : '']"></span>
        </button>
      </nav>
    </div>

    <!-- ── Mobile Fullscreen Menu ── -->
    <Transition
      enter-active-class="transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      enter-from-class="opacity-0 -translate-y-8"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-500 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-8"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden fixed inset-0 bg-brand-dark z-[105] flex flex-col pt-28 pb-10 px-6 overflow-y-auto"
      >
        <!-- Ambient blobs -->
        <div class="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/8 rounded-full blur-[120px]"></div>
        <div class="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px]"></div>

        

        <!-- Links -->
        <nav class="flex flex-col gap-0 relative z-10">
          <template v-for="(link, i) in navigation" :key="link.label">

            <!-- With children -->
            <div v-if="link.children" class="border-b border-white/5">
              <button
                class="w-full flex items-center justify-between py-5 group"
                @click="toggleMobileSubmenu(link.label)"
              >
                <div class="flex items-center gap-5">
                  <span class="index-num">{{ String(i + 1).padStart(2, '0') }}</span>
                  <span class="text-[26px] font-black text-white tracking-tight leading-none group-hover:text-brand-cyan transition-colors duration-300">{{ link.label }}</span>
                </div>
                <LucideChevronDown
                  :size="20"
                  :class="['text-brand-cyan/60 transition-transform duration-500', activeMobileSubmenu === link.label ? 'rotate-180' : '']"
                />
              </button>
              <Transition
                enter-active-class="transition-all duration-500 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-[500px]"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 max-h-[500px]"
                leave-to-class="opacity-0 max-h-0"
              >
                <div v-show="activeMobileSubmenu === link.label" class="pl-10 pb-5 space-y-4 overflow-hidden">
                  <NuxtLink
                    v-for="(child, j) in link.children"
                    :key="child.to"
                    :to="child.to"
                    @click="isMobileMenuOpen = false"
                    class="flex items-center gap-4 group/child"
                  >
                    <div class="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan group-hover/child:bg-brand-cyan group-hover/child:text-brand-dark transition-all duration-300 shrink-0">
                      <component :is="child.icon" :size="14" v-if="child.icon" />
                      <span v-else class="text-[10px] font-black">{{ child.label.charAt(0) }}</span>
                    </div>
                    <div>
                      <p class="text-base font-bold text-brand-cyan group-hover/child:text-white transition-colors">{{ child.label }}</p>
                      <p v-if="child.description" class="text-[10px] text-white/40 tracking-wide">{{ child.description }}</p>
                    </div>
                  </NuxtLink>
                </div>
              </Transition>
            </div>

            <!-- Simple link -->
            <NuxtLink
              v-else
              :to="link.to"
              @click="isMobileMenuOpen = false"
              class="flex items-center gap-5 py-5 border-b border-white/5 group"
            >
              <span class="index-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="text-[26px] font-black text-white tracking-tight leading-none group-hover:text-brand-cyan group-hover:translate-x-2 transition-all duration-300">{{ link.label }}</span>
            </NuxtLink>

          </template>
        </nav>

        <!-- Mobile CTA -->
        <div class="mt-auto pt-10 relative z-10 space-y-4">
          <div class="grid grid-cols-2 gap-3">
            <NuxtLink
              to="/appointments"
              @click="isMobileMenuOpen = false"
              class="cta-ghost !w-full !py-4 !text-[10px] flex items-center justify-center gap-2"
            >
              <LucideCalendar :size="14" />
              Bookings
            </NuxtLink>
            <NuxtLink
              to="http://localhost:3003"
              @click="isMobileMenuOpen = false"
              class="cta-solid !w-full !py-4 !text-[10px] flex items-center justify-center gap-2"
            >
              <LucideUser :size="14" />
              Become a Member
            </NuxtLink>
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-white/5">
            <div>
              <p class="text-[8px] font-black tracking-[0.3em] text-white/30  mb-1">Official Inquiries</p>
              <p class="text-[11px] font-bold text-white tracking-wide">info@scpsn.org.ng</p>
            </div>
            <a href="#" class="w-10 h-10 rounded-xl glass-btn flex items-center justify-center hover:text-brand-cyan hover:border-brand-cyan/30 transition-all">
              <LucideArrowUpRight :size="16" />
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import {
  LucideCalendar,
  LucideArrowUpRight,
  LucideUser,
  LucideChevronDown,
  LucideBookOpen,
  LucideUsers,
  LucideGlobe
} from 'lucide-vue-next'
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useCMS } from '@/composables/useCMS'
const { cmsConfig } = useCMS()
const route = useRoute()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeMobileSubmenu = ref(null)
const activeDropdown = ref(null)

// Per-dropdown close timers to prevent premature close
const closeTimers = {}

const isHomePage = computed(() => route.path === '/')

const handleScroll = () => { isScrolled.value = window.scrollY > 20 }

const openDropdown = (label) => {
  if (closeTimers[label]) {
    clearTimeout(closeTimers[label])
    delete closeTimers[label]
  }
  activeDropdown.value = label
}

const scheduleClose = (label) => {
  closeTimers[label] = setTimeout(() => {
    if (activeDropdown.value === label) activeDropdown.value = null
    delete closeTimers[label]
  }, 120) // 120ms grace period — enough to move into the panel
}

const cancelClose = (label) => {
  if (closeTimers[label]) {
    clearTimeout(closeTimers[label])
    delete closeTimers[label]
  }
}

const toggleMobileSubmenu = (label) => {
  activeMobileSubmenu.value = activeMobileSubmenu.value === label ? null : label
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  Object.values(closeTimers).forEach(clearTimeout)
})

watch(() => route.path, () => {
  isMobileMenuOpen.value = false
  activeMobileSubmenu.value = null
  activeDropdown.value = null
})

const navigation = computed(() => [
  // { label: 'Home', to: '/' },
  {
    label: 'Science',
    children: [
      { label: 'Scientific Board', to: '/about', icon: LucideUsers, description: 'Our Scientific Excellence' },
      { label: 'Abstracts & Journals', to: '/abstracts', icon: LucideBookOpen, description: 'Research and Publications' },
    ]
  },
  { label: 'Events', to: '/conferences' },
  { label: 'Newsletters', to: '/newsletters' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
])
</script>

<style scoped>
/* ── Glassmorphism nav ── */
.nav-glass {
  background: rgba(10, 14, 24, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* ── Nav pills ── */
.nav-pill {
  @apply px-4 py-2 text-[16px] font-bold   text-white/70 hover:text-white rounded-xl transition-all duration-300 hover:bg-white/5 active:scale-95;
}
.nav-pill--active {
  @apply text-brand-cyan;
}

/* ── Dropdown panel ── */
.dropdown-panel {
  filter: drop-shadow(0 20px 50px rgba(0,0,0,0.5));
}
.dropdown-inner {
  background: rgba(10, 14, 24, 0.97);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
}
.dropdown-item {
  @apply transition-colors duration-200 cursor-pointer;
}
.dropdown-item:hover {
  background: rgba(255,255,255,0.05);
}

/* ── CTA buttons ── */
.cta-ghost {
  @apply px-4 py-3 text-[14px] font-black  rounded-xl border border-white/20 text-white/80 hover:text-white hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all duration-300 active:scale-95;
}
.cta-solid {
  @apply px-4 py-3 text-[14px] font-black  rounded-xl bg-brand-cyan text-brand-dark hover:bg-white transition-all duration-300 active:scale-95 shadow-[0_4px_20px_rgba(0,200,200,0.25)] hover:shadow-[0_4px_30px_rgba(0,200,200,0.45)];
}

/* ── Glass button (hamburger) ── */
.glass-btn {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
}

/* ── Hamburger bars ── */
.bar {
  @apply block w-5 h-0.5 rounded-full bg-white transition-all duration-500;
}

/* ── Mobile index numbers ── */
.index-num {
  @apply text-[10px] font-black text-brand-cyan/35 font-mono;
}

/* ── Scrollbar hide ── */
.overflow-y-auto::-webkit-scrollbar { display: none; }
.overflow-y-auto { -ms-overflow-style: none; scrollbar-width: none; }
</style>