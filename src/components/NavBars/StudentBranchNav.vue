<template>
  <v-app-bar
      flat
      color="#00629B"
      dense
  >
    <v-app-bar-nav-icon @click="Drawer" dark class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-row class="hidden-sm-and-down">
        <v-btn elevation="0" to="/" dark color="#00629B">Home</v-btn>
        <v-btn elevation="0" dark color="#00629B">WIE</v-btn>
        <v-btn elevation="0" to="/events" dark color="#00629B">Events and WorkShops</v-btn>
        <v-btn elevation="0" dark color="#00629B">Gallery</v-btn>
        <v-btn elevation="0" dark color="#00629B">Membership</v-btn>
        <v-btn elevation="0" dark color="#00629B">Contact</v-btn>
        <v-btn elevation="0" to="/about" dark color="#00629B">About</v-btn>
      </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "StudentBranchNav",
  methods:{
    Drawer(){
      this.$emit('Drawer');
    }
  }
}
</script>

<style scoped>

</style>