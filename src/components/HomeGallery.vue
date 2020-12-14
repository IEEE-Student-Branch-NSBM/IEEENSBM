<template>
    <v-carousel
        cycle
        height="480px"
        hide-delimiter-background
        show-arrows-on-hover
    >
      <v-carousel-item>
        <v-img max-height="480" src="@/assets/Gallery/1.jpg"><template v-slot:placeholder>
          <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
          >
            <v-progress-circular
                indeterminate
                color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template></v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img max-height="480" src="@/assets/Gallery/2.jpg"><template v-slot:placeholder>
          <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
          >
            <v-progress-circular
                indeterminate
                color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template></v-img>
      </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
  name: "HomeGallery",
  data () {
    return {
      slides: [
        '2.jpg',
        '1.jpg',
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