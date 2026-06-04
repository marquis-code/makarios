<template>
  <div class="min-h-screen bg-white font-body">


    <!-- {{ excos }} -->

    <!-- ─── HERO ───────────────────────────────────────────────── -->
    <section class="bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-32">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <!-- Left -->
          <div>
            <div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100">
              <LucideFlaskConical :size="13" />
              Society of Cellular Pathology Sciences of Nigeria
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Precision in<br />
              <span class="text-[#1d4e89]">Cellular Pathology.</span><br />
              Excellence in Science.
            </h1>
            <p class="text-[16px] text-slate-500 leading-relaxed max-w-[480px] mb-9">
              Empowering medical laboratory scientists specialising in Histopathology and Cytopathology through innovation, global collaboration, and rigorous scientific standards.
            </p>
            <div class="flex flex-wrap gap-3 mb-12">
              <NuxtLink
                to="/membership"
                class="inline-flex items-center gap-2 bg-[#1d4e89] hover:bg-blue-800 text-white text-[14px] font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
              >
                Become a member
                <LucideArrowRight :size="15" />
              </NuxtLink>
              <NuxtLink
                to="/about"
                class="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-[14px] font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
              >
                Our mission
              </NuxtLink>
            </div>

            <!-- Stats row -->
            <div class="flex flex-wrap gap-8">
              <div v-for="stat in heroStats" :key="stat.label">
                <div class="text-2xl font-bold text-[#1d4e89]">{{ stat.value }}</div>
                <div class="text-[12px] text-slate-400 font-medium mt-0.5">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <!-- Right: Team carousel -->
          <div class="hidden lg:block">
            <div class="relative">

              <!-- Header row -->
              <div class="flex items-center justify-between mb-5">
                <div>
                  <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-0.5">SCPSN Gallery</p>
                  <h3 class="text-[15px] font-bold text-slate-800">From our archive</h3>
                </div>
                <div class="flex items-center gap-2">
                  <button
                    class="w-8 h-8 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-blue-300 hover:text-[#1d4e89] hover:bg-blue-50 transition-all duration-200 disabled:opacity-30"
                    :disabled="carouselIndex === 0"
                    aria-label="Previous member"
                    @click="prevSlide"
                  >
                    <LucideChevronLeft :size="15" />
                  </button>
                  <button
                    class="w-8 h-8 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-blue-300 hover:text-[#1d4e89] hover:bg-blue-50 transition-all duration-200 disabled:opacity-30"
                    :disabled="carouselIndex >= carouselLastIndex"
                    aria-label="Next member"
                    @click="nextSlide"
                  >
                    <LucideChevronRight :size="15" />
                  </button>
                </div>
              </div>

              <!-- Carousel viewport -->
              <div class="overflow-hidden rounded-2xl border border-slate-100" ref="carouselRef">
                <div
                  class="flex transition-transform duration-700 ease-in-out"
                  :style="{ transform: `translateX(-${carouselIndex * 100}%)` }"
                >
                  <div
                    v-for="exco in carouselExcos"
                    :key="exco._id"
                    class="min-w-full relative"
                  >
                    <!-- Image -->
                    <div class="aspect-[4/3] bg-blue-50 relative overflow-hidden">
                      <img
                        v-if="exco.imageUrl"
                        :src="exco.imageUrl"
                        :alt="exco.name"
                        class="w-full h-full object-cover"
                      />
                      <div
                        v-else
                        class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100"
                      >
                        <div class="w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                          <LucideUser :size="32" class="text-blue-300" />
                        </div>
                      </div>
                      <!-- Gradient overlay -->
                      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                      <!-- Name plate -->
                      <!-- <div class="absolute bottom-0 left-0 right-0 p-5">
                        <p class="text-[10px] font-semibold text-blue-300 tracking-widest uppercase mb-1">
                          {{ exco.position || 'Executive member' }}
                        </p>
                        <h4 class="text-[17px] font-bold text-white leading-tight">{{ exco.name }}</h4>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>

              <!-- Dot indicators -->
              <div class="flex items-center justify-center gap-1.5 mt-4">
                <button
                  v-for="(_, i) in carouselExcos"
                  :key="i"
                  class="transition-all duration-300 rounded-full"
                  :class="carouselIndex === i
                    ? 'w-5 h-1.5 bg-[#1d4e89]'
                    : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'"
                  :aria-label="`Go to member ${i + 1}`"
                  @click="goToSlide(i)"
                />
              </div>

              <!-- Loading skeleton -->
              <div v-if="loadingExcos" class="aspect-[4/3] rounded-2xl bg-slate-100 animate-pulse" />

            </div>
          </div>

          <!-- Mobile: compact carousel strip (shown only on sm/md, hidden lg+) -->
          <div class="lg:hidden mt-8">
            <div class="flex items-center justify-between mb-4">
              <div>
                <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-0.5">SCPSN Gallery</p>
                <h3 class="text-[14px] font-bold text-slate-800">From our archive</h3>
              </div>
              <NuxtLink to="/about" class="text-[12px] text-[#1d4e89] font-semibold inline-flex items-center gap-1">
                View all <LucideArrowRight :size="12" />
              </NuxtLink>
            </div>
            <div class="overflow-hidden pb-2">
              <div class="ticker-track flex gap-3">
                <div
                  v-for="(exco, i) in [...carouselExcos, ...carouselExcos, ...carouselExcos, ...carouselExcos]"
                  :key="exco._id + '-' + i"
                  class="flex-shrink-0 w-40"
                >
                <div class="rounded-xl overflow-hidden border border-slate-100 bg-slate-50">
                  <div class="h-44 bg-blue-50 relative overflow-hidden">
                    <img
                      v-if="exco.imageUrl"
                      :src="exco.imageUrl"
                      :alt="exco.name"
                      class="w-full h-full object-cover"
                    />
                    <div v-else class="w-full h-full flex items-center justify-center">
                      <LucideUser :size="28" class="text-blue-200" />
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <!-- <div class="absolute bottom-0 left-0 right-0 p-3">
                      <p class="text-[9px] font-semibold text-blue-300 uppercase tracking-wider mb-0.5">{{ exco.position || 'Member' }}</p>
                      <p class="text-[12px] font-bold text-white leading-tight">{{ exco.name }}</p>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- ─── TICKER ─────────────────────────────────────────────── -->
    <div class="bg-slate-50 border-b border-slate-100 overflow-hidden py-3.5">
      <div class="ticker-track flex gap-10 whitespace-nowrap">
        <div
          v-for="(item, i) in [...tickerItems, ...tickerItems]"
          :key="i"
          class="flex items-center gap-2.5 text-[13px] text-slate-500 font-medium flex-shrink-0"
        >
          <component :is="item.icon" :size="14" class="text-blue-600 flex-shrink-0" />
          {{ item.label }}
        </div>
      </div>
    </div>


    <!-- ─── UPCOMING EVENTS ────────────────────────────────────── -->
    <section v-if="upcomingConferences.length > 0" class="bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div class="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2">Latest happenings</p>
            <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Upcoming conferences</h2>
          </div>
          <NuxtLink
            to="/conferences"
            class="inline-flex items-center gap-1.5 text-[13px] text-[#1d4e89] font-semibold hover:underline"
          >
            View all events
            <LucideArrowRight :size="14" />
          </NuxtLink>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <NuxtLink
            v-for="conf in upcomingConferences"
            :key="conf._id"
            :to="`/conferences/${conf._id}`"
            class="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-md transition-all duration-300 block"
          >
            <div class="h-36 bg-blue-50 flex items-center justify-center relative overflow-hidden">
              <img
                v-if="conf.bannerImage"
                :src="conf.bannerImage"
                :alt="conf.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <LucideMicroscope v-else :size="40" class="text-blue-200" />
              <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-slate-600 px-2.5 py-1 rounded-lg border border-slate-100">
                {{ conf.startDate ? new Date(conf.startDate).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Upcoming' }}
              </div>
            </div>
            <div class="p-5">
              <div class="flex items-center gap-1.5 text-[12px] text-blue-600 font-medium mb-2.5">
                <LucideMapPin :size="12" />
                {{ conf.venue || 'TBA' }}
              </div>
              <h3 class="text-[15px] font-semibold text-slate-800 leading-snug mb-2 line-clamp-2 group-hover:text-[#1d4e89] transition-colors">
                {{ conf.title }}
              </h3>
              <p class="text-[13px] text-slate-400 line-clamp-2 mb-4">{{ conf.description }}</p>
              <span class="text-[12px] font-semibold text-[#1d4e89] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more <LucideArrowRight :size="12" />
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>


    <!-- ─── CORE PILLARS ───────────────────────────────────────── -->
    <section class="bg-slate-50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2">Core pillars</p>
            <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight max-w-xl">
              {{ cmsConfig?.public?.home?.homeHeaders?.pillarsTitle || 'Advancing the frontiers of cellular pathology' }}
            </h2>
          </div>
          <p class="text-[15px] text-slate-500 leading-relaxed max-w-md">
            {{ cmsConfig?.public?.home?.homeHeaders?.pillarsSubtitle || 'A society committed to scientific mastery, diagnostic precision, and the next generation of pathology professionals.' }}
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="(pillar, i) in activePillars"
            :key="i"
            class="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-300 group"
          >
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
              :class="pillarColors[i % pillarColors.length].bg"
            >
              <component :is="pillar.icon" :size="20" :class="pillarColors[i % pillarColors.length].icon" />
            </div>
            <h3 class="text-[15px] font-semibold text-slate-800 mb-2">{{ pillar.title }}</h3>
            <p class="text-[13px] text-slate-500 leading-relaxed">{{ pillar.desc }}</p>
          </div>
        </div>
      </div>
    </section>


    <!-- ─── STATS BAND ─────────────────────────────────────────── -->
    <section class="bg-[#1d4e89]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div v-for="stat in activeStats" :key="stat.label">
            <div class="text-4xl sm:text-5xl font-bold text-white mb-1">{{ stat.value }}<span class="text-blue-300">+</span></div>
            <div class="text-[12px] text-blue-200 font-medium tracking-wide uppercase">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>


    <!-- ─── AD BANNER: IN_CONTENT_1 ──────────────────────────── -->
    <section v-if="groupedAdverts.IN_CONTENT_1?.length" class="bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AdBanner :adverts="groupedAdverts.IN_CONTENT_1" />
      </div>
    </section>


    <!-- ─── STRATEGIC INITIATIVES ─────────────────────────────── -->
    <section class="bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div class="mb-12">
          <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2">Strategic initiatives</p>
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {{ cmsConfig?.public?.home?.homeHeaders?.initiativesTitle || 'Leading transformations in science' }}
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="(ini, i) in activeInitiatives"
            :key="i"
            class="border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300 group relative overflow-hidden"
          >
            <!-- Ghost bg icon -->
            <component
              :is="ini.icon"
              :size="120"
              class="absolute -right-6 -bottom-6 opacity-[0.04] text-blue-800 pointer-events-none"
            />

            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              :class="initiativeColors[i % initiativeColors.length].bg"
            >
              <component :is="ini.icon" :size="20" :class="initiativeColors[i % initiativeColors.length].icon" />
            </div>
            <h3 class="text-[16px] font-semibold text-slate-800 mb-3 leading-snug">{{ ini.title }}</h3>
            <p class="text-[13px] text-slate-500 leading-relaxed mb-6">{{ ini.desc }}</p>
            <NuxtLink
              :to="ini.to"
              class="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all"
              :class="initiativeColors[i % initiativeColors.length].link"
            >
              {{ $t('home.exploration') }}
              <LucideArrowRight :size="13" class="group-hover:translate-x-0.5 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>


    <!-- ─── SPONSORS ───────────────────────────────────────────── -->
    <section class="bg-slate-50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p class="text-[11px] text-slate-400 font-semibold tracking-widest uppercase text-center mb-8">
          {{ sponsors.length ? $t('home.global_collab_sponsors') : $t('home.global_collab') }}
        </p>
        <div class="overflow-hidden">
          <div class="ticker-track flex gap-16 items-center whitespace-nowrap">
            <template v-if="sponsors.length">
              <template v-for="n in 6" :key="n">
                <template v-for="sponsor in sponsors" :key="sponsor._id + '-' + n">
                  <a
                    v-if="sponsor.websiteUrl"
                    :href="sponsor.websiteUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-shrink-0 opacity-40 hover:opacity-80 grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <img v-if="sponsor.logoUrl" :src="sponsor.logoUrl" :alt="sponsor.name" class="h-8 object-contain" />
                    <span v-else class="text-xl font-bold text-slate-400">{{ sponsor.name }}</span>
                  </a>
                  <div v-else class="flex-shrink-0 opacity-40">
                    <img v-if="sponsor.logoUrl" :src="sponsor.logoUrl" :alt="sponsor.name" class="h-8 object-contain" />
                    <span v-else class="text-xl font-bold text-slate-400">{{ sponsor.name }}</span>
                  </div>
                </template>
              </template>
            </template>
            <template v-else>
              <span v-for="(s, i) in fallbackSponsors.concat(fallbackSponsors).concat(fallbackSponsors)" :key="i" class="text-xl font-bold text-slate-300 flex-shrink-0">
                {{ s }}
              </span>
            </template>
          </div>
        </div>
      </div>
    </section>


    <!-- ─── MEMBERSHIP TIERS ───────────────────────────────────── -->
    <section class="bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div class="text-center mb-12">
          <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2">Membership tiers</p>
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">{{ $t('home.member_tiers') }}</h2>
          <p class="text-[15px] text-slate-500 max-w-md mx-auto">{{ $t('home.join_community') }}</p>
        </div>

        <div class="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          <div
            v-for="(tier, i) in activeTiers"
            :key="i"
            class="border rounded-2xl p-7 transition-all duration-300"
            :class="i === 1 ? 'border-blue-600 bg-[#1d4e89] text-white' : 'border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm'"
          >
            <div
              v-if="i === 1"
              class="inline-block text-[11px] font-semibold bg-white/20 text-white px-2.5 py-1 rounded-full mb-4"
            >
              Most popular
            </div>
            <h3
              class="text-[17px] font-bold mb-1"
              :class="i === 1 ? 'text-white' : 'text-slate-800'"
            >
              {{ tier.title }}
            </h3>
            <div
              class="text-3xl font-bold mb-6"
              :class="i === 1 ? 'text-white' : 'text-[#1d4e89]'"
            >
              ₦{{ tier.price }}
              <span
                v-if="tier.title.includes('Renewal')"
                class="text-[14px] font-normal"
                :class="i === 1 ? 'text-blue-200' : 'text-slate-400'"
              >
                /year
              </span>
            </div>
            <ul class="space-y-3 mb-7">
              <li
                v-for="feat in tier.features"
                :key="feat"
                class="flex items-center gap-2.5 text-[13px]"
                :class="i === 1 ? 'text-blue-100' : 'text-slate-500'"
              >
                <LucideCheck :size="14" :class="i === 1 ? 'text-blue-200 flex-shrink-0' : 'text-emerald-500 flex-shrink-0'" />
                {{ feat }}
              </li>
            </ul>
            <NuxtLink
              to="/membership"
              class="block w-full py-3 text-center rounded-xl text-[14px] font-semibold transition-colors duration-200"
              :class="i === 1
                ? 'bg-white text-[#1d4e89] hover:bg-blue-50'
                : 'bg-[#1d4e89] text-white hover:bg-blue-800'"
            >
              {{ tier.title.includes('Renewal') ? $t('home.renew_now') : $t('home.join_now') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>


    <!-- ─── AD BANNER: ABOVE_FOOTER ──────────────────────────── -->
    <section v-if="groupedAdverts.ABOVE_FOOTER?.length" class="bg-slate-50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AdBanner :adverts="groupedAdverts.ABOVE_FOOTER" />
      </div>
    </section>


    <!-- ─── LEADERSHIP BOARD ───────────────────────────────────── -->
    <section class="bg-slate-50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div class="text-center mb-12">
          <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2">Leadership</p>
          <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">{{ $t('home.our_board') }}</h2>
          <p class="text-[15px] text-slate-500 max-w-md mx-auto">{{ $t('home.board_subtitle') }}</p>
        </div>

        <div v-if="loading" class="flex justify-center py-16">
          <div class="w-8 h-8 border-2 border-blue-700 border-t-transparent rounded-full animate-spin"></div>
        </div>

        <div v-else-if="excosList.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div
            v-for="exco in excosList"
            :key="exco._id"
            class="bg-white border border-slate-200 rounded-2xl overflow-hidden group hover:shadow-md hover:border-blue-200 transition-all duration-300"
          >
            <div class="aspect-[4/3] relative overflow-hidden bg-blue-50">
              <img
                v-if="exco.profilePicture"
                :src="exco.profilePicture"
                :alt="exco.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
            <div class="p-4">
              <p class="text-[11px] text-blue-600 font-semibold tracking-wider uppercase mb-1">
                {{ exco.position || 'Executive member' }}
              </p>
              <h3 class="text-[14px] font-semibold text-slate-800 leading-snug">{{ exco.name }}</h3>
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


    <!-- ─── FINAL CTA ──────────────────────────────────────────── -->
    <section class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
        <div class="max-w-2xl mx-auto">
          <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-4">Get started</p>
          <h2 class="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.15] mb-5">
            Ready to advance your career in pathology?
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
              to="/about"
              class="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-[14px] font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200"
            >
              Learn more about SCPSN
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>


<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
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
  LucideArrowRight,
  LucideChevronLeft,
  LucideChevronRight,
  LucideCheck,
  LucideUser,
  LucideMapPin,
  LucideMenu,
  LucideX,
} from 'lucide-vue-next'

import { useGetExcos } from '@/composables/modules/excos/useGetExcos'
import { useAdverts } from '@/composables/modules/adverts/useAdverts'
import { useSponsors } from '@/composables/modules/sponsors/useSponsors'
import { useGetConferences } from '@/composables/modules/conferences/useGetConferences'
import { useGallery } from '@/composables/useGallery'
import { useCMS } from '@/composables/useCMS'

// ─── Composables ────────────────────────────────────────────
const { cmsConfig } = useCMS()
const { loading: loadingExcos, items: excos, fetchPublicGallery: getExcos  } = useGallery()
const { loading: loading, excos: excosList, getExcos: fetchExcos } = useGetExcos()
const { groupedAdverts, fetchAdverts } = useAdverts()
const { sponsors, fetchSponsors } = useSponsors()
const { conferences, getConferences } = useGetConferences()

// ─── Nav ─────────────────────────────────────────────────────
const mobileMenuOpen = ref<boolean>(false)

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Conferences', to: '/conferences' },
  { label: 'Resources', to: '/resources' },
  { label: 'Members', to: '/membership' },
  { label: 'Contact', to: '/contact' },
]

// ─── Hero ─────────────────────────────────────────────────────
const heroStats = [
  { value: '1,200+', label: 'Qualified scientists' },
  { value: '82+', label: 'Scientific events' },
  { value: '450+', label: 'Lab networks' },
]

// ─── Team carousel ────────────────────────────────────────────
const carouselRef     = ref<HTMLElement | null>(null)
const carouselIndex   = ref<number>(0)
let carouselTimer: ReturnType<typeof setInterval> | null = null

const carouselExcos = computed(() => excos.value ?? [])

const carouselLastIndex = computed<number>(() =>
  Math.max(0, carouselExcos.value.length - 1)
)

const nextSlide = (): void => {
  carouselIndex.value = carouselIndex.value >= carouselLastIndex.value
    ? 0
    : carouselIndex.value + 1
}

const prevSlide = (): void => {
  carouselIndex.value = carouselIndex.value <= 0
    ? carouselLastIndex.value
    : carouselIndex.value - 1
}

const goToSlide = (i: number): void => {
  carouselIndex.value = i
}

const startCarouselTimer = (): void => {
  carouselTimer = setInterval(() => {
    if (carouselExcos.value.length > 1) nextSlide()
  }, 4000)
}

const stopCarouselTimer = (): void => {
  if (carouselTimer) {
    clearInterval(carouselTimer)
    carouselTimer = null
  }
}

// ─── Ticker ───────────────────────────────────────────────────
const tickerItems = [
  { label: 'Precision diagnostics', icon: LucideMicroscope },
  { label: 'Molecular research', icon: LucideDna },
  { label: 'Cellular analysis', icon: LucideFlaskConical },
  { label: 'Global collaboration', icon: LucideGlobe },
  { label: 'Professional excellence', icon: LucideAward },
  { label: 'Continuous training', icon: LucideGraduationCap },
  { label: 'Diagnostic mastery', icon: LucideStethoscope },
]

// ─── Conferences ──────────────────────────────────────────────
const upcomingConferences = computed(() =>
  [...conferences.value]
    .filter(c => c.status === 'upcoming')
    .sort((a, b) => {
      const oA = a.order ?? 999
      const oB = b.order ?? 999
      if (oA !== oB) return oA - oB
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })
    .slice(0, 3)
)

// ─── Pillars ──────────────────────────────────────────────────
const pillarColors = [
  { bg: 'bg-blue-50',   icon: 'text-[#1d4e89]' },
  { bg: 'bg-green-50',  icon: 'text-green-700' },
  { bg: 'bg-amber-50',  icon: 'text-amber-700' },
  { bg: 'bg-teal-50',   icon: 'text-teal-700'  },
]

const activePillars = computed(() => {
  if (cmsConfig.value?.public?.home?.pillars?.length) {
    return cmsConfig.value.public.home.pillars.map((p: any, i: number) => ({
      title: p.title,
      desc: p.desc,
      icon: [LucideDna, LucideFlaskConical, LucideLibrary, LucideStethoscope][i % 4],
    }))
  }
  return [
    { title: 'Advanced research',  desc: 'Cutting-edge investigative studies in molecular diagnostics and genomic pathology.',        icon: LucideDna },
    { title: 'Standardization',    desc: 'National protocols for high-precision histopathology processing and quality assurance.',    icon: LucideFlaskConical },
    { title: 'Digital library',    desc: 'Exclusive access to peer-reviewed scientific journals, newsletters, and secure resources.', icon: LucideLibrary },
    { title: 'Mastery portal',     desc: 'Improving diagnostic accuracy through continuous training and international collaboration.', icon: LucideStethoscope },
  ]
})

// ─── Stats ────────────────────────────────────────────────────
const activeStats = computed(() => {
  if (cmsConfig.value?.public?.home?.stats?.length) {
    return cmsConfig.value.public.home.stats.map((s: any) => ({
      label: s.label,
      value: s.value,
    }))
  }
  return [
    { label: 'Qualified scientists', value: '1,200' },
    { label: 'Scientific events',    value: '82'    },
    { label: 'Lab networks',         value: '450'   },
    { label: 'Awards issued',        value: '45'    },
  ]
})

// ─── Initiatives ──────────────────────────────────────────────
const initiativeColors = [
  { bg: 'bg-blue-50',  icon: 'text-[#1d4e89]',  link: 'text-[#1d4e89] hover:text-blue-800'  },
  { bg: 'bg-red-50',   icon: 'text-red-600',   link: 'text-red-600 hover:text-red-700'    },
  { bg: 'bg-teal-50',  icon: 'text-teal-700',  link: 'text-teal-700 hover:text-teal-800'  },
]

const activeInitiatives = computed(() => {
  if (cmsConfig.value?.public?.home?.initiatives?.length) {
    return cmsConfig.value.public.home.initiatives.map((ini: any, i: number) => ({
      title: ini.title,
      desc:  ini.desc,
      icon:  [LucideGlobe, LucideMicroscope, LucideDna][i % 3],
      to:    '/about',
    }))
  }
  return [
    { title: 'Digital pathology expansion', desc: 'Implementing AI-driven diagnostic tools in laboratories across Nigeria and the sub-region.', icon: LucideGlobe,       to: '/about'       },
    { title: 'Cancer screening project',    desc: 'Collaborating with oncology centres for early histopathology detection and prevention.',     icon: LucideMicroscope, to: '/conferences' },
    { title: 'Molecular genetics hub',      desc: 'A dedicated research initiative for genomic cellular analysis and data-driven pathology.',   icon: LucideDna,        to: '/abstracts'   },
  ]
})

// ─── Sponsors fallback ───────────────────────────────────────
const fallbackSponsors = ['WHO', 'IFCC', 'ASCP', 'IPH', 'MLSCN', 'FMOH']

// ─── Tiers ───────────────────────────────────────────────────
const activeTiers = computed(() => {
  if (cmsConfig.value?.public?.home?.tiers?.length) {
    return cmsConfig.value.public.home.tiers
  }
  return [
    {
      title:    'New registration',
      price:    '20,000',
      features: ['Full association membership', 'Voting rights & governance', 'Journal access', 'Conference discounts'],
    },
    {
      title:    'Membership Renewal',
      price:    '10,000',
      features: ['Maintain active status', 'Continuous journal access', 'Resource vault access', 'Mentorship & networking'],
    },
  ]
})

// ─── Lifecycle ───────────────────────────────────────────────
onMounted(async () => {
  fetchAdverts()
  fetchSponsors()
  getConferences()
  await getExcos()
  await fetchExcos()
  startCarouselTimer()
})

onUnmounted(() => {
  stopCarouselTimer()
})
</script>


<style scoped>
/* ── Custom font stack ────────────────────────────────────── */
.font-body {
  font-family: 'DM Sans', 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
}

/* ── Nav slide-down transition ─────────────────────────────── */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.22s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ── Infinite ticker ─────────────────────────────────────── */
.ticker-track {
  animation: ticker 35s linear infinite;
  width: max-content;
}
.ticker-track:hover {
  animation-play-state: paused;
}
@keyframes ticker {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ── Hide scrollbar (mobile carousel strip) ──────────────── */
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>