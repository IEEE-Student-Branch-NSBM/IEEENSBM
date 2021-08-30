<template>
  <div>
    <v-img height="480" width="100%" :src="article.image" ></v-img>
    <v-container>
      <h1 class="white--text">{{ article.title }}</h1>
      <h4 class="white--text">
        by {{ article.author }} - {{ article.date }}
      </h4>
      <div class="ArticleStyle">
        <nuxt-content class="white--text "  :document="article" />
      </div>

    </v-container>
  </div>
</template>

<script>
export default {
  name: "articleview",
  data(){
    return{
      article:Object,
    }
  },
  mounted() {
    this.$content(this.$route.fullPath).fetch().then((val)=>{
      this.article = val;
      console.log(val);
    });
    console.log(this.$route.fullPath);
  }
}
</script>

<style scoped>
.ArticleStyle{
  color:white !important;
}

.ArticleStyle >>> a {
  color: white !important;
}
</style>
