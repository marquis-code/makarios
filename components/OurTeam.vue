<template>
  <section class="bg-[#f2f9f3] py-12 lg:py-16 relative overflow-hidden font-sans">
    
    <!-- Massive Editorial Background Quote -->
    <div class="absolute top-10 left-10 text-[8rem] lg:text-[10rem] leading-none font-serif text-emerald-900/5 select-none pointer-events-none">
      "
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-10">
      
      <!-- Left side: Typography and Controls -->
      <div class="w-full lg:w-5/12 flex flex-col justify-center animate-fade-in-up">
        <h2 class="text-emerald-900 font-bold tracking-widest uppercase text-xs mb-4">Impact Stories</h2>
        <h3 class="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
          Voices of <br/>
          <span class="text-emerald-900">Transformation</span>
        </h3>
        <p class="text-base text-slate-600 font-medium mb-8">
          Hear from educational leaders who have witnessed the powerful impact of our literacy initiatives in their communities.
        </p>
        
        <!-- Controls -->
        <div class="flex items-center gap-6">
          <button 
            @click="goToPrev"
            class="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-emerald-900 hover:text-emerald-900 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div class="flex gap-2">
            <button 
              v-for="(t, index) in testimonials" :key="t.id"
              @click="goToSlide(index)"
              class="h-2 rounded-full transition-all duration-500"
              :class="index === currentIndex ? 'w-8 bg-emerald-900' : 'w-2 bg-slate-300 hover:bg-emerald-900/50'"
            ></button>
          </div>
          <button 
            @click="goToNext"
            class="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-emerald-900 hover:text-emerald-900 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <!-- Right side: Cutout Testimonial Card -->
      <div class="w-full lg:w-7/12 relative mt-16 lg:mt-0" @mouseenter="pauseAutoPlay" @mouseleave="resumeAutoPlay">
        
        <!-- Background Card -->
        <div class="absolute inset-0 bg-white rounded-[3rem] shadow-2xl shadow-emerald-900/10 transform rotate-3 scale-105 transition-transform duration-500"></div>
        
        <div class="bg-white rounded-[3rem] p-8 md:p-12 relative z-10 shadow-xl border border-slate-50 min-h-[400px] flex flex-col justify-between">
          
          <Transition :name="direction === 'next' ? 'slide-left' : 'slide-right'" mode="out-in">
            <div :key="currentIndex">
              
              <!-- Breakout Avatar -->
              <div class="absolute -top-12 md:-top-16 right-10 md:right-16 z-20">
                <div class="relative group cursor-pointer">
                  <div class="absolute inset-0 bg-emerald-900 rounded-full transform rotate-6 scale-105 group-hover:rotate-12 transition-transform duration-300"></div>
                  <img 
                    :src="avatarSrc" 
                    :alt="currentTestimonial.name"
                    class="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg bg-slate-100"
                  />
                  <div class="absolute bottom-2 right-2 w-6 h-6 bg-emerald-900 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">✓</div>
                </div>
              </div>

              <!-- Badges -->
              <div class="flex flex-wrap gap-2 mb-8 mt-4 md:mt-0 max-w-[70%]">
                <span class="px-3 py-1 bg-emerald-900/10 text-emerald-900 rounded-lg text-xs font-bold uppercase tracking-wider">
                  {{ currentTestimonial.impact }}
                </span>
                <span class="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider">
                  {{ currentTestimonial.location }}
                </span>
              </div>

              <!-- Quote Typography -->
              <blockquote class="text-xl md:text-2xl font-serif text-slate-800 leading-relaxed mb-8 relative">
                <span class="text-emerald-900 font-sans font-black text-3xl mr-1 leading-none">"</span>
                {{ currentTestimonial.quote }}
                <span class="text-emerald-900 font-sans font-black text-3xl ml-1 leading-none">"</span>
              </blockquote>

              <!-- Author Info -->
              <div class="border-t border-slate-100 pt-6">
                <div class="font-black text-xl text-slate-900">{{ currentTestimonial.name }}</div>
                <div class="text-emerald-900 font-bold text-sm uppercase tracking-wider mt-1">{{ currentTestimonial.position }}</div>
                <div class="text-slate-500 font-medium text-sm mt-1">{{ currentTestimonial.organization }}</div>
              </div>

            </div>
          </Transition>

          <!-- Auto progress bar -->
          <div class="absolute bottom-0 left-0 w-full h-1.5 bg-slate-100 rounded-b-[3rem] overflow-hidden">
            <div 
              class="h-full bg-emerald-900 transition-all duration-300 ease-linear"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Impact Stats -->
    <div class="max-w-7xl mx-auto px-6 lg:px-8 mt-16 animate-fade-in-up delay-300">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="text-center group">
          <div class="text-4xl md:text-5xl font-black text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors">15+</div>
          <div class="text-sm font-bold text-slate-500 uppercase tracking-widest">Active Programs</div>
        </div>
        <div class="text-center group">
          <div class="text-4xl md:text-5xl font-black text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors">50k</div>
          <div class="text-sm font-bold text-slate-500 uppercase tracking-widest">Books Donated</div>
        </div>
        <div class="text-center group">
          <div class="text-4xl md:text-5xl font-black text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors">120</div>
          <div class="text-sm font-bold text-slate-500 uppercase tracking-widest">Communities</div>
        </div>
        <div class="text-center group">
          <div class="text-4xl md:text-5xl font-black text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors">10k+</div>
          <div class="text-sm font-bold text-slate-500 uppercase tracking-widest">Students Reached</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

