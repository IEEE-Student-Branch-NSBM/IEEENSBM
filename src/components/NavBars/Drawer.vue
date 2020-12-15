<template>
  <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
  >
    <v-list
        nav
        dense
    >

        <v-list-item>
          <v-list-item-title>Foo</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
        </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
name: "Drawer",
  data: () => ({
    drawer: true,
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