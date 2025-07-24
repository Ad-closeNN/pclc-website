// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxt/ui',
    '@compodium/nuxt',
    'nuxt-umami',
  ],

  umami: {
  id: '197f9272-428b-435d-b011-1e0ce17582e7',
  host: 'https://testpclcweb.19991230.xyz',
  autoTrack: true,
  },

  content: {
    experimental: {
      nativeSqlite: true
    }
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/fish.png' }
      ],
      titleTemplate: '%s - PCL Community'
    }
  },

  fonts: {
    provider: 'local'
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'static',
  }
})