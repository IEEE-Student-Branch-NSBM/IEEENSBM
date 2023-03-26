<template>
  <v-container>
    <v-row justify="center" no-gutters>
      <v-card-title class="heading-event text-center md:text-left hidden-sm-and-down text-uppercase">
          Blog
      </v-card-title>
    </v-row>
    <v-row justify="center" no-gutters>
        <v-card-text class="para-event mx-sm-16 mx-0 mb-6">
          Amet minim mollit non deserunt ullamco est sit aliqua 
          dolor do amet sint. Velit officia consequat duis enim 
          velit mollit. Exercitation veniam consequat sunt nostrud 
          amet.
        </v-card-text>
      </v-row>
    <v-row no-gutters justify="center" class="py-6" >
      <BlogCard
        :blog="blog"
        :key="blog.id"
        v-for="blog in Blogs"
      ></BlogCard>
    </v-row>
    <JoinUs/>
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
  letter-spacing: 0px !important;
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 30px !important;
  margin-top: 50px !important;
}
.para-event {
  letter-spacing: 0px !important;
  padding-top: 10px;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  color: #2F234FCC;
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
