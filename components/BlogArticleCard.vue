<template>
  <div class="mx-10 mb-5 blogCard">
    <v-card
      max-width="500px"
      max-height="350px"
      outlined
      ripple
      hover
      @click="ViewBlog"
      class="mx-auto backgroundImageCard"
      :style="{
        aspectRatio: '1',
        width: '500px',
        height: '250px',
        backgroundPosition: 'cover',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ' center',
        backgroundImage: `url(${blog.image})`,
      }"
    >
      <v-card-title>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="blogUser">{{
              blog.author
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-title>

      <v-card-text class="blogDesc px-10">
        {{ blog.description }}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-content>
            <v-card-text class="blogTitle"> {{ blog.title }} </v-card-text>
          </v-list-item-content>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BlogArticleCard",
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

.blogCard {
  color: white !important;
}
.floatOnHover:hover {
  transform: scale(1.05);
}

.backgroundImageCard {
  border-radius: 20px;
}

.blogTitle {
  color: white !important;
  font-size: 24px;
  font-weight: 600;
}

.blogUser {
  color: white !important;
  font-size: 16px;
  font-weight: 400;
}

.blogDesc {
  color: white !important;
  font-size: 20px;
  font-weight: 200;
}
</style>
