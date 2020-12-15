<template>
  <v-card>
    <HomeGallery class="hidden-sm-and-down"></HomeGallery>
    <v-col>
      <v-row no-gutters>
          <v-card width="256" height="256" rounded>
            <v-img height="256" src="@/assets/sblogomain.png"></v-img>
          </v-card>
          <v-col style="margin-left: 8px">
            <h2>Welcome to IEEE NSBM Student Branch!</h2>
            <p>
            The Official page of Institute of Electrical and Electronics Engineers
            Student Branch of National School of Business Management. Institute of
            Electrical and Electronic Engineers Student Branch of National School
            of Business Management was founded in year 2015 with the intention of promoting
            the interest of undergraduate and graduate students regarding electrical and
            computing disciplines.
          </p>
            <v-row style="margin-bottom: 16px" dense justify="start" align="start">

                <v-chip style="margin-right: 8px" dark color="#00629B">#IEEE</v-chip>
                <v-chip style="margin-right: 8px" dark color="#00629B">#WIE</v-chip>
                <v-chip style="margin-right: 8px" dark color="#00629B">#IEEENSBM</v-chip>
                <v-chip style="margin-right: 8px" dark color="#00629B">#NSBM</v-chip>
            </v-row>
            <v-btn dark color="#00629B">
              Become a Member
            </v-btn>
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
