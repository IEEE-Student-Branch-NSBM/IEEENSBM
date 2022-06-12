<template>
  <div>
    <v-img
      :href="event.link"
      target="_blank"
      :src="event.image"
      :lazy-src="event.image"
      aspect-ratio="2"
      hover
      ripple
    ></v-img>
    <v-card-title class="font-weight-bold">
      {{ event.title }}
    </v-card-title>
    <v-card-subtitle> {{ event.date }} </v-card-subtitle>
    <v-card-text>
      {{ event.description }}
    </v-card-text>
    <v-card-actions justify="center">
      <a :href="event.link" target="_blank" justify="center">
        <v-btn class="moreButton center" outlined justify="center">
          View More
        </v-btn></a
      >
    </v-card-actions>
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
</style>
