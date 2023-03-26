<template>
  <div class="mx-10 mb-5 blog-card-container">
    <v-card
      outlined
      ripple
      @click="ViewBlog"
      class="mx-auto mb-6 blog-card">
      <v-row class="ma-0">
        <v-img class="blog-banner" :src="blog.image" width="100%" height="200px"></v-img>
      </v-row>
      <v-card-actions>
        <v-list-item class="grow pa-0">
          <v-list-item-content>
            <v-card-text class="blogTitle py-0"> {{ blog.title }} </v-card-text>
          </v-list-item-content>
        </v-list-item>
      </v-card-actions>

      <v-card-text class="blogDesc px-7 pt-0">
        {{ blog.description }}
      </v-card-text>
      
      <v-row class=" blog-below-section px-7">
        <div class="d-flex align-center">

          <v-img
            class="elevation-6 blog-author-image"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
          <v-card-text class="blog-author-text">
            {{blog.author}}
          </v-card-text>

        </div>
        <v-card-text class="blog-author-text">
            {{blog.date}}
        </v-card-text>
      </v-row>

      
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    blog: Object,
  },
  methods: {
    ViewBlog() {
      this.$router.push(this.blog.path);
    },
  },
};
</script>

<style scoped>
.floatOnHover {
  cursor: pointer;
  transition: ease 0.5s;
}

.blog-card-container {
  color: white !important;
}
.floatOnHover:hover {
  transform: scale(1.05);
}

.blog-card {
  border-radius: 20px;
  height: 480px;
  max-width: 350px;
  position: relative;
  filter: drop-shadow(0px 10px 20px rgba(41, 41, 42, 0.07));
}
.blog-banner{
  border-radius: 20px 20px 0px 0px;
}
.blogTitle {
  color: black!important;
  font-size: 24px!important;
  font-weight: 600;
}

.blogDesc {
  color: #213751B2 !important;
  font-size: 16px!important;
  font-weight: 400;
  line-height: 24px;
}
.blog-below-section{
  margin: 0;
  margin-bottom: 15px;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
}
.blog-author-image{
  border-radius: 100px;
  height: 30px;
  width: 30px;
  box-shadow: none!important;
}
.blog-author-text {
  color: #213751B2 !important;
  font-size: 13px!important;
  font-weight: 400!important;
  padding: 10px;
  width: auto;
}

@media only screen and (max-width: 768px) {
  .blog-card {
    max-width: 300px;
    height: auto;
  }
  .blogTitle{
    text-align: center;
  }
  .blogDesc{
    text-align: center;
  }
  .blog-below-section{
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .blog-author-text{
    padding: 5px;
  }

}
</style>
