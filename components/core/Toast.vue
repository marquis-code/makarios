<template>
  <transition name="fade">
    <div
      class="z-[9999999]"
      v-if="toastVisible"
      :class="[
        'fixed top-4 right-4 rounded-lg shadow-lg flex items-center p-4 max-w-sm w-full',
        toastData.toastType === 'error' ? 'bg-red-50 border-l-4 border-red-400' :
        toastData.toastType === 'warning' ? 'bg-yellow-50 border-l-4 border-yellow-400' :
        toastData.toastType === 'info' ? 'bg-blue-50 border-l-4 border-blue-400' :
        'bg-green-50 border-l-4 border-green-400'
      ]"
    >
      <div :class="[
        toastData.toastType === 'error' ? 'bg-red-100 text-red-500' : 
        toastData.toastType === 'warning' ? 'bg-yellow-100 text-yellow-500' :
        toastData.toastType === 'info' ? 'bg-blue-100 text-blue-500' :
        'bg-green-100 text-green-500', 
        'rounded-full p-2'
      ]">
        <!-- error icon -->
        <svg v-if="toastData.toastType === 'error'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <!-- warning icon -->
        <svg v-else-if="toastData.toastType === 'warning'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <!-- info icon -->
        <svg v-else-if="toastData.toastType === 'info'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <!-- success icon -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div class="ml-4">
        <p class="font-semibold text-gray-800">{{ toastData.title }}</p>
        <p class="text-sm text-gray-600">{{ toastData.message }}</p>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useState } from '#app'

const toastVisible = useState('toast-visible', () => false)
const toastData = useState('toast-data', () => ({
  title: '',
  message: '',
  toastType: 'success'
}))
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
