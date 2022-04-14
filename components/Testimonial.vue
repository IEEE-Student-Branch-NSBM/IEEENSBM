<template>
  <div class="testimonial">
    <div class="pic">
      <img :src="dataObj.img" alt=""/>
    </div>
    <h3 class="testimonial-title">
      {{ dataObj.name }}<small>, {{ dataObj.title }}</small>
    </h3>
    <p class="description">
      <v-icon color="orange" large>mdi-format-quote-open-outline</v-icon>
      {{ dataObj.description }}
<!--      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim diam, tempus vel ultricies viverra, luctus in elit. Aliquam tempus blandit velit, in pharetra ex volutpat a. Cras eu augue ac nisl tempor commodo.-->
      <v-icon color="orange" large>mdi-format-quote-close-outline</v-icon>
    </p>
  </div>
</template>

<style scoped>
.testimonial{
  text-align: center;
}

.testimonial .pic{
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 15px;
}

.testimonial .pic img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.testimonial .testimonial-title{
  display: inline-block;
  font-size: 22px;
  font-weight: 600;
  color: #0c4767;
}

.testimonial .testimonial-title small{
  font-size: 15px;
  font-weight: 600;
  color: #787878;
}

.testimonial .description{
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
  props:{
    dataObj:Object,
  },
}
</script>
