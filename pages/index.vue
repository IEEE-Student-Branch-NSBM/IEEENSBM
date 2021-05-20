<template>
  <div>
    <v-card class="rounded-t-0" color="white">
      <v-row align="baseline" justify="center" no-gutters>
        <v-col class="hidden-sm-and-down" cols="auto">
          <v-card class="rounded-circle" rounded width="128" height="128">
            <v-img alt="IEEE CS Logo" class="rounded-circle" quality="100" height="128" width="128" blur="0" src="/Assets/Logos/CS_Logo.png"></v-img>
          </v-card>
        </v-col>

        <v-card height="256" width="256" class="ma-4">
          <v-img alt="NSBM IEEE Student Logo" height="256" width="256" blur="0" src="/Assets/Logos/SB_Logo.png"></v-img>
        </v-card>

        <v-col class="hidden-sm-and-down" cols="auto">
          <v-card  class="rounded-circle"  width="128" height="128">
            <v-img alt="WIE Logo" class="rounded-circle" quality="100" height="128" max-width="128" blur="0" src="/Assets/Logos/WIE_Logo.png"></v-img>
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
  }
}
</script>
