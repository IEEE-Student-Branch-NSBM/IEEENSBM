<template>
  <v-card ripple max-width="256" class="ma-1 floatOnHover">
    <v-img class="ImgFilter" contain width="256" :src="blog.image"></v-img>
    <v-card-title style="word-break: normal !important;">
      <span style="background-color: white" class="font-weight-black">{{ blog.title }}</span>
    </v-card-title>
    <v-card-subtitle>
      by {{ blog.author }} - {{ blog.date }}
    </v-card-subtitle>

    <v-card-text>
      {{ blog.description }}
    </v-card-text>

    <v-card-actions>
      <v-btn outlined block>
        Read More <v-icon>mdi-chevron-right-circle</v-icon>
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
export default {
  name: "BlogArticleCard",
  props:{
    blog:Object,
  }
}
</script>

<style scoped>
.floatOnHover{
  cursor: pointer;
  position: relative;
  top: 0;
  transition: top ease 0.5s;
}

.floatOnHover:hover{
  top: -8px;
}
</style>
