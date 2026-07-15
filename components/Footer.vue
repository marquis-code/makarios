<template>
  <div class="relative bg-black overflow-hidden font-sans border-t border-zinc-900 text-white">
    <!-- Abstract Glows -->
    <div class="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-dark/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary-dark/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
      
      <!-- Left: Brand & Contact -->
      <div class="w-full lg:w-5/12 flex flex-col justify-between">
        <div>
          <h2 class="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6">
            MAKARIOS <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">Initiative</span>
          </h2>
          <p class="text-lg text-slate-400 font-medium max-w-md mb-12 leading-relaxed">
            Improving Lives Through Health & Humanitarian Projects. Reach out to collaborate, donate, or support our mission.
          </p>

          <div class="space-y-8">
            <!-- Email -->
            <div class="group flex items-start gap-5">
              <div class="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-primary-400 border border-slate-800 group-hover:border-primary-500/30 group-hover:bg-primary-dark/30 transition-all duration-300 shrink-0">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div class="pt-1">
                <h3 class="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Email Us</h3>
                <a href="mailto:kika'sexamination@gmail.com" class="text-lg font-bold text-slate-200 hover:text-primary-400 transition-colors">kika'sexamination@gmail.com</a>
              </div>
            </div>

            <!-- Phone -->
            <div class="group flex items-start gap-5">
              <div class="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-primary-400 border border-slate-800 group-hover:border-primary-500/30 group-hover:bg-primary-dark/30 transition-all duration-300 shrink-0">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <div class="pt-1">
                <h3 class="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Call Us</h3>
                <div class="flex flex-col gap-1">
                  <a href="tel:+2348034080064" class="text-lg font-bold text-slate-200 hover:text-primary-400 transition-colors">+234 803 408 0064</a>
                  <a href="tel:+2348036671464" class="text-lg font-bold text-slate-200 hover:text-primary-400 transition-colors">+234 803 667 1464</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Links & Copyright -->
        <div class="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-4">
            <a href="#" class="w-10 h-10 rounded-full bg-zinc-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-500 hover:bg-primary-dark transition-all duration-300">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-zinc-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-500 hover:bg-primary-dark transition-all duration-300">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            </a>
          </div>
          <p class="text-slate-500 text-sm font-medium">© {{ new Date().getFullYear() }} Makarios Initiative</p>
        </div>
      </div>
      
      <!-- Right: Form -->
      <div class="w-full lg:w-7/12">
        <div class="bg-zinc-900/40 backdrop-blur-2xl border border-slate-800 rounded-[2.5rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
          <div class="absolute -top-32 -right-32 w-64 h-64 bg-primary-500/5 rounded-full blur-[80px] group-hover:bg-primary-500/10 transition-colors duration-700 pointer-events-none"></div>
          
          <h3 class="text-2xl lg:text-3xl font-black text-white mb-2">Send us a message</h3>
          <p class="text-slate-400 font-medium mb-8">We'll get back to you directly via WhatsApp.</p>
          
          <form @submit.prevent="sendMessage" class="space-y-5 relative z-10">
            <div class="grid md:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">First name</label>
                <input
                  v-model="formData.firstName"
                  type="text"
                  class="w-full px-5 py-4 text-sm bg-black/50 border border-slate-800 text-white rounded-xl focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder:text-slate-600 font-medium"
                  placeholder="First name"
                  required
                >
              </div>
              <div>
                <label class="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Last name</label>
                <input
                  v-model="formData.lastName"
                  type="text"
                  class="w-full px-5 py-4 text-sm bg-black/50 border border-slate-800 text-white rounded-xl focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder:text-slate-600 font-medium"
                  placeholder="Last name"
                  required
                >
              </div>
            </div>
    
            <div>
              <label class="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Email</label>
              <input
                v-model="formData.email"
                type="email"
                class="w-full px-5 py-4 text-sm bg-black/50 border border-slate-800 text-white rounded-xl focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder:text-slate-600 font-medium"
                placeholder="you@company.com"
                required
              >
            </div>

            <div>
              <label class="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Phone number</label>
              <div class="flex rounded-xl overflow-hidden border border-slate-800 focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 transition-all bg-black/50">
                <div class="relative w-32 border-r border-slate-800">
                  <select
                    v-model="selectedCountry"
                    class="w-full px-4 py-4 text-sm bg-transparent text-white outline-none appearance-none cursor-pointer font-medium"
                    required
                  >
                    <option v-for="country in sortedCountries" 
                            :key="country.code" 
                            :value="country"
                            class="py-2 bg-zinc-900 text-white"
                    >
                      {{ country.flag }} {{ country.dialCode }}
                    </option>
                  </select>
                  <div class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                <input
                  v-model="phoneInput"
                  type="tel"
                  @input="validatePhoneNumber"
                  class="flex-1 px-5 py-4 text-sm bg-transparent text-white outline-none placeholder:text-slate-600 font-medium"
                  :placeholder="selectedCountry.example"
                  required
                >
              </div>
              <span v-if="phoneError" class="text-amber-400 text-xs mt-2 block font-medium">{{ phoneError }}</span>
            </div>
    
            <div>
              <label class="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Message</label>
              <textarea
                v-model="formData.message"
                rows="4"
                class="w-full px-5 py-4 text-sm bg-black/50 border border-slate-800 text-white resize-none rounded-xl focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder:text-slate-600 font-medium"
                placeholder="Enter your message here..."
                required
              ></textarea>
            </div>
    
            <div class="flex items-start gap-3 py-2">
              <input
                v-model="form.privacyPolicy"
                type="checkbox"
                class="w-5 h-5 mt-0.5 bg-black border border-slate-700 rounded text-primary-500 focus:ring-primary-500 focus:ring-offset-zinc-900"
                required
              >
              <label class="text-sm text-slate-400 font-medium leading-tight">
                I agree to the <NuxtLink class="text-primary-400 hover:text-primary-300 underline underline-offset-2 transition-colors z-50" to="/privacy-policy">privacy policy</NuxtLink>.
              </label>
            </div>
    
            <button
              type="submit" 
              :disabled="!isFormValid || loading"
              class="w-full mt-4 bg-primary-500 hover:bg-primary-400 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-zinc-900 font-black py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 flex justify-center items-center gap-2"
            >
              <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              <span>{{ loading ? 'Processing...' : 'Send via WhatsApp' }}</span>
              <svg v-if="!loading" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click="showModal = false">
      <div class="bg-zinc-900 border border-slate-800 rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl transform transition-all" @click.stop>
        <div class="text-center flex flex-col items-center">
          <div class="flex items-center justify-center h-16 w-16 rounded-full bg-primary-500/10 mb-6 text-primary-400">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-black text-white mb-3">Message Sent!</h3>
          <p class="text-sm text-slate-400 font-medium mb-8 leading-relaxed">
            Your message has been redirected to WhatsApp. Please complete sending it through the app.
          </p>
          <button
            @click="showModal = false"
            class="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-4 rounded-xl transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCustomToast } from '@/composables/core/useCustomToast'
