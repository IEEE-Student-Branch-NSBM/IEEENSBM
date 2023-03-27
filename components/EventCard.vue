<template>
  <v-card outlined width="300" class="ma-2">
    <v-img max-height="160" width="300" :src="event.image" />
    <v-card-title class="font-weight-bold DontBreakWords">
      {{ event.title }}
    </v-card-title>
    <v-card-subtitle> {{ event.date }} </v-card-subtitle>
    <v-card-text>
      {{ event.description }}
    </v-card-text>
    <v-row justify="center" class="mb-5">
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
