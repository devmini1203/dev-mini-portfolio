// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@element-plus/nuxt', '@nuxt/image', 'dayjs-nuxt', '@pinia/nuxt'],
  ssr: false,
  app: {
    baseURL: '/dev_mini_portfolio/',
    head: {
      title: 'JM Portfolio',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/dev_mini_portfolio/favicon.ico' }],
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
