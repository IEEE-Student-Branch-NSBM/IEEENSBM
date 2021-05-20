<template>
  <v-card class="pb-4 pt-4">
    <v-row  no-gutters justify="center">
      <v-col cols="auto">
        <v-card :key="blog.createdAt" v-for="blog in Blogs">
          <v-img max-width="256" :src="blog.image"></v-img>
          <v-card-title>{{ blog.title }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "blog",
  data(){
    return {
      Blogs: [],
    }
  },
  mounted() {
    this.$content().fetch().then((val)=>{
      this.Blogs = val;
      console.log(val);
    });
  }
}
</script>

<style scoped>

</style>
