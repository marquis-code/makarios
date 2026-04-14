<template>
  <div class="bg-white py-24 md:py-32 overflow-hidden">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-5">
      <!-- Header Section -->
      <div 
        class="max-w-2xl xl:col-span-2 transition-all duration-1000 transform"
        :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']"
        ref="headerRef"
      >
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Leadership Team
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Dedicated professionals committed to <span class="text-[#3a75a4] font-semibold">health and humanitarian development</span> through grassroots action and educational resilience.
        </p>
      </div>

      <!-- Team Members List -->
      <ul role="list" class="divide-y divide-gray-100 xl:col-span-3">
        <li 
          v-for="(member, index) in teamMembers" 
          :key="index"
          class="flex flex-col gap-10 py-12 first:pt-0 last:pb-0 sm:flex-row group transition-all duration-500 hover:bg-slate-50 hover:px-6 hover:rounded-3xl"
          :ref="el => teamRefs[index] = el"
        >
          <div class="relative flex-none">
            <img 
              class="aspect-[4/5] w-52 rounded-2xl object-cover shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-xl" 
              :src="member.image" 
              :alt="member.name"
            >
          </div>
          
          <div class="max-w-xl flex-auto">
            <div class="flex items-center gap-3 mb-4">
              <h3 class="text-xl font-bold tracking-tight text-gray-900">{{ member.name }}</h3>
              <span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {{ member.role }}
              </span>
            </div>
            
            <div class="space-y-4 text-base leading-7 text-gray-600">
              <p v-for="(para, pIndex) in member.bio" :key="pIndex">
                {{ para }}
              </p>
            </div>
            
            <div class="mt-6 flex gap-x-6">
              <a :href="member.linkedin" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-[#3a75a4] transition-colors">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import maleImg from "@/assets/img/male.jpeg"
import femaleImg from "@/assets/img/female.jpeg"

const isVisible = ref(false)
const headerRef = ref<HTMLElement>()
const teamRefs = ref<any[]>([])

const teamMembers = [
  {
    name: "Dr. Patrick Nwachi",
    role: "Founder & Director",
    image: maleImg,
    linkedin: "https://www.linkedin.com/in/patrick-nwachi-b33bb991",
    bio: [
      "Dr. Nwachi pioneered MIHHD's mission of integrating holistic medicine with humanitarian service, drawing from two decades of clinical excellence as a Family Physician.",
      "As the visionary behind the Safe Passage Initiative, he has revolutionized healthcare delivery in underserved communities by prioritizing compassion alongside medical expertise."
    ]
  },
  {
    name: "Lauretta Patrick-Nwachi",
    role: "Co-founder & Director",
    image: femaleImg,
    linkedin: "https://www.linkedin.com/in/lauretta-patrick-nwachi-02121484/",
    bio: [
      "With over 6 years of strategic leadership at MIHHD, Lauretta excels in scaling humanitarian impact through robust organizational development and team management.",
      "She leads cross-functional initiatives that bridge healthcare delivery with sustainable development, ensuring every program creates lasting community change."
    ]
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  if (headerRef.value) observer.observe(headerRef.value)
})
</script>