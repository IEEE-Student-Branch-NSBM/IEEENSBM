<template>
  <Layout>
    <v-container>
      <v-row justify="start">
        <v-col
            v-for="Article in Articles"
            :key="Article.node.id"
            cols="auto"
        >
          <v-card class="HoverOnHover" elevation="4" min-width="320" width="320" rounded ripple>
            <g-image fit="cover"
                     height="128"
                     width="320"
                     blur="0"
                     :src="setImage(Article.node.cover)"
            >

            </g-image>
            <v-card-title>
              {{ Article.node.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ Article.node.excerpt }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
        excerpt
        cover
      }
    }
  }
}
</page-query>


<script>
import BlogIndex from './blog/index'


export default {
  name: "Blog",
  data() {
    return {
      Articles: [],
    }
  },
  methods: {
    setImage: function (Image) {
      console.log(Image)
      return Image;
    }
  },
  mounted() {
    this.Articles = this.$page.posts.edges;
    console.log(this.$page.posts.edges);
  },
}
</script>

<style scoped>
.HoverOnHover:hover {
  transition: .4s ease;
  transform: scale(1.025);
  cursor: pointer;
}

.HoverOnHover {
  transition: .4s ease;
  transform: scale(1);
  cursor: pointer;
}

</style>
