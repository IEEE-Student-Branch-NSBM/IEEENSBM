<template>
  <div class="event-card">
    <v-img
      :href="event.link"
      target="_blank"
      :src="event.image"
      :lazy-src="event.image"
      aspect-ratio="2"
      height="300"
      hover
      ripple
    ></v-img>
    <v-row class="no-gutters align-content-space-between event-content" >
      <v-row class="no-gutters">
        <v-card-title class="font-weight-bold DontBreakWords">
          {{ event.title }}
        </v-card-title>
        <v-card-subtitle> {{ event.date }} </v-card-subtitle>
        <v-card-text class="font-weight-regular">
          {{ event.description }}
        </v-card-text>
      </v-row>
      <v-card-actions justify="center" class="morebutton-action">
        <a :href="event.link" target="_blank" justify="center">
          <v-btn class="moreButton center" outlined justify="center">
            View More
          </v-btn></a
        >
      </v-card-actions>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AllEvents",
  props: {
    event: Object,
  },
};
</script>

<style scoped>
.event-card{
  background-color: white;
  border-radius: 10px;
  filter: drop-shadow(0px 10px 20px rgba(41, 41, 42, 0.07));
  max-width: 600px;
  min-height: 600px;
}
.event-card .v-image{
  border-radius: 10px 10px 0 0;
}
.event-content{
  min-height: 300px;
  padding-inline: 10px;
}
.morebutton-action{
  height: 80px;
  padding-inline: 16px;
}
.DontBreakWords {
  word-break: keep-all !important;
  line-height: 25px;
}
</style>
