<template>
  <NavbarSection />
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-amber-900">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center px-4">
      <!-- Main Hero Content -->
      <div class="container mx-auto text-center z-10 relative max-w-6xl">
        <div 
          class="transform transition-all duration-1000 ease-out"
          :class="heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
        >
          <!-- Award Badge -->
          <div class="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-amber-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full mb-8 shadow-xl">
            <div class="w-4 h-4 md:w-6 md:h-6 bg-amber-400 rounded-full"></div>
            <span class="font-bold text-sm md:text-lg">D-PRIZE GLOBAL AWARD WINNER 2018</span>
          </div>

          <h1 class="text-4xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-red-500 mb-6 leading-tight">
            SAFE PASSAGE INITIATIVE
          </h1>
          
          <p class="text-xl md:text-2xl lg:text-3xl text-slate-200 font-bold max-w-4xl mx-auto leading-relaxed mb-6">
            Revolutionizing Maternal Health in Nigeria
          </p>
          
          <p class="text-base md:text-lg lg:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            The world's <span class="text-amber-400 font-bold">#1 awarded operational model</span> 
            for combating maternal mortality - achieving 
            <span class="text-red-400 font-bold">near-zero maternal deaths</span> 
            in our 3-month pilot program.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              @click="scrollToSection('impact')"
              class="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors duration-300 shadow-xl w-full sm:w-auto"
            >
              SEE OUR IMPACT
            </button>
            
            <button 
              @click="scrollToSection('video')"
              class="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors duration-300 shadow-xl w-full sm:w-auto"
            >
              WATCH VIDEO
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Award Recognition Section -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-red-800 via-red-700 to-amber-700">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <div class="text-6xl md:text-8xl mb-6">🏆</div>
          <h2 class="text-4xl md:text-6xl font-black text-white mb-8">
            GLOBAL RECOGNITION
          </h2>
          <div class="max-w-4xl mx-auto">
            <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-amber-400/30 shadow-2xl">
              <p class="text-lg md:text-2xl text-white leading-relaxed font-semibold mb-6">
                Our operational model won the prestigious <strong class="text-amber-300">D-Prize global award for maternal health</strong> 
                in August 2018, recognized as the <span class="text-amber-200 font-black text-2xl md:text-3xl">#1 MODEL</span> 
                in a global competition to develop solutions for combating maternal health challenges in developing countries.
              </p>
              <a 
                href="https://www.d-prize.org/winners/profiles/2018/8/1/safe-passage-initiative#" 
                target="_blank"
                class="inline-flex items-center bg-white text-red-700 px-6 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
              >
                VIEW AWARD DETAILS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Statistics -->
    <section id="impact" class="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-red-900 to-amber-900">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400 mb-8">
            UNPRECEDENTED IMPACT
          </h2>
          <p class="text-lg md:text-2xl text-slate-200 max-w-4xl mx-auto font-semibold">
            Our 3-month pilot in Imo State delivered extraordinary results that changed lives forever
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-red-400/30 shadow-xl"
          >
            <div class="text-5xl md:text-6xl mb-4" :class="stat.color">
              {{ stat.icon }}
            </div>
            <div class="text-3xl md:text-4xl font-black text-white mb-2">
              {{ stat.number }}
            </div>
            <div class="text-base md:text-lg text-slate-300 font-bold">
              {{ stat.label }}
            </div>
          </div>
        </div>

        <!-- Success Story -->
        <div class="max-w-6xl mx-auto">
          <div class="bg-gradient-to-r from-red-500/20 to-amber-500/20 backdrop-blur-lg rounded-2xl p-8 md:p-16 border border-red-400/40 shadow-2xl">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <h3 class="text-3xl md:text-4xl font-black text-red-400 mb-6">
                  🛡️ REVOLUTIONARY RESULTS
                </h3>
                <p class="text-lg md:text-xl text-slate-200 leading-relaxed mb-6 font-medium">
                  Over <strong class="text-red-400 text-2xl">100 Traditional Birth Attendants (TBAs)</strong> 
                  were trained across the 3 geopolitical zones of Imo State. The evaluation results 
                  showed a <strong class="text-amber-400 text-2xl">sharp reduction to near-zero</strong> 
                  maternal deaths during the 3-month pilot period.
                </p>
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-gradient-to-r from-red-500 to-amber-500 rounded-full flex items-center justify-center shadow-xl">
                    <div class="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <span class="text-xl text-amber-400 font-bold">LIVES SAVED. FUTURES PROTECTED.</span>
                </div>
              </div>
              <div class="flex items-center justify-center">
                <div class="w-64 h-64 bg-gradient-to-br from-red-400/20 to-amber-400/20 rounded-full flex items-center justify-center border-2 border-red-400/50 shadow-2xl">
                  <div class="text-8xl">❤️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section id="video" class="py-16 md:py-24 bg-gradient-to-br from-red-900 via-slate-900 to-amber-900">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400 mb-8">
            SEE OUR WORK IN ACTION
          </h2>
          <p class="text-lg md:text-2xl text-slate-200 max-w-4xl mx-auto font-semibold">
            Watch the incredible journey of transformation and impact in our 3-minute documentary
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="aspect-video bg-gradient-to-br from-red-600/30 to-amber-600/30 rounded-2xl overflow-hidden border-2 border-red-400/50 shadow-2xl">
            <div 
              v-if="!isVideoPlaying"
              class="w-full h-full flex items-center justify-center cursor-pointer"
              @click="playVideo"
            >
              <div class="text-center">
                <div class="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl">
                  <div class="w-12 h-12 md:w-14 md:h-14 bg-red-600 rounded-full flex items-center justify-center ml-1">
                    <div class="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                  </div>
                </div>
                <p class="text-white text-xl md:text-2xl font-bold mb-2">CLICK TO PLAY VIDEO</p>
                <p class="text-slate-300 text-lg font-semibold">3-minute documentary</p>
              </div>
            </div>
            <iframe 
              v-else
              src="https://player.vimeo.com/video/323184042?autoplay=1"
              class="w-full h-full"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Simplified Image Gallery -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-amber-900 via-red-900 to-slate-900">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-400 mb-8">
            📸 PICTURE PROOF OF IMPACT
          </h2>
          <p class="text-lg md:text-2xl text-slate-200 max-w-4xl mx-auto font-semibold">
            Visual evidence of our groundbreaking work transforming maternal healthcare across Imo State
          </p>
        </div>
        <ContinousCarousel :testimonials="galleryImages" />
        <!-- Simple Marquee Gallery -->
        <!-- <div class="relative overflow-hidden">
          <div class="flex animate-marquee space-x-4">
            <div 
              v-for="(image, index) in [...galleryImages, ...galleryImages]" 
              :key="`marquee-${index}`"
              class="flex-shrink-0 cursor-pointer"
              @click="openGallery(index % galleryImages.length)"
            >
              <div class="w-64 md:w-80 h-48 md:h-60 bg-white/10 rounded-xl overflow-hidden border border-amber-400/30 shadow-xl">
                <img 
                  :src="image.src" 
                  :alt="image.alt"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </section>

    <!-- Innovation Highlight -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-red-900 to-amber-900">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-6xl mx-auto">
          <div class="bg-gradient-to-r from-red-400/20 to-amber-400/20 backdrop-blur-lg rounded-2xl p-8 md:p-16 border border-red-400/40 shadow-2xl">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400 mb-6">
                WORLD-FIRST INNOVATION
              </h2>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div class="space-y-8">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl">
                    <div class="text-xl">🌍</div>
                  </div>
                  <div>
                    <h3 class="text-2xl md:text-3xl font-black text-red-400 mb-3">GLOBAL FIRST</h3>
                    <p class="text-slate-200 text-lg leading-relaxed">
                      This innovative solution is the <strong class="text-amber-400">first of its kind</strong> and has never been implemented 
                      anywhere else in the world except in Imo State.
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl">
                    <div class="text-xl">📍</div>
                  </div>
                  <div>
                    <h3 class="text-2xl md:text-3xl font-black text-amber-400 mb-3">PILOT SUCCESS</h3>
                    <p class="text-slate-200 text-lg leading-relaxed">
                      Implemented from <strong class="text-red-400">September to November 2018</strong> in Imo State, 
                      achieving unprecedented results in maternal health outcomes.
                    </p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-gradient-to-r from-red-500 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl">
                    <div class="text-xl">📈</div>
                  </div>
                  <div>
                    <h3 class="text-2xl md:text-3xl font-black text-red-400 mb-3">SCALABLE IMPACT</h3>
                    <p class="text-slate-200 text-lg leading-relaxed">
                      Proven model ready for scaling across Nigeria and other developing countries 
                      to save countless maternal lives.
                    </p>
                  </div>
                </div>
              </div>
              
              <div class="flex items-center justify-center">
                <div class="w-64 h-64 bg-gradient-to-br from-red-400/20 to-amber-400/20 rounded-full flex items-center justify-center border-2 border-red-400/50 shadow-2xl">
                  <div class="text-center">
                    <div class="text-6xl mb-4">❤️</div>
                    <p class="text-2xl font-black text-white">SAVING LIVES</p>
                    <p class="text-red-400 text-lg font-bold">One Mother at a Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '#imports'

