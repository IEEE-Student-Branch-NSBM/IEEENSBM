<template>
  <div>
    <div class="CSSOverlay"></div>
    <v-carousel
      height="80vh"
      :cycle="true"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item v-for="(slide, i) in Slides" :key="i">
        <v-sheet :color="slide" height="100%" tile>
          <v-img
            quality="98"
            format="webp"
            fit="contain"
            height="80vh"
            width="100%"
            alt="Brand Logo"
            :src="'/Assets/HomeSlider/' + slide"
          />
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-sheet dark width="100%" class="bannerImg pa-4">
      <v-row align="center" no-gutters class="mt-3">
        <v-col class="pa-4" cols="12" sm="7">
          <v-card-title class="DontBreakWords pa-0 font-weight-bold"
            >Welcome to IEEE Student Branch of NSBM
          </v-card-title>
          <v-card-text class="headingPara pa-0 py-4 font-weight-regular">
            The IEEE Student Branch of <a href="https://www.nsbm.ac.lk/" target="_blank" rel="noopener" style="color: #FFFFFF!important;font-weight: 600;">NSBM Green University</a> was started in the
            year 2015 and consists of IEEE members from the Faculty of Computing
            and the Faculty of Engineering.
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="5">
          <v-row no-gutters justify="center">
            <nuxt-img
              quality="100"
              format="webp"
              fit="contain"
              sizes="sm:200px md:400px"
              alt="Brand Logo"
              src="/Assets/Logos/SB_Logo_V2.png"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-sheet>

    <v-sheet class="vis-mis-section" color="transparent">
      <v-row class="justify-space-around flex-wrap">
        <nuxt-img sizes="sm:150px md:280px" src="/Assets/Logos/IEEENSBM-Logo-Blue.png"/>
        <nuxt-img sizes="sm:100px md:160px" src="/Assets/Logos/WIE_Logo.png"/>
        <nuxt-img sizes="sm:150px md:280px" src="/Assets/Logos/CS_Logo_transparent.png"/>
      </v-row>
      <v-row class="justify-space-around mt-15">
        <v-card class="rounded-lg">
          <v-row>
            <v-card-title class="text-h5 font-weight-bold">
              <v-icon size="25" color="#2F234F">mdi-bullseye-arrow</v-icon>Our&nbsp;<span>Mission</span>
            </v-card-title>
            <v-card-text class="sm:text-center md:text-justify font-weight-regular">
              The Student Chapter of IEEE NSBM advises the community on ethics policy and concerns as well as fostering awareness on ethical issues and promoting ethical behavior amongst individuals and organizations working within the IEEE fields of interest.
            </v-card-text>
          </v-row>
        </v-card>
        <v-card class="rounded-lg">
          <v-row>
            <v-card-title class="text-h5 font-weight-bold">
              <v-icon size="25" color="#2F234F">mdi-eye</v-icon>Our&nbsp;<span>Vision</span>
            </v-card-title>
            <v-card-text class="sm:text-center md:text-justify">
              A world in which engineers and scientists are respected for their exemplary ethical behavior and the IEEE and its Ethics & Member Conduct Committee are recognized as a major drive in this regard.
            </v-card-text>
          </v-row>
        </v-card>
      </v-row>
    </v-sheet>
    <v-sheet>
      <v-container fluid class="my-10">
        <v-row justify="center" no-gutters>
          <v-card-title class="heading-event text-center md:text-left  text-uppercase">
              Latest Events
          </v-card-title>
        </v-row>
        <v-row justify="center" no-gutters>
          <!-- <v-card-text class="para-event mx-sm-16 mx-0 mb-6">
            Amet minim mollit non deserunt ullamco est sit aliqua 
            dolor do amet sint. Velit officia consequat duis enim 
            velit mollit. Exercitation veniam consequat sunt nostrud 
            amet.
          </v-card-text> -->
        </v-row>
        <v-slide-group show-arrows class="mb-10">
          <template v-slot:next>
            <v-btn x-large icon>
              <v-icon size="64">mdi-chevron-right</v-icon>
            </v-btn>
          </template>
  
          <template v-slot:prev>
            <v-btn x-large icon>
              <v-icon size="64">mdi-chevron-left</v-icon>
            </v-btn>
          </template>
          <v-slide-item v-for="(event, i) in Events" :key="i">
            <EventCard :event="event" />
          </v-slide-item>
        </v-slide-group>
      </v-container>
    </v-sheet>

    <v-sheet color="#F3FBFF" class="pt-8 pb-8">
      <v-container>
        <v-row justify="center" no-gutters>
          <v-card-title class="heading-event text-center md:text-left  text-uppercase">
              Student Branch Counsellors
          </v-card-title>
        </v-row>
        <v-row justify="center" no-gutters class="DontBreakWords mt-8 mb-4">
          <v-card
            class="mb-5"
            width="300"
            flat
            color="transparent"
            v-for="(lecturer, i) in Lecturers"
            :key="i"
          >
            <v-row no-gutters justify="center">
              <v-avatar size="128">
                <nuxt-img
                  quality="100"
                  format="webp"
                  fit="cover"
                  style="object-fit: cover; object-position: top;"

                  :src="lecturer.image"
                />
              </v-avatar>
            </v-row>
            <v-card-title class="text-h7 font-weight-bold text-center">
              <v-row no-gutters justify="center">
                {{ lecturer.name }}
              </v-row>
            </v-card-title>
            <v-card-subtitle class="text-center font-weight-bold">
              {{ lecturer.designation }}
              <br />
              {{ lecturer.ieee_designation }}
            </v-card-subtitle>
          </v-card>
        </v-row>
        <v-row justify="center" no-gutters>
          <v-card-title class="heading-event text-center md:text-left  text-uppercase">
              Meet the executive committee
          </v-card-title>
        </v-row>
        <v-row justify="center" no-gutters>
          <!-- <v-card-text class="para-event mx-sm-16 mx-0 mb-6">
            Amet minim mollit non deserunt ullamco est sit aliqua 
            dolor do amet sint. Velit officia consequat duis enim 
            velit mollit. Exercitation veniam consequat sunt nostrud 
            amet.
          </v-card-text> -->
        </v-row>
        <!-- <ChairCard /> -->
        <v-row class="justify-center flex-wrap">
          <div 
          v-for="(chair, i) in Chairs" 
          :key="i" >
            <ExComCard 
            :id="i"
            :name="chair.name"
            :position="chair.chair_role"
            :image="chair.image"
            :linkedin="chair.linkedin"
            :facebook="chair.facebook"
            :email="chair.email"
            />
          </div>
        </v-row>
        <v-row justify="center mt-10">
          <v-btn class="moreButton" outlined justify="center">
            <nuxt-link class="link" to="/excom">View All Members</nuxt-link>
          </v-btn>
        </v-row>
      </v-container>
    </v-sheet>
    
    <v-sheet class="testimonials-section" min-height="100%">
      <v-container class="my-10" >
        <v-row justify="center" no-gutters>
          <v-card-title class="heading-event text-center md:text-left text-uppercase">
              Testimonials
          </v-card-title>
        </v-row>
        <v-row justify="center" no-gutters>
          <!-- <v-card-text class="para-event mx-sm-16 mx-0 mb-6">
            Amet minim mollit non deserunt ullamco est sit aliqua 
            dolor do amet sint. Velit officia consequat duis enim 
            velit mollit. Exercitation veniam consequat sunt nostrud 
            amet.
          </v-card-text> -->
        </v-row>
        <v-row justify="center" no-gutters>
          <v-col class="hidden-sm-and-down">
            <v-carousel
              min-height="455"
              :cycle="true"
              :show-arrows="false"
              delimiter-icon="mdi-minus"
              hide-delimiter-background
              light
            >
              <v-carousel-item v-for="(testimonial, i) in testimonials" :key="i">
                <v-row class="testimonial-slide">
                  <div v-for="(obj, i) in testimonial" :key="i">
                    <Testimonial :dataObj="obj" />
                  </div>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col class="hidden-md-and-up">
            <v-carousel
              :cycle="true"
              min-height="455"
              :show-arrows="true"
              hide-delimiters
            >
              <v-carousel-item>
                <v-row class="testimonial-slide">
                  <div v-for="(singleTestimonial, i) in singleTestimonials"
                    :key="i">
                    <Testimonial :dataObj="singleTestimonial" />
                  </div>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-container class="my-10">
      <v-row justify="center" no-gutters>
          <v-card-title class="heading-event text-center md:text-left  text-uppercase">
              Our fellowship
          </v-card-title>
        </v-row>
      <v-row justify="center" no-gutters>
        <section style="width: 65%">
          <lite-youtube
            videoid="ihz8vom1XPg"
            playlabel="Play: IEEE NSBM VIdeo"
            params="controls=0&start=0&end=80&modestbranding=2&rel=0&enablejsapi=1"
          ></lite-youtube>
        </section>
      </v-row>
    </v-container>

    <JoinUs />
  </div>
