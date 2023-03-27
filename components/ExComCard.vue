<template>
  <v-card hover width="320" class="ma-4 rounded-lg">
    <v-img :src="user.image_path"></v-img>
    <v-card-subtitle class="pb-0">{{ user.position }}</v-card-subtitle>
    <v-card-title class="pt-0">{{ user.name }}</v-card-title>
    <v-card-text>
      <v-btn target="_blank" :href="user.github" icon>
        <v-icon color="primary">mdi-github</v-icon>
      </v-btn>
      <v-btn target="_blank" :href="user.linkedin" icon>
        <v-icon color="primary" >mdi-linkedin</v-icon>
      </v-btn>
      <v-btn target="_blank" :href="user.facebook" icon>
        <v-icon color="primary">mdi-facebook</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props:{
    user: Object,
  },
  name: "ExComCard"
}
</script>

<style scoped>

</style>
