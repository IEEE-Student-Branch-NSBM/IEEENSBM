<template>
  <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
  >
    <v-list
        nav
        dense

    >



        <v-list-item to="/" link>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-title>WIE</v-list-item-title>
        </v-list-item>

        <v-list-item to="/events" link>
          <v-list-item-title>Events and WorkShops</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-title>Gallery</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-title>Membership</v-list-item-title>
        </v-list-item>

      <v-list-item link>
        <v-list-item-title>Contact</v-list-item-title>
      </v-list-item>

      <v-list-item to="/about" link>
        <v-list-item-title>About</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
name: "Drawer",
  data: () => ({
    drawer: false,
  }),
  methods:{
    Toggle(){
      this.drawer = !this.drawer;
    }
  }
}
</script>

<style scoped>

</style>
