<template>
  <div class="min-h-screen bg-slate-50 text-slate-600 relative overflow-hidden font-sans selection:bg-brand-blue selection:text-white">
    <!-- Clean Abstract Background Decor -->
    <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

    <div class="container mx-auto px-6 py-24 md:py-32 relative z-10 max-w-7xl">
      <!-- Hub Header -->
      <div class="max-w-4xl mb-16 md:mb-24 space-y-6 animate-on-scroll">
        <span class="inline-flex items-center gap-3 px-4 py-2 bg-white text-brand-blue font-bold text-[10px] tracking-[0.3em] rounded-full border border-slate-200 shadow-sm">
           <LucideFingerprint :size="14" class="text-brand-cyan" />
           SCIENTIFIC RESEARCH HUB
        </span>
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[1.05]">
           Abstracts <span class="text-brand-blue">&</span> Publications.
        </h1>
        <p class="text-lg md:text-xl text-slate-500 max-w-2xl font-medium leading-relaxed">
           The central portal for submitting investigative findings, accessing scientific archives, and  the evolution of cellular pathology in Nigeria.
        </p>
      </div>

      <!-- Submission Portal -->
      <div id="submission-form" class="bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16 relative overflow-hidden animate-on-scroll border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)]">
         
         <div class="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20 items-start relative z-10">
            <!-- Left Info Panel -->
            <div class="xl:col-span-5 space-y-12 xl:space-y-16">
               <div class="space-y-6">
                  <div class="w-16 h-16 rounded-3xl bg-brand-blue/5 flex items-center justify-center text-brand-blue border border-brand-blue/10">
                     <LucideMicroscope :size="32" />
                  </div>
                  <h2 class="text-3xl lg:text-5xl font-black tracking-tighter leading-[1.1] text-slate-900">
                     Submit Your <br/> <span class="text-brand-blue">Masterpiece.</span>
                  </h2>
                  <p class="text-slate-500 font-medium leading-relaxed text-base">
                     Contribute to the 2026 Scientific Compendium. Select your preferred submission method below to begin the peer-review protocol.
                  </p>
               </div>
               
               <div class="space-y-6 bg-slate-50/50 p-6 md:p-8 rounded-[2rem] border border-slate-100">
                  <h4 class="text-[10px] font-black  text-slate-400 mb-6">Submission Guidelines</h4>
                  <div v-for="(g, i) in guidelines" :key="i" class="flex gap-5 group">
                     <div class="w-8 h-8 rounded-full bg-white border border-slate-200 flex flex-shrink-0 items-center justify-center text-brand-blue font-bold text-xs group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue shadow-sm transition-all duration-300">
                        {{ i + 1 }}
                     </div>
                     <p class="text-base text-slate-600 font-medium leading-relaxed">{{ g }}</p>
                  </div>
               </div>
            </div>

            <!-- Right Form Panel -->
            <div class="xl:col-span-7 relative">
               <form @submit.prevent="handleSubmit" class="space-y-8">
                  
                  <!-- Mode Selector -->
                  <div class="flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 relative z-20">
                     <button type="button" @click="submissionMode = 'write'" :class="['flex-1 py-3.5 text-base font-bold rounded-xl transition-all flex items-center justify-center gap-2', submissionMode === 'write' ? 'bg-white text-brand-blue shadow-sm' : 'text-slate-500 hover:text-slate-700']">
                        <LucideEdit3 :size="16" /> Compose Abstract
                     </button>
                     <button type="button" @click="submissionMode = 'upload'" :class="['flex-1 py-3.5 text-base font-bold rounded-xl transition-all flex items-center justify-center gap-2', submissionMode === 'upload' ? 'bg-white text-brand-blue shadow-sm' : 'text-slate-500 hover:text-slate-700']">
                        <LucideUploadCloud :size="16" /> Upload Document
                     </button>
                  </div>

                  <!-- Author Details Group -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div class="space-y-2 relative group">
                        <label class="text-[10px] font-black  text-slate-500 ml-1">Lead Investigator</label>
                        <input v-model="form.primaryAuthor" type="text" class="premium-input" placeholder="Dr. Jane Doe" required />
                     </div>
                     <div class="space-y-2 relative group">
                        <label class="text-[10px] font-black  text-slate-500 ml-1">Email Address</label>
                        <input v-model="form.email" type="email" class="premium-input" placeholder="jane.doe@institution.edu" required />
                     </div>
                  </div>

                  <!-- Affiliation / Institution (Custom Dropdown/Datalist) -->
                  <div class="space-y-2 relative">
                     <label class="text-[10px] font-black  text-slate-500 ml-1">Affiliation / Institution (Nigeria)</label>
                     <div class="relative">
                        <input v-model="form.affiliation" @focus="showUniversities = true" @blur="hideUniversitiesDelay" type="text" class="premium-input" placeholder="Search or enter institution..." required />
                        <LucideChevronDown class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" :size="18" />
                        
                        <!-- Custom Dropdown -->
                        <div v-if="showUniversities && filteredUniversities.length" class="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 max-h-60 overflow-y-auto custom-scrollbar p-2">
                           <button type="button" v-for="uni in filteredUniversities" :key="uni" @click="selectUniversity(uni)" class="w-full text-left px-4 py-3 text-base text-slate-600 hover:bg-slate-50 hover:text-brand-blue font-medium rounded-xl transition-colors">
                              {{ uni }}
                           </button>
                        </div>
                     </div>
                  </div>

                  <div class="space-y-2">
                     <label class="text-[10px] font-black  text-slate-500 ml-1">Scientific Title</label>
                     <input v-model="form.title" type="text" class="premium-input !text-slate-900 font-bold" placeholder="Enter the full title of your research" required />
                  </div>

                  <!-- Keywords Mapping -->
                  <div class="space-y-3">
                     <label class="text-[10px] font-black  text-slate-500 ml-1">Keywords</label>
                     <input v-model="form.keywords" type="text" class="premium-input" placeholder="Type keywords separated by comma (e.g., Cytology, Genetics)" required />
                     
                     <div class="flex flex-wrap gap-2 pt-1 min-h-[30px]">
                        <transition-group name="keyword">
                           <span v-for="(kw, idx) in keywordArray" :key="idx" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-cyan/10 border border-brand-cyan/20 text-brand-blue rounded-lg text-xs font-bold tracking-wide">
                              <LucideHash :size="12" /> {{ kw }}
                           </span>
                        </transition-group>
                     </div>
                  </div>

                  <!-- Dynamic Abstract Input (Write or Upload) -->
                  <div class="space-y-2 pt-2">
                     <transition mode="out-in" name="fade-slide">
                        
                        <!-- WRITE MODE -->
                        <div v-if="submissionMode === 'write'" class="space-y-2">
                           <label class="text-[10px] font-black  text-slate-500 ml-1">Abstract Body</label>
                           <div class="relative group">
                             <textarea v-model="form.abstractBody" rows="7" class="premium-input !rounded-[24px] !py-5 !px-6 resize-none leading-relaxed" placeholder="Draft your research summary (Background, Methods, Results, Conclusion)..."></textarea>
                             <div class="absolute bottom-4 right-4 flex justify-between items-center bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
                                <p :class="['text-[10px] font-black font-mono', wordCount < 150 || wordCount > 250 ? 'text-rose-500' : 'text-brand-blue']">{{ wordCount }} / 250 Words</p>
                             </div>
                           </div>
                        </div>

                        <!-- UPLOAD MODE -->
                        <div v-else class="space-y-2">
                           <label class="text-[10px] font-black  text-slate-500 ml-1">Document Upload</label>
                           
                           <div v-if="!selectedFile" class="relative group cursor-pointer" @click="$refs.fileInput.click()">
                              <div class="absolute inset-0 bg-slate-50 rounded-[24px] group-hover:bg-brand-blue/5 transition-colors border border-dashed border-slate-300 group-hover:border-brand-blue/30"></div>
                              <div class="py-12 px-6 flex flex-col items-center justify-center relative z-10 text-center">
                                 <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-blue shadow-sm border border-slate-100 mb-4 group-hover:-translate-y-1 transition-transform">
                                    <LucideCloudUpload :size="28" />
                                 </div>
                                 <h4 class="text-slate-800 font-bold mb-1">Click to browse documents</h4>
                                 <p class="text-xs text-slate-500 font-medium">Supports PDF, DOC, DOCX (Max 5MB)</p>
                              </div>
                              <input type="file" ref="fileInput" @change="handleFileUpload" class="hidden" accept=".pdf,.doc,.docx" />
                           </div>

                           <div v-else class="p-6 bg-slate-50 border border-slate-200 rounded-[24px] flex items-center justify-between group">
                              <div class="flex items-center gap-4">
                                 <div class="w-12 h-12 bg-white border border-slate-100 shadow-sm rounded-xl flex items-center justify-center text-brand-blue">
                                    <LucideFileText :size="24" />
                                 </div>
                                 <div>
                                    <h4 class="text-slate-800 font-bold text-base truncate max-w-[200px] sm:max-w-[300px]">{{ selectedFile.name }}</h4>
                                    <p class="text-xs text-slate-500">{{ (selectedFile.size / 1024 / 1024).toFixed(2) }} MB</p>
                                 </div>
                              </div>
                              <button type="button" @click="removeFile" class="w-10 h-10 rounded-full bg-white hover:bg-rose-50 text-slate-400 hover:text-rose-500 flex items-center justify-center transition-all border border-slate-200 shadow-sm">
                                 <LucideX :size="18" />
                              </button>
                           </div>
                        </div>

                     </transition>
                  </div>

                  <div class="pt-6">
                     <button type="submit" :disabled="loading" class="btn-blue-solid group w-full !py-5 flex items-center justify-center gap-3 text-base overflow-hidden relative">
                        <span v-if="loading" class="flex items-center gap-2 relative z-10">
                          <LucideLoader2 class="animate-spin" :size="18" /> Transmitting Protocol...
                        </span>
                        <span v-else class="flex items-center gap-2 relative z-10">
                          Formalize Submission <LucideArrowRight :size="18" class="group-hover:translate-x-1 transition-transform" />
                        </span>
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  LucideArrowRight, 
  LucideMicroscope,
  LucideLoader2,
  LucideFingerprint,
  LucideEdit3,
  LucideUploadCloud,
  LucideCloudUpload,
  LucideFileText,
  LucideX,
  LucideHash,
  LucideChevronDown
} from 'lucide-vue-next'
import { useSubmitAbstract } from '@/composables/modules/abstracts/useSubmitAbstract'
import { onMounted, ref, computed } from 'vue'

