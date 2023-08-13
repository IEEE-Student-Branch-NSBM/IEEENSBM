<template>
  <v-card outlined max-width="300" min-height="520" class="ma-2 rounded-lg" position="relative">
    <v-img max-height="160" width="100%" contain :src="event.image" />
    <v-card-title class=" DontBreakWords text-uppercase">
      {{ event.title }}
    </v-card-title>
    <v-card-subtitle> {{ event.date }} </v-card-subtitle>
    <v-card-text class="event-description font-weight-regular">
      {{ event.description }}
    </v-card-text>
    <v-row justify="center" class="mb-5 more-button-holder">
      <v-card-actions justify="center">
        <a :href="event.link" target="_blank" justify="center">
          <v-btn class="moreButton center" outlined justify="center">
            More info
          </v-btn></a
        >
      </v-card-actions>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.v-card{
  filter: drop-shadow(0px 10px 20px rgba(41, 41, 42, 0.07));
}
.event-description{
  font-size: 16px!important;
}
.more-button-holder{
  bottom: 0;
  position: absolute;
  width: 100%;
  margin: 0;
}
.moreButton {
  background-color: #00609c;
  border-radius: 10px;
  color: white;
  text-align: center;
  text-decoration: none;
}

.DontBreakWords {
  word-break: keep-all !important;
  line-height: 25px;
}
</style>
