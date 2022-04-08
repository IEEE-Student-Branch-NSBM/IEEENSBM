<template>
  <v-container>
    <v-row no-gutters justify="center">
      <BlogArticleCard
        :blog="blog"
        :key="blog.createdAt" v-for="blog in Blogs"
      ></BlogArticleCard>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "blog",
  data() {
    return {
      Blogs: [],
    }
  },
  methods:{

  },
  mounted() {
    this.$content('blogs').fetch().then((val) => {
      this.Blogs = val;
      console.log(val);
    });
  }
}
</script>

<style scoped>
.ImgFilter {
  filter: brightness(500);
}
</style>
