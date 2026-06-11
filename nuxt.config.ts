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
      title: "Makarios Initiative - Improving Lives Through Health and Humanitarian Projects",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "description",
          content: "MAKARIOS Initiative is dedicated to improving health outcomes and empowering communities through sustainable development programs.",
        },
        { name: "author", content: "Makarios Initiative" },

        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://makariosinitiative.org" },
        { property: "og:title", content: "Makarios Initiative - Improving Lives Through Health and Humanitarian Projects" },
        {
          property: "og:description",
          content: "Breaking barriers and creating opportunities through innovative educational programs and resources that transform communities.",
        },
        { property: "og:image", content: "https://makariosinitiative.org/icon.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },

        // Twitter
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://makariosinitiative.org/" },
        { property: "twitter:title", content: "Makarios Initiative - Improving Lives Through Health and Humanitarian Projects" },
        {
          property: "twitter:description",
          content: "Product development agency specializing in UI/UX design and software development for startups.",
        },
        { property: "twitter:image", content: "https://makariosinitiative.org/icon.png" },
      ],
      link: [
        { rel: "canonical", href: "https://makariosinitiative.org/" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lexend+Tera:wght@100..900&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap",
        },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
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
  },
  nitro: {
    prerender: {
      routes: ['/', '/404.html'],
      ignore: ['/dynamic-routes', '/api'],
      failOnError: false
    }
  },
})
