<template>
  <div>
    <div class="CSSOverlay"></div>
    <v-carousel
      height="80vh"
      :cycle="true"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item v-for="(slide, i) in Slides" :key="i">
        <v-sheet :color="slide" height="100%" tile>
          <v-img
            quality="100"
            format="webp"
            fit="contain"
            height="80vh"
            width="100%"
            alt="Brand Logo"
            :src="'/Assets/WIE/' + slide"
          />
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-sheet color="#F3FBFF" class="pt-8 pb-8">
      <v-container>
        <v-row align="center" no-gutters class="DontBreakWords mt-8">
          <v-col>
            <v-img
              quality="98"
              format="webp"
              fit="contain"
              class="rounded-lg"
              height="350"
              alt="Brand Logo"
              src="https://picsum.photos/510"
            />
          </v-col>
          <v-col class="ml-4 px-10">
            <v-card-title
              class="
                pa-0
                pb-2
                font-weight-bold
                text-right
                float-right
                WIE-title
              "
              >Women In Engineering</v-card-title
            >
            <v-card-title
              class="
                pa-0
                pb-2
                font-weight-regular
                text-right
                float-right
              "
              >Lorem Ipsum</v-card-title
            >
            <v-card-text class="pa-0 pb-2 text-justify text-right float-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    Slides: ["slide1.jpg"],
  }),
};
</script>
  
<style scoped>
.CSSOverlay {
  width: 100vw;
  height: 80vh;
  position: absolute;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(0, 39, 62, 1) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(0, 39, 62, 1) 100%
  );
}

.DontBreakWords {
  word-break: keep-all !important;
  font-size: 45px;
  line-height: 45px;
}

.WIE-title {
  word-break: keep-all !important;
  font-size: 60px;
  line-height: 65px;
  color: #702f8a;
}
</style>
