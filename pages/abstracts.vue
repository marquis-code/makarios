<template>
  <div class="min-h-screen bg-white font-body">

    <!-- ─── HERO ─────────────────────────────────────────────── -->
    <section class="bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pb-20">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 bg-blue-50 text-[#1d4e89] text-xs font-semibold px-4 py-2 rounded-full mb-7 border border-blue-100">
            <LucideFingerprint :size="13" />
            Scientific Research Hub
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Abstracts &amp;
            <span class="text-[#1d4e89]"> Publications.</span>
          </h1>
          <p class="text-[16px] text-slate-500 leading-relaxed max-w-[540px]">
            The central portal for submitting investigative findings, accessing scientific archives, and advancing the evolution of cellular pathology in Nigeria.
          </p>
        </div>
      </div>
    </section>


    <!-- ─── MAIN CONTENT ─────────────────────────────────────── -->
    <section class="bg-slate-50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          <!-- ── Left info panel ── -->
          <div class="lg:col-span-4 space-y-6">

            <!-- Intro card -->
            <div class="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-sm transition-all duration-300 relative overflow-hidden">
              <LucideMicroscope
                :size="110"
                class="absolute -right-5 -bottom-5 opacity-[0.04] text-blue-800 pointer-events-none"
              />
              <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <LucideMicroscope :size="20" class="text-[#1d4e89]" />
              </div>
              <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2">Submit your work</p>
              <h2 class="text-[20px] font-bold text-slate-800 mb-3 leading-snug">
                Contribute to the 2026 Scientific Compendium
              </h2>
              <p class="text-[13px] text-slate-500 leading-relaxed">
                Select your preferred submission method and complete the peer-review protocol to have your research archived.
              </p>
            </div>

            <!-- Guidelines card -->
            <div class="bg-white border border-slate-200 rounded-2xl p-7">
              <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-5">Submission Guidelines</p>
              <div class="space-y-4">
                <div
                  v-for="(g, i) in guidelines"
                  :key="i"
                  class="flex items-start gap-4 group"
                >
                  <div class="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1d4e89] text-[12px] font-bold flex-shrink-0 mt-0.5 group-hover:bg-[#1d4e89] group-hover:text-white group-hover:border-[#1d4e89] transition-all duration-200">
                    {{ i + 1 }}
                  </div>
                  <p class="text-[13px] text-slate-500 leading-relaxed">{{ g }}</p>
                </div>
              </div>
            </div>

            <!-- Need help card -->
            <div class="bg-[#1d4e89] border border-blue-800 rounded-2xl p-7 relative overflow-hidden">
              <LucideMailOpen
                :size="110"
                class="absolute -right-5 -bottom-5 opacity-[0.06] text-white pointer-events-none"
              />
              <p class="text-[11px] font-semibold text-blue-300 tracking-widest uppercase mb-3">Need help?</p>
              <h3 class="text-[16px] font-bold text-white mb-2 leading-snug">Have questions about your submission?</h3>
              <p class="text-[13px] text-blue-200 leading-relaxed mb-5">
                Reach out to the scientific committee for guidance on formatting or eligibility.
              </p>
              <NuxtLink
                to="/contact"
                class="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white hover:text-blue-200 transition-colors"
              >
                Contact the committee
                <LucideArrowRight :size="13" />
              </NuxtLink>
            </div>

          </div>


          <!-- ── Right form panel ── -->
          <div class="lg:col-span-8">
            <div class="bg-white border border-slate-200 rounded-2xl p-7 lg:p-10">

              <p class="text-[11px] font-semibold text-blue-600 tracking-widest uppercase mb-2">Abstract submission</p>
              <h2 class="text-[22px] font-bold text-slate-800 mb-7 leading-snug">Submit your research</h2>

              <form @submit.prevent="handleSubmit" class="space-y-6">

                <!-- Mode toggle -->
                <div class="flex p-1 bg-slate-100 rounded-xl border border-slate-200">
                  <button
                    type="button"
                    @click="submissionMode = 'write'"
                    :class="[
                      'flex-1 py-3 text-[13px] font-semibold rounded-lg transition-all flex items-center justify-center gap-2',
                      submissionMode === 'write'
                        ? 'bg-white text-[#1d4e89] shadow-sm border border-slate-200'
                        : 'text-slate-400 hover:text-slate-600'
                    ]"
                  >
                    <LucideEdit3 :size="14" /> Compose abstract
                  </button>
                  <button
                    type="button"
                    @click="submissionMode = 'upload'"
                    :class="[
                      'flex-1 py-3 text-[13px] font-semibold rounded-lg transition-all flex items-center justify-center gap-2',
                      submissionMode === 'upload'
                        ? 'bg-white text-[#1d4e89] shadow-sm border border-slate-200'
                        : 'text-slate-400 hover:text-slate-600'
                    ]"
                  >
                    <LucideUploadCloud :size="14" /> Upload document
                  </button>
                </div>

                <!-- Author details -->
                <div class="grid sm:grid-cols-2 gap-5">
                  <div class="space-y-1.5">
                    <label class="text-[12px] font-semibold text-slate-500">Lead Investigator</label>
                    <input
                      v-model="form.primaryAuthor"
                      type="text"
                      class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200"
                      placeholder="Dr. Jane Doe"
                      required
                    />
                  </div>
                  <div class="space-y-1.5">
                    <label class="text-[12px] font-semibold text-slate-500">Email Address</label>
                    <input
                      v-model="form.email"
                      type="email"
                      class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200"
                      placeholder="jane.doe@institution.edu"
                      required
                    />
                  </div>
                </div>

                <!-- Affiliation -->
                <div class="space-y-1.5 relative">
                  <label class="text-[12px] font-semibold text-slate-500">Affiliation / Institution</label>
                  <div class="relative">
                    <input
                      v-model="form.affiliation"
                      @focus="showUniversities = true"
                      @blur="hideUniversitiesDelay"
                      type="text"
                      class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200 pr-10"
                      placeholder="Search or enter institution..."
                      required
                    />
                    <LucideChevronDown class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" :size="16" />

                    <div
                      v-if="showUniversities && filteredUniversities.length"
                      class="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 max-h-52 overflow-y-auto p-1.5"
                    >
                      <button
                        type="button"
                        v-for="uni in filteredUniversities"
                        :key="uni"
                        @click="selectUniversity(uni)"
                        class="w-full text-left px-4 py-2.5 text-[13px] text-slate-600 hover:bg-blue-50 hover:text-[#1d4e89] font-medium rounded-lg transition-colors"
                      >
                        {{ uni }}
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Title -->
                <div class="space-y-1.5">
                  <label class="text-[12px] font-semibold text-slate-500">Scientific Title</label>
                  <input
                    v-model="form.title"
                    type="text"
                    class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] font-semibold px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200"
                    placeholder="Enter the full title of your research"
                    required
                  />
                </div>

                <!-- Keywords -->
                <div class="space-y-1.5">
                  <label class="text-[12px] font-semibold text-slate-500">Keywords</label>
                  <input
                    v-model="form.keywords"
                    type="text"
                    class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-3 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200"
                    placeholder="Type keywords separated by comma (e.g., Cytology, Genetics)"
                    required
                  />
                  <div class="flex flex-wrap gap-2 pt-1 min-h-[28px]">
                    <transition-group name="keyword">
                      <span
                        v-for="(kw, idx) in keywordArray"
                        :key="idx"
                        class="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 border border-blue-100 text-[#1d4e89] rounded-lg text-[12px] font-semibold"
                      >
                        <LucideHash :size="11" /> {{ kw }}
                      </span>
                    </transition-group>
                  </div>
                </div>

                <!-- Abstract body / Upload -->
                <div class="space-y-1.5">
                  <transition mode="out-in" name="fade-slide">

                    <!-- Write mode -->
                    <div v-if="submissionMode === 'write'" key="write" class="space-y-1.5">
                      <label class="text-[12px] font-semibold text-slate-500">Abstract Body</label>
                      <div class="relative">
                        <textarea
                          v-model="form.abstractBody"
                          rows="7"
                          class="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-[14px] px-4 py-4 rounded-xl focus:outline-none focus:border-blue-300 focus:bg-white focus:ring-2 focus:ring-blue-50 transition-all duration-200 resize-none leading-relaxed"
                          placeholder="Draft your research summary (Background, Methods, Results, Conclusion)..."
                        />
                        <div class="absolute bottom-3 right-3 bg-white border border-slate-200 rounded-lg px-3 py-1">
                          <span
                            :class="[
                              'text-[12px] font-semibold font-mono',
                              wordCount < 150 || wordCount > 250 ? 'text-rose-500' : 'text-[#1d4e89]'
                            ]"
                          >
                            {{ wordCount }} / 250 words
                          </span>
                        </div>
                      </div>
                    </div>

                    <!-- Upload mode -->
                    <div v-else key="upload" class="space-y-1.5">
                      <label class="text-[12px] font-semibold text-slate-500">Document Upload</label>

                      <div
                        v-if="!selectedFile"
                        class="relative cursor-pointer group"
                        @click="$refs.fileInput.click()"
                      >
                        <div class="border border-dashed border-slate-300 group-hover:border-blue-300 bg-slate-50 group-hover:bg-blue-50/40 rounded-xl py-12 px-6 flex flex-col items-center justify-center text-center transition-all duration-200">
                          <div class="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#1d4e89] mb-4 group-hover:-translate-y-1 transition-transform duration-200">
                            <LucideCloudUpload :size="22" />
                          </div>
                          <p class="text-[14px] font-semibold text-slate-700 mb-1">Click to browse documents</p>
                          <p class="text-[12px] text-slate-400">PDF, DOC, DOCX — max 5MB</p>
                        </div>
                        <input type="file" ref="fileInput" @change="handleFileUpload" class="hidden" accept=".pdf,.doc,.docx" />
                      </div>

                      <div
                        v-else
                        class="p-5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between"
                      >
                        <div class="flex items-center gap-3">
                          <div class="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#1d4e89]">
                            <LucideFileText :size="18" />
                          </div>
                          <div>
                            <p class="text-[13px] font-semibold text-slate-800 truncate max-w-[220px] sm:max-w-[340px]">{{ selectedFile.name }}</p>
                            <p class="text-[12px] text-slate-400">{{ (selectedFile.size / 1024 / 1024).toFixed(2) }} MB</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          @click="removeFile"
                          class="w-8 h-8 rounded-lg bg-white hover:bg-rose-50 border border-slate-200 text-slate-400 hover:text-rose-500 flex items-center justify-center transition-all"
                        >
                          <LucideX :size="15" />
                        </button>
                      </div>
                    </div>

                  </transition>
                </div>

                <!-- Submit -->
                <div class="pt-2">
                  <button
                    type="submit"
                    :disabled="loading"
                    class="w-full inline-flex items-center justify-center gap-2 bg-[#1d4e89] hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200"
                  >
                    <LucideLoader2 v-if="loading" class="animate-spin" :size="16" />
                    <span v-if="loading">Transmitting...</span>
                    <span v-else class="flex items-center gap-2">
                      Formalize submission
                      <LucideArrowRight :size="15" />
                    </span>
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>

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
  LucideChevronDown,
  LucideMailOpen,
} from 'lucide-vue-next'
import { useSubmitAbstract } from '@/composables/modules/abstracts/useSubmitAbstract'
import { ref, computed } from 'vue'

