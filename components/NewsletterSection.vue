<template>
    <section class="bg-primary-50 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4 text-primary-800">Stay Updated</h2>
          <p class="text-gray-600 mb-8">Subscribe to our newsletter to receive updates on our initiatives and how you can help.</p>
          
          <form @submit.prevent="subscribe" class="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              v-model="email" 
              placeholder="Your email address" 
              class="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <button type="submit" class="btn btn-primary whitespace-nowrap">
              <span v-if="!isSubmitting">Subscribe</span>
              <span v-else class="flex items-center">
                <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            </button>
          </form>
          
          <div v-if="message" class="mt-4" :class="{'text-green-600': success, 'text-red-600': !success}">
            {{ message }}
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const email = ref('');
  const isSubmitting = ref(false);
  const message = ref('');
  const success = ref(false);
  
  const subscribe = async () => {
    isSubmitting.value = true;
    message.value = '';
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Success simulation
    success.value = true;
    message.value = 'Thank you for subscribing! You will receive our updates soon.';
    email.value = '';
    isSubmitting.value = false;
    
    // Reset message after 5 seconds
    setTimeout(() => {
      message.value = '';
    }, 5000);
  };
  </script>
  