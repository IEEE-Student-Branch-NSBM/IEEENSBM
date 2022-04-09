<template>
  <div>
    <div class="CSSOverlay"></div>
    <v-carousel
      height="80vh"
      :cycle="true"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus">
      <v-carousel-item v-for="(slide, i) in Slides" :key="i">
        <v-sheet :color="slide" height="100%" tile>

          <v-img
            quality="98"
            format="webp"
            fit="contain"
            height="80vh"
            width="100%"
            alt="Brand Logo"
            :src="'/Assets/HomeSlider/' + slide"/>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-sheet dark width="100%" class="pa-4" color="#00273E">
      <v-row align="center" no-gutters>
        <v-col class="pa-4">
          <v-card-title class="DontBreakWords pa-0 text-h3 font-weight-bold">Welcome To IEEE Student Branch of NSBM
          </v-card-title>
          <v-card-text class="pa-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </v-card-text>
          <v-btn color="primary">
            <v-icon class="mr-1">mdi-motion-play-outline</v-icon>
            Watch Video
          </v-btn>
        </v-col>
        <v-col>
          <v-row no-gutters justify="center">
            <nuxt-img
              quality="98"
              format="webp"
              fit="contain"
              height="200"
              alt="Brand Logo"
              src="/Assets/Logos/SB_Logo_V2.png"/>
          </v-row>
        </v-col>
      </v-row>
    </v-sheet>

    <v-container>

      <v-row align="center" no-gutters class="DontBreakWords mt-8">
        <v-col class="mr-4">
          <v-card-title class="pa-0 text-h5 font-weight-bold">Mission</v-card-title>
          <v-card-text class="pa-0 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </v-card-text>

          <v-card-title class="pa-0 text-h5 font-weight-bold">Vision</v-card-title>
          <v-card-text class="pa-0 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </v-card-text>
        </v-col>
        <v-col>
          <v-img
            quality="98"
            format="webp"
            fit="contain"
            class="rounded-lg"
            height="350"
            alt="Brand Logo"
            src="https://picsum.photos/510"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>


export default {
  data: () => ({
    Slides: [
      'slide_1.jpg',
      'slide_2.jpg',
      'slide_3.jpg',
      'slide_4.jpg',
      'slide_5.jpg',
      'slide_6.jpg',
    ],
  }),
  mounted() {

  }
}
</script>

<style scoped>
.DontBreakWords {
  word-break: keep-all !important;
}

.CSSOverlay{
  width: 100vw;
  height: 80vh;
  position: absolute;
  z-index: 1;
  background: rgb(0,39,62);
  background: linear-gradient(180deg, rgba(0,39,62,1) 0%, rgba(255,255,255,0) 50%, rgba(0,39,62,1) 100%);
}
</style>
