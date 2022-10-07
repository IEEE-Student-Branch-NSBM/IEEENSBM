<template>
  <div>
    <v-container class="eventCardContainer">
      <v-row justify="center" no-gutters>
        <v-card-title class="heading-event">Events</v-card-title>
      </v-row>
      <v-tabs v-model="tabs" centered class="mb-4">
        <v-tab>2022</v-tab>
        <v-tab>2021</v-tab>
        <v-tab>2020</v-tab>
        <v-tab>2019</v-tab>
        <v-tab>2018</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="(event, i) in PrevEvents_2022"
                :key="i"
                cols="12"
                md="4"
              >
                <AllEvents :event="event"></AllEvents>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="(event, i) in PrevEvents_2021"
                :key="i"
                cols="12"
                md="4"
              >
                <AllEvents :event="event"></AllEvents>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="(event, i) in PrevEvents_2020"
                :key="i"
                cols="12"
                md="4"
              >
                <AllEvents :event="event"></AllEvents>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="(event, i) in PrevEvents_2019"
                :key="i"
                cols="12"
                md="4"
              >
                <AllEvents :event="event"></AllEvents>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="(event, i) in PrevEvents_2018"
                :key="i"
                cols="12"
                md="4"
              >
                <AllEvents :event="event"></AllEvents>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
    <JoinUs />
  </div>
</template>

<script>
import { PrevEvents_2018 } from "@/content/events/2018/events";
import { PrevEvents_2019 } from "@/content/events/2019/events";
import { PrevEvents_2020 } from "@/content/events/2020/events";
import { PrevEvents_2021 } from "@/content/events/2021/events";
import { PrevEvents_2022 } from "@/content/events/2022/events";
import AllEvents from "../components/AllEvents.vue";
export default {
  name: "events",
  data() {
    return {
      PrevEvents_2018: [],
      PrevEvents_2019: [],
      PrevEvents_2020: [],
      PrevEvents_2021: [],
      PrevEvents_2022: [],
      tabs: null,
    };
  },
  mounted() {
    this.PrevEvents_2018 = PrevEvents_2018;
    this.PrevEvents_2019 = PrevEvents_2019;
    this.PrevEvents_2020 = PrevEvents_2020;
    this.PrevEvents_2021 = PrevEvents_2021;
    this.PrevEvents_2022 = PrevEvents_2022;
  },
  components: { AllEvents },
};
</script>


<style scoped>
.heading-event {
  font-size: 96px;
  font-weight: 300;
  margin-bottom: 50px !important;
  margin-top: 50px !important;
}

.eventCardContainer {
  margin-bottom: 20px;
}

.moreButton {
  background-color: white;
  border-radius: 10px;
  border: #00629b 1px solid;
  color: #00629b;
  text-align: center;
  text-decoration: none;
}

.cardSection {
  background-color: transparent !important ;
  border: none !important;
  box-shadow: none !important;
}

.cardSection:hover .moreButton {
  background-color: #00629b;
  border-radius: 10px;
  color: white;
  text-align: center;
  text-decoration: none;
}

@media only screen and (max-width: 768px) {
  .heading-event {
    font-size: 50px;
    font-weight: 500;
    margin-bottom: 50px !important;
    margin-top: 50px !important;
  }
}
</style>