import avatarSrc from '~/assets/icons/avatar.svg';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  image: string;
  organization?: string;
  impact?: string;
  location?: string;
}

const testimonials = ref<Testimonial[]>([
  {
    id: 1,
    name: "Shola N.A.",
    position: "Educational Director",
    organization: "Divine Offspring Int'l Schools",
    location: "Lagos, Nigeria",
    impact: "School Library Transformed",
    quote: "MIHHD's donation has been transformational for our students. The resources perfectly align with our mission. These books have enriched our library and inspired our pupils to uphold strong values while pursuing excellence.",
    image: "/assets/img/testimonials/testimonial1.jpeg",
  },
  {
    id: 2,
    name: "Ugochi Madubuike",
    position: "Head Teacher",
    organization: "Straitgate School",
    location: "Abuja, Nigeria",
    impact: "Curriculum Enriched",
    quote: "The partnership with MIHHD brought invaluable resources to our environment. The books deliver a timely message that inspires our pupils to maintain moral integrity while excelling academically.",
    image: "/assets/img/testimonials/testimonial1.jpeg",
  },
  {
    id: 3,
    name: "Dr. Adebayo",
    position: "Principal",
    organization: "Grace High School",
    location: "Ibadan, Nigeria",
    impact: "Classroom Upgraded",
    quote: "Receiving these educational materials changed how our students interact with literature. We've seen a 40% increase in library attendance and a newfound passion for reading among our junior sections.",
    image: "/assets/img/testimonials/testimonial1.jpeg",
  }
]);

const currentIndex = ref(0);
const isAnimating = ref(false);
const direction = ref<"next" | "prev">("next");
const isPaused = ref(false);
const progress = ref(0);
const DURATION = 6000;
const TICK_RATE = 50;

const currentTestimonial = computed(() => testimonials.value[currentIndex.value]);

const goToNext = () => {
  if (isAnimating.value) return;
  direction.value = "next";
  isAnimating.value = true;
  progress.value = 0;
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
    isAnimating.value = false;
  }, 400);
};

const goToPrev = () => {
  if (isAnimating.value) return;
  direction.value = "prev";
  isAnimating.value = true;
  progress.value = 0;
  setTimeout(() => {
    currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
    isAnimating.value = false;
  }, 400);
};

const goToSlide = (index: number) => {
  if (isAnimating.value || index === currentIndex.value) return;
  direction.value = index > currentIndex.value ? "next" : "prev";
  isAnimating.value = true;
  progress.value = 0;
  setTimeout(() => {
    currentIndex.value = index;
    isAnimating.value = false;
  }, 400);
};

let ticker: ReturnType<typeof setInterval>;

const startAutoPlay = () => {
  ticker = setInterval(() => {
    if (!isPaused.value && !isAnimating.value) {
      progress.value += (TICK_RATE / DURATION) * 100;
      if (progress.value >= 100) {
        goToNext();
      }
    }
  }, TICK_RATE);
};

const pauseAutoPlay = () => { isPaused.value = true; };
const resumeAutoPlay = () => { isPaused.value = false; };

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  clearInterval(ticker);
});
</script>

<style scoped>
/* Slide Animations */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-left-enter-from { opacity: 0; transform: translateX(30px); }
.slide-left-leave-to { opacity: 0; transform: translateX(-30px); }

.slide-right-enter-from { opacity: 0; transform: translateX(-30px); }
.slide-right-leave-to { opacity: 0; transform: translateX(30px); }

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.delay-300 { animation-delay: 300ms; }
</style>
