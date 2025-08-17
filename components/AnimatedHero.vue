<template>
    <main>
      <div ref="containerRef" class="relative w-full h-screen overflow-hidden">
        <!-- Animated Background Patterns -->
        <div class="absolute inset-0 opacity-20 pointer-events-none">
          <div 
            v-for="i in 50" 
            :key="`particle-${i}`"
            class="absolute rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 animate-pulse"
            :style="particleStyles[i-1]"
          />
        </div>
  
        <!-- Video Background with Parallax -->
        <div 
          class="absolute inset-0 transform transition-transform duration-1000 ease-out"
          :style="{ transform: `scale(1.05) translate(${mousePosition.x * 8}px, ${mousePosition.y * 4}px)` }"
        >
          <video 
            ref="videoRef"
            class="absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000"
            :class="{ 'brightness-40': true, 'brightness-50': !isVideoFocused }"
            autoplay 
            muted 
            loop 
            playsinline
            @loadeddata="handleVideoLoaded"
          >
            <source :src="currentVideo" type="video/mp4">
          </video>
          
          <!-- Dynamic Gradient Overlays -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 transition-all duration-1000" />
          <div class="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 transition-all duration-1000" />
          
          <!-- Animated Light Rays -->
          <div class="absolute inset-0 opacity-10">
            <div 
              v-for="ray in 6" 
              :key="`ray-${ray}`"
              class="absolute bg-gradient-to-b from-white/20 to-transparent animate-pulse"
              :style="rayStyles[ray-1]"
            />
          </div>
        </div>
  
        <!-- Video Controls -->
        <Transition name="fade" appear>
          <div class="absolute top-6 right-6 flex gap-3 z-20">
            <button
              @click="toggleVideoPlay"
              class="group p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 active:scale-95"
            >
              <Icon 
                :name="isVideoPlaying ? 'lucide:pause' : 'lucide:play'" 
                class="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" 
              />
            </button>
            <button
              @click="toggleVideoMute"
              class="group p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 active:scale-95"
            >
              <Icon 
                :name="isVideoMuted ? 'lucide:volume-x' : 'lucide:volume-2'" 
                class="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" 
              />
            </button>
          </div>
        </Transition>
  
        <!-- Progress Indicators -->
        <Transition name="fade" appear>
          <div class="absolute top-6 left-6 flex gap-2 z-20">
            <button
              v-for="(slide, index) in slides"
              :key="slide.id"
              @click="setCurrentSlide(index)"
              class="h-1 rounded-full transition-all duration-500 hover:scale-y-150 active:scale-95"
              :class="index === currentIndex ? 'w-12 bg-white shadow-lg' : 'w-6 bg-white/40 hover:bg-white/60'"
            />
          </div>
        </Transition>
  
        <!-- Main Carousel Content -->
        <div class="relative h-full">
          <TransitionGroup
            name="carousel"
            class="h-full"
            tag="div"
          >
            <div 
              v-for="(slide, index) in slides" 
              :key="slide.id"
              v-show="currentIndex === index"
              class="absolute inset-0 flex items-center justify-center px-4 md:px-8"
            >
              <div class="max-w-7xl w-full mx-auto text-center">
                
                <!-- Animated Title -->
                <Transition name="slide-up" appear>
                  <h1 class="text-4xl md:text-6xl lg:text-8xl max-w-5xl mx-auto font-bold text-white/90 mb-8 leading-tight">
                    <span 
                      v-for="(word, wordIndex) in slide.title.split(' ')" 
                      :key="`word-${wordIndex}`"
                      class="inline-block mr-3 hover:scale-105 hover:text-emerald-300 transition-all duration-300 cursor-default"
                      :style="{ animationDelay: `${wordIndex * 100}ms` }"
                      :class="`animate-fade-in-up`"
                    >
                      {{ word }}
                    </span>
                  </h1>
                </Transition>
  
                <!-- Animated Description -->
                <Transition name="slide-up" appear>
                  <p 
                    class="text-lg md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
                    :style="{ animationDelay: '400ms' }"
                  >
                    {{ slide.description }}
                  </p>
                </Transition>
  
                <!-- Interactive Stats Grid -->
                <!-- <Transition name="slide-up" appear>
                  <div 
                    class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
                    :style="{ animationDelay: '600ms' }"
                  >
                    <div
                      v-for="(stat, statIndex) in slide.stats"
                      :key="`stat-${statIndex}`"
                      class="group bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:rotate-1 cursor-pointer border border-white/10 hover:border-white/30"
                      @mouseenter="handleStatHover(statIndex)"
                      :style="{ animationDelay: `${600 + statIndex * 100}ms` }"
                    >
                      <div class="flex flex-col items-center">
                        <Icon 
                          :name="stat.icon" 
                          class="w-8 h-8 text-emerald-400 mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" 
                        />
                        <div class="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors duration-300">
                          {{ stat.value }}
                        </div>
                        <div class="text-sm text-white/80 group-hover:text-white transition-colors duration-300">
                          {{ stat.label }}
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition> -->
  
                <!-- Animated Action Buttons -->
                <Transition name="slide-up" appear>
                  <div 
                    class="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    :style="{ animationDelay: '800ms' }"
                  >
                    <template v-for="(button, buttonIndex) in slide.buttons" :key="`button-${buttonIndex}`">
                      
                      <!-- Primary CTA Button -->
                      <button
                        v-if="button.primary"
                        @click="handleButtonClick(button)"
                        class="group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-110 hover:-rotate-1 min-w-[280px] bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 shadow-2xl hover:shadow-emerald-500/25 active:scale-95"
                        :style="{ animationDelay: `${800 + buttonIndex * 200}ms` }"
                      >
                        <span class="relative z-10 flex items-center justify-center gap-2">
                          {{ button.text }}
                          <Icon name="lucide:arrow-right" class="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                        </span>
                        <div class="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <!-- Shimmer Effect -->
                        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
                      </button>
  
                      <!-- Secondary Button -->
                      <button
                        v-else
                        @click="handleButtonClick(button)"
                        class="group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 hover:rotate-1 min-w-[250px] bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border-2 border-white/30 hover:border-white/50 active:scale-95"
                        :style="{ animationDelay: `${800 + buttonIndex * 200}ms` }"
                      >
                        <span class="relative z-10 flex items-center justify-center gap-2">
                          {{ button.text }}
                          <Icon name="lucide:external-link" class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        </span>
                      </button>
  
                    </template>
                  </div>
                </Transition>
  
              </div>
            </div>
          </TransitionGroup>
        </div>
  
        <!-- Floating Interactive Elements -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            v-for="i in 15"
            :key="`float-${i}`"
            class="absolute animate-float opacity-30"
            :style="floatingElementStyles[i-1]"
          >
            <Icon :name="floatingIcons[i % floatingIcons.length]" class="w-4 h-4 text-emerald-400" />
          </div>
        </div>
  
        <!-- Scroll Indicator -->
        <!-- <Transition name="bounce" appear>
          <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div 
              class="flex flex-col items-center text-white/60 hover:text-white transition-all duration-300 cursor-pointer group"
              @click="scrollToNext"
            >
              <div class="text-sm mb-2 group-hover:translate-y-1 transition-transform duration-300">
                Explore Our Impact
              </div>
              <Icon 
                name="lucide:chevron-down" 
                class="w-6 h-6 animate-bounce group-hover:scale-125 group-hover:text-emerald-400 transition-all duration-300" 
              />
            </div>
          </div>
        </Transition> -->
  
        <!-- Enhanced Modal -->
        <Teleport to="body">
          <Transition name="modal" appear>
            <div 
              v-if="showGame" 
              class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              @click.self="closeModal"
            >
              <div class="bg-white rounded-3xl p-8 max-w-md w-full transform transition-all duration-500 hover:scale-105">
                <div class="text-center mb-6">
                  <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="lucide:book-open" class="w-8 h-8 text-white" />
                  </div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-2">Kika's Examination Book Launch</h3>
                </div>
                
                <p class="text-gray-600 mb-6 leading-relaxed">

                  Join us for the exciting launch of Kika's comprehensive examination preparation books designed to help students excel in their studies.
                </p>
                
                <div class="flex gap-4">
                  <button
                    @click="closeModal"
                    class="flex-1 px-6 py-3 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Close
                  </button>
                  <a href="#kika"
                    @click="showGame = false"
                    class="flex-1 px-6 py-3 bg-gradient-to-r text-center from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </Transition>
        </Teleport>
  
      </div>
  
      <!-- LoanGame Component -->
      <LoanGame 
        :isModalOpen="showGame"
        @close="showGame = false"
      />
    </main>
  </template>
  
  <script setup lang="ts">
  interface Button {
    text: string;
    primary?: boolean;
    secondary?: boolean;
    yield?: string;
    action?: string;
  }
  
  interface Stat {
    icon: string;
    label: string;
    value: string;
  }
  
  interface Slide {
    id: number;
    title: string;
    description: string;
    buttons: Button[];
    stats: Stat[];
  }
  
  // Reactive data
  const videos = [
    '/home-video.mp4',
    // '/home-video2.mp4',
    // '/home-video.mp4',
  ];
  
  const slides = ref<Slide[]>([
    {
      id: 1,
      title: 'Improving Lives Through Health & Humanitarian Projects',
      description: 'MAKARIOS Initiative is dedicated to improving health outcomes and empowering communities through sustainable development programs.',
      stats: [
        { icon: 'lucide:heart', label: 'Lives Impacted', value: '50K+' },
        { icon: 'lucide:users', label: 'Communities Served', value: '200+' },
        { icon: 'lucide:globe', label: 'Countries', value: '15+' },
        { icon: 'lucide:award', label: 'Awards Won', value: '25+' }
      ],
      buttons: [
        { text: `Kika's Examination`, action: 'openGame', primary: true },
        { text: 'Explore Our Impact', action: '#impact', secondary: true }
      ]
    },
    {
      id: 2,
      title: 'Empowering Education for Brighter Futures',
      description: 'Breaking barriers and creating opportunities through innovative educational programs and resources that transform communities.',
      stats: [
        { icon: 'lucide:graduation-cap', label: 'Students Helped', value: '25K+' },
        { icon: 'lucide:school', label: 'Schools Built', value: '100+' },
        { icon: 'lucide:trophy', label: 'Scholarships', value: '500+' },
        { icon: 'lucide:user-check', label: 'Teachers Trained', value: '1K+' }
      ],
      buttons: [
        { text: 'Join Our Educational Mission', action: 'openGame', primary: true },
        { text: 'View Programs', action: '#about', secondary: true }
      ]
    }
  ]);
  
  const currentIndex = ref(0);
  const currentVideo = ref(videos[0]);
  const showGame = ref(false);
  const mousePosition = ref({ x: 0, y: 0 });
  const isVideoPlaying = ref(true);
  const isVideoMuted = ref(true);
  const isVideoFocused = ref(false);
  const containerRef = ref<HTMLElement | null>(null);
  const videoRef = ref<HTMLVideoElement | null>(null);
  
  // Computed styles for animations
  const particleStyles = computed(() => {
    return Array.from({ length: 50 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 4 + 1}px`,
      height: `${Math.random() * 4 + 1}px`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${Math.random() * 3 + 2}s`
    }));
  });
  
  const rayStyles = computed(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      left: `${i * 20}%`,
      width: '2px',
      height: '100%',
      animationDelay: `${i * 0.5}s`,
      animationDuration: '4s'
    }));
  });
  
  const floatingElementStyles = computed(() => {
    return Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 4}s`
    }));
  });
  
  const floatingIcons = ['lucide:star', 'lucide:sparkles', 'lucide:heart', 'lucide:zap'];
  
  // Methods
  const handleButtonClick = (button: Button) => {
    if (button.action === 'openGame') {
      showGame.value = true;
    } else if (button.action?.startsWith('#')) {
      // Smooth scroll to section
      const element = document.querySelector(button.action);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const setCurrentSlide = (index: number) => {
    currentIndex.value = index;
    currentVideo.value = videos[index % videos.length];
  };
  
  const toggleVideoPlay = () => {
    if (videoRef.value) {
      if (isVideoPlaying.value) {
        videoRef.value.pause();
      } else {
        videoRef.value.play();
      }
      isVideoPlaying.value = !isVideoPlaying.value;
    }
  };
  
  const toggleVideoMute = () => {
    if (videoRef.value) {
      videoRef.value.muted = !isVideoMuted.value;
      isVideoMuted.value = !isVideoMuted.value;
    }
  };
  
  const handleVideoLoaded = () => {
    // Video loaded successfully
  };
  
  const handleStatHover = (index: number) => {
    // Add haptic feedback or sound effect here if needed
  };
  
  const closeModal = () => {
    showGame.value = false;
  };
  
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  // Lifecycle hooks
  onMounted(() => {
    // Auto-advance slides
    const slideInterval = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % slides.value.length;
      currentVideo.value = videos[currentIndex.value % videos.length];
    }, 8000);
  
    // Mouse tracking for parallax
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.value) {
        const rect = containerRef.value.getBoundingClientRect();
        mousePosition.value = {
          x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
          y: ((e.clientY - rect.top) / rect.height) * 2 - 1
        };
      }
    };
  
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    onUnmounted(() => {
      clearInterval(slideInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    });
  });
  </script>
  
  <style scoped>
  /* Carousel Transitions */
  .carousel-enter-active,
  .carousel-leave-active {
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .carousel-enter-from {
    opacity: 0;
    transform: translateX(100px) scale(0.9);
  }
  
  .carousel-leave-to {
    opacity: 0;
    transform: translateX(-100px) scale(0.9);
  }
  
  /* Slide Up Animation */
  .slide-up-enter-active {
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .slide-up-enter-from {
    opacity: 0;
    transform: translateY(50px);
  }
  
  /* Fade Transition */
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
  
  /* Modal Transition */
  .modal-enter-active,
  .modal-leave-active {
    transition: all 0.3s ease;
  }
  
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
  
  .modal-enter-active .bg-white,
  .modal-leave-active .bg-white {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .modal-enter-from .bg-white,
  .modal-leave-to .bg-white {
    transform: scale(0.8) translateY(50px);
  }
  
  /* Bounce Animation */
  .bounce-enter-active {
    animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  @keyframes bounce-in {
    0% {
      opacity: 0;
      transform: translateY(50px) scale(0.3);
    }
    50% {
      opacity: 0.8;
      transform: translateY(-10px) scale(1.1);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  /* Floating Animation */
  .animate-float {
    animation: float linear infinite;
  }
  
  @keyframes float {
    0%, 100% { 
      transform: translateY(0px) rotate(0deg); 
      opacity: 0.3;
    }
    33% { 
      transform: translateY(-20px) rotate(120deg); 
      opacity: 0.6;
    }
    66% { 
      transform: translateY(10px) rotate(240deg); 
      opacity: 0.4;
    }
  }
  
  /* Fade In Up Animation */
  .animate-fade-in-up {
    animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #10b981, #0f766e);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #059669, #0d9488);
  }
  </style>