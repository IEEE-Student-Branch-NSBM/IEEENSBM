<template>
  <v-row no-gutters>
    <v-card width="256" height="256" rounded>
      <v-img height="256" src="@/assets/sblogomain.png"></v-img>
    </v-card>
    <v-col style="margin-left: 16px">
      <h1>Welcome to IEEE NSBM Student Branch!</h1>
      <p>
        The Official page of Institute of Electrical and Electronics Engineers
        Student Branch of National School of Business Management. Institute of
        Electrical and Electronic Engineers Student Branch of National School
        of Business Management was founded in year 2015 with the intention of promoting
        the interest of undergraduate and graduate students regarding electrical and
        computing disciplines.
      </p>
      <v-row style="margin-bottom: 16px" dense justify="start" align="start">
        <v-btn dark color="#00629B">
          Become a Member
        </v-btn>
        <v-btn style="margin-left: 8px" dark color="#00629B">
          Meet Members
        </v-btn>
      </v-row>
      <v-row style="margin-bottom: 16px" dense justify="start" align="start">
        <v-card width="64" height="64" rounded>
          <v-img height="64" src="@/assets/sblogomain.png"></v-img>
        </v-card>
        <v-card style="margin-left: 8px" width="64" height="64" rounded>
          <v-img height="64" src="@/assets/wielogo.png"></v-img>
        </v-card>
        <v-card style="margin-left: 8px" width="64" height="64" rounded>
          <v-img height="64" src="@/assets/cslogo.jpg"></v-img>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MainBase"
}
</script>

<style scoped>

</style>