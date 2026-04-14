<template>
  <main class="bg-white">
    <NavbarSection />
    
    <AnimatedHero />

    <!-- Subtle Professional Announcement Bar -->
    <div class="relative bg-emerald-900 overflow-hidden py-4 shadow-sm border-y border-emerald-800/20">
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 opacity-50"></div>
      <div class="relative whitespace-nowrap animate-marquee-slant text-sm md:text-base font-medium text-emerald-50/90 flex items-center will-change-transform">
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

    <MakariosIntro id="about" />
    
    <ProgramsSection id="programs" />

    <KikaExamination id="kika" />

    <Team id="leadership" />

    <OurTeam id="impact" />

    <Subscriptions id="donate" />

    <Footer />
  </main>
</template>

<script setup lang="ts">
import AnimatedHero from "../components/AnimatedHero.vue"
import NavbarSection from "../components/NavbarSection.vue"

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
</style>