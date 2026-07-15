<template>
  <main class="bg-black text-white min-h-screen">
    <NavbarSection />
    
    <AnimatedHero />

    <!-- Subtle Professional Announcement Bar -->
    <div class="relative bg-slate-50 overflow-hidden py-3 shadow-sm border-y border-slate-200">
      <div class="absolute inset-0 bg-gradient-to-r from-slate-100 via-white to-slate-100 opacity-80"></div>
      <div class="relative whitespace-nowrap animate-marquee-slant text-sm font-medium text-slate-700 flex items-center will-change-transform">
        <div class="inline-flex items-center gap-4 mr-12 lg:mr-24">
          <span class="text-lg">✨</span>
          <span class="tracking-wide">Latest: "Kika's Examination" - Empowering children with moral resilience.</span>
        </div>
        <div class="inline-flex items-center gap-4 mr-12 lg:mr-24">
          <span class="text-lg">📚</span>
          <span>Now available at leading educational outlets and for community donations.</span>
        </div>
        <div class="inline-flex items-center gap-4 mr-12 lg:mr-24">
          <span class="text-lg">🌍</span>
          <span>Transforming grassroots healthcare delivery since 2017.</span>
        </div>
      </div>
    </div>

    <!-- Highly Rated Testimonial Video -->
    <section class="py-12 bg-white relative border-b border-slate-100">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">Featured on NTA Channel 10 Lagos</h2>
          <p class="text-slate-600 text-base md:text-lg">Watch this highly rated testimonial covering our recent event and its impact.</p>
        </div>
        <div 
          @click="openTestimonial"
          class="rounded-3xl overflow-hidden shadow-xl shadow-primary/10 border border-slate-200 relative bg-slate-900 aspect-video cursor-pointer group"
        >
          <video
            src="~/assets/videos/intro.mp4"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            autoplay
            muted
            loop
            playsinline
          ></video>
          <div class="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/10">
            <div class="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              <svg class="w-8 h-8 text-primary translate-x-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
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
            class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
            @click.self="closeTestimonial"
          >
            <button
              @click="closeTestimonial"
              class="absolute top-4 right-4 md:top-8 md:right-8 z-[110] w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 transition-colors duration-200 text-white"
              aria-label="Close video"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="w-full max-w-5xl aspect-video relative animate-fade-in-scale">
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