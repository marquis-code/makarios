<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  image: string;
  organization?: string;
}

// Updated testimonials based on the uploaded content
const testimonials = ref<Testimonial[]>([
  {
    id: 1,
    name: "Ugochi Madubuike",
    position: "Head Teacher",
    organization: "Straitgate School",
    quote: "The book's message is timely and impactful, inspiring our pupils to uphold moral values and excel academically, especially in challenging situations. We look forward to using it during our prize-giving event and as part of our learning resources for ages 8–12.",
    image: "https://images.unsplash.com/photo-1494790108755-2616c6a96c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 2,
    name: "Kehinde Ojo",
    position: "Deputy Head Teacher",
    organization: "Straitgate School",
    quote: "Thank you for partnering with us in nurturing well-rounded future leaders. We welcome future collaborations and pray for continued success in your noble work.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 3,
    name: "Ishola N.A.",
    position: "Head of Schools",
    organization: "Divine Offspring International Schools",
    quote: "Kika's story is sure to motivate our pupils, especially those in the 8 to 11 age group, to uphold integrity and courage in the face of academic challenges. Your thoughtful gesture will go a long way in enriching our library.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 4,
    name: "Mrs. Lauretta Patrick-Nwachi",
    position: "Program Coordinator & Book Author",
    organization: "MIHHD",
    quote: "We are committed to building a generation for God through impactful educational resources that inspire moral excellence and academic achievement in young minds.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
]);

const currentIndex = ref(0);
const isAnimating = ref(false);
const direction = ref<'next' | 'prev'>('next');
const autoPlayInterval = ref<NodeJS.Timeout | null>(null);
const isPaused = ref(false);

const currentTestimonial = computed(() => {
  return testimonials.value[currentIndex.value];
});

const goToNext = () => {
  if (isAnimating.value) return;
  
  direction.value = 'next';
  isAnimating.value = true;
  
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
    isAnimating.value = false;
  }, 400);
};

const goToPrev = () => {
  if (isAnimating.value) return;
  
  direction.value = 'prev';
  isAnimating.value = true;
  
  setTimeout(() => {
    currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
    isAnimating.value = false;
  }, 400);
};

const goToSlide = (index: number) => {
  if (isAnimating.value || index === currentIndex.value) return;
  
  direction.value = index > currentIndex.value ? 'next' : 'prev';
  isAnimating.value = true;
  
  setTimeout(() => {
    currentIndex.value = index;
    isAnimating.value = false;
  }, 400);
};

const startAutoPlay = () => {
  if (autoPlayInterval.value) return;
  
  autoPlayInterval.value = setInterval(() => {
    if (!isPaused.value) {
      goToNext();
    }
  }, 5000); // Change slide every 5 seconds
};

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value);
    autoPlayInterval.value = null;
  }
};

const pauseAutoPlay = () => {
  isPaused.value = true;
};

