<template>
  <v-card width="300" class="ma-2">
    <nuxt-img
      quality="98"
      format="webp"
      width="300"
      height="300"
      :src="event.image"/>
    <v-card-title class="font-weight-bold">
      {{ event.title }}
    </v-card-title>
    <v-card-subtitle> {{ event.date }} </v-card-subtitle>
    <v-card-text>
     {{ event.description }}
    </v-card-text>
    <v-card-actions>
      <v-btn outlined :href="event.link">
        <v-icon>mdi-link</v-icon>More info
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "EventCard",
  props:{
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
