<template>
  <v-container>
    <v-row justify="center" no-gutters>
      <v-card-title class="heading-event">Blogs</v-card-title>
    </v-row>
    <v-row no-gutters justify="center" class="py-6" >
      <BlogArticleCard
        :blog="blog"
        :key="blog.id"
        v-for="blog in Blogs"
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
    };
  },
  methods: {},
  mounted() {
    this.$content("blogs")
      .fetch()
      .then((val) => {
        this.Blogs = val;
        console.log(val);
      });
  },
};
</script>

<style scoped>
.heading-event {
  font-size: 96px;
  font-weight: 300;
  margin-bottom: 50px !important;
  margin-top: 50px !important;
}
.ImgFilter {
  filter: brightness(500);
}

@media only screen and (max-width: 768px) {
  .heading-event {
    font-size: 50px;
    font-weight: 500;
    margin-bottom: 25px !important;
    margin-top: 25px !important;
  }
}
</style>
