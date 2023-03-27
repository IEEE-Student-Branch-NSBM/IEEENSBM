<template>
  <div>
    <v-img height="480" width="100%" :src="article.image"></v-img>
    <v-container>
      <h1 class="black--text text-center text-h2 my-8 font-weight-bold">{{ article.title }}</h1>
      <h4 class="black--text font-weight-light float-right">by {{ article.author }} - {{ article.date }}</h4>
      <div class="ArticleStyle my-10 mt-10">
        <nuxt-content class="black--text" :document="article" />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "articleview",
  data() {
    return {
      article: Object
    };
  },
  mounted() {
    this.$content(this.$route.path.replace("/", ""))
      .fetch()
      .then((val) => {
        this.article = val;
        console.log(val);
      });
    console.log(this.$route.path.replace("/", ""));
  },
};
</script>

<style scoped>
.ArticleStyle {
  color: black !important;
}

.ArticleStyle >>> a {
  color: black !important;
}
</style>