import { countries } from '@/data/countries';
import type { ICountry } from '@/data/countries';
import { computed, ref, watch } from 'vue';

const { showToast } = useCustomToast()

// WhatsApp phone numbers
const whatsappNumbers = [
  '+2348036671464',
  '+2348034080064'
];

const sortedCountries = computed(() => {
  return [...countries].sort((a, b) => {
    if (a.code === 'US') return -1;
    if (b.code === 'US') return 1;
    return a.name.localeCompare(b.name);
  });
});

const form = ref({
  privacyPolicy: false
});

const phoneError = ref('');
const phoneInput = ref('');
const selectedCountry = ref(countries.find(c => c.code === 'NG') || countries[0]);

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  message: ''
});

const loading = ref(false);
const showModal = ref(false);

// Format phone number as user types based on country pattern
const formatPhoneNumber = (value: string, country: ICountry) => {
  // Remove all non-digit characters
  const numbers = value.replace(/\D/g, '');
  
  // Format based on country
  let formatted = numbers;
  switch(country.code) {
    case 'NG':
      // Nigeria: XXX XXX XXXX
      if (numbers.length <= 10) {
        formatted = numbers.replace(/(\d{3})(\d{3})?(\d{4})?/, function(_, p1, p2, p3) {
          let output = p1;
          if (p2) output += ' ' + p2;
          if (p3) output += ' ' + p3;
          return output;
        });
      }
      break;
    case 'US':
    case 'CA':
      // North America: (XXX) XXX-XXXX
      if (numbers.length <= 10) {
        formatted = numbers.replace(/(\d{3})(\d{3})?(\d{4})?/, function(_, p1, p2, p3) {
          let output = '(' + p1 + ')';
          if (p2) output += ' ' + p2;
          if (p3) output += '-' + p3;
          return output;
        });
      }
      break;
    default:
      // Default format: XXX XXX XXXX
      if (numbers.length <= 10) {
        formatted = numbers.replace(/(\d{3})(\d{3})?(\d{4})?/, function(_, p1, p2, p3) {
          let output = p1;
          if (p2) output += ' ' + p2;
          if (p3) output += ' ' + p3;
          return output;
        });
      }
  }
  return formatted;
};

