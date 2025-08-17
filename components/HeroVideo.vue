<template>
    <main>
      <div class="relative  w-full h-screen overflow-hidden">
        <!-- Video Background -->
        <video 
          class="absolute top-0 left-0 w-full h-full object-cover brightness-50"
          autoplay 
          muted 
          loop 
          playsinline
        >
          <source :src="currentVideo" type="video/mp4">
        </video>
        <!-- <img src="@/assets/img/lady-on-call.jpeg"  /> -->
    
        <!-- Carousel Content -->
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
                <h1 class="text-4xl md:text-6xl lg:text-7xl max-w-3xl mx-auto font-serif text-white mb-6">
                  {{ slide.title }}
                </h1>
                <p class="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  {{ slide.description }}
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <template v-for="button in slide.buttons" :key="button.text">
                      <a 
                        v-if="button.text === 'Browse Available Products'" 
                        href="#loan-products" 
                        class="px-6 py-3 rounded-md block max-w-lg text-[#2A423A] font-semibold transition-colors bg-white"
                      >
                        {{ button.text }}
                        <span v-if="button.yield" class="text-sm ml-2">
                          (avg. yield {{ button.yield }})
                        </span>
                      </a>
  
                      <a href="#loan-calculator" class="bg-[#1A322A] text-white py-3 rounded-lg px-6 ">
                        Announcing Kika's Examination Book Lunch. <a href="#" class="font-semibold text-white"><span class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                      </a>
                    </template>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>
    
        <!-- Investment Game Modal -->
        <!-- <Teleport to="body"> -->
          <!-- <LoanGame 
            v-if="showGame" 
            @close="showGame = false"
            @calculate="handleInvestmentCalculation"
          /> -->
        <!-- </Teleport> -->
      </div>
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
      yield?: string;
      action?: string;
    }
    
    interface Slide {
      id: number;
      title: string;
      description: string;
      buttons: Button[];
    }
    
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
        buttons: [
          { text: `Announcing Kika's Examination Book Lunch`, action: '#loan-calculator' },
          // { text: 'Browse Available Products', primary: true }
        ]
      }
    ]);

    //  Announcing Kika's Examination Book Lunch. <a href="#" class="font-semibold text-white"><span class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a
    
    
    const currentIndex = ref(0);
    const currentVideo = ref(videos[0]);
    const showGame = ref(false);
    
    const handleButtonClick = (button: Button) => {
      if (button.action === 'openGame') {
        showGame.value = true;
      }
    };
    
    const handleInvestmentCalculation = (result: any) => {
      console.log('Investment calculation result:', result);
    };
    
    // Auto-advance slides
    onMounted(() => {
      setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % slides.value.length;
        currentVideo.value = videos[currentIndex.value % videos.length];
      }, 5000);
    });
    </script>
    
    <style scoped>
    .carousel-enter-active,
    .carousel-leave-active {
      transition: opacity 0.5s ease;
    }
    
    .carousel-enter-from,
    .carousel-leave-to {
      opacity: 0;
    }
    </style>
    