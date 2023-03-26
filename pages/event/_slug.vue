<template>
    <div>
      <v-container class="text-center text-md-left pt-md-15 mt-md-10 mb-10 pb-10">
        <h1 class="text-h2 my-8 font-weight-medium">{{ event.name }}</h1>
        <v-row class="no-gutters justify-space-between mb-10">
          <div class="d-flex align-center">
            <v-img
                class="elevation-6 mr-5 event-author-image"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            <h4 class="font-weight-medium" style="color:#213751B2;">{{ event.author }}</h4>
          </div>
          <h4 style="color:#213751B2;" class="d-flex align-center">{{ event.date }}</h4>
        </v-row>
        <v-img height="480" width="100%" :src="event.image"> </v-img>
        <div class="ArticleStyle my-10 mt-10 text-center text-md-justify">
          <nuxt-content class="black--text" :document="event" />
        </div>
        <v-divider color="#ACACAC" />
        <v-row class="pt-10 justify-center">
          <div width="300" class="d-flex justify-center flex-column align-center">
            <h4 class="text-uppercase mb-5" style="color: #213751B2;letter-spacing: 0.1em;">Written by</h4>
            <v-img
                class="elevation-6 mr-5 event-author-image"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
              <h3 class="pt-3 font-weight-medium" style="color: #213751;">{{ event.author }}</h3>
          </div>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    name: "eventview",
    data() {
      return {
        event: Object
      };
    },
    mounted() {
      this.$content(this.$route.path.replace("/", ""))
        .fetch()
        .then((val) => {
          this.event = val;
          console.log(val);
        });
      console.log(this.$route.path.replace("/", ""));
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
  .event-author-image{
    border-radius: 100px;
    height: 50px;
    width: 50px;
    box-shadow: none!important;
  }
  </style>
  