const {
  loading, form, wordCount, submissionMode,
  selectedFile, keywordArray, handleFileUpload,
  removeFile, submitAbstract
} = useSubmitAbstract()

const fileInput = ref(null)

const guidelines = [
  'Mandatory structure: Background, Methods, Results, and Conclusion.',
  'Word limit: 150–250 words for typed submissions.',
  'Document uploads must be PDF or DOCX format (max 5MB).',
  'Ensure affiliations reflect current active academic institutions.',
]

const universities = [
  'University of Ibadan (UI)',
  'University of Lagos (UNILAG)',
  'Obafemi Awolowo University (OAU)',
  'Ahmadu Bello University (ABU)',
  'University of Nigeria, Nsukka (UNN)',
  'University of Benin (UNIBEN)',
  'University of Ilorin (UNILORIN)',
  'University of Port Harcourt (UNIPORT)',
  'University of Abuja (UNIABUJA)',
  'Lagos State University (LASU)',
  'Covenant University',
  'Babcock University',
  'Federal University of Technology, Minna (FUTMINNA)',
  'Federal University of Technology, Owerri (FUTO)',
  'Federal University of Technology, Akure (FUTA)',
  'Nnamdi Azikiwe University (UNIZIK)',
  'Bayero University Kano (BUK)',
  'University of Jos (UNIJOS)',
  'University of Calabar (UNICAL)',
  'University of Uyo (UNIUYO)',
  'Olabisi Onabanjo University (OOU)',
  'Afe Babalola University (ABUAD)',
]

const showUniversities = ref(false)

const filteredUniversities = computed(() => {
  if (!form.value.affiliation) return universities
  const s = form.value.affiliation.toLowerCase()
  return universities.filter(u => u.toLowerCase().includes(s))
})

const selectUniversity = (uni) => {
  form.value.affiliation = uni
  showUniversities.value = false
}

const hideUniversitiesDelay = () => {
  setTimeout(() => { showUniversities.value = false }, 200)
}

const handleSubmit = async () => {
  await submitAbstract()
}
</script>


<style scoped>
.font-body {
  font-family: 'DM Sans', 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
}

.keyword-enter-active,
.keyword-leave-active { transition: all 0.25s ease; }
.keyword-enter-from   { opacity: 0; transform: translateY(6px) scale(0.92); }
.keyword-leave-to     { opacity: 0; transform: scale(0.92); }

.fade-slide-enter-active,
.fade-slide-leave-active { transition: all 0.25s ease; }
.fade-slide-enter-from   { opacity: 0; transform: translateY(-8px); }
.fade-slide-leave-to     { opacity: 0; transform: translateY(8px); }
</style>