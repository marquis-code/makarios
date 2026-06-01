<template>
  <div class="pt-32 pb-24">
    <section class="container mx-auto px-6">
      <div class="max-w-4xl space-y-8 mb-20">
        <span class="inline-block px-5 py-2 glass text-brand-cyan font-black text-sm  tracking-[0.3em] rounded-full border border-slate-200">
          Our Identity
        </span>
        <h1 class="text-6xl md:text-7xl font-black text-brand-blue tracking-tighter leading-none">
          Instituting Excellence in <span class="text-brand-cyan">Laboratory Science</span>
        </h1>
        <p class="text-xl text-slate-500 leading-relaxed font-medium">
          The Society for Cellular Pathology Scientists of Nigeria (SCPSN) is the professional body for medical laboratory scientists specialized in the field of histopathology and cytopathology.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
        <div class="rounded-[3rem] overflow-hidden aspect-square bg-slate-100 shadow-2xl relative">
           <div class="absolute inset-0 bg-brand-blue/10"></div>
           <img src="@/assets/images/hero1.jpg" class="w-full h-full object-cover" alt="Lab Work" />
        </div>
        <div class="space-y-12">
           <div class="space-y-4">
              <h2 class="text-3xl font-black text-brand-blue">Our Vision</h2>
              <p class="text-slate-500 leading-relaxed font-medium">To become a world-class professional body providing cutting-edge cellular pathology services through innovation, research, and standardization of laboratory practices in Nigeria and the West African sub-region.</p>
           </div>
           <div class="space-y-4">
              <h2 class="text-3xl font-black text-brand-blue">Our Mission</h2>
              <p class="text-slate-500 leading-relaxed font-medium">Advancing the frontiers of cellular diagnosis and therapeutic laboratory science through training, advocacy, and collaboration with global stakeholders for improved patient care.</p>
           </div>
        </div>
      </div>

      <!-- Core Values -->
      <div class="bg-brand-blue rounded-[4rem] p-16 md:p-24 text-white relative overflow-hidden">
        <div class="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16">
           <div v-for="val in values" :key="val.title" class="space-y-6">
              <div class="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-cyan">
                 <component :is="val.icon" :size="32" />
              </div>
              <h3 class="text-2xl font-black">{{ val.title }}</h3>
              <p class="text-slate-300 leading-relaxed font-medium">{{ val.desc }}</p>
           </div>
        </div>
      </div>
    </section>

    <!-- Executives Section -->
    <section class="container mx-auto px-6 mt-32">
      <div class="text-center mb-16 space-y-4">
        <span class="inline-block px-5 py-2 glass text-brand-cyan font-black text-sm tracking-[0.3em] rounded-full border border-slate-200">
          Our Leadership
        </span>
        <h2 class="text-4xl md:text-5xl font-black text-brand-blue tracking-tighter">
          Meet Our <span class="text-brand-cyan">Executives</span>
        </h2>
      </div>

      <div v-if="loading" class="text-center text-slate-500 py-10">
        Loading executives...
      </div>
      
      <div v-else-if="excos.length === 0" class="text-center text-slate-500 py-10">
        No executives found.
      </div>
      
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="exco in excos" :key="exco._id" class="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 text-center space-y-4">
          <div class="w-full aspect-square sm:aspect-[4/5] mx-auto rounded-2xl overflow-hidden mb-5 bg-slate-50 border border-slate-100">
            <img :src="exco.profilePicture || 'https://via.placeholder.com/150'" class="w-full h-full object-cover object-top" :alt="exco.name" />
          </div>
          <div>
            <h3 class="text-xl font-bold text-brand-blue">{{ exco.name }}</h3>
            <p class="text-brand-cyan font-medium text-sm">{{ exco.position }}</p>
          </div>
          <p class="text-slate-500 text-sm line-clamp-3">
            {{ exco.bio }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { LucideShieldCheck, LucideMicroscope, LucideGlobe } from 'lucide-vue-next'
import { useGetExcos } from '@/composables/modules/excos/useGetExcos'
import { onMounted } from 'vue'

const { loading, excos, getExcos } = useGetExcos()

onMounted(() => {
  getExcos()
})

const values = [
  { title: 'Integrity', desc: 'Highest standards of scientific honesty and ethical laboratory practice.', icon: LucideShieldCheck },
  { title: 'Innovation', desc: 'Embracing digital pathology and molecular diagnostic breakthroughs.', icon: LucideMicroscope },
  { title: 'Collaboration', desc: 'Partnering with international scientific bodies for knowledge exchange.', icon: LucideGlobe },
]
</script>