// Watch for changes in phone input to format number
watch([phoneInput, selectedCountry], ([newPhone, newICountry]) => {
  if (phoneInput.value !== formatPhoneNumber(newPhone, newICountry)) {
    phoneInput.value = formatPhoneNumber(newPhone, newICountry);
  }
});

const validatePhoneNumber = () => {
  const pattern = selectedCountry.value.pattern;
  if (!pattern.test(phoneInput.value)) {
    phoneError.value = `Please enter a valid phone number in the format: ${selectedCountry.value.example}`;
    return false;
  }
  phoneError.value = '';
  return true;
};

const isFormValid = computed(() => {
  return !!(
    formData.value.firstName &&
    formData.value.lastName &&
    formData.value.email &&
    phoneInput.value &&
    formData.value.message &&
    form.value.privacyPolicy &&
    !phoneError.value
  );
});

const formatPhoneForSubmission = () => {
  // Remove any formatting and combine country code with phone number
  const cleanPhone = phoneInput.value.replace(/\D/g, '');
  return `${selectedCountry.value.dialCode}${cleanPhone}`;
};

const capitalizeFirstLetter = (string: string) => {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Send message function - now redirects to WhatsApp
const sendMessage = async () => {
  if (!isFormValid.value) return;
  
  // Set loading state to true
  loading.value = true;

  try {
    // Format the message for WhatsApp
    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${capitalizeFirstLetter(formData.value.firstName)} ${capitalizeFirstLetter(formData.value.lastName)}
*Email:* ${formData.value.email}
*Phone:* ${formatPhoneForSubmission()}
*Message:* ${formData.value.message}

---
Sent from MAKARIOS Initiative website
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Use the first WhatsApp number (you can modify this logic to alternate or let user choose)
    const selectedWhatsAppNumber = whatsappNumbers[0];
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${selectedWhatsAppNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank');
    
    // Show success toast with animation
    showToast({
      title: "Success!",
      message: 'Redirecting to WhatsApp...',
      toastType: "success",
      duration: 4000,
    });
    
    // Show success modal
    showModal.value = true;
    
    // Reset form after success
    formData.value = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: ''
    };
    phoneInput.value = '';
    form.value.privacyPolicy = false;
    
  } catch (error) {
    console.error('Error opening WhatsApp:', error);
    showToast({
      title: "Error",
      message: 'Unable to open WhatsApp. Please try again.',
      toastType: "error",
      duration: 3000,
    });
  } finally {
    // Set loading state to false
    loading.value = false;
  }
};
</script>
