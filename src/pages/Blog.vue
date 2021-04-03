<template>
  <Layout>
    <v-dialog
    scrollable
    fullscreen
    v-model="Dialog"
    >
      <v-card>
        <v-app-bar app dense flat>
          <v-row no-gutters justify="space-between" align="center">
            <v-col>Title</v-col>
            <v-col cols="auto">
              <v-btn outlined @click="Dialog = false">Close</v-btn>
            </v-col>
          </v-row>
        </v-app-bar>
      </v-card>
    </v-dialog>

    <v-container>
      <v-row justify="start">
        <v-col
            v-for="Article in Articles"
            :key="Article.node.id"
            cols="auto"
        >
          <v-card @click="Dialog = true" class="HoverOnHover" elevation="4" min-width="320" width="320" rounded ripple>
            <g-image fit="cover"
                     height="128"
                     width="320"
                     class="BlogPostCard"
                     blur="0"
                     :src="Article.node.cover"
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


export default {
  name: "Blog",
  data() {
    return {
      Dialog: false,
      Articles: [],
    }
  },
  methods: {
    getPost(id){

    },
    setImage: function (Image) {
      return require("!!assets-loader?width=320&height=128!~/" + Image);
    }
  },
  mounted() {
    this.Articles = this.$page.posts.edges;
    console.log(this.$page.posts.edges);
  },
}
</script>

<style scoped>
.BlogPostCard {
  width: 320px;
  height: 128px;
  object-fit: cover
}

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