// Import all SPI images
import spi1 from "@/assets/img/spi/spi1.jpeg"
import spi2 from "@/assets/img/spi/spi2.jpeg"
import spi3 from "@/assets/img/spi/spi3.jpeg"
import spi4 from "@/assets/img/spi/spi4.jpeg"
import spi5 from "@/assets/img/spi/spi5.jpeg"
import spi6 from "@/assets/img/spi/spi6.jpeg"
import spi7 from "@/assets/img/spi/spi7.jpeg"
import spi8 from "@/assets/img/spi/spi8.jpeg"
import spi9 from "@/assets/img/spi/spi9.jpeg"
import spi10 from "@/assets/img/spi/spi10.jpeg"
import spi11 from "@/assets/img/spi/spi11.jpeg"
import spi12 from "@/assets/img/spi/spi12.jpeg"
import spi13 from "@/assets/img/spi/spi13.jpeg"
import spi14 from "@/assets/img/spi/spi14.jpeg"
import spi15 from "@/assets/img/spi/spi15.jpeg"
import spi16 from "@/assets/img/spi/spi16.jpeg"
import spi17 from "@/assets/img/spi/spi17.jpeg"
import spi18 from "@/assets/img/spi/spi18.jpeg"
import spi19 from "@/assets/img/spi/spi19.jpeg"
import spi20 from "@/assets/img/spi/spi20.jpeg"
import spi21 from "@/assets/img/spi/spi21.jpeg"
import NavbarSection from "../components/NavbarSection.vue"

