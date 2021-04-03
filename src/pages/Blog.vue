<template>
  <Layout>
    <v-container>
      <v-row justify="start">
        <v-col
            v-for="Article in Articles"
            :key="Article.ID"
            cols="auto"
        >
          <v-card class="HoverOnHover" elevation="4" min-width="320" width="320" rounded ripple>
            <g-image fit="cover"
                     height="128"
                     width="320"
                     blur="0"
                     :src="setImage(Article.Image)"
            >
            </g-image>
            <v-card-title>
              {{ Article.Title }}
            </v-card-title>
            <v-card-subtitle>
              {{ Article.Short }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import BlogIndex from './blog/index'
export default {
  name: "Blog",
  data(){
    return{
      Articles:[],
    }
  },
  methods:{
    setImage: function (Image){
      return require("!!assets-loader?width=320&height=128!~/assets/Blog/"+ Image);
    }
  },
  mounted() {
    this.Articles = BlogIndex.Articles();
  },
}
</script>

<style scoped>
.HoverOnHover:hover {
  transition:  .4s ease;
  transform: scale(1.025);
  cursor: pointer;
}

.HoverOnHover {
  transition:  .4s ease;
  transform: scale(1);
  cursor: pointer;
}

</style>
