<template>
  <div>
    <!--v-card class="rounded-0 hidden-sm-and-down" height="72vh">
      <div class="BlurMa">
        <v-container>

          <v-row justify="space-between" no-gutters>
            <h1 class="white--text">Latest...</h1>

            <v-btn rounded to="/blog">More <v-icon>mdi-chevron-right-circle</v-icon></v-btn>
          </v-row>
          <v-row justify="start" no-gutters>
            <v-card ripple v-for="(blog,i) in Articles" :key="i" class="floatOnHover ma-2" width="256">

              <nuxt-img
                quality="96"
                format="png"
                fit="contain"
                class="ImgFilter"
                width="256"
                :src="blog.image">
              </nuxt-img>
              <v-card-title style="word-break: normal !important;">
                <span>{{ blog.title }}</span>
              </v-card-title>
              <v-card-subtitle>
                by {{ blog.author }} - {{ blog.date }}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn outlined block>
                  Read More <v-icon>mdi-chevron-right-circle</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-row>

          <v-row justify="center" no-gutters>
            <v-btn rounded><v-icon>mdi-chevron-down-circle</v-icon></v-btn>
          </v-row>
        </v-container>
      </div>
      <nuxt-img
        quality="96"
        format="png"
        fit="cover"
        style="height: 72vh;width: 100%;"
        src="/Assets/Other/NSBM_1.jpg">
      </nuxt-img>
    </v-card-->
    <v-card class="rounded-t-0" color="white">
      <v-row align="baseline" justify="center" no-gutters>
        <v-col class="hidden-sm-and-down" cols="auto">
          <v-card class="rounded-circle" rounded width="128" height="128">
            <nuxt-img
              quality="96"
              format="webp"
              alt="IEEE CS Logo" class="rounded-circle" height="128" width="128"  src="/Assets/Logos/CS_Logo.png"></nuxt-img>
          </v-card>
        </v-col>

        <v-card height="256" width="256" class="ma-4">
          <nuxt-img
            quality="96"
            format="webp"
            fit="contain"
            alt="NSBM IEEE Student Logo" height="256" width="256"
            src="/Assets/Logos/SB_Logo.png"></nuxt-img>
        </v-card>

        <v-col class="hidden-sm-and-down" cols="auto">
          <v-card  class="rounded-circle"  width="128" height="128">
            <nuxt-img
              quality="96"
              format="webp"
              fit="contain"
              alt="WIE Logo" class="rounded-circle" height="128" max-width="128"  src="/Assets/Logos/WIE_Logo.png"></nuxt-img>
          </v-card>
        </v-col>

      </v-row>

      <v-row justify="center" no-gutters>
        <h1 class="IEEEFont text-center">Welcome to IEEE NSBM Student Branch!</h1>
      </v-row>

      <v-container>

        <v-col>
          <v-row justify="center" no-gutters>
            <h1 class="IEEEFont">What is IEEE?</h1>
          </v-row>
          <p class="text-justify">
            IEEE is the world’s largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE’s highly cited publications, conferences, technology standards, and professional and educational activities.
            IEEE, pronounced “Eye-triple-E,” stands for the Institute of Electrical and Electronics Engineers. The association is chartered under this name and it is the full legal name. To learn more about the association’s name, for more information please read the <a rel="noreferrer" href="https://www.ieee.org/about/ieee-history.html" target="_blank">History of IEEE</a>.
          </p>

          <v-col>
            <v-col>
              <v-row justify="center" no-gutters>
                <h1 class="IEEEFont">Mission</h1>
              </v-row>
              <p class="text-center">
                IEEE’s core purpose is to foster technological innovation and excellence for the benefit of humanity.
              </p>
            </v-col>
            <v-col>
              <v-row justify="center" no-gutters>
                <h1 class="IEEEFont">Vision</h1>
              </v-row>
              <p class="text-center">
                IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.
              </p>
            </v-col>
          </v-col>
        </v-col>

      </v-container>

    </v-card>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },

  data(){
    return{
      Articles:[]
    }
  },

  mounted() {
    this.$content('articles').limit(10).fetch().then(data=>{
      console.log(data);
      this.Articles = data;
    });
  }
}
</script>

<style scoped>
.floatOnHover{
  cursor: pointer;
  position: relative;
  top: 0;
  transition: top ease 0.5s;
}

.floatOnHover:hover{
  top: -8px;
}
.BlurMa {
  height: 72vh;
  position: absolute;
  backdrop-filter: blur(16px);
  z-index: 1;
  width: 100% !important;
}
</style>