useServerSeoMeta({
  title: "Makarios Initiative | SAFE PASSAGE INITIATIVE",
  ogTitle: "Makarios Initiative | SAFE PASSAGE INITIATIVE",
  description: "Revolutionizing Maternal Health in Nigeria | Makarios Initiative.",
  ogDescription: "Revolutionizing Maternal Health in Nigeria | Makarios Initiative.",
  ogImage: "https://makariosinitiative.org/og-image.jpg",
  ogImageUrl: "https://makariosinitiative.org/og-image.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "MAKARIOS Initiative is dedicated to Transforming Education Through Innovation and Excellence | Makarios Initiative",
  twitterDescription: "MAKARIOS Initiative is dedicated to Transforming Education Through Innovation and Excellence | Makarios Initiative",
  twitterImage: "https://makariosinitiative.org/og-image.jpg"
})

useSeoMeta({
  title: "Makarios Initiative | SAFE PASSAGE INITIATIVE",
  ogTitle: "Makarios Initiative | SAFE PASSAGE INITIATIVE",
  description: "Revolutionizing Maternal Health in Nigeria | Makarios Initiative.",
  ogDescription: "Revolutionizing Maternal Health in Nigeria | Makarios Initiative.",
  ogImage: "https://makariosinitiative.org/og-image.jpg",
  ogImageUrl: "https://makariosinitiative.org/og-image.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "MAKARIOS Initiative is dedicated to Transforming Education Through Innovation and Excellence | Makarios Initiative",
  twitterDescription: "MAKARIOS Initiative is dedicated to Transforming Education Through Innovation and Excellence | Makarios Initiative",
  twitterImage: "https://makariosinitiative.org/og-image.jpg"
  });

