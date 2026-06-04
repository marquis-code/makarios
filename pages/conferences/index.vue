<template>
  <div class="min-h-screen bg-white font-body">

    <!-- ─── HERO ─────────────────────────────────────────────── -->
    <section class="bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pb-20">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100">
            <LucideCalendar :size="13" />
            Global Events
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Scientific <span class="text-[#1d4e89]">Convergences</span>
          </h1>
          <p class="text-[16px] text-slate-500 leading-relaxed max-w-[540px] mb-10">
            Stay at the forefront of cellular pathology by attending our world-class congresses, specialized workshops, and research symposia.
          </p>

          <!-- Stats -->
          <div class="flex items-center flex-wrap gap-x-8 gap-y-4 border-t border-slate-100 pt-8">
            <div>
              <p class="text-[26px] font-bold text-slate-900 tracking-tight leading-none">40+</p>
              <p class="text-[10px] font-semibold tracking-[.18em] uppercase text-slate-400 mt-1">Annual Events</p>
            </div>
            <div class="w-px h-7 bg-slate-200 hidden sm:block"></div>
            <div>
              <p class="text-[26px] font-bold text-slate-900 tracking-tight leading-none">120+</p>
              <p class="text-[10px] font-semibold tracking-[.18em] uppercase text-slate-400 mt-1">Countries</p>
            </div>
            <div class="w-px h-7 bg-slate-200 hidden sm:block"></div>
            <div>
              <p class="text-[26px] font-bold text-slate-900 tracking-tight leading-none">5K+</p>
              <p class="text-[10px] font-semibold tracking-[.18em] uppercase text-slate-400 mt-1">Practitioners</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── FEATURED CONFERENCE ───────────────────────────────── -->
    <section v-if="featuredConference" class="bg-white border-b border-slate-100 py-14 lg:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="flex items-center gap-4 mb-8">
          <span class="block w-7 h-px bg-[#1d4e89]"></span>
          <span class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89]">Next Major Event</span>
        </div>

        <NuxtLink :to="`/conferences/${featuredConference._id}`" class="featured-card group">
          <!-- Image -->
          <div class="relative overflow-hidden min-h-[300px] lg:min-h-0 bg-slate-100">
            <img
              :src="featuredConference.bannerImage || 'https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg'"
              class="w-full h-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105"
              :alt="featuredConference.title"
            />
            <div class="absolute top-5 left-5 bg-[#1d4e89] text-blue-200 text-[10px] font-extrabold tracking-[.18em] uppercase px-3.5 py-1.5 rounded-full">
              Upcoming
            </div>
          </div>

          <!-- Body -->
          <div class="p-8 lg:p-10 flex flex-col justify-center">
            <p class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89] mb-3">Featured Conference</p>
            <h2 class="text-[clamp(20px,2.5vw,30px)] font-bold leading-[1.2] tracking-tight text-slate-900 mb-4">
              {{ featuredConference.title }}
            </h2>
            <p class="text-[13px] leading-[1.75] text-slate-500 mb-7 line-clamp-3">
              {{ featuredConference.description || 'Join elite practitioners for an intensive exploration of cellular pathology and modern oncology diagnosis.' }}
            </p>

            <!-- Meta row -->
            <div class="flex border border-slate-200 rounded-xl overflow-hidden mb-7">
              <div class="flex items-center gap-3 px-4 py-3.5 flex-1">
                <LucideCalendar :size="15" class="text-[#1d4e89] flex-shrink-0" />
                <div>
                  <p class="text-[9px] font-bold tracking-[.18em] uppercase text-slate-400 mb-0.5">Date</p>
                  <p class="text-[13px] font-bold text-slate-800">
                    {{ featuredConference.startDate
                      ? new Date(featuredConference.startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
                      : 'TBA' }}
                  </p>
                </div>
              </div>
              <div class="w-px bg-slate-200 flex-shrink-0"></div>
              <div class="flex items-center gap-3 px-4 py-3.5 flex-1">
                <LucideMapPin :size="15" class="text-[#1d4e89] flex-shrink-0" />
                <div>
                  <p class="text-[9px] font-bold tracking-[.18em] uppercase text-slate-400 mb-0.5">Venue</p>
                  <p class="text-[13px] font-bold text-slate-800">{{ featuredConference.venue || 'TBA' }}</p>
                </div>
              </div>
            </div>

            <div class="inline-flex items-center gap-2">
              <span class="inline-flex items-center gap-2 bg-[#1d4e89] text-white text-[13px] font-bold px-5 py-3 rounded-xl transition-colors duration-200 group-hover:bg-blue-800">
                View Event Details
                <LucideArrowRight :size="14" />
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- ─── ARCHIVE GRID ──────────────────────────────────────── -->
    <section class="bg-white py-14 lg:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <p class="text-[10px] font-bold tracking-[.28em] uppercase text-[#1d4e89] mb-2">Past Events</p>
            <h3 class="text-[clamp(26px,4vw,40px)] font-bold tracking-tight text-slate-900">Event Archives</h3>
          </div>
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[.15em] uppercase text-slate-800 border-b border-slate-300 pb-0.5 hover:text-[#1d4e89] hover:border-[#1d4e89] transition-colors duration-200 whitespace-nowrap"
          >
            View All <LucideArrowRight :size="13" />
          </NuxtLink>
        </div>

        <LoadingState v-if="loading" />

        <div v-else-if="conferences.length > 0" class="archive-grid">
          <NuxtLink
            v-for="conference in conferences"
            :key="conference._id"
            :to="`/conferences/${conference._id}`"
            class="archive-card group"
          >
            <div class="relative h-[200px] overflow-hidden bg-slate-100">
              <img
                :src="conference.bannerImage || 'https://scpsn.org.ng/wp-content/uploads/2021/10/banner.jpg'"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                style="filter:grayscale(15%);"
                :alt="conference.title"
              />
              <div class="absolute top-3 right-3 bg-white border border-slate-200 text-slate-800 text-[11px] font-extrabold tracking-[.08em] px-2.5 py-0.5 rounded-full">
                {{ conference.startDate ? new Date(conference.startDate).getFullYear() : 'Archive' }}
              </div>
            </div>
            <div class="p-5 flex flex-col gap-1.5 flex-1">
              <p class="text-[10px] font-bold tracking-[.2em] uppercase text-[#1d4e89]">
                {{ conference.startDate
                  ? new Date(conference.startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                  : '' }}
              </p>
              <h4 class="text-[15px] font-bold leading-[1.35] text-slate-900 line-clamp-2 flex-1">{{ conference.title }}</h4>
              <div class="inline-flex items-center gap-1 text-[11px] font-bold tracking-[.1em] uppercase text-slate-400 mt-2 group-hover:text-[#1d4e89] transition-colors duration-200">
                Read more <LucideArrowRight :size="12" class="transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </div>
          </NuxtLink>
        </div>

        <EmptyState
          v-else
          title="No specialized events found in the archives."
          message="Check back later for recent scientific updates and upcoming conferences."
        />
      </div>
    </section>

  </div>
</template>

<script setup>
import {
  LucideCalendar,
  LucideMapPin,
  LucideArrowRight,
} from 'lucide-vue-next'
import { useGetConferences } from '@/composables/modules/conferences/useGetConferences'
import { onMounted, computed } from 'vue'

const { loading, conferences, getConferences } = useGetConferences()

const featuredConference = computed(() => {
  if (!conferences.value || conferences.value.length === 0) return null
  return conferences.value.find(c => c.status === 'upcoming') || conferences.value[0]
})

onMounted(() => {
  getConferences()
})
</script>

<style scoped>
.font-body {
  font-family: 'DM Sans', 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
}

.featured-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  background: #fff;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1);
}
.featured-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 48px rgba(0,0,0,.08);
}

.archive-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: #e2e8f0;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
}

.archive-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  background: #fff;
  transition: background 0.2s ease;
}
.archive-card:hover { background: #f8fafc; }

@media (max-width: 960px) {
  .featured-card { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .archive-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .archive-grid { grid-template-columns: 1fr; }
  .featured-card > div:last-child { padding: 28px 20px; }
}
</style>