<template>
  <main>
    <div class="border-4 mb-20">
        <NavbarSection class="" />
    </div>
    <div class="min-h-screen  bg-gradient-to-br from-teal-400 via-blue-500 to-cyan-600 p-4 flex items-center justify-center relative overflow-hidden">
      <!-- Floating Background Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- African-inspired patterns -->
        <div class="floating-circle absolute top-20 left-10 w-32 h-32 bg-orange-300/20 rounded-full animate-float flex items-center justify-center">
          <div class="text-4xl">🌍</div>
        </div>
        <div class="floating-circle absolute top-40 right-20 w-24 h-24 bg-yellow-300/15 rounded-full animate-float-delayed flex items-center justify-center">
          <div class="text-2xl">📚</div>
        </div>
        <div class="floating-circle absolute bottom-32 left-1/4 w-16 h-16 bg-teal-300/25 rounded-full animate-bounce-slow flex items-center justify-center">
          <div class="text-xl">👶</div>
        </div>
        <div class="floating-circle absolute bottom-20 right-1/3 w-40 h-40 bg-blue-300/10 rounded-full animate-pulse-slow flex items-center justify-center">
          <div class="text-3xl">🎯</div>
        </div>
        <div class="floating-circle absolute top-1/2 left-5 w-20 h-20 bg-green-300/20 rounded-full animate-float flex items-center justify-center">
          <div class="text-2xl">💰</div>
        </div>
      </div>
  
      <!-- Main Container -->
      <div class="w-full max-w-lg mx-auto relative z-10 bg-gradient-to-br from-teal-400 via-blue-500 to-cyan-600">
        <!-- Header Section -->
        <div class="text-center mb-8 animate-fade-in-down">
          <!-- Event Logo/Badge -->
          <div class="relative inline-block mb-6">
            <div class="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div class="flex items-center justify-center space-x-4">
                <div class="text-4xl animate-bounce-gentle">🌟</div>
                <div class="text-center">
                  <div class="text-xs text-teal-600 font-semibold mb-1">MAKARIOS INITIATIVE PRESENTS</div>
                  <div class="text-lg font-bold text-gray-800">IDAC 2025 × Book Launch</div>
                </div>
                <div class="text-4xl animate-bounce-gentle">📖</div>
              </div>
            </div>
          </div>
  
          <!-- Event Title -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
            <h1 class="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
              Planning and Budgeting for Children's Rights
            </h1>
            <p class="text-white/90 text-lg font-medium mb-2">Progress Since 2010</p>
            <div class="flex items-center justify-center space-x-4 text-white/80 text-sm">
              <span class="flex items-center">
                📅 June 19, 2025
              </span>
              <span class="flex items-center">
                🕘 9:00 AM - 1:30 PM WAT
              </span>
            </div>
          </div>
  
          <!-- Book Feature -->
          <div class="bg-gradient-to-r from-orange-400 to-yellow-500 rounded-2xl p-4 mb-6 transform hover:scale-105 transition-all duration-300">
            <div class="flex items-center justify-center space-x-3">
              <div class="text-2xl">📚</div>
              <div class="text-white font-bold">
                <div class="text-sm">Book Launch:</div>
                <div class="text-lg">"Kika's Examination"</div>
                <div class="text-xs opacity-90">by Lauretta Patrick-Nwachi</div>
              </div>
            </div>
          </div>
  
          <!-- Keynote Speaker -->
          <div class="bg-white/15 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-white/20">
            <div class="text-white/90 text-sm mb-2">🎤 KEYNOTE SPEAKER</div>
            <div class="text-white font-bold text-lg">Dr. Cosmas Maduka</div>
            <div class="text-white/80 text-sm">Founder & President, Coscharis Group</div>
            <div class="text-white/70 text-xs mt-1">+ Other Eminent Speakers</div>
          </div>
  
          <!-- Venue -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-white/90 text-sm">
            📍 RCCG Main Auditorium, Dominion Sanctuary, ACME Road, Ikeja
          </div>
        </div>
  
        <!-- Registration Form -->
        <div class="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105 animate-fade-in-up">
          <!-- Form Header -->
          <div class="text-center mb-6">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Register for IDAC 2025</h2>
            <p class="text-gray-600">Join us in advancing children's rights advocacy</p>
          </div>
  
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name Field -->
            <div class="form-group" :class="{ 'animate-shake': errors.name }">
              <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                <span class="flex items-center">
                  <div class="w-5 h-5 mr-2 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  Full Name *
                </span>
              </label>
              <div class="relative">
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-200 transition-all duration-300 transform focus:scale-105"
                  :class="{ 'border-red-500 animate-pulse': errors.name }"
                  placeholder="Enter your full name"
                  @input="clearError('name')"
                />
                <div v-if="errors.name" class="absolute -bottom-6 left-0 text-red-500 text-xs animate-fade-in">
                  {{ errors.name }}
                </div>
              </div>
            </div>
  
            <!-- Phone Field -->
            <div class="form-group" :class="{ 'animate-shake': errors.phone }">
              <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                <span class="flex items-center">
                  <div class="w-5 h-5 mr-2 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  Phone Number *
                </span>
              </label>
              <div class="relative">
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-200 transition-all duration-300 transform focus:scale-105"
                  :class="{ 'border-red-500 animate-pulse': errors.phone }"
                  placeholder="+234 123 456 7890"
                  @input="clearError('phone')"
                />
                <div v-if="errors.phone" class="absolute -bottom-6 left-0 text-red-500 text-xs animate-fade-in">
                  {{ errors.phone }}
                </div>
              </div>
            </div>
  
            <!-- Email Field -->
            <div class="form-group" :class="{ 'animate-shake': errors.email }">
              <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                <span class="flex items-center">
                  <div class="w-5 h-5 mr-2 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  Email Address *
                </span>
              </label>
              <div class="relative">
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform focus:scale-105"
                  :class="{ 'border-red-500 animate-pulse': errors.email }"
                  placeholder="your.email@example.com"
                  @input="clearError('email')"
                />
                <div v-if="errors.email" class="absolute -bottom-6 left-0 text-red-500 text-xs animate-fade-in">
                  {{ errors.email }}
                </div>
              </div>
            </div>
  
            <!-- Organization Field -->
            <div class="form-group" :class="{ 'animate-shake': errors.organization }">
              <label for="organization" class="block text-sm font-semibold text-gray-700 mb-2">
                <span class="flex items-center">
                  <div class="w-5 h-5 mr-2 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  Organization/Affiliation *
                </span>
              </label>
              <div class="relative">
                <input
                  id="organization"
                  v-model="form.organization"
                  type="text"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all duration-300 transform focus:scale-105"
                  :class="{ 'border-red-500 animate-pulse': errors.organization }"
                  placeholder="NGO, Government Agency, Private Sector, etc."
                  @input="clearError('organization')"
                />
                <div v-if="errors.organization" class="absolute -bottom-6 left-0 text-red-500 text-xs animate-fade-in">
                  {{ errors.organization }}
                </div>
              </div>
            </div>
  
            <!-- Interest Areas (New Field) -->
            <div class="form-group">
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                <span class="flex items-center">
                  <div class="w-5 h-5 mr-2 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Primary Interest (Optional)
                </span>
              </label>
              <select
                v-model="form.interest"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-300 transform focus:scale-105"
              >
                <option value="">Select your primary interest</option>
                <option value="child-budgeting">Child-Focused Budgeting</option>
                <option value="policy-advocacy">Policy Advocacy</option>
                <option value="research-data">Research & Data</option>
                <option value="implementation">Program Implementation</option>
                <option value="monitoring-evaluation">Monitoring & Evaluation</option>
                <option value="funding-grants">Funding & Grants</option>
                <option value="networking">Networking & Collaboration</option>
                <option value="book-launch">Book Launch Event</option>
              </select>
            </div>
  
            <!-- Event Benefits -->
            <div class="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-4 mb-6">
              <h3 class="font-semibold text-gray-800 mb-3 flex items-center">
                <span class="text-xl mr-2">🎁</span>
                What You'll Gain:
              </h3>
              <div class="grid grid-cols-1 gap-2 text-sm text-gray-700">
                <div class="flex items-center">
                  <span class="text-green-500 mr-2">✓</span>
                  Expert insights on children's rights budgeting
                </div>
                <div class="flex items-center">
                  <span class="text-green-500 mr-2">✓</span>
                  Network with policy makers and advocates
                </div>
                <div class="flex items-center">
                  <span class="text-green-500 mr-2">✓</span>
                  Access to research findings and best practices
                </div>
                <div class="flex items-center">
                  <span class="text-green-500 mr-2">✓</span>
                  Complimentary copy of "Kika's Examination"
                </div>
                <div class="flex items-center">
                  <span class="text-green-500 mr-2">✓</span>
                  Certificate of participation
                </div>
              </div>
            </div>
  
            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-black text-white font-bold py-4 px-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-teal-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              :class="{ 'animate-pulse': isSubmitting }"
            >
              <span v-if="!isSubmitting" class="flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
                </svg>
                Register for IDAC 2025
              </span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Securing Your Spot...
              </span>
            </button>
          </form>
        </div>
  
        <!-- Footer -->
        <div class="text-center mt-8 text-white/60 animate-fade-in-up">
          <p class="text-sm">🔒 Secure registration • 📱 WhatsApp confirmation</p>
          <p class="text-xs mt-2 opacity-80">Advancing children's rights through evidence-based advocacy</p>
        </div>
      </div>
  
      <!-- Success Modal -->
      <Teleport to="body">
        <div
          v-if="showSuccessModal"
          class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
          @click="closeModal"
        >
          <div
            class="bg-white rounded-3xl p-8 max-w-md w-full mx-4 transform transition-all duration-500 animate-scale-in"
            @click.stop
          >
            <!-- Success Animation -->
            <div class="text-center mb-6">
              <div class="w-20 h-20 mx-auto mb-4 relative">
                <div class="w-full h-full bg-gradient-to-r from-teal-100 to-blue-100 rounded-full flex items-center justify-center animate-bounce">
                  <svg class="w-10 h-10 text-teal-600 animate-draw-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div class="absolute inset-0 bg-teal-200 rounded-full animate-ping opacity-20"></div>
                <div class="absolute -top-2 -right-2 text-2xl animate-bounce-gentle">🎉</div>
              </div>
              <h2 class="text-2xl font-bold text-gray-800 mb-2">Welcome to IDAC 2025! 🌟</h2>
              <p class="text-gray-600 mb-4">Thank you for registering for this important advocacy event.</p>
              <div class="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-4 mb-4">
                <p class="text-sm text-gray-700">
                  <strong>📅 Save the Date:</strong> June 19, 2025<br>
                  <strong>🕘 Time:</strong> 9:00 AM - 1:30 PM WAT<br>
                  <strong>📍 Venue:</strong> RCCG Main Auditorium, Ikeja
                </p>
              </div>
              <p class="text-gray-600 text-sm mb-6">
                You'll be redirected to WhatsApp in <span class="font-bold text-teal-600">{{ countdown }}</span> seconds for confirmation and event updates.
              </p>
            </div>
  
            <!-- Action Buttons -->
            <div class="space-y-3">
              <button
                @click="redirectToWhatsApp"
                class="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Get Event Updates on WhatsApp
              </button>
              <button
                @click="closeModal"
                class="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-xl transform transition-all duration-300 hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Teleport>
    </div>
  </main>
  </template>
  
  <script setup lang="ts">