</template>

<script>
import { PrevEvents } from "@/content/events/events";
import ChairCard from "@/components/ChairCard";
import ExComCard from "@/components/ExComCard";
import { sb_testimonials } from "~/content/testimonials/SB";
import { lecturers_sb } from "~/content/lecturers/lecturers";
import { chairs } from "~/content/chairs/chairs";

export default {
  component: { 
    ChairCard, 
    ExComCard
  },
  data: () => ({
    Slides: [
      "slide_1.jpg",
      "slide_2.jpg",
      "slide_3.jpg",
      "slide_4.jpg",
      "slide_5.jpg",
      "slide_6.jpg",
    ],
    Chairs: chairs,
    Events: [],
    singleTestimonials: sb_testimonials,
    testimonials: [],
    Lecturers: lecturers_sb,
  }),
  mounted() {
    this.Events = PrevEvents;

    let size = 2;
    Array.from(
      { length: Math.ceil(this.singleTestimonials.length / size) },
      (val, i) => {
        this.testimonials.push(
          this.singleTestimonials.slice(i * size, i * size + size)
        );
      }
    );
  },
};
</script>

<style scoped>
.heading-event {
  letter-spacing: 0px !important;
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 30px !important;
  margin-top: 50px !important;
}
.para-event {
  letter-spacing: 0px !important;
  padding-top: 10px;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  color: #2F234FCC;
}
.text-h7 {
  font-size: 1rem;
}