// Define types
interface Stat {
  icon: string
  number: string
  label: string
  color: string
}

interface GalleryImage {
  image: string
  alt: string
  title: string
  subtitle: string
}

// Reactive data
const heroVisible = ref(false)
const isVideoPlaying = ref(false)
const currentGalleryIndex = ref(0)

// Statistics data
const stats: Stat[] = [
  { icon: '👥', number: '100+', label: 'TBAs Trained', color: 'text-pink-400' },
  { icon: '📍', number: '3', label: 'Geopolitical Zones', color: 'text-blue-400' },
  { icon: '📈', number: '~0', label: 'Maternal Deaths', color: 'text-green-400' },
  { icon: '🏆', number: '#1', label: 'Global Award Winner', color: 'text-yellow-400' }
]

// Gallery images data
const galleryImages: GalleryImage[] = [
  { image: spi1, alt: 'Safe Passage Initiative Training', title: 'TBA Training', subtitle: 'Training session' },
  { image: spi2, alt: 'Community Health Workshop', title: 'Community Engagement', subtitle: 'Health workshop' },
  { image: spi3, alt: 'D-Prize Award Recognition', title: 'Global Recognition', subtitle: 'Award ceremony' },
  { image: spi4, alt: 'Field Implementation', title: 'Field Work', subtitle: 'Implementation' },
  { image: spi5, alt: 'Success Stories', title: 'Impact Stories', subtitle: 'Real impact' },
  { image: spi6, alt: 'Team Collaboration', title: 'Team Work', subtitle: 'Collaboration' },
  { image: spi7, alt: 'Healthcare Training', title: 'Skills Development', subtitle: 'Training' },
  { image: spi8, alt: 'Community Outreach', title: 'Outreach', subtitle: 'Community work' },
  { image: spi9, alt: 'Medical Equipment', title: 'Equipment Training', subtitle: 'Medical tools' },
  { image: spi10, alt: 'Health Education', title: 'Education', subtitle: 'Health learning' },
  { image: spi11, alt: 'Program Implementation', title: 'Implementation', subtitle: 'Program rollout' },
  { image: spi12, alt: 'Stakeholder Meeting', title: 'Stakeholders', subtitle: 'Engagement' },
  { image: spi13, alt: 'Documentation', title: 'Documentation', subtitle: 'Recording progress' },
  { image: spi14, alt: 'Health Workers', title: 'Health Workers', subtitle: 'Local workers' },
  { image: spi15, alt: 'Maternal Care', title: 'Maternal Care', subtitle: 'Specialized care' },
  { image: spi16, alt: 'Evaluation', title: 'Evaluation', subtitle: 'Assessment' },
  { image: spi17, alt: 'Mobilization', title: 'Mobilization', subtitle: 'Community action' },
  { image: spi18, alt: 'Award Ceremony', title: 'Recognition', subtitle: 'Global award' },
  { image: spi19, alt: 'Training Completion', title: 'Graduation', subtitle: 'Completion' },
  { image: spi20, alt: 'Impact Assessment', title: 'Assessment', subtitle: 'Measuring success' },
  { image: spi21, alt: 'Future Planning', title: 'Planning', subtitle: 'Future expansion' }
]

// Methods
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const playVideo = () => {
  isVideoPlaying.value = true
}

const openGallery = (index: number) => {
  currentGalleryIndex.value = index
  console.log(`Opening gallery at index ${index}`)
}

// Lifecycle
onMounted(() => {
  setTimeout(() => {
    heroVisible.value = true
  }, 300)
})

// Meta tags
useHead({
  title: 'Safe Passage Initiative - Award-Winning Maternal Health Program',
  meta: [
    { name: 'description', content: 'D-Prize global award winner for maternal health. Revolutionary operational model achieving near-zero maternal deaths in Nigeria.' }
  ]
})
</script>

<style scoped>
/* Simple marquee animation */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 40s linear infinite;
}

/* Backdrop blur */
.backdrop-blur-lg {
  backdrop-filter: blur(16px);
}

/* Border utilities */
.border-l-6 {
  border-left-width: 6px;
}
</style>