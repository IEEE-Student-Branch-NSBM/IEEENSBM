<template>
  <v-app-bar
      flat
      color="#00629B"
      dense
  >
    <v-app-bar-nav-icon @click="Drawer" dark class="hidden-md-and-up"></v-app-bar-nav-icon>
    <v-tabs centered dark class="hidden-sm-and-down">
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
  methods: {
    Drawer() {
      this.$emit('Drawer');
    }
  }
}
</script>

<style scoped>

</style>