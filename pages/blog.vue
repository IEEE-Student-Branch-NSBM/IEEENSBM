<template>
  <v-card class="pa-4">
    <v-row  no-gutters justify="start">
      <v-col cols="auto">
        <BlogArticleCard
        :blog="blog"
        :key="blog.createdAt" v-for="blog in Blogs"
        ></BlogArticleCard>
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
    this.$content('articles').fetch().then((val)=>{
      this.Blogs = val;
      console.log(val);
    });
  }
}
</script>

<style scoped>
.ImgFilter{
  filter: brightness(500);
}
</style>
