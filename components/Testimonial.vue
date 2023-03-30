<template>
  <div class="testimonial-card-container">
    <v-icon color="primary" style="top: -30px;left:-20px;">mdi-format-quote-open</v-icon>
    <v-card class="testimonial-card">
      <div class="testimonial-content">
        <v-row class="testimonial-profile">
          <div class="pic">
            <nuxt-img :src="dataObj.img" alt=""> </nuxt-img>
          </div>
          <div>
            <h3 class="testimonial-title">
              {{ dataObj.name }} <br /> <small>{{ dataObj.title }}</small>
            </h3>
          </div>
        </v-row>
        <v-row class="testimonial-body">
          <p class="description">
            {{ dataObj.description }}
          </p>
        </v-row>
      </div>
    </v-card>
    <v-icon color="primary" style="bottom: -30px;right:-20px;">mdi-format-quote-close</v-icon>
  </div>
</template>

<style scoped>
.testimonial-card-container {
  position: relative;
  margin-block: 30px;
}
.testimonial-card-container > .v-icon{
  position: absolute;
  z-index: 10;
  font-size: 64px;
}
.testimonial-card {
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1) !important;
  border-radius: 15px;
  width: 600px;
  min-height: 300px;
}

.testimonial-card .row {
  margin: 0;
}

.testimonial-content {
  padding: 30px 50px;
  width: 100%;
  height: 300px;
}

.testimonial-profile {
  height: 25%;
}

.testimonial-card .pic {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
}

.testimonial-card .pic img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.testimonial-card .testimonial-title {
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: black;
}

.testimonial-card .testimonial-title small {
  font-size: 14px;
  font-weight: 400;
  color: #5E5E5E;
}

.testimonial-body {
  height: 75%;
  align-items: center;
}

.testimonial-card .description {
  font-size: 14px;
  color: #787878;
  line-height: 27px;
  position: relative;
  margin: 0;
}
</style>

<script>
export default {
  name: "Testimonial",
  props: {
    dataObj: Object,
  },
}
</script>
