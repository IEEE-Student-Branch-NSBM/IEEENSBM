import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  head.meta.push({
    name:'title',
    content:'IEEE NSBM Student Branch'
  });
  head.meta.push({
    name:'description',
    content:'The Official Website of Institute of Electrical and Electronics Engineers Student Branch of National School of Business Management.'
  });
  head.meta.push({
    name:'keywords',
    content:'ieee, nsbm, ieee-student-branch, student-branch, wie, wie-nsbm, ieee-wie'
  });
  head.meta.push({
    name:'robots',
    content:'index, follow'
  });
  head.meta.push({
    name:'language',
    content:'English'
  });

  head.script.push({
    src: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js',
    async:''
  });

  head.script.push({
    src: './Onesignal.js'
  });

const opts = {} //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify);

  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