.DontBreakWords {
  word-break: keep-all !important;
  font-size: 45px;
  line-height: 45px;
}

.firstCard {
  margin-right: 20px;
}

.CSSOverlay {
  width: 100vw;
  height: 80vh;
  position: absolute;
  z-index: 1;
  background: rgb(0, 39, 62);
  background: linear-gradient(
    180deg,
    rgba(0, 39, 62, 1) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(0, 39, 62, 1) 100%
  );
}
.vis-mis-section {
  padding: 60px 80px;
}
.vis-mis-section img{
  margin: 10px 10px;
  object-fit: contain;
}
.vis-mis-section .v-card{
  min-height: 220px;
  max-width: 500px;
  box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.25);
  margin: 20px 15px;
}
.vis-mis-section .v-card .row{
  padding: 20px 30px;
  margin: 0;
}
.vis-mis-section .v-card__title{
  font-weight: 600;
  text-transform: uppercase;
}
.vis-mis-section .v-card__title span{
  color: #00609c!important;
}
.vis-mis-section .v-icon{
  padding-right: 8px;
}
.vis-mis-section .v-card__text{
  font-weight: 400;
  color: black;
  font-size: 16px!important;
}
.bannerImg {
  background-image: url("/Assets/Other/IEEE_BANNER.png");
  height: auto; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
.headingPara {
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
}

.moreButton {
  background-color: #00609c;
  border-radius: 10px;
  color: white;
  text-align: center;
  text-decoration: none;
}

.joinus-topBanner {
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 40px;
}
.testimonials-section  .v-carousel__item {
  height: 100%!important;
}
.testimonial-slide{
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
}
@media screen and (max-width: 1024px) {
  .heading-event{
    line-height: 4rem;
    word-break: keep-all;
  }
}
@media only screen and (max-width: 768px) {
  .heading-event {
    font-size: 48px;
    font-weight: 500;
    margin-bottom: 25px !important;
    margin-top: 25px !important;
  }
  .DontBreakWords {
    text-align: center;
    font-size: 30px;
  }
  .headingPara {
    font-size: 15px;
    text-align: center;
  }
  .SBC-title {
    text-align: center;
  }
  .firstCard {
    margin-right: 0px;
  }
  .joinus-topBanner {
    padding-left: 10px;
    padding-right: 10px;
  }

  .topic-one {
    justify-content: center !important;
  }

  .topic-two {
    font-size: 2rem !important;
    word-break: keep-all !important;
  }

  .topic-description {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
