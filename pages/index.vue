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

    <v-sheet color="#F3FBFF">
        <v-container>
          <v-row align="center" no-gutters class="DontBreakWords mt-8">
            <v-col class="mr-4">
              <v-card-title class="pa-0 pb-2 text-h4 font-weight-bold">Lorem Ipsum</v-card-title>
              <v-card-title class="pa-0 pb-2 text-h5 font-weight-regular">Lorem Ipsum</v-card-title>
              <v-card-text class="pa-0 pb-2 text-justify">
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
          <v-row align="center" no-gutters class="DontBreakWords mt-8">
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
            <v-col class="ml-4">
              <v-card-title class="pa-0 pb-2 text-h4 font-weight-bold">Lorem Ipsum</v-card-title>
              <v-card-title class="pa-0 pb-2 text-h5 font-weight-regular">Lorem Ipsum</v-card-title>
              <v-card-text class="pa-0 pb-2 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </v-card-text>
            </v-col>

          </v-row>
        </v-container>
      </v-sheet>

    <v-container>
      <v-row no-gutters justify="center">
        <span class="text-h4 font-weight-bold mb-8 mt-8">
        Latest Events
      </span>
      </v-row>
      <v-slide-group show-arrows>
        <template v-slot:next>
          <v-btn x-large icon>
            <v-icon size="64">mdi-chevron-right</v-icon>
          </v-btn>
        </template>

        <template v-slot:prev>
          <v-btn x-large icon>
            <v-icon size="64">mdi-chevron-left</v-icon>
          </v-btn>
        </template>
        <v-slide-item
          v-for="(event,i) in Events"
          :key="i">
          <EventCard :event="event"/>
        </v-slide-item>
      </v-slide-group>
    </v-container>

  </div>
</template>

<script>
import { PrevEvents } from "@/content/events/events";

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
    Events:[]
  }),
  mounted() {
    this.Events = PrevEvents;
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
