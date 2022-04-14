<template>
  <div>
    <v-container class="eventCardContainer">
      <v-row justify="center" no-gutters>
        <v-card-title class="heading-event">Events</v-card-title>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-card
          :href="event.link"
          target="_blank"
          v-for="(event, i) in PrevEvents"
          :key="i"
          class="cardSection rounded-lg ma-2 mx-6"
          height="420"
          width="300"
          hover
          ripple
        >
          <v-row justify="center" no-gutters>
            <v-img :src="event.image" />
            <v-card-title class="font-weight-bold">
              {{ event.title }}
            </v-card-title>
            <v-card-subtitle> {{ event.date }} </v-card-subtitle>
            <v-card-text>
              {{ event.description }}
            </v-card-text>
            <v-card-actions>
              <v-btn class="moreButton" outlined :href="event.link">
                View More
              </v-btn>
            </v-card-actions>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
    <JoinUs />
  </div>
</template>

<script>
import { PrevEvents, CurrentEvent } from "@/content/events/events";
export default {
  name: "events",
  data() {
    return {
      CurrentEvent: {},
      PrevEvents: [],
    };
  },
  mounted() {
    this.PrevEvents = PrevEvents;
    this.CurrentEvent = CurrentEvent;
  },
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
</style>
