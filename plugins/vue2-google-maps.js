import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'API_KEY',
    libraries: 'places',
  },
  installComponents: true
})