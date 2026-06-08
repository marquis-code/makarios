<template>
  <div class="min-h-screen bg-white font-body">

    <!-- ─── HERO / IDENTITY ──────────────────────────────────── -->
    <section class="bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pb-28">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <!-- Left -->
          <div>
            <div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100">
              <LucideFlaskConical :size="13" />
              Our Identity
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-[54px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Instituting Excellence in
              <span class="text-[#1d4e89]"> Cellular Pathology Science.</span>
            </h1>
            <p class="text-[16px] text-slate-500 leading-relaxed max-w-[520px] mb-10">
              The Society for Cellular Pathology Scientists of Nigeria (SCPSC) is the professional body for medical laboratory scientists specialized in the field of histopathology and cytopathology.
            </p>
            <div class="flex flex-wrap gap-3">
              <NuxtLink
                to="/membership"
                class="inline-flex items-center gap-2 bg-[#1d4e89] hover:bg-blue-800 text-white text-[14px] font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
              >
                Become a member
                <LucideArrowRight :size="15" />
              </NuxtLink>
              <NuxtLink
                to="/conferences"
                class="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-[14px] font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
              >
                Our conferences
              </NuxtLink>
            </div>
          </div>

          <!-- Right: image + floating badges -->
          <div class="relative hidden lg:block">
            <div class="rounded-3xl overflow-hidden aspect-[4/3] bg-blue-50 relative shadow-sm border border-slate-100">
              <img
                src="@/assets/images/hero1.jpg"
                class="w-full h-full object-cover"
                alt="Lab Work"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            <!-- Floating stat cards -->
            <div class="absolute -bottom-5 -left-6 bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-md">
              <div class="text-2xl font-bold text-[#1d4e89]">1,200+</div>
              <div class="text-[11px] text-slate-400 font-medium mt-0.5">Qualified scientists</div>
            </div>
            <div class="absolute -top-5 -right-6 bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-md">
              <div class="text-2xl font-bold text-[#1d4e89]">82+</div>
              <div class="text-[11px] text-slate-400 font-medium mt-0.5">Scientific events</div>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- ─── VISION & MISSION ─────────────────────────────────── -->
    <section class="bg-slate-50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div class="grid lg:grid-cols-2 gap-6">

          <!-- Vision -->
          <div class="bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 hover:border-blue-200 hover:shadow-sm transition-all duration-300 relative overflow-hidden group">
            <LucideEye
              :size="120"
              class="absolute -right-6 -bottom-6 opacity-[0.04] text-blue-800 pointer-events-none"
            />
            <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
              <LucideEye :size="20" class="text-[#1d4e89]" />
            </div>
            <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-3">Our Vision</p>
            <h3 class="text-[20px] font-bold text-slate-800 mb-4 leading-snug">
              A world-class cellular pathology body
            </h3>
            <p class="text-[14px] text-slate-500 leading-relaxed">
              To become a world-class professional body providing cutting-edge cellular pathology services through innovation, research, and standardization of laboratory practices in Nigeria and the West African sub-region.
            </p>
          </div>

          <!-- Mission -->
          <div class="bg-[#1d4e89] border border-blue-800 rounded-2xl p-8 lg:p-10 relative overflow-hidden group">
            <LucideTarget
              :size="120"
              class="absolute -right-6 -bottom-6 opacity-[0.06] text-white pointer-events-none"
            />
            <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <LucideTarget :size="20" class="text-white" />
            </div>
            <p class="text-[11px] font-semibold text-blue-300 tracking-widest uppercase mb-3">Our Mission</p>
            <h3 class="text-[20px] font-bold text-white mb-4 leading-snug">
              Advancing cellular diagnosis globally
            </h3>
            <p class="text-[14px] text-blue-200 leading-relaxed">
              Advancing the frontiers of cellular diagnosis and therapeutic laboratory science through training, advocacy, and collaboration with global stakeholders for improved patient care.
            </p>
          </div>

        </div>
      </div>
    </section>


    <!-- ─── CORE VALUES ──────────────────────────────────────── -->
    <section class="bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2">What drives us</p>
            <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight max-w-xl">
              Core values that define our work
            </h2>
          </div>
          <p class="text-[15px] text-slate-500 leading-relaxed max-w-md">
            The principles that guide every decision, research initiative, and collaboration we undertake as a society.
          </p>
        </div>

        <div class="grid sm:grid-cols-3 gap-5">
          <div
            v-for="(val, i) in values"
            :key="val.title"
            class="border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300 group relative overflow-hidden"
          >
            <!-- Ghost bg icon -->
            <component
              :is="val.icon"
              :size="120"
              class="absolute -right-6 -bottom-6 opacity-[0.04] text-blue-800 pointer-events-none"
            />
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              :class="valueColors[i % valueColors.length].bg"
            >
              <component :is="val.icon" :size="20" :class="valueColors[i % valueColors.length].icon" />
            </div>
            <h3 class="text-[16px] font-semibold text-slate-800 mb-3">{{ val.title }}</h3>
            <p class="text-[13px] text-slate-500 leading-relaxed">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </section>


    <!-- ─── STATS BAND ───────────────────────────────────────── -->
    <section class="bg-[#1d4e89]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-4xl sm:text-5xl font-bold text-white mb-1">
              {{ stat.value }}<span class="text-blue-300">+</span>
            </div>
            <div class="text-[12px] text-blue-200 font-medium tracking-wide uppercase">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>


    <!-- ─── EXECUTIVES ───────────────────────────────────────── -->
    <section class="bg-slate-50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">

        <div class="text-center mb-12">
          <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2">Our Leadership</p>
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Meet Our Executives
          </h2>
          <p class="text-[15px] text-slate-500 max-w-md mx-auto">
            The dedicated professionals steering SCPSC toward scientific excellence and global impact.
          </p>
        </div>

        <!-- Loading -->
        <div v-if="loading" class="flex justify-center py-16">
          <div class="w-8 h-8 border-2 border-blue-700 border-t-transparent rounded-full animate-spin" />
        </div>

        <!-- Empty -->
        <div v-else-if="excos.length === 0" class="text-center py-16">
          <div class="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
            <LucideUsers :size="24" class="text-blue-300" />
          </div>
          <p class="text-[15px] font-semibold text-slate-700 mb-1">No executives found</p>
          <p class="text-[13px] text-slate-400">The leadership board is being finalized. Check back soon.</p>
        </div>

        <!-- Grid -->
        <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div
            v-for="exco in excos"
            :key="exco._id"
            class="bg-white border border-slate-200 rounded-2xl overflow-hidden group hover:shadow-md hover:border-blue-200 transition-all duration-300"
          >
            <div class="aspect-[4/3] relative overflow-hidden bg-blue-50">
              <img
                v-if="exco.profilePicture"
                :src="exco.profilePicture"
                :alt="exco.name"
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div
                v-else
                class="w-full h-full flex items-center justify-center"
              >
                <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <LucideUser :size="28" class="text-blue-300" />
                </div>
              </div>
            </div>
            <div class="p-5">
              <p class="text-[11px] text-blue-600 font-semibold tracking-wider uppercase mb-1">
                {{ exco.position || 'Executive Member' }}
              </p>
              <h3 class="text-[15px] font-semibold text-slate-800 leading-snug mb-2">{{ exco.name }}</h3>
              <p v-if="exco.bio" class="text-[12px] text-slate-400 leading-relaxed line-clamp-2">
                {{ exco.bio }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- ─── FINAL CTA ────────────────────────────────────────── -->
    <section class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
        <div class="max-w-2xl mx-auto">
          <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-4">Get started</p>
          <h2 class="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.15] mb-5">
            Ready to be part of something bigger?
          </h2>
          <p class="text-[16px] text-slate-500 leading-relaxed mb-9">
            Join over 1,200 scientists building the future of cellular pathology in Nigeria.
          </p>
          <div class="flex flex-wrap gap-3 justify-center">
            <NuxtLink
              to="/membership"
              class="inline-flex items-center gap-2 bg-[#1d4e89] hover:bg-blue-800 text-white text-[14px] font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200"
            >
              Become a member
              <LucideArrowRight :size="15" />
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-[14px] font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200"
            >
              Get in touch
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>


<script setup>
import {
  LucideFlaskConical,
  LucideShieldCheck,
  LucideMicroscope,
  LucideGlobe,
  LucideEye,
  LucideTarget,
  LucideArrowRight,
  LucideUsers,
  LucideUser,
} from 'lucide-vue-next'
import { useGetExcos } from '@/composables/modules/excos/useGetExcos'
import { onMounted } from 'vue'

const { loading, excos, getExcos } = useGetExcos()

onMounted(() => {
  getExcos()
})

const values = [
  {
    title: 'Integrity',
    desc: 'Highest standards of scientific honesty and ethical laboratory practice in every diagnostic discipline.',
    icon: LucideShieldCheck,
  },
  {
    title: 'Innovation',
    desc: 'Embracing digital pathology, AI-driven diagnostics, and molecular diagnostic breakthroughs at the frontier.',
    icon: LucideMicroscope,
  },
  {
    title: 'Collaboration',
    desc: 'Partnering with international scientific bodies and institutions for knowledge exchange and shared progress.',
    icon: LucideGlobe,
  },
]

const valueColors = [
  { bg: 'bg-blue-50',  icon: 'text-[#1d4e89]' },
  { bg: 'bg-green-50', icon: 'text-green-700'  },
  { bg: 'bg-teal-50',  icon: 'text-teal-700'   },
]

const stats = [
  { value: '1,200', label: 'Qualified scientists' },
  { value: '82',    label: 'Scientific events'    },
  { value: '450',   label: 'Lab networks'          },
  { value: '45',    label: 'Awards issued'         },
]
</script>


<style scoped>
.font-body {
  font-family: 'DM Sans', 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
}
</style>