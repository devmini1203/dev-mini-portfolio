// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
  css: ['@/assets/scss/reset_element_ui_style.scss'],
  ssr: false,
  app: {
    baseURL: '/dev_mini_portfolio',
    head: {
      title: 'JM Portfolio',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, user-scalable=no'
        },
        {
          name: 'google',
          content: 'notranslate'
        },
        {
          charset: 'utf-8'
        }
      ]
    }
  }
});
