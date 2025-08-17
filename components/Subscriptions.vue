<template>
    <div class="bg-gradient-to-br  from-slate-50 via-blue-50 to-indigo-100 min-h-screen py-16  sm:py-24">
      <!-- Hero Section -->
      <div class="mx-auto max-w-4xl px-6 text-center lg:max-w-7xl lg:px-8">
        <h1 class="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600  animate-pulse">
          Donor Tiers & Recognition Framework
        </h1>
        <p class="mt-6 max-w-2xl text-lg font-medium text-gray-700 mx-auto sm:text-xl leading-8">
          Transform lives through literacy. Choose your impact level and join our community of educational champions making a lasting difference.
        </p>
      </div>
  
      <!-- Tier Cards Section -->
      <div class="relative pt-16 pb-44 sm:pt-24">
        <!-- Background Gradient -->
        <div class="absolute inset-x-0 top-48 bottom-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 opacity-95"></div>
        
        <!-- Floating Elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
          <div class="absolute top-1/3 right-1/4 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div class="absolute bottom-1/4 left-1/3 w-36 h-36 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
        </div>
  
        <div class="relative mx-auto p-4">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-6">
            
            <!-- Bronze Tier -->
            <div class="tier-card group" @mouseenter="playHoverSound">
              <div class="tier-card-inner bronze-tier">
                <div class="tier-content">
                  <!-- Header -->
                  <div class="text-center mb-6">
                    <div class="tier-icon bronze-icon mx-auto mb-3">
                      📜
                    </div>
                    <h2 class="text-xl font-bold text-amber-700">BRONZE</h2>
                    <p class="text-sm text-amber-600 mb-2">Foundational Support</p>
                    <div class="tier-badge bronze-badge">
                      1-99 copies
                    </div>
                  </div>
  
                  <!-- Impact Statement -->
                  <div class="impact-statement bronze-impact mb-6">
                    <p class="text-sm font-medium">"Building literacy foundations!"</p>
                  </div>
  
                  <!-- Benefits List -->
                  <div class="benefits-list">
                    <h3 class="text-sm font-semibold text-gray-800 mb-4">Recognition Includes:</h3>
                    <ul class="space-y-2">
                      <li class="benefit-item">
                        <span class="benefit-icon">🏆</span>
                        <span>Digital Certificate</span>
                      </li>
                      <li class="benefit-item">
                        <span class="benefit-icon">📝</span>
                        <span>Online Donor Roll</span>
                      </li>
                      <li class="benefit-item">
                        <span class="benefit-icon">📧</span>
                        <span>Thank-You Email</span>
                      </li>
                      <li class="benefit-item">
                        <span class="benefit-icon">📊</span>
                        <span>Quarterly Updates</span>
                      </li>
                      <li class="benefit-item">
                        <span class="benefit-icon">🏷️</span>
                        <span>E-Bookplate</span>
                      </li>
                    </ul>
                  </div>
  
                  <!-- CTA Button -->
                  <button 
                    @click="openDonationModal('bronze')"
                    class="tier-cta bronze-cta group-hover:scale-105 transition-transform duration-300"
                  >
                    Start Your Impact
                  </button>
                </div>
              </div>
            </div>
  
            <!-- Silver Tier -->
            <div class="tier-card group" @mouseenter="playHoverSound">
              <div class="tier-card-inner silver-tier">
                <div class="tier-content">
                  <!-- Header -->
                  <div class="text-center mb-6">
                    <div class="tier-icon silver-icon mx-auto mb-3">
                      🥈
                    </div>
                    <h2 class="text-xl font-bold text-slate-700">SILVER</h2>
                    <p class="text-sm text-slate-600 mb-2">Classroom Champion</p>
                    <div class="tier-badge silver-badge">
                      100-199 copies
                    </div>
                  </div>
  
                  <!-- Critical Threshold -->
                  <div class="threshold-highlight mb-4">
                    <span class="threshold-pill">99→100: Full Classroom!</span>
                  </div>
  
                  <!-- Impact Statement -->
                  <div class="impact-statement silver-impact mb-6">
                    <p class="text-sm font-medium">"Transforming classrooms!"</p>
                  </div>
  
                  <!-- Benefits List -->
                  <div class="benefits-list">
                    <h3 class="text-sm font-semibold text-gray-800 mb-4">Enhanced Benefits:</h3>
                    <ul class="space-y-2">
                      <li class="benefit-item premium">
                        <span class="benefit-icon">🖼️</span>
                        <span>Physical Certificate</span>
                      </li>
                      <li class="benefit-item premium">
                        <span class="benefit-icon">📚</span>
                        <span>Custom Bookplates</span>
                      </li>
                      <li class="benefit-item premium">
                        <span class="benefit-icon">📈</span>
                        <span>Impact Snapshot</span>
                      </li>
                      <li class="benefit-item premium">
                        <span class="benefit-icon">🎉</span>
                        <span>Event Invitations</span>
                      </li>
                      <li class="benefit-item premium">
                        <span class="benefit-icon">⚡</span>
                        <span>Early Access</span>
                      </li>
                    </ul>
                  </div>
  
                  <button 
                    @click="openDonationModal('silver')"
                    class="tier-cta silver-cta group-hover:scale-105 transition-transform duration-300"
                  >
                    Become Champion
                  </button>
                </div>
              </div>
            </div>
  
            <!-- Gold Tier -->
            <div class="tier-card group featured-tier" @mouseenter="playHoverSound">
              <div class="tier-card-inner gold-tier">
                <div class="tier-content">
                  <!-- Popular Badge -->
                  <div class="popular-badge">
                    🌟 POPULAR
                  </div>
                  
                  <!-- Header -->
                  <div class="text-center mb-6">
                    <div class="tier-icon gold-icon mx-auto mb-3">
                      🥇
                    </div>
                    <h2 class="text-xl font-bold text-yellow-700">GOLD</h2>
                    <p class="text-sm text-yellow-600 mb-2">Educational Partner</p>
                    <div class="tier-badge gold-badge">
                      200-499 copies
                    </div>
                  </div>
  
                  <!-- Critical Threshold -->
                  <div class="threshold-highlight mb-4">
                    <span class="threshold-pill">199→200: Whole School!</span>
                  </div>
  
                  <!-- Impact Statement -->
                  <div class="impact-statement gold-impact mb-6">
                    <p class="text-sm font-medium">"Transforming schools!"</p>
                  </div>
  
                  <!-- Benefits List -->
                  <div class="benefits-list">
                    <h3 class="text-sm font-semibold text-gray-800 mb-4">Premium Benefits:</h3>
                    <ul class="space-y-2">
                      <li class="benefit-item gold-exclusive">
                        <span class="benefit-icon">📖</span>
                        <span>Named Bookshelf</span>
                      </li>
                      <li class="benefit-item gold-exclusive">
                        <span class="benefit-icon">📸</span>
                        <span>Premium Report</span>
                      </li>
                      <li class="benefit-item gold-exclusive">
                        <span class="benefit-icon">👥</span>
                        <span>VIP Event Access</span>
                      </li>
                      <li class="benefit-item gold-exclusive">
                        <span class="benefit-icon">🎁</span>
                        <span>Stewardship Gift</span>
                      </li>
                      <li class="benefit-item gold-exclusive">
                        <span class="benefit-icon">🤝</span>
                        <span>Dedicated Liaison</span>
                      </li>
                    </ul>
                  </div>
  
                  <button 
                    @click="openDonationModal('gold')"
                    class="tier-cta gold-cta group-hover:scale-105 transition-transform duration-300"
                  >
                    Become Partner
                  </button>
                </div>
              </div>
            </div>
  
            <!-- Platinum Tier -->
            <div class="tier-card group" @mouseenter="playHoverSound">
              <div class="tier-card-inner platinum-tier">
                <div class="tier-content">
                  <!-- Header -->
                  <div class="text-center mb-6">
                    <div class="tier-icon platinum-icon mx-auto mb-3">
                      💎
                    </div>
                    <h2 class="text-xl font-bold text-purple-700">PLATINUM</h2>
                    <p class="text-sm text-purple-600 mb-2">Legacy Builder</p>
                    <div class="tier-badge platinum-badge">
                      500-999 copies
                    </div>
                  </div>
  
                  <!-- Critical Threshold -->
                  <div class="threshold-highlight mb-4">
                    <span class="threshold-pill">499→500: Library Legacy!</span>
                  </div>
  
                  <!-- Impact Statement -->
                  <div class="impact-statement platinum-impact mb-6">
                    <p class="text-sm font-medium">"Building lasting legacy!"</p>
                  </div>
  
                  <!-- Benefits List -->
                  <div class="benefits-list">
                    <h3 class="text-sm font-semibold text-gray-800 mb-4">Legacy Benefits:</h3>
                    <ul class="space-y-2">
                      <li class="benefit-item platinum-exclusive">
                        <span class="benefit-icon">🏛️</span>
                        <span>Library Section</span>
                      </li>
                      <li class="benefit-item platinum-exclusive">
                        <span class="benefit-icon">🎥</span>
                        <span>Video Testimonial</span>
                      </li>
                      <li class="benefit-item platinum-exclusive">
                        <span class="benefit-icon">🍽️</span>
                        <span>Annual Dinner</span>
                      </li>
                      <li class="benefit-item platinum-exclusive">
                        <span class="benefit-icon">📰</span>
                        <span>Media Feature</span>
                      </li>
                      <li class="benefit-item platinum-exclusive">
                        <span class="benefit-icon">🔒</span>
                        <span>Exclusive Updates</span>
                      </li>
                    </ul>
                  </div>
  
                  <button 
                    @click="openDonationModal('platinum')"
                    class="tier-cta platinum-cta group-hover:scale-105 transition-transform duration-300"
                  >
                    Build Legacy
                  </button>
                </div>
              </div>
            </div>
  
            <!-- Diamond Tier -->
            <div class="tier-card group premium-tier" @mouseenter="playHoverSound">
              <div class="tier-card-inner diamond-tier">
                <div class="tier-content">
                  <!-- Premium Badge -->
                  <div class="premium-badge">
                    ✨ ELITE
                  </div>
                  
                  <!-- Header -->
                  <div class="text-center mb-6">
                    <div class="tier-icon diamond-icon mx-auto mb-3">
                      💎
                    </div>
                    <h2 class="text-xl font-bold text-indigo-700">DIAMOND</h2>
                    <p class="text-sm text-indigo-600 mb-2">Transformational Leader</p>
                    <div class="tier-badge diamond-badge">
                      1,000+ copies
                    </div>
                  </div>
  
                  <!-- Critical Threshold -->
                  <div class="threshold-highlight mb-4">
                    <span class="threshold-pill diamond">999→1,000: Community!</span>
                  </div>
  
                  <!-- Impact Statement -->
                  <div class="impact-statement diamond-impact mb-6">
                    <p class="text-sm font-medium">"Community transformation!"</p>
                  </div>
  
                  <!-- Benefits List -->
                  <div class="benefits-list">
                    <h3 class="text-sm font-semibold text-gray-800 mb-4">Elite Benefits:</h3>
                    <ul class="space-y-2">
                      <li class="benefit-item diamond-exclusive">
                        <span class="benefit-icon">🏢</span>
                        <span>Learning Center</span>
                      </li>
                      <li class="benefit-item diamond-exclusive">
                        <span class="benefit-icon">🧭</span>
                        <span>Advisory Role</span>
                      </li>
                      <li class="benefit-item diamond-exclusive">
                        <span class="benefit-icon">📢</span>
                        <span>Press Release</span>
                      </li>
                      <li class="benefit-item diamond-exclusive">
                        <span class="benefit-icon">🗺️</span>
                        <span>Impact Tour</span>
                      </li>
                      <li class="benefit-item diamond-exclusive">
                        <span class="benefit-icon">🎨</span>
                        <span>Artistic Mural</span>
                      </li>
                      <li class="benefit-item diamond-exclusive">
                        <span class="benefit-icon">🏆</span>
                        <span>Visionary Trophy</span>
                      </li>
                    </ul>
                  </div>
  
                  <button 
                    @click="openDonationModal('diamond')"
                    class="tier-cta diamond-cta group-hover:scale-105 transition-transform duration-300"
                  >
                    Transform Lives
                  </button>
                </div>
              </div>
            </div>
  
          </div>
  
          <!-- Impact Translation Section -->
          <div class="mt-20 text-center">
            <h3 class="text-2xl font-bold text-white mb-8">Impact Translation</h3>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              <div class="impact-card">
                <div class="text-2xl mb-2">📚</div>
                <div class="text-lg font-bold text-white">100 books</div>
                <div class="text-xs text-gray-300">= 1 Classroom</div>
              </div>
              <div class="impact-card">
                <div class="text-2xl mb-2">🏫</div>
                <div class="text-lg font-bold text-white">200 books</div>
                <div class="text-xs text-gray-300">= School Section</div>
              </div>
              <div class="impact-card">
                <div class="text-2xl mb-2">📖</div>
                <div class="text-lg font-bold text-white">500 books</div>
                <div class="text-xs text-gray-300">= 2 Libraries</div>
              </div>
              <div class="impact-card">
                <div class="text-2xl mb-2">🏛️</div>
                <div class="text-lg font-bold text-white">1000 books</div>
                <div class="text-xs text-gray-300">= Community Center</div>
              </div>
              <div class="impact-card">
                <div class="text-2xl mb-2">🌍</div>
                <div class="text-lg font-bold text-white">2000+ books</div>
                <div class="text-xs text-gray-300">= Regional Impact</div>
              </div>
            </div>
          </div>
  
          <!-- Partners Section -->
          <!-- <div class="flex justify-between py-16 opacity-60 max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4 sm:py-24">
            <img alt="Transistor" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg" class="h-9 max-sm:mx-auto sm:h-8 lg:h-12 hover:opacity-100 transition-opacity duration-300">
            <img alt="Laravel" src="https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg" class="h-9 max-sm:mx-auto sm:h-8 lg:h-12 hover:opacity-100 transition-opacity duration-300">
            <img alt="Tuple" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg" class="h-9 max-sm:mx-auto sm:h-8 lg:h-12 hover:opacity-100 transition-opacity duration-300">
            <img alt="SavvyCal" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg" class="h-9 max-sm:mx-auto sm:h-8 lg:h-12 hover:opacity-100 transition-opacity duration-300">
            <img alt="Statamic" src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg" class="h-9 max-sm:mx-auto sm:h-8 lg:h-12 hover:opacity-100 transition-opacity duration-300">
          </div> -->
        </div>
      </div>
  
      <!-- Donation Modal -->
      <div 
        v-if="showModal" 
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        @click="closeModal"
      >
        <div 
          class="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <div class="p-6">
            <!-- Modal Header -->
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center space-x-3">
                <div class="tier-icon-small" :class="`${selectedTier.toLowerCase()}-icon`">
                  {{ getTierIcon(selectedTier) }}
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900">{{ selectedTier.toUpperCase() }} TIER</h3>
                  <p class="text-sm text-gray-600">{{ getTierDescription(selectedTier) }}</p>
                </div>
              </div>
              <button 
                @click="closeModal"
                class="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>
  
            <!-- Donation Details -->
            <div class="space-y-6">
              <!-- Impact Summary -->
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                <h4 class="font-semibold text-blue-900 mb-2">Your Impact</h4>
                <p class="text-sm text-blue-800">{{ getTierImpact(selectedTier) }}</p>
              </div>
  
              <!-- Account Details -->
              <div class="space-y-4">
                <h4 class="font-semibold text-gray-900">Transfer Account Details</h4>
                
                <!-- Bank Transfer -->
                <div class="bg-gray-50 rounded-lg p-4 space-y-3">
                  <h5 class="font-medium text-gray-800 flex items-center">
                    🏦 Bank Transfer
                  </h5>
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between items-center">
                      <span class="text-gray-600">Account Name:</span>
                      <div class="flex items-center space-x-2">
                        <span class="font-mono bg-white px-2 py-1 rounded border">Makarios Initiative for Health and Humanitarian Development</span>
                        <button 
                          @click="copyToClipboard('Literacy Foundation Nigeria')"
                          class="text-blue-600 hover:text-blue-800 text-xs"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-600">Account Number:</span>
                      <div class="flex items-center space-x-2">
                        <span class="font-mono bg-white px-2 py-1 rounded border">4011401325</span>
                        <button 
                          @click="copyToClipboard('0123456789')"
                          class="text-blue-600 hover:text-blue-800 text-xs"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-600">Bank Name:</span>
                      <div class="flex items-center space-x-2">
                        <span class="font-mono bg-white px-2 py-1 rounded border">Fidelity Bank</span>
                        <button 
                          @click="copyToClipboard('First Bank Nigeria')"
                          class="text-blue-600 hover:text-blue-800 text-xs"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
  
                <!-- Mobile Money -->
                <!-- <div class="bg-green-50 rounded-lg p-4 space-y-3">
                  <h5 class="font-medium text-gray-800 flex items-center">
                    📱 Mobile Money
                  </h5>
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between items-center">
                      <span class="text-gray-600">MTN Mobile Money:</span>
                      <div class="flex items-center space-x-2">
                        <span class="font-mono bg-white px-2 py-1 rounded border">+234 801 234 5678</span>
                        <button 
                          @click="copyToClipboard('+234 801 234 5678')"
                          class="text-green-600 hover:text-green-800 text-xs"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-600">Airtel Money:</span>
                      <div class="flex items-center space-x-2">
                        <span class="font-mono bg-white px-2 py-1 rounded border">+234 802 345 6789</span>
                        <button 
                          @click="copyToClipboard('+234 802 345 6789')"
                          class="text-green-600 hover:text-green-800 text-xs"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                  </div>
                </div> -->
  
                <!-- Crypto (Optional) -->
                <!-- <div class="bg-purple-50 rounded-lg p-4 space-y-3">
                  <h5 class="font-medium text-gray-800 flex items-center">
                    ₿ Cryptocurrency (Optional)
                  </h5>
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between items-center">
                      <span class="text-gray-600">Bitcoin (BTC):</span>
                      <div class="flex items-center space-x-2">
                        <span class="font-mono bg-white px-2 py-1 rounded border text-xs">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</span>
                        <button 
                          @click="copyToClipboard('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa')"
                          class="text-purple-600 hover:text-purple-800 text-xs"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                  </div>
                </div> -->
              </div>
  
              <!-- Instructions -->
              <div class="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <h5 class="font-medium text-yellow-800 mb-2">📝 Next Steps</h5>
                <ol class="text-sm text-yellow-700 space-y-1 list-decimal list-inside">
                  <li>Copy the account details above</li>
                  <li>Make your transfer using your preferred method</li>
                  <li>Send transfer receipt to: kika'sexamination@gmail.com</li>
                  <li>Include your full name and selected tier in the email</li>
                  <li>We'll confirm your donation within 24 hours</li>
                </ol>
              </div>
  
              <!-- Copy Success Message -->
              <div v-if="copySuccess" class="bg-green-100 border border-green-200 rounded-lg p-3">
                <p class="text-green-800 text-sm flex items-center">
                  ✅ Copied to clipboard: {{ copySuccess }}
                </p>
              </div>
  
              <!-- Contact Info -->
              <div class="text-center pt-4 border-t border-gray-200">
                <p class="text-sm text-gray-600 mb-2">Need help?</p>
                <div class="flex justify-center space-x-4 text-sm">
                  <a href="mailto:kika'sexamination@gmail.com" class="text-blue-600 hover:text-blue-800">
                    📧 Email Support
                  </a>
                  <a href="tel:+2348034080064" class="text-green-600 hover:text-green-800">
                    📞 Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  // Reactive state
  const selectedTier = ref<string>('')
  
  // Methods
  const selectTier = (tier: string) => {
    selectedTier.value = tier
    console.log(`Selected tier: ${tier}`)
    // Add your tier selection logic here
  }
  
  const playHoverSound = () => {
    // Optional: Add hover sound effect
    console.log('Hover effect triggered')
  }
  
  // SEO Meta
  useHead({
    title: 'Donor Tiers & Recognition Framework - Transform Lives Through Literacy',
    meta: [
      { name: 'description', content: 'Join our community of educational champions. Choose your impact level and help transform lives through literacy with our comprehensive donor recognition program.' },
      { name: 'keywords', content: 'donor tiers, literacy program, educational impact, book donations, community support' }
    ]
  })

