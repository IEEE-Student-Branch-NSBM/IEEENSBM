<template>
  <div>
    <v-container class="mt-4">
      <v-row justify="center" no-gutters>
        <v-card-title
          class="heading-event text-center md:text-left hidden-sm-and-down"
        >
          Executive Committee</v-card-title
        >
        <v-card-title
          class="heading-event text-center md:text-left hidden-md-and-up"
        >
          Executive <br />
          Committee</v-card-title
        >
        <v-card-title class="heading-sub text-center">2021/22</v-card-title>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-card-text class="para-event mx-sm-16 mx-0">
          The Executive Committee of the IEEE NSBM Student Branch consists of
          the Chair, the Vice Chair, the Secretary, Founders, and fellow
          representatives from the Board. The purpose of the Executive Committee
          is to manage the daily operations of the community. They are
          authorized to establish and upgrade the rules, procedures,
          restrictions, resolutions, and requirements of the Board, as well as
          the IEEE NSBM Student Branch.
        </v-card-text>
      </v-row>
      <v-layout justify-center align-center>
        <img
          v-bind:src="'/Assets/Excom/Frame.png'"
          width="100%"
          alt="Excom image"
          class="py-10"
        />
      </v-layout>
      <v-sheet width="100%">
        <v-container>
          <v-row no-gutters justify="center">
            <span class="text-h4 text-center font-weight-bold mt-6 mb-10">
              Executive Committee 2020/21
            </span>
          </v-row>
          <v-row justify="center" no-gutters class="DontBreakWords mt-8">
            <v-card
              class="mb-5 mx-3"
              width="200"
              flat
              color="transparent"
              v-for="(excom_2021, i) in exComs"
              :key="i"
            >
              <v-row no-gutters justify="center">
                <v-avatar size="128">
                  <nuxt-img
                    quality="100"
                    format="webp"
                    fit="contain"
                    :src="excom_2021.image_path"
                  />
                </v-avatar>
              </v-row>
              <v-card-title class="excom_2021_name text-center">
                <v-row no-gutters justify="center">
                  {{ excom_2021.name }}
                </v-row>
              </v-card-title>
              <v-card-text class="excom_2021_position text-center">
                {{ excom_2021.position }}
              </v-card-text>
            </v-card>
          </v-row>
        </v-container>
      </v-sheet>
    </v-container>
    <JoinUs />
  </div>
</template>

<script>
import { excom_sb_2021 } from "~/content/excom/2021/SB";

export default {
  name: "excom",
  data: () => ({
    exComs: excom_sb_2021,
  }),
};
</script>

<style scoped>
.excom_2021_name {
  font-size: 18px;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  font-weight: bold;
  margin-top: -5px;
  margin-right: -30px !important;
  margin-left: -30px !important;
}
.excom_2021_position {
  margin-top: -15px;
  font-size: 16px;
  font-weight: 500;
  color: black !important;
}
.DontBreakWords {
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  font-size: 45px;
  line-height: 45px;
}

.heading-event {
  letter-spacing: 0px !important;
  font-size: 86px;
  font-weight: 300;
  margin-bottom: 30px !important;
  margin-top: 50px !important;
}

.heading-sub {
  letter-spacing: 0px !important;
  font-size: 86px;
  font-weight: 300;
  /* margin-bottom: 30px !important; */
}

.para-event {
  letter-spacing: 0px !important;
  padding-top: 10px;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
}
@media only screen and (max-width: 1278px) {
  .heading-event {
    font-size: 70px;
    line-height: 40px;
    font-weight: 300;
  }

  .heading-sub {
    font-size: 60px;
    /* line-height: 40px; */
    font-weight: 300;
  }
}

@media only screen and (max-width: 1262px) {
  .heading-event {
    font-size: 45px;
    line-height: 50px;
    font-weight: 600;
  }
  .heading-sub {
    font-size: 60px;
    /* line-height: 40px; */
    font-weight: 500;
  }
}
</style>
