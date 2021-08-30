<template>
  <v-container class="ArticleStyle" >
    <nuxt-content  :document="Article" />
  </v-container>
</template>

<script>
export default {
  name: "Volunteer",
  data(){
    return{
      Article:'',
    }
  },
  mounted() {
    this.$content('blogs/volunteer').fetch().then((val)=>{
      this.Article = val;
      console.log(val);
    });
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