useServerSeoMeta({
  title: "Makarios Initiative | IDAC 2025 × Book Launch",
  ogTitle: "Makarios Initiative | IDAC 2025 × Book Launch",
  description: "Planning and Budgeting for Children's Rights | Makarios Initiative.",
  ogDescription: "Planning and Budgeting for Children's Rights | Makarios Initiative.",
  ogImage: "https://makariosinitiative.org/og-image.jpg",
  ogImageUrl: "https://makariosinitiative.org/og-image.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "MAKARIOS Initiative is dedicated to Transforming Education Through Innovation and Excellence | Makarios Initiative",
  twitterDescription: "MAKARIOS Initiative is dedicated to Transforming Education Through Innovation and Excellence | Makarios Initiative",
  twitterImage: "https://makariosinitiative.org/og-image.jpg"
})

useSeoMeta({
  title: "Makarios Initiative | IDAC 2025 × Book Launch",
  ogTitle: "Makarios Initiative | IDAC 2025 × Book Launch",
  description: "Planning and Budgeting for Children's Rights | Makarios Initiative.",
  ogDescription: "Planning and Budgeting for Children's Rights | Makarios Initiative.",
  ogImage: "https://makariosinitiative.org/og-image.jpg",
  ogImageUrl: "https://makariosinitiative.org/og-image.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "MAKARIOS Initiative is dedicated to Transforming Education Through Innovation and Excellence | Makarios Initiative",
  twitterDescription: "MAKARIOS Initiative is dedicated to Transforming Education Through Innovation and Excellence | Makarios Initiative",
  twitterImage: "https://makariosinitiative.org/og-image.jpg"
  });

  interface FormData {
    name: string
    phone: string
    email: string
    organization: string
    interest: string
  }
  
  interface Errors {
    name?: string
    phone?: string
    email?: string
    organization?: string
  }
  
  const form = ref<FormData>({
    name: '',
    phone: '',
    email: '',
    organization: '',
    interest: ''
  })
  
  const errors = ref<Errors>({})
  const isSubmitting = ref(false)
  const showSuccessModal = ref(false)
  const countdown = ref(5)
  
  const whatsappNumber = '+2348036671464'
  
  const validateForm = (): boolean => {
    errors.value = {}
    let isValid = true
  
    if (!form.value.name.trim()) {
      errors.value.name = 'Full name is required'
      isValid = false
    }
  
    if (!form.value.phone.trim()) {
      errors.value.phone = 'Phone number is required'
      isValid = false
    }
  
    if (!form.value.email.trim()) {
      errors.value.email = 'Email address is required'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
      errors.value.email = 'Please enter a valid email address'
      isValid = false
    }
  
    if (!form.value.organization.trim()) {
      errors.value.organization = 'Organization/Affiliation is required'
      isValid = false
    }
  
    return isValid
  }
  
  const clearError = (field: keyof Errors) => {
    if (errors.value[field]) {
      delete errors.value[field]
    }
  }
  
  const handleSubmit = async () => {
    if (!validateForm()) return
  
    isSubmitting.value = true
  
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      showSuccessModal.value = true
      startCountdown()
    } catch (error) {
      console.error('Registration failed:', error)
    } finally {
      isSubmitting.value = false
    }
  }
  
  const startCountdown = () => {
    const timer = setInterval(() => {
      countdown.value--
      if (countdown.value <= 0) {
        clearInterval(timer)
        redirectToWhatsApp()
      }
    }, 1000)
  }
  
  const redirectToWhatsApp = () => {
    const interestText = form.value.interest ? `\n🎯 Primary Interest: ${form.value.interest.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}` : ''
    
    const message = `🌟 IDAC 2025 × Book Launch Registration
  
  Hello! I've just registered for the IDAC 2025 event on "Planning and Budgeting for Children's Rights: Progress Since 2010"
  
  📋 My Registration Details:
  👤 Name: ${form.value.name}
  📞 Phone: ${form.value.phone}
  📧 Email: ${form.value.email}
  🏢 Organization: ${form.value.organization}${interestText}
  
  📅 Event Details:
  • Date: Thursday, June 19, 2025
  • Time: 9:00 AM - 1:30 PM WAT  
  • Venue: RCCG Main Auditorium, Dominion Sanctuary, ACME Road, Ikeja
  
  I'm looking forward to:
  ✓ Learning from Dr. Cosmas Maduka and other experts
  ✓ The book launch of "Kika's Examination"
  ✓ Networking with fellow advocates
  ✓ Contributing to children's rights advancement
  
  Please confirm my registration and send any additional event information. Thank you!
  
  #IDAC2025 #ChildrensRights #MakariosInitiative`
  
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    closeModal()
  }
  
  const closeModal = () => {
    showSuccessModal.value = false
    countdown.value = 5
    // Reset form
    form.value = {
      name: '',
      phone: '',
      email: '',
      organization: '',
      interest: ''
    }
  }

  </script>



<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(-180deg); }
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

@keyframes bounce-gentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-in-down {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scale-in {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

@keyframes draw-check {
  0% { stroke-dasharray: 0 50; }
  100% { stroke-dasharray: 50 0; }
}

.animate-float { animation: float 6s ease-in-out infinite; }
.animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
.animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
.animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
.animate-fade-in { animation: fade-in 0.5s ease-out; }
.animate-fade-in-down { animation: fade-in-down 0.8s ease-out; }
.animate-fade-in-up { animation: fade-in-up 0.8s ease-out 0.2s both; }
.animate-scale-in { animation: scale-in 0.3s ease-out; }
.animate-shake { animation: shake 0.5s ease-in-out; }
.animate-draw-check { animation: draw-check 0.8s ease-out 0.3s both; }

.floating-circle {
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

input:focus {
  outline: none;
}

@media (max-width: 640px) {
  .floating-circle {
    display: none;
  }
}
</style>
