<template>
  <main class="bg-black text-white min-h-screen">
    <NavbarSection />
    
    <AnimatedHero />

    <!-- Subtle Professional Announcement Bar -->
    <div class="relative bg-black overflow-hidden py-4 shadow-sm border-y border-white/10">
      <div class="absolute inset-0 bg-gradient-to-r from-black via-zinc-900 to-black opacity-50"></div>
      <div class="relative whitespace-nowrap animate-marquee-slant text-sm md:text-base font-medium text-white/90 flex items-center will-change-transform">
        <div class="inline-flex items-center gap-4 mr-12 lg:mr-24 text-shadow-sm">
          <span class="text-xl">✨</span>
          <span class="tracking-wide uppercase">Latest: "Kika's Examination" - Empowering children with moral resilience.</span>
        </div>
        <div class="inline-flex items-center gap-4 mr-12 lg:mr-24 text-shadow-sm">
          <span class="text-xl">📚</span>
          <span class="uppercase">Now available at leading educational outlets and for community donations.</span>
        </div>
        <div class="inline-flex items-center gap-4 mr-12 lg:mr-24 text-shadow-sm">
          <span class="text-xl">🌍</span>
          <span class="uppercase">Transforming grassroots healthcare delivery since 2017.</span>
        </div>
      </div>
    </div>

    <!-- Highly Rated Testimonial Video -->
    <section class="py-16 bg-black relative border-b border-white/10">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-black text-white tracking-tight mb-3">Featured on NTA Channel 10 Lagos</h2>
          <p class="text-slate-400 text-lg">Watch this highly rated testimonial covering our recent event and its impact.</p>
        </div>
        <div 
          @click="openTestimonial"
          class="rounded-3xl overflow-hidden shadow-2xl shadow-[#E62B1E]/10 border border-white/20 relative bg-zinc-900 aspect-video cursor-pointer group"
        >
          <video
            src="~/assets/videos/intro.mp4"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            autoplay
            muted
            loop
            playsinline
          ></video>
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/20">
            <div class="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform transition-transform duration-300 group-hover:scale-110">
              <svg class="w-10 h-10 text-white translate-x-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AfricanChildDay id="african-child-day" />
    
    <RecentProgramme id="recent-programme" />

    <MakariosIntro id="about" />
    
    <ProgramsSection id="programs" />

    <KikaExamination id="kika" />

    <Team id="leadership" />

    <OurTeam id="impact" />

    <Subscriptions id="donate" />

    <ClientOnly>
      <Teleport to="body">
        <Transition name="modal-fade">
          <div
            v-if="isTestimonialModalOpen"
            class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
            @click.self="closeTestimonial"
          >
            <button
              @click="closeTestimonial"
              class="absolute top-4 right-4 md:top-8 md:right-8 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 transition-colors duration-200 text-white"
              aria-label="Close video"
            >
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="w-full max-w-6xl aspect-video relative animate-fade-in-scale">
              <video
                ref="testimonialModalVideo"
                class="w-full h-full rounded-2xl shadow-2xl border border-white/10"
                controls
                playsinline
              >
                <source src="~/assets/videos/intro.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </Transition>
      </Teleport>
    </ClientOnly>

    <Footer />
  </main>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'
import AnimatedHero from "../components/AnimatedHero.vue"
import NavbarSection from "../components/NavbarSection.vue"
import AfricanChildDay from "../components/AfricanChildDay.vue"
import RecentProgramme from "../components/RecentProgramme.vue"

const isTestimonialModalOpen = ref(false)
const testimonialModalVideo = ref<HTMLVideoElement | null>(null)

const openTestimonial = async () => {
  isTestimonialModalOpen.value = true
  document.body.style.overflow = 'hidden'
  await nextTick()
  if (testimonialModalVideo.value) {
    testimonialModalVideo.value.play().catch(e => console.log('Autoplay prevented', e))
  }
}

const closeTestimonial = () => {
  isTestimonialModalOpen.value = false
  document.body.style.overflow = ''
  if (testimonialModalVideo.value) {
    testimonialModalVideo.value.pause()
  }
}

const handleEscKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isTestimonialModalOpen.value) {
    closeTestimonial()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscKey)
  document.body.style.overflow = ''
})

useServerSeoMeta({
  title: "Makarios Initiative | Building Hope, Transforming Lives",
  ogTitle: "Makarios Initiative | Home",
  description: "MAKARIOS Initiative is a non-governmental entity dedicated to improving health outcomes and empowering communities through sustainable healthcare and humanitarian projects.",
  ogDescription: "Improving Lives Through Health and Humanitarian Projects",
  ogImage: "https://makariosinitiative.org/og-image.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Improving Lives Through Health and Humanitarian Projects | Makarios Initiative",
  twitterDescription: "MAKARIOS Initiative is dedicated to improving health outcomes and empowering communities through sustainable development programs.",
})

useSeoMeta({
  title: "Makarios Initiative",
  ogTitle: "Makarios Initiative | Home",
  description: "MAKARIOS Initiative is dedicated to improving health outcomes and empowering communities through sustainable development programs.",
  ogDescription: "Improving Lives Through Health and Humanitarian Projects",
  ogImage: "https://makariosinitiative.org/og-image.jpg",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
@keyframes marquee-slant {
  0% { 
    transform: translateX(0); 
  }
  100% { 
    transform: translateX(-100%); 
  }
}

.animate-marquee-slant {
  animation: marquee-slant 40s linear infinite;
  display: flex;
}

.text-shadow-sm {
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.will-change-transform {
  will-change: transform;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.animate-fade-in-scale {
  opacity: 0;
  animation: fadeInScale 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInScale {
  from { opacity: 0; transform: scale(0.95) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
</style>