const resumeAutoPlay = () => {
  isPaused.value = false;
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<template>
  <section class="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
    <div class="max-w-7xl px-6 mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <p class="text-lg font-medium text-blue-600 mb-2">Testimonials</p>
        <h1 class="text-4xl font-bold text-gray-800 capitalize lg:text-5xl mb-4">
          What Our Schools are saying
        </h1>
        <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <!-- Main Carousel -->
      <main 
        class="relative z-20 w-full mt-8"
        @mouseenter="pauseAutoPlay"
        @mouseleave="resumeAutoPlay"
      >
        <div class="absolute w-full bg-gradient-to-r from-blue-600 to-blue-700 -z-10 md:h-96 rounded-3xl shadow-2xl"></div>
        
        <div class="w-full p-8 bg-gradient-to-r from-blue-600 to-blue-700 md:flex md:items-center rounded-3xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
          <!-- Image Section -->
          <div class="flex-shrink-0 mb-8 md:mb-0">
            <transition 
              :name="direction === 'next' ? 'slide-next' : 'slide-prev'"
              mode="out-in"
            >
              <div :key="currentTestimonial.id" class="relative">
                <img 
                  class="h-32 w-32 mx-auto md:mx-6 rounded-full object-cover shadow-2xl border-4 border-white/20 md:h-[28rem] md:w-72 lg:h-[32rem] lg:w-80 md:rounded-3xl transform hover:scale-105 transition-transform duration-300" 
                  :src="currentTestimonial.image" 
                  :alt="`${currentTestimonial.name} photo`" 
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full md:rounded-3xl"></div>
              </div>
            </transition>
          </div>
          
          <!-- Content Section -->
          <div class="flex-1 md:mx-8 lg:mx-12">
            <transition 
              :name="direction === 'next' ? 'fade-next' : 'fade-prev'"
              mode="out-in"
            >
              <div :key="currentTestimonial.id" class="space-y-6">
                <!-- Quote -->
                <div class="relative">
                  <svg class="absolute -top-2 -left-2 w-8 h-8 text-blue-200 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                  </svg>
                  <p class="text-lg leading-relaxed text-white md:text-xl lg:text-2xl font-light italic pl-6">
                    "{{ currentTestimonial.quote }}"
                  </p>
                </div>

                <!-- Author Info -->
                <div class="border-t border-white/20 pt-6">
                  <p class="text-2xl font-semibold text-white mb-1">{{ currentTestimonial.name }}</p>
                  <p class="text-blue-200 text-lg mb-1">{{ currentTestimonial.position }}</p>
                  <p v-if="currentTestimonial.organization" class="text-blue-300 font-medium">{{ currentTestimonial.organization }}</p>
                </div>
              </div>
            </transition>
            
            <!-- Controls -->
            <div class="flex items-center justify-between mt-8 md:justify-start">
              <button 
                @click="goToPrev"
                title="Previous testimonial" 
                class="group p-3 text-white transition-all duration-300 border-2 border-white/30 rounded-full hover:bg-white hover:text-blue-600 hover:border-white transform hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <!-- Dots Indicator -->
              <div class="flex space-x-2 mx-6">
                <button 
                  v-for="(testimonial, index) in testimonials" 
                  :key="testimonial.id"
                  @click="goToSlide(index)"
                  :class="[
                    'w-3 h-3 rounded-full transition-all duration-300',
                    index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/70'
                  ]"
                  :title="`Go to ${testimonial.name}'s testimonial`"
                ></button>
              </div>

              <button 
                @click="goToNext"
                title="Next testimonial" 
                class="group p-3 text-white transition-all duration-300 border-2 border-white/30 rounded-full hover:bg-white hover:text-blue-600 hover:border-white transform hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <!-- Auto-play indicator -->
            <!-- <div class="mt-4 flex items-center justify-center">
              <div class="flex items-center space-x-2 text-blue-200 text-sm">
                <div :class="['w-2 h-2 rounded-full transition-colors', isPaused ? 'bg-yellow-400' : 'bg-green-400']"></div>
                <span>{{ isPaused ? 'Paused' : 'Auto-playing' }}</span>
              </div>
            </div> -->
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="mt-6 w-full bg-white/20 rounded-full h-1 overflow-hidden">
          <div 
            class="h-full bg-white rounded-full transition-all duration-100 ease-linear"
            :style="{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }"
          ></div>
        </div>
      </main>
    </div>
  </section>
</template>

<style scoped>
/* Enhanced slide animations for images */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-next-enter-from {
  transform: translateX(100%) scale(0.8);
  opacity: 0;
}

.slide-next-leave-to {
  transform: translateX(-100%) scale(0.8);
  opacity: 0;
}

.slide-prev-enter-from {
  transform: translateX(-100%) scale(0.8);
  opacity: 0;
}

.slide-prev-leave-to {
  transform: translateX(100%) scale(0.8);
  opacity: 0;
}

/* Enhanced fade animations for text */
.fade-next-enter-active,
.fade-next-leave-active,
.fade-prev-enter-active,
.fade-prev-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-next-enter-from,
.fade-prev-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.fade-next-leave-to,
.fade-prev-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.95);
}

/* Smooth hover effects */
.group:hover svg {
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
}

/* Custom scrollbar for any overflow */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>