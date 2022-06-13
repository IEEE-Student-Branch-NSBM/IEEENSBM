<template>
  <div>
    <v-sheet class="pb-8">
      <v-container>
        <v-row align="center" no-gutters class="DontBreakWords mt-8">
          <v-col class="order-last order-md-first">
            <v-img
              quality="98"
              format="webp"
              fit="contain"
              class="rounded-lg"
              height="350"
              alt="Brand Logo"
              :src="'/Assets/Aboutus/aboutIEEE.png'"
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
                IEEE-title
              "
              >About IEEE</v-card-title
            >
            <v-card-text class="pa-0 pb-2 right text-right float-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container>
        <v-row no-gutters justify="center">
          <span class="text-h3 font-weight-bold mt-4">
            About <span style="color: #00629b">IEEE NSBM</span> Student Branch
          </span>
        </v-row>
        <v-row>
          <div class="my-3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </div>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet class="mb-10 mt-10">
      <v-row>
        <v-col v-for="n in 3" :key="n" class="d-flex child-flex" cols="4">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-sheet>
    <v-sheet class="pt-8 pb-8">
      <v-container>
        <v-row align="center" no-gutters class="DontBreakWords mt-8">
          <v-col class="px-10 firstCard">
            <span class="pa-0 text-h2 font-weight-bold"
              >Our <span style="color: #00629b"> Vision</span>
            </span>
            <v-card-text class="pa-0 pb-2 mt-4 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
              src="https://picsum.photos/510"
            />
          </v-col>
        </v-row>
        <v-row align="center" no-gutters class="DontBreakWords mt-8">
          <v-col class="order-last order-md-first">
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
            <span class="pa-0 text-h2 font-weight-bold"
              >Our <span style="color: #00629b">Mission</span>
            </span>
            <v-card-text class="pa-0 pb-2 text-justify mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container>
        <v-row no-gutters justify="center mt-4">
          <span class="text-h3 font-weight-bold">
            Student Branch Chapters
          </span>
        </v-row>
      </v-container>
    </v-sheet>
    <JoinUs />
  </div>
</template>

<script>
import JoinUs from "../components/JoinUs.vue";
export default {
  name: "aboutus",
  components: { JoinUs }
};
</script>

<style scoped>
.DontBreakWords {
  word-break: keep-all !important;
  font-size: 45px;
  line-height: 45px;
}

.IEEE-title {
  word-break: keep-all !important;
  font-size: 64px;
  line-height: 65px;
  color: #00629b;
}
</style>
