export default defineNuxtConfig({
  ssr: false,

  app: {
    baseURL: '/test_nuxt/docs/',
    buildAssetsDir: 'assets'
  },

  nitro: {
    preset: 'static',
    output: {
      publicDir: '../docs'
    }
  }
})
