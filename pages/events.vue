<template>
  <v-card elevation="0" class="IEEE">
    <v-container>
      <div v-if="CurrentEvent !== null">
      <v-row justify="center" no-gutters>
        <v-card-title class="white--text text-h4">Upcoming Events</v-card-title>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-card :href="CurrentEvent.link" target="_blank" hover ripple width="980" height="480">
          <v-img height="480" :src="CurrentEvent.image"></v-img>
        </v-card>
      </v-row>
      </div>
      <v-row justify="center" no-gutters>
        <v-card-title class="white--text text-h5">Previous Events</v-card-title>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-card :href="event.link" target="_blank" v-for="(event,i) in PrevEvents" :key="i" class="rounded-lg ma-2" height="256" width="480" hover ripple>
          <v-img height="256" :src="event.image"></v-img>
        </v-card>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { PrevEvents, CurrentEvent } from '@/content/events/events';
export default {
  name: "events",
  data(){
    return{
      CurrentEvent:{},
      PrevEvents: []
    }
  },
  mounted() {
    this.PrevEvents = PrevEvents;
    this.CurrentEvent = CurrentEvent;
  }
}
</script>

<style scoped>

</style>
