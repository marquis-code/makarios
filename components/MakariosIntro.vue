<template>
    <div class="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <!-- Background Particles -->
      <div class="fixed top-0 left-0 w-full h-full pointer-events-none z-10">
        <div 
          v-for="(particle, index) in particles" 
          :key="index"
          class="absolute bg-white/10 rounded-full animate-float"
          :class="particle.class"
          :style="particle.style"
        ></div>
      </div>
  
      <!-- Floating Elements -->
      <div class="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div 
          v-for="(icon, index) in floatingIcons" 
          :key="index"
          ref="floatingElements"
          class="absolute text-2xl opacity-10 animate-float-icon"
          :style="icon.style"
        >
          {{ icon.emoji }}
        </div>
      </div>
  
      <div class="relative z-20 min-h-screen bg-white/95 backdrop-blur-lg lg:m-5 lg:rounded-3xl overflow-hidden shadow-2xl">
        <!-- Header Section -->
        <header class="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-8 py-16 text-center overflow-hidden">
          <!-- Animated Background Pattern -->
          <div class="absolute top-0 left-0 w-full h-full opacity-20 animate-background-move"></div>
          
          <h1 class="text-5xl md:text-6xl font-black mb-4 relative z-30 animate-slide-in-down">
            MAKARIOS Initiative
          </h1>
          <p class="text-xl md:text-2xl font-light opacity-90 mb-8 relative z-30 animate-slide-in-up">
            Building Hope, Transforming Lives
          </p>
          <div class="inline-block bg-white/20 px-6 py-2 rounded-full font-semibold backdrop-blur-lg border border-white/30 relative z-30 animate-fade-in-scale">
            Serving Communities Since 2017
          </div>
        </header>
  
        <!-- Animated Marquee -->
        <div class="relative h-32 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-teal-400 via-blue-400 via-green-300 to-yellow-300 bg-[length:400%_400%] animate-gradient-shift overflow-hidden transform -skew-y-1 my-8 shadow-lg">
          <div class="absolute whitespace-nowrap animate-marquee-slant text-2xl md:text-3xl font-black text-white text-shadow-lg top-1/2 transform -translate-y-1/2 skew-y-1 flex items-center">
            <div class="inline-flex items-center gap-4 mr-12">
              <span class="text-3xl md:text-4xl animate-bounce">📚</span>
              <span>NEW BOOK LAUNCH: "KIKA'S EXAMINATION" - Now Available!</span>
            </div>
            <div class="inline-flex items-center gap-4 mr-12">
              <span class="text-3xl md:text-4xl animate-bounce">✨</span>
              <span>Inspiring Stories for Young Minds</span>
            </div>
            <div class="inline-flex items-center gap-4 mr-12">
              <span class="text-3xl md:text-4xl animate-bounce">🎉</span>
              <span>Educational Excellence & Moral Values</span>
            </div>
            <div class="inline-flex items-center gap-4 mr-12">
              <span class="text-3xl md:text-4xl animate-bounce">📖</span>
              <span>Perfect for Ages 8-12</span>
            </div>
            <div class="inline-flex items-center gap-4 mr-12">
              <span class="text-3xl md:text-4xl animate-bounce">🌟</span>
              <span>Get Your Copy Today!</span>
            </div>
          </div>
        </div>
  
        <!-- Main Content -->
        <div class="px-4 lg:px-8 py-16 max-w-7xl mx-auto">
          <p class="text-xl md:text-2xl leading-relaxed mb-12 text-center text-gray-600 animate-fade-in-up">
            <strong>MAKARIOS Initiative</strong> is a registered non-government entity, passionately serving communities since 2017. 
            Our dedicated team of professionals—medics and non-medics alike—carries out 'boots-on-the-ground' health and 
            humanitarian projects, reaching grassroots and underserved areas of society.
          </p>
  
          <!-- Goals Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            <div 
              v-for="(goal, index) in goals" 
              :key="index"
              ref="goalCards"
              class="goal-card bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl border border-white/80 transition-all duration-300 relative overflow-hidden animate-slide-in-up cursor-pointer"
              :style="{ animationDelay: `${1.2 + index * 0.2}s` }"
              @mouseenter="handleCardHover"
              @mouseleave="handleCardLeave"
            >
              <!-- Top Gradient Border -->
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600"></div>
              
              <span class="text-5xl block mb-4">{{ goal.icon }}</span>
              <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-4">{{ goal.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ goal.description }}</p>
            </div>
          </div>
  
          <!-- Stats Section -->
          <div 
           id="impact"
            ref="statsSection"
            class="bg-gradient-to-br from-indigo-500 to-purple-700 text-white p-16 text-center mb-12 rounded-3xl"
          >
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
            <p class="text-xl opacity-90 mb-8">Making a difference, one life at a time</p>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div 
                v-for="(stat, index) in stats" 
                :key="index"
                class="stat-item animate-count-up"
              >
                <span class="block text-4xl md:text-5xl font-black mb-2">
                  {{ animatedStats[index] || stat.number }}
                </span>
                <span class="text-lg md:text-xl opacity-90">{{ stat.label }}</span>
              </div>
            </div>
          </div>
  
          <!-- Call to Action -->
          <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Join Our Mission</h2>
            <p class="text-lg md:text-xl text-gray-600 mb-8">
              Together, we can build a healthier, more empowered society for all.
            </p>
            <a href="#donate" class="cta-button inline-block bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg animate-pulse-custom hover:transform hover:-translate-y-1 hover:shadow-xl">
              Get Involved Today
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Particle {
    class: string;
    style: string;
  }
  
  interface FloatingIcon {
    emoji: string;
    style: string;
  }
  
  interface Goal {
    icon: string;
    title: string;
    description: string;
  }
  
  interface Stat {
    number: string;
    label: string;
  }
  
  // Reactive data
  const particles = ref<Particle[]>([
    { class: 'w-20 h-20', style: 'left: 10%; animation-delay: 0s;' },
    { class: 'w-15 h-15', style: 'left: 20%; animation-delay: 2s;' },
    { class: 'w-25 h-25', style: 'left: 35%; animation-delay: 4s;' },
    { class: 'w-10 h-10', style: 'left: 50%; animation-delay: 1s;' },
    { class: 'w-30 h-30', style: 'left: 65%; animation-delay: 3s;' },
    { class: 'w-12 h-12', style: 'left: 80%; animation-delay: 5s;' }
  ]);
  
  const floatingIcons = ref<FloatingIcon[]>([
    { emoji: '🏥', style: 'top: 10%; left: 85%; animation-delay: 0s;' },
    { emoji: '👩‍⚕️', style: 'top: 30%; left: 5%; animation-delay: 2s;' },
    { emoji: '📚', style: 'top: 60%; left: 90%; animation-delay: 4s;' },
    { emoji: '🌍', style: 'top: 80%; left: 10%; animation-delay: 6s;' }
  ]);
  
  const goals = ref<Goal[]>([
    {
      icon: '🤱',
      title: 'Safe Passage Initiative',
      description: 'Improving life expectancy of women, especially those of childbearing age by curtailing maternal mortality through comprehensive healthcare programs.'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Child & Family Support',
      description: 'Comprehensive support programs for children, orphans, and widows, ensuring no family is left behind in their journey toward a better life.'
    },
    {
      icon: '🎓',
      title: 'Education & Empowerment',
      description: 'Youth and female educational programs featuring skill acquisition, talent development, and professional training for sustainable livelihoods.'
    },
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Health enlightenment campaigns, family planning, reproductive health programs, and environmental health initiatives for healthier communities.'
    },
    {
      icon: '👧',
      title: 'Girl Child Protection',
      description: 'Gender development initiatives and comprehensive girl child protection programs ensuring equal opportunities and safety for all young women.'
    },
    {
      icon: '🤝',
      title: 'Strategic Partnerships',
      description: 'Collaborative efforts with government agencies and fellow NGOs to maximize impact and create sustainable humanitarian solutions.'
    }
  ]);
  
  const stats = ref<Stat[]>([
    { number: '8+', label: 'Years of Service' },
    { number: '50+', label: 'Communities Reached' },
    { number: '100+', label: 'Programs Completed' },
    { number: '1000+', label: 'Lives Transformed' }
  ]);
  
  const animatedStats = ref<string[]>(['0+', '0+', '0+', '0+']);
  
  // Template refs
  const goalCards = ref<HTMLElement[]>([]);
  const floatingElements = ref<HTMLElement[]>([]);
  const statsSection = ref<HTMLElement>();
  
  // Methods
  const handleCardHover = (event: Event) => {
    const card = event.currentTarget as HTMLElement;
    card.style.transform = 'translateY(-15px) scale(1.03)';
  };
  
  const handleCardLeave = (event: Event) => {
    const card = event.currentTarget as HTMLElement;
    card.style.transform = 'translateY(0) scale(1)';
  };
  
  const animateCounters = () => {
    const targets = [8, 50, 100, 1000];
    
    targets.forEach((target, index) => {
      const increment = target / 50;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          animatedStats.value[index] = stats.value[index].number;
          clearInterval(timer);
        } else {
          animatedStats.value[index] = Math.floor(current) + '+';
        }
      }, 50);
    });
  };
  
  // Lifecycle
  onMounted(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animationPlayState = 'running';
        }
      });
    }, observerOptions);
  
    // Observe goal cards
    goalCards.value.forEach(el => {
      if (el) observer.observe(el);
    });
  
    // Parallax effect for floating elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      floatingElements.value.forEach((element, index) => {
        if (element) {
          const speed = (index + 1) * 0.1;
          element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Stats section observer
    if (statsSection.value) {
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(animateCounters, 500);
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
  
      statsObserver.observe(statsSection.value);
    }
  
    // Cleanup
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    });
  });
  </script>
  
  <style scoped>
  /* Custom Animations */
  @keyframes float {
    0%, 100% { 
      transform: translateY(0px) rotate(0deg); 
      opacity: 0.7; 
    }
    50% { 
      transform: translateY(-100px) rotate(180deg); 
      opacity: 0.3; 
    }
  }
  
  @keyframes float-icon {
    0%, 100% { 
      transform: translateY(0px) rotate(0deg); 
    }
    50% { 
      transform: translateY(-20px) rotate(180deg); 
    }
  }
  
  @keyframes background-move {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
  
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes marquee-slant {
    0% { 
      transform: translateX(-100%) translateY(-50%) skew(5deg) rotate(-2deg); 
    }
    100% { 
      transform: translateX(100vw) translateY(-50%) skew(5deg) rotate(-2deg); 
    }
  }
  
  @keyframes slide-in-down {
    from { 
      opacity: 0; 
      transform: translateY(-50px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  @keyframes slide-in-up {
    from { 
      opacity: 0; 
      transform: translateY(50px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  @keyframes fade-in-up {
    from { 
      opacity: 0; 
      transform: translateY(30px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  @keyframes fade-in-scale {
    from { 
      opacity: 0; 
      transform: scale(0.8); 
    }
    to { 
      opacity: 1; 
      transform: scale(1); 
    }
  }
  
  @keyframes count-up {
    from { 
      opacity: 0; 
      transform: scale(0.5); 
    }
    to { 
      opacity: 1; 
      transform: scale(1); 
    }
  }
  
  @keyframes pulse-custom {
    0% { box-shadow: 0 5px 15px rgba(79, 70, 229, 0.3); }
    50% { box-shadow: 0 5px 25px rgba(79, 70, 229, 0.5); }
    100% { box-shadow: 0 5px 15px rgba(79, 70, 229, 0.3); }
  }
  
  /* Animation Classes */
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-icon {
    animation: float-icon 8s ease-in-out infinite;
  }
  
  .animate-background-move {
    background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: background-move 20s linear infinite;
  }
  
  .animate-gradient-shift {
    animation: gradient-shift 8s ease infinite;
  }
  
  .animate-marquee-slant {
    animation: marquee-slant 15s linear infinite;
  }
  
  .animate-slide-in-down {
    animation: slide-in-down 1s ease-out;
  }
  
  .animate-slide-in-up {
    animation: slide-in-up 1s ease-out 0.3s both;
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 1s ease-out 0.9s both;
  }
  
  .animate-fade-in-scale {
    animation: fade-in-scale 1s ease-out 0.6s both;
  }
  
  .animate-count-up {
    animation: count-up 2s ease-out 2s both;
  }
  
  .animate-pulse-custom {
    animation: pulse-custom 2s infinite;
  }
  
  /* Goal Card Hover Effect */
  .goal-card {
    transition: all 0.3s ease;
  }
  
  .goal-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  /* Text Shadow Utility */
  .text-shadow-lg {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  /* Additional Tailwind Custom Classes */
  .w-15 { width: 3.75rem; }
  .h-15 { height: 3.75rem; }
  .w-25 { width: 6.25rem; }
  .h-25 { height: 6.25rem; }
  .w-30 { width: 7.5rem; }
  .h-30 { height: 7.5rem; }
  </style>