const { loading, form, wordCount, submissionMode, selectedFile, keywordArray, handleFileUpload, removeFile, submitAbstract } = useSubmitAbstract()

const fileInput = ref(null)

const guidelines = [
  "Mandatory structure: Background, Methods, Results, and Conclusion.",
  "Word limit: 150 - 250 words for typed submissions.",
  "Document uploads must be in PDF or DOCX format (Max 5MB).",
  "Ensure affiliations reflect current active academic institutions."
]

// Nigerian Universities List for custom dropdown
const universities = [
  "University of Ibadan (UI)",
  "University of Lagos (UNILAG)",
  "Obafemi Awolowo University (OAU)",
  "Ahmadu Bello University (ABU)",
  "University of Nigeria, Nsukka (UNN)",
  "University of Benin (UNIBEN)",
  "University of Ilorin (UNILORIN)",
  "University of Port Harcourt (UNIPORT)",
  "University of Abuja (UNIABUJA)",
  "Lagos State University (LASU)",
  "Covenant University",
  "Babcock University",
  "Federal University of Technology, Minna (FUTMINNA)",
  "Federal University of Technology, Owerri (FUTO)",
  "Federal University of Technology, Akure (FUTA)",
  "Nnamdi Azikiwe University (UNIZIK)",
  "Bayero University Kano (BUK)",
  "University of Jos (UNIJOS)",
  "University of Calabar (UNICAL)",
  "University of Uyo (UNIUYO)",
  "Olabisi Onabanjo University (OOU)",
  "Afe Babalola University (ABUAD)"
]

const showUniversities = ref(false)

const filteredUniversities = computed(() => {
  if (!form.value.affiliation) return universities
  const search = form.value.affiliation.toLowerCase()
  return universities.filter(u => u.toLowerCase().includes(search))
})

const selectUniversity = (uni) => {
  form.value.affiliation = uni
  showUniversities.value = false
}

const hideUniversitiesDelay = () => {
  setTimeout(() => {
    showUniversities.value = false
  }, 200)
}

const handleSubmit = async () => {
  await submitAbstract()
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

.premium-input {
  @apply w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 px-5 py-4 rounded-2xl focus:outline-none focus:border-brand-blue/30 focus:bg-white focus:ring-4 focus:ring-brand-blue/5 transition-all duration-300;
}

.btn-blue-solid {
  @apply bg-brand-blue text-white font-black rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,51,102,0.2)] hover:shadow-[0_15px_40px_rgba(0,51,102,0.3)] hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0;
}

/* Animations for keywords and transitions */
.keyword-enter-active,
.keyword-leave-active {
  transition: all 0.3s ease;
}
.keyword-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}
.keyword-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Scrollbar for dropdown */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
