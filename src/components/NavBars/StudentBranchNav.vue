<template>
  <v-app-bar
      flat
      color="#00629B"
      dense
  >
    <v-app-bar-nav-icon @click="Drawer" dark class="hidden-md-and-up"></v-app-bar-nav-icon>
      <!--v-row >
        <v-btn active-class="activeBtn" elevation="0" to="/" dark color="#00629B">Home</v-btn>
        <v-btn elevation="0" dark color="#00629B">WIE</v-btn>
        <v-btn elevation="0" to="/articles" dark color="#00629B">Articles</v-btn>
        <v-btn elevation="0" to="/events" dark color="#00629B">Events and WorkShops</v-btn>
        <v-btn elevation="0" dark color="#00629B">Gallery</v-btn>
        <v-btn elevation="0" dark color="#00629B">Membership</v-btn>
        <v-btn elevation="0" dark color="#00629B">Contact</v-btn>
        <v-btn elevation="0" to="/about" dark color="#00629B">About</v-btn>
      </v-row-->

    <v-tabs dark slider-size="4" class="hidden-sm-and-down">
      <v-tab to="/">Home</v-tab>
      <v-tab>WIE</v-tab>
      <v-tab to="/articles">Articles</v-tab>
      <v-tab to="/events">Events and WorkShops</v-tab>
      <v-tab>Gallery</v-tab>
      <v-tab>Membership</v-tab>
      <v-tab>Contact</v-tab>
      <v-tab to="/about">About</v-tab>
    </v-tabs>

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

<style lang="scss" scoped>
.activeBtn {
  border-bottom: solid;
  border-color: yellow;
}
</style>