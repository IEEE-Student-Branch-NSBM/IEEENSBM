<template>
  <v-carousel
      cycle
      height="480"
      hide-delimiter-background
      show-arrows-on-hover
  >
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
    >
      <v-img src="@/assets/Gallery/1.jpg"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "HomeGallery",
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
}
</script>

<style scoped>

</style>