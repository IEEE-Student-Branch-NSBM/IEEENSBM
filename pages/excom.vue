<template>
  <v-container class="mt-4">
    <div>
      <v-row justify="center" no-gutters>
        <v-card-text class="heading-event text-center"
          >Executive Committee</v-card-text
        >
        <v-card-text class="heading-sub text-center">2021/21</v-card-text>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-card-text class="para-event mx-16">
          orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet
          massa accumsan, bibendum dui non, pulvinar diam. Suspendisse sed lorem
          et orci tempus fermentum. Mauris ac egestas lacus, in auctor eros.
          Donec sit amet turpis pretium, sollicitudin leo sit amet, ultrices
          tellus. Maecenas nibh urna, scelerisque eu diam nec, tincidunt
          pulvinar nisl. Suspendisse mollis pharetra varius. Integer dictum
          tortor quis felis porta ultrices.
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
    </div>
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
</template>

<script>
import { excom_2021 } from "~/content/excom/2021";

export default {
  name: "excom",
  data: () => ({
    exComs: excom_2021,
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
.excom_2021_position{
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
  margin-bottom: 30px !important;
}

.para-event {
  letter-spacing: 0px !important;
  padding-top: 10px;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
}
</style>
