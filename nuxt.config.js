export default {
  head: {
    title: 'nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'NUXT Application' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0'
  },

  env: {
    baseURL: process.env.BASE_URL,
    SOME_AUTH_KEY: process.env.SOME_AUTH_KEY || ''
  },

  css: [
    '~/assets/scss/styles.scss'
  ],

  plugins: [
    // { src: '~/plugins/vModal.js', mode: 'client' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/pwa', { workbox: false }]
    // ['@nuxtjs/google-analytics', { ua: 'X1234567' }]
  ],

  axios: {},

  build: {
    extend (config, ctx) {
      // if (ctx.isDev && ctx.isClient) {
      //   //
      // }
      // config.devtool = "#eval-source-map";
    }
  }
}
