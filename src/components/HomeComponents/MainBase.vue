<template>
  <v-row no-gutters justify="center">
    <v-col cols="auto">
      <v-card width="256" height="256" rounded>
        <v-img max-height="256" max-width="256"  src="@/assets/sblogomain.png"></v-img>
      </v-card>
      <v-row no-gutters class="mt-2">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-card class="mb-auto"  v-bind="attrs" v-on="on" width="64" height="64" rounded>
              <v-img height="64" src="@/assets/sblogomain.png"></v-img>
            </v-card>
          </template>
          <span>IEEE NSBM Student Branch</span>
        </v-tooltip>
        <v-spacer/>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-card class="mb-auto" v-bind="attrs" v-on="on" width="64" height="64" rounded>
              <v-img height="64" src="@/assets/wielogo.png"></v-img>
            </v-card>
          </template>
          <span>IEEE WIE Affinity Group</span>
        </v-tooltip>
        <v-spacer/>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-card class="mb-auto align-end" v-bind="attrs" v-on="on" width="64" height="64" rounded>
              <v-img height="64" src="@/assets/cslogo.jpg"></v-img>
            </v-card>
          </template>
          <span>IEEE Computer Society</span>
        </v-tooltip>
      </v-row>

        <v-btn class="mt-2" block dark color="#00629B">
          Become a Member
        </v-btn>
        <v-btn class="mt-2" block dark color="#00629B">
          Meet Members
        </v-btn>

    </v-col>


    <v-col class="ml-4">
      <h1 class="text-center titleColor">Welcome to IEEE NSBM Student Branch!</h1>
      <p class="text-justify">
        The Official page of Institute of Electrical and Electronics Engineers
        Student Branch of National School of Business Management. Institute of
        Electrical and Electronic Engineers Student Branch of National School
        of Business Management was founded in year 2015 with the intention of promoting
        the interest of undergraduate and graduate students regarding electrical and
        computing disciplines.
      </p>
      <WhatWeDo/>
    </v-col>
  </v-row>
</template>

<script>
import WhatWeDo from "@/components/HomeComponents/WhatWeDo";
export default {
  name: "MainBase",
  components: {WhatWeDo}
}
</script>


