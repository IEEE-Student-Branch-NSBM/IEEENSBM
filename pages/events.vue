<template>
  <v-container>
    <v-row justify="center" no-gutters>
      <v-card-title>Upcoming Events</v-card-title>
    </v-row>
    <v-row justify="center" no-gutters>
      <v-card hover ripple width="980" height="380">
        <v-img height="380" :src="Slides[0]"></v-img>
      </v-card>
    </v-row>

    <v-row justify="center" no-gutters>
      <v-card-title>Previous Events</v-card-title>
    </v-row>
    <v-row justify="center" no-gutters>
      <v-card :href="event.link" target="_blank" v-for="(event,i) in PrevEvents" :key="i" class="rounded-lg ma-2" height="256" width="480" hover ripple>
        <v-img height="256" :src="event.image"></v-img>
      </v-card>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "events",
  data(){
    return{
      Slides:[
        '/Slider/slider_1.jpg'
      ],
      PrevEvents:[
        {
          image:'/EventCovers/road_to_fullstack.jpg',
          link:'https://www.facebook.com/events/1692543347615684/'
        },
        {
          image:'/EventCovers/professional_guide_to_cv.png',
          link:'https://www.facebook.com/events/1016451752425802/'
        },
        {
          image:'/EventCovers/duothon.png',
          link:'https://www.facebook.com/events/1358107354543892/'
        },
        {
          image:'/EventCovers/ayubowan_ieee.png',
          link:'https://www.facebook.com/events/1348980179197235/'
        },
        {
          image:'/EventCovers/adruino.png',
          link:'https://www.facebook.com/events/1106503076467451/'
        },

      ]
    }
  }
}
</script>

<style scoped>

</style>
