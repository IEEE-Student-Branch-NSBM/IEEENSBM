<template>
  <v-card hover @click="ViewBlog" ripple outlined max-width="256" class="ma-2 floatOnHover">
    <v-img contain :src="blog.image"></v-img>
    <v-card-title style="word-break: normal !important;">
      <span style="background-color: white" class="font-weight-black">{{ blog.title }}</span>
    </v-card-title>
    <v-card-subtitle>
      by {{ blog.author }} <br><span class="font-italic"> {{ blog.date }}</span>
    </v-card-subtitle>

    <v-card-text>
      {{ blog.description }}
    </v-card-text>
  </v-card>
</template>

<script>


export default {
  name: "BlogArticleCard",
  props:{
    blog:Object,
  },
  methods:{
    ViewBlog(){
      this.$router.push(this.blog.path)
    }
  }
}
</script>

<style scoped>
.floatOnHover{
  cursor: pointer;
  transition: ease 0.5s;
}

.floatOnHover:hover{
  transform: scale(1.05);
}
</style>