const showModal = ref(false)
// const selectedTier = ref('')
const copySuccess = ref('')

// Methods
const openDonationModal = (tier: string) => {
  selectedTier.value = tier
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  copySuccess.value = ''
}

// const playHoverSound = () => {
//   console.log('Hover effect triggered')
// }

const getTierIcon = (tier: string) => {
  const icons = {
    bronze: '📜',
    silver: '🥈',
    gold: '🥇',
    platinum: '💎',
    diamond: '💎'
  }
  return icons[tier as keyof typeof icons] || '📚'
}

const getTierDescription = (tier: string) => {
  const descriptions = {
    bronze: 'Foundational Support • 1-99 copies',
    silver: 'Classroom Champion • 100-199 copies',
    gold: 'Educational Partner • 200-499 copies',
    platinum: 'Legacy Builder • 500-999 copies',
    diamond: 'Transformational Leader • 1,000+ copies'
  }
  return descriptions[tier as keyof typeof descriptions] || ''
}

const getTierImpact = (tier: string) => {
  const impacts = {
    bronze: 'Your donation will provide books to individual students and create the foundation for literacy growth in underserved communities.',
    silver: 'Your donation will equip an entire classroom with books, directly impacting 30-40 students and their educational journey.',
    gold: 'Your donation will transform multiple classrooms or an entire school section, creating a lasting educational legacy.',
    platinum: 'Your donation will establish dedicated library spaces, impacting hundreds of students and becoming a community landmark.',
    diamond: 'Your donation will create comprehensive learning centers that serve entire communities, transforming literacy for generations.'
  }
  return impacts[tier as keyof typeof impacts] || ''
}

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    copySuccess.value = text
    setTimeout(() => {
      copySuccess.value = ''
    }, 3000)
  } catch (err) {
    console.error('Failed to copy: ', err)
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    copySuccess.value = text
    setTimeout(() => {
      copySuccess.value = ''
    }, 3000)
  }
}
  </script>
  
  <style scoped>
  /* Tier Card Styles */
  .tier-card {
    @apply -m-2 grid grid-cols-1 rounded-3xl shadow-2xl ring-1 ring-black/10 max-lg:mx-auto max-lg:w-full max-lg:max-w-md cursor-pointer transform transition-all duration-500 hover:scale-105;
  }
  
  .tier-card-inner {
    @apply grid grid-cols-1 rounded-3xl p-3 shadow-lg;
  }
  
  .tier-content {
    @apply rounded-2xl bg-white/95 backdrop-blur-sm p-8 shadow-xl ring-1 ring-black/5 relative overflow-hidden;
  }
  
  /* Tier-specific styling */
  .bronze-tier {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #f59e0b 100%);
  }
  
  .silver-tier {
    background: linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 50%, #64748b 100%);
  }
  
  .platinum-tier {
    background: linear-gradient(135deg, #faf5ff 0%, #e9d5ff 50%, #8b5cf6 100%);
  }
  
  /* Featured tier special effects */
  .featured-tier {
    @apply transform scale-105 lg:scale-110 z-10 relative;
  }
  
  .featured-tier::before {
    content: '';
    @apply absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500;
  }
  
  /* Badges */
  .popular-badge, .premium-badge {
    @apply absolute -top-2 -right-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12 animate-pulse;
  }
  
  .tier-icon {
    @apply w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300;
  }
  
  .bronze-icon {
    @apply bg-gradient-to-br from-yellow-300 to-yellow-600;
  }
  
  .silver-icon {
    @apply bg-gradient-to-br from-gray-300 to-gray-600;
  }
  
  .platinum-icon {
    @apply bg-gradient-to-br from-purple-300 to-purple-600;
  }
  
  .tier-badge {
    @apply px-3 py-1 rounded-full text-xs font-semibold shadow-sm;
  }
  
  .bronze-badge {
    @apply bg-amber-100 text-amber-800;
  }
  
  .silver-badge {
    @apply bg-slate-100 text-slate-800;
  }
  
  .platinum-badge {
    @apply bg-purple-100 text-purple-800;
  }
  
  /* Impact statements */
  .impact-statement {
    @apply p-4 rounded-xl text-center font-medium italic;
  }
  
  .bronze-impact {
    @apply bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-800 border border-amber-200;
  }
  
  .silver-impact {
    @apply bg-gradient-to-r from-slate-50 to-gray-50 text-slate-800 border border-slate-200;
  }
  
  .platinum-impact {
    @apply bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-800 border border-purple-200;
  }
  
  /* Thresholds */
  .thresholds-section {
    @apply bg-gray-50 rounded-lg p-3;
  }
  
  .threshold-pill {
    @apply bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium;
  }
  
  .threshold-pill.diamond {
    @apply bg-purple-100 text-purple-800;
  }
  
  /* Benefits */
  .benefits-list {
    @apply space-y-2;
  }
  
  .benefit-item {
    @apply flex items-center space-x-3 text-sm text-gray-700 p-2 rounded-lg transition-colors duration-200 hover:bg-gray-50;
  }
  
  .benefit-item.premium {
    @apply bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-indigo-300;
  }
  
  .benefit-item.gold-exclusive {
    @apply bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-amber-300;
  }
  
  .benefit-item.diamond-exclusive {
    @apply bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-300;
  }
  
  .benefit-icon {
    @apply text-lg;
  }
  
  /* CTA Buttons */
  .tier-cta {
    @apply w-full mt-6 px-4 py-3 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-opacity-50;
  }
  
  .bronze-cta {
    @apply bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 focus:ring-amber-300;
  }
  
  .silver-cta {
    @apply bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-700 hover:to-gray-800 focus:ring-slate-300;
  }
  
  .platinum-cta {
    @apply bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 focus:ring-purple-300;
  }
  
  /* Impact cards */
  .impact-card {
    @apply bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300 border border-white/20;
  }
  
  /* Responsive adjustments */
  @media (max-width: 1024px) {
    .featured-tier {
      @apply scale-100;
    }
  }
  
  /* Custom animations */
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  .tier-card:hover .tier-icon {
    animation: float 2s ease-in-out infinite;
  }
  </style>