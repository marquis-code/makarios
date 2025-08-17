<template>
  <section
    ref="sectionRef"
    class="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 sm:py-32 relative overflow-hidden"
    :class="{ 'animate-fade-in': isVisible }"
    @mouseenter="pauseAutoPlay"
    @mouseleave="resumeAutoPlay"
  >
    <!-- <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239333ea" fill-opacity="0.03"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div> -->

    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative">
      <div
        class="text-center mb-16 transform transition-all duration-1000"
        :class="{
          'translate-y-0 opacity-100': isVisible,
          'translate-y-10 opacity-0': !isVisible,
        }"
      >
        <h2
          class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4"
        >
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Impact Stories
          </span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Hear from educational partners whose communities have been transformed
          through MIHHD's
          <span class="font-semibold text-blue-600"
            >educational initiatives</span
          >
          and humanitarian programs.
        </p>
      </div>

      <div class="relative max-w-5xl mx-auto">
        <!-- <button
          @click="goToPrev"
          :disabled="isAnimating"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-50"
        >
          <svg
            class="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <button
          @click="goToNext"
          :disabled="isAnimating"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-50"
        >
          <svg
            class="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button> -->

        <div
          class="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 md:p-12 relative overflow-hidden group"
        >
          <div
            class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"
          ></div>

          <div
            class="absolute top-6 left-6 text-blue-200 group-hover:text-blue-300 transition-colors duration-300"
          >
            <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"
              />
            </svg>
          </div>

          <Transition
            :name="direction === 'next' ? 'slide-next' : 'slide-prev'"
            mode="out-in"
          >
            <div :key="currentIndex" class="relative z-10">
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  class="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                >
                  📚 {{ currentTestimonial.impact }}
                </span>
                <span
                  class="px-4 py-2 bg-purple-100 text-purple-800 text-sm font-medium rounded-full"
                >
                  📍 {{ currentTestimonial.location }}
                </span>
              </div>

              <blockquote
                class="text-xl md:text-2xl leading-relaxed text-gray-800 mb-8 font-light italic"
              >
                "{{ currentTestimonial.quote }}"
              </blockquote>

              <div class="flex items-center gap-6">
                <div class="relative">
                  <img
                    src="@/assets/icons/avatar.svg"
                    :alt="currentTestimonial.name"
                    class="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-lg"
                  />
                  <div
                    class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"
                  ></div>
                </div>

                <div>
                  <div class="font-bold text-gray-900 text-lg">
                    {{ currentTestimonial.name }}
                  </div>
                  <div class="text-blue-600 font-medium">
                    {{ currentTestimonial.position }}
                  </div>
                  <div class="text-gray-500 text-sm">
                    {{ currentTestimonial.organization }}
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <div class="flex justify-center mt-8 gap-3">
          <button
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            @click="goToSlide(index)"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              index === currentIndex
                ? 'bg-blue-600 w-8'
                : 'bg-gray-300 hover:bg-gray-400',
            ]"
            :aria-label="`Go to testimonial ${index + 1}`"
          ></button>
        </div>

        <div class="mt-6 bg-gray-200 rounded-full h-1 overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 ease-out"
            :style="{
              width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
            }"
          ></div>
        </div>
      </div>

      <div
        class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-300"
        :class="{
          'translate-y-0 opacity-100': isVisible,
          'translate-y-10 opacity-0': !isVisible,
        }"
      >
        <div
          class="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="text-3xl font-bold text-blue-600">2+</div>
          <div class="text-gray-600 mt-2">Partner Schools</div>
        </div>
        <div
          class="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="text-3xl font-bold text-purple-600">20+</div>
          <div class="text-gray-600 mt-2">Books Donated</div>
        </div>
        <div
          class="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="text-3xl font-bold text-green-600">100+</div>
          <div class="text-gray-600 mt-2">Students Impacted</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

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

// Enhanced testimonials focused on MIHHD's educational impact
const testimonials = ref<Testimonial[]>([
  {
    id: 1,
    name: "Shola N.A.",
    position: "Educational Director",
    organization: "Divine Offspring Int'l Schools",
    location: "Lagos, Nigeria",
    impact: "20 copies of Kika's Examination donated",
    quote:
      "MIHHD's donation of 'Kika's Examination' has been transformational for our students aged 8-11. The book's powerful message of moral resilience and academic excellence perfectly aligns with our mission. These resources have enriched our library and will be featured prominently in our prize-giving ceremony, inspiring our pupils to uphold strong values while pursuing academic success.",
    image: "/assets/img/testimonials/testimonial1.jpeg",
  },
  {
    id: 2,
    name: "Ugochi Madubuike",
    position: "Head Teacher",
    organization: "Straitgate School",
    location: "Abuja, Nigeria",
    impact: "Educational partnership established",
    quote:
      "The partnership with MIHHD has brought invaluable resources to our learning environment. 'Kika's Examination' delivers a timely message that inspires our pupils to maintain moral integrity while excelling academically, especially during challenging times. This collaboration perfectly supports our goal of nurturing well-rounded future leaders with both academic excellence and strong character.",
    image: "/assets/img/testimonials/testimonial1.jpeg",
  },
]);

const currentIndex = ref(0);
const isAnimating = ref(false);
const direction = ref<"next" | "prev">("next");
const autoPlayInterval = ref<NodeJS.Timeout | null>(null);
const isPaused = ref(false);
const isVisible = ref(false);

// Template refs
const sectionRef = ref<HTMLElement>();

const currentTestimonial = computed(() => {
  return testimonials.value[currentIndex.value];
});

const goToNext = () => {
  if (isAnimating.value) return;

  direction.value = "next";
  isAnimating.value = true;

  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
    isAnimating.value = false;
  }, 500);
};

const goToPrev = () => {
  if (isAnimating.value) return;

  direction.value = "prev";
  isAnimating.value = true;

  setTimeout(() => {
    currentIndex.value =
      (currentIndex.value - 1 + testimonials.value.length) %
      testimonials.value.length;
    isAnimating.value = false;
  }, 500);
};

const goToSlide = (index: number) => {
  if (isAnimating.value || index === currentIndex.value) return;

  direction.value = index > currentIndex.value ? "next" : "prev";
  isAnimating.value = true;

  setTimeout(() => {
    currentIndex.value = index;
    isAnimating.value = false;
  }, 500);
};

const startAutoPlay = () => {
  if (autoPlayInterval.value) return;

  autoPlayInterval.value = setInterval(() => {
    if (!isPaused.value) {
      goToNext();
    }
  }, 6000); // Change slide every 6 seconds
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

// Intersection Observer for scroll animations
let sectionObserver: IntersectionObserver;

onMounted(() => {
  startAutoPlay();

  // Create intersection observer for scroll-triggered animations
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "50px",
  };

  sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    });
  }, observerOptions);

  if (sectionRef.value) {
    sectionObserver.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  stopAutoPlay();
  if (sectionObserver) sectionObserver.disconnect();
});
</script>

<style scoped>
/* Enhanced slide animations */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-next-enter-from {
  transform: translateX(100%) scale(0.9);
  opacity: 0;
}

.slide-next-leave-to {
  transform: translateX(-100%) scale(0.9);
  opacity: 0;
}

.slide-prev-enter-from {
  transform: translateX(-100%) scale(0.9);
  opacity: 0;
}

.slide-prev-leave-to {
  transform: translateX(100%) scale(0.9);
  opacity: 0;
}

/* Fade-in animation for section */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

/* Hover effects */
.group:hover .absolute {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(-16px) translateX(16px);
  }
  50% {
    transform: translateY(-20px) translateX(20px) scale(1.1);
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.5);
}
</style>
