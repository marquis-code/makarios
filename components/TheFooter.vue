<template>
    <footer class="bg-gray-900 text-white">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <img src="@/assets/img/logo.png" alt="MAKARIOS Initiative Logo" class="h-10" />
              <div>
                <h3 class="text-xl font-bold">MAKARIOS</h3>
                <p class="text-xs text-gray-400">Initiative</p>
              </div>
            </div>
            <p class="text-gray-400 mb-4">
              An operational NGO made up of passionate professionals carrying out health and humanitarian projects since 2017.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <Icon name="mdi:facebook" class="w-6 h-6" />
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <Icon name="mdi:twitter" class="w-6 h-6" />
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <Icon name="mdi:instagram" class="w-6 h-6" />
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <Icon name="mdi:linkedin" class="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li v-for="item in navItems" :key="item.path">
                <NuxtLink :to="item.path" class="text-gray-400 hover:text-white transition-colors">
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-bold mb-4">Our Initiatives</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/initiatives/makarios" class="text-gray-400 hover:text-white transition-colors">
                  Makarios Initiative
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/initiatives/safe-passage" class="text-gray-400 hover:text-white transition-colors">
                  Safe Passage Initiative
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/initiatives/schools-connect" class="text-gray-400 hover:text-white transition-colors">
                  Makarios Schools Connect
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/initiatives/kikas-examination" class="text-gray-400 hover:text-white transition-colors">
                  Kika's Examination
                </NuxtLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-bold mb-4">Contact Us</h3>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-start space-x-2">
                <Icon name="heroicons:map-pin" class="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Nigeria</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon name="heroicons:phone" class="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>08034080064, 08080232073</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon name="heroicons:envelope" class="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Kika'sexamination@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {{ new Date().getFullYear() }} MAKARIOS Initiative for Health and Humanitarian Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Donate', path: '/donate' },
  ];
  </script>
  