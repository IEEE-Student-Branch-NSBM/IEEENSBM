export default {
  target: 'static',

  head: {
    titleTemplate: 'IEEE NSBM Student Branch',
    title: 'IEEE NSBM Student Branch',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Official Website of IEEE NSBM Student Branch' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxt/image',
    '@nuxtjs/pwa',
    '@nuxtjs/web-vitals'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://ieeensbm.org',
    gzip: true
  },

  webVitals: {
    debug: false,
    disabled: false
  },


  axios: {},


  content: {},

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    font: {
      family: 'Poppins'
    },
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#00629B'
        },
        light: {
          primary: '#00629B'
        }
      }
    }
  },
  loading: {
    color: 'white',
    height: '5px'
  },


  generate: {
    dir: 'docs'
  },

  build: {
    analyze: false,
    vendor: ["vue2-google-maps"],
    transpile: [/^vue2-google-maps($|\/)/]
  },
}
