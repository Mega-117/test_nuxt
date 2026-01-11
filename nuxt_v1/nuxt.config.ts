export default defineNuxtConfig({
  ssr: false,

  app: {
    baseURL: '/test_nuxt/',
    buildAssetsDir: 'assets'
  },

  nitro: {
    preset: 'static',
    output: {
      publicDir: '../docs'
    }
  }
})
