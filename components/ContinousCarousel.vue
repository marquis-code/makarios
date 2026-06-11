
 <!-- components/TestimonialCarousel.vue -->
 <template>
    <div class="relative w-full lg:px-4 py-8">
      <div class="relative w-full overflow-hidden">
        <!-- Main carousel container -->
        <div
          ref="carouselRef"
          class="flex transition-transform duration-300 ease-out space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          @scroll="handleScroll"
        >
          <!-- Carousel items -->
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="flex-shrink-0 w-full md:w-[400px] h-[500px] snap-center relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
             @click="openLightbox(index)"
          >
            <img
              :src="testimonial.image"
              :alt="testimonial.name"
               class="w-full h-full object-cover rounded-3xl transition-transform duration-500 hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 rounded-2xl" />
            <!-- <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 class="font-semibold text-lg">{{ testimonial.name }}</h3>
              <p class="text-sm">
                {{ testimonial.title }}
                <span :class="`text-${testimonial.companyColor}`">{{ testimonial.company }}</span>
              </p>
            </div> -->
          </div>
        </div>
  
        <!-- Scroll Indicator -->
        <div
          :class="`absolute ${scrollIndicatorSide === 'right' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 transition-all duration-300`"
          :style="{ opacity: showScrollIndicator && !isScrolling ? 1 : 0 }"
        >
          <div class="animate-bounce bg-white/80 rounded-full p-2 shadow-lg">
            <Icon
              :name="scrollIndicatorSide === 'right' ? 'heroicons:chevron-right' : 'heroicons:chevron-left'"
              class="w-6 h-6 text-gray-800"
            />
          </div>
        </div>
  
        <!-- Navigation Arrows -->
        <button
          v-show="canScrollLeft"
          @click="scrollLeft"
          class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transform transition-all duration-300 z-10"
          :class="{ 'opacity-0': !canScrollLeft, 'opacity-100 translate-x-2': canScrollLeft }"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-800 transform transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <!-- <Icon name="heroicons:chevron-left" class="w-6 h-6 text-gray-800" /> -->
        </button>
  
        <button
          v-show="canScrollRight"
          @click="scrollRight"
          class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transform transition-all duration-300 z-10"
          :class="{ 'opacity-0': !canScrollRight, 'opacity-100 -translate-x-2': canScrollRight }"
        >
          <!-- <Icon name="heroicons:chevron-right" class="w-6 h-6 text-gray-800" /> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-800 transform transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
  
      <!-- Navigation Dots -->
      <div class="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
        <button
          v-for="(_, index) in totalPages"
          :key="index"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="currentPage === index ? 'bg-white w-4' : 'bg-white/50'"
          @click="goToPage(index)"
        />
      </div>


      <div
          v-if="lightboxOpen"
          class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          @click="closeLightbox"
        >
          <div class="relative max-w-4xl max-h-full">
            <img
              :src="galleryImages[currentLightboxIndex].src"
              :alt="galleryImages[currentLightboxIndex].alt"
              class="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              @click="closeLightbox"
              class="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
  
      <!-- Profile Modal -->
      <Teleport to="body">
        <div
          v-if="selectedProfile"
          class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          @click="selectedProfile = null"
        >
          <div
            class="bg-white rounded-2xl p-6 max-w-lg w-full"
            @click.stop
          >
            <img
              :src="selectedProfile.image"
              :alt="selectedProfile.name"
              class="w-32 h-32 rounded-full object-cover mx-auto mb-4"
            />
            <h2 class="text-2xl font-bold text-center mb-2">{{ selectedProfile.name }}</h2>
            <p class="text-center text-gray-600 mb-4">
              {{ selectedProfile.title }}
              <span :class="`text-${selectedProfile.companyColor}`">{{ selectedProfile.company }}</span>
            </p>
            <p class="text-gray-700 mb-4 text-justify h-72 overflow-auto leading-relaxed">{{ selectedProfile.bio }}</p>
            <button
              class="w-full bg-gray-900 text-white rounded-lg py-3 hover:bg-gray-800"
              @click="selectedProfile = null"
            >
              Close
            </button>
          </div>
        </div>
      </Teleport>


    </div>
  </template>
  
  <script setup lang="ts">
  interface Testimonial {
    name: string
    title: string
    company: string
    companyColor: string
    quote: string
    image: string
    bio: string
  }
  
  const props = defineProps<{
    testimonials: Testimonial[]
  }>()
  
  const carouselRef = ref<HTMLElement | null>(null)
  const currentPage = ref(0)
  const selectedProfile = ref<Testimonial | null>(null)
  const touchStart = ref(0)
  const touchEnd = ref(0)
  const itemsPerPage = ref(3)
  const canScrollLeft = ref(false)
  const canScrollRight = ref(true)
  const isScrolling = ref(false)
  const showScrollIndicator = ref(true)
  const scrollIndicatorSide = ref<'left' | 'right'>('right')
  const lightboxOpen = ref<boolean>(false);
const currentLightboxIndex = ref<number>(0);
  
  const totalPages = computed(() => Math.ceil(props.testimonials.length / itemsPerPage.value))
  
  // Handle scroll events
  const handleScroll = () => {
    if (!carouselRef.value) return
  
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.value
    const maxScroll = scrollWidth - clientWidth
  
    canScrollLeft.value = scrollLeft > 0
    canScrollRight.value = scrollLeft < maxScroll - 10 // 10px threshold
  
    // Update scroll indicator
    if (!isScrolling.value) {
      showScrollIndicator.value = true
      scrollIndicatorSide.value = canScrollRight.value ? 'right' : 'left'
    }
  }
  
  // Scroll functions
  const scrollLeft = () => {
    if (!carouselRef.value) return
    isScrolling.value = true
    const scrollAmount = carouselRef.value.clientWidth
    carouselRef.value.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    })
    setTimeout(() => {
      isScrolling.value = false
    }, 300)
  }
  
  const scrollRight = () => {
    if (!carouselRef.value) return
    isScrolling.value = true
    const scrollAmount = carouselRef.value.clientWidth
    carouselRef.value.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    })
    setTimeout(() => {
      isScrolling.value = false
    }, 300)
  }
  
  // Touch handling
  const handleTouchStart = (e: TouchEvent) => {
    touchStart.value = e.touches[0].clientX
    showScrollIndicator.value = false
  }
  
  const handleTouchMove = (e: TouchEvent) => {
    touchEnd.value = e.touches[0].clientX
  }
  
  const handleTouchEnd = () => {
    const swipeThreshold = 50
    const diff = touchStart.value - touchEnd.value
  
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0 && canScrollRight.value) {
        scrollRight()
      } else if (diff < 0 && canScrollLeft.value) {
        scrollLeft()
      }
    }
  
    // Show scroll indicator after touch
    setTimeout(() => {
      showScrollIndicator.value = true
    }, 1000)
  }
  
  const openLightbox = (index: number) => {
  currentLightboxIndex.value = index;
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
};

  // Navigation
  const goToPage = (page: number) => {
    if (!carouselRef.value) return
    currentPage.value = page
    const scrollAmount = page * carouselRef.value.clientWidth
    carouselRef.value.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    })
  }
  
  const showProfile = (testimonial: Testimonial) => {
    selectedProfile.value = testimonial
  }
  
  // Responsive handling
  const handleResize = () => {
    itemsPerPage.value = window.innerWidth >= 768 ? 3 : 1
    currentPage.value = 0
    handleScroll()
  }
  
  // Lifecycle hooks
  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    handleScroll()
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
  </script>
  
  <style scoped>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  </style>