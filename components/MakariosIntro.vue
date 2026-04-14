<template>
  <div class="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
    <!-- Background Elements -->
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3a75a4] to-[#4ade80] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Professional Header -->
      <div class="mx-auto max-w-2xl text-center mb-20">
        <h2 class="text-base font-semibold leading-7 text-[#3a75a4] uppercase tracking-widest">Our Foundation</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">MAKARIOS Initiative</p>
        <p class="mt-6 text-xl leading-8 text-gray-600">
          A registered non-government entity, passionately serving grassroots communities since 2017 with dedicated medical and humanitarian expertise.
        </p>
      </div>

      <!-- Goals Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        <div 
          v-for="(goal, index) in goals" 
          :key="index"
          class="group relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#3a75a4] transition-colors duration-300">
            <span class="text-3xl group-hover:scale-110 transition-transform duration-300">{{ goal.icon }}</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ goal.title }}</h3>
          <p class="text-gray-600 leading-relaxed text-sm">{{ goal.description }}</p>
        </div>
      </div>

      <!-- Impact Section -->
      <div 
        id="impact"
        ref="statsSection"
        class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32"
      >
        <h2 class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Measurable Impact</h2>
        <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
          Transforming lives across communities through consistent humanitarian action.
        </p>
        
        <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4 mt-16">
          <div v-for="(stat, index) in stats" :key="index" class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-400">{{ stat.label }}</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {{ animatedStats[index] || stat.number }}
            </dd>
          </div>
        </dl>

        <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7" />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stop-color="#3a75a4" />
              <stop offset="1" stop-color="#4ade80" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <!-- Final Call to Action -->
      <div class="mt-24 text-center">
        <h3 class="text-2xl font-bold text-gray-900">Ready to make a difference?</h3>
        <p class="mt-2 text-gray-600">Join our network of healthcare professionals and humanitarian volunteers.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#donate" class="rounded-full bg-[#3a75a4] px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2d5c82] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3a75a4] transition-all duration-300 hover:shadow-lg">
            Support Our Mission
          </a>
          <a href="#leadership" class="text-sm font-semibold leading-6 text-gray-900">Meet our team <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Goal {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

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
const statsSection = ref<HTMLElement>();

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

onMounted(() => {
  if (statsSection.value) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(animateCounters, 300);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection.value);
  }
});
</script>

<style scoped>
.tracking-widest {
  letter-spacing: 0.25em;
}
</style>