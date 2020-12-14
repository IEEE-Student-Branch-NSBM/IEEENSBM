<template>
  <v-card>
    <HomeGallery></HomeGallery>
    <v-col>
      <h1>Welcome to IEEE NSBM Student Branch!</h1>
      <v-row no-gutters>
          <v-card width="256" rounded>
            <v-img height="256" src="@/assets/sblogomain.png"></v-img>
          </v-card>
          <v-col style="margin-left: 8px">
            <p>
            The Official page of Institute of Electrical and Electronics Engineers
            Student Branch of National School of Business Management. Institute of
            Electrical and Electronic Engineers Student Branch of National School
            of Business Management was founded in year 2015 with the intention of promoting
            the interest of undergraduate and graduate students regarding electrical and
            computing disciplines.
          </p>
          </v-col>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>

import HomeGallery from "@/components/HomeGallery";

export default {
  name: 'Home',
  components: {
    HomeGallery


  }
}
</script>
