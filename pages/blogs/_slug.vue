<template>
  <div>
    <v-container class="text-center text-md-left pt-md-15 mt-md-10 mb-10 pb-10">
      <h1 class="text-h2 my-8 font-weight-medium">{{ article.title }}</h1>
      <v-row class="no-gutters justify-space-between mb-10">
        <div class="d-flex align-center">
          <v-img
              class="elevation-6 mr-5 blog-author-image"
              alt=""
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          <h4 class="font-weight-medium" style="color:#213751B2;">{{ article.author }}</h4>
        </div>
        <h4 style="color:#213751B2;" class="d-flex align-center">{{ article.date }}</h4>
      </v-row>
      <v-img height="480" width="100%" :src="article.image"> </v-img>
      <div class="ArticleStyle my-10 mt-10 text-center text-md-justify">
        <nuxt-content class="black--text" :document="article" />
      </div>
      <v-divider color="#ACACAC" />
      <v-row class="pt-10 justify-center">
        <div width="300" class="d-flex justify-center flex-column align-center">
          <h4 class="text-uppercase mb-5" style="color: #213751B2;letter-spacing: 0.1em;">Written by</h4>
          <v-img
              class="elevation-6 mr-5 blog-author-image"
              alt=""
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
            <h3 class="pt-3 font-weight-medium" style="color: #213751;">{{ article.author }}</h3>
        </div>
      </v-row>
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
      });
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
.blog-author-image{
  border-radius: 100px;
  height: 50px;
  width: 50px;
  box-shadow: none!important;
}
</style>
