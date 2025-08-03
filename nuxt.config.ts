import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@primevue/nuxt-module',
    '@vueuse/nuxt',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    providers: {
      google: false,
      googleicons: false,
    },
    families: [
      {
        name: 'Satoshi',
        weights: [400, 500, 600, 700],
        provider: 'fontshare',
      },
      {
        name: 'JetBrains Mono',
        provider: 'bunny',
      },
    ],
    experimental: {
      processCSSVariables: true,
    },
  },
  primevue: {
    options: {
      unstyled: true,
    },
    components: {
      exclude: ['Form', 'FormField', 'Editor', 'Chart'],
    },
  },
})
