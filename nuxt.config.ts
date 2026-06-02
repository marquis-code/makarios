// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    port: 3002
  },
  modules: ['@nuxtjs/tailwindcss', 'lucide-nuxt', '@vueuse/nuxt', '@nuxt/icon', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'pt', language: 'pt-PT', name: 'Português', file: 'pt.json' }
    ],
    langDir: 'locales/',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },
  build: {
    transpile: ['lucide-vue-next']
  },
  css: ['~/assets/font/stylesheet.css', '~/assets/css/main.css'],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  tailwindcss: {
    viewer: true,
  },
  app: {
    head: {
      title: 'Society for Cellular Pathology Scientists of Nigeria (SCPSN)',
      meta: [
        { name: 'description', content: 'Official website of the Society for Cellular Pathology Scientists of Nigeria. Professional development, conferences, and research in pathology.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'axios',
        'socket.io-client'
      ]
    }
  }
})
