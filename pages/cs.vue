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
            quality="100"
            format="webp"
            fit="contain"
            height="80vh"
            width="100%"
            alt="Brand Logo"
            :src="'/Assets/CS/CS_slide.png'"
          />
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-sheet color="#FFF4E1"  class="pt-8 pb-8 px-14">
      <v-container class="items-center justify-center text-center">
        <v-card-title
          class="justify-center pb-2 font-weight-bold text-center CS-title"
          >Computer Society</v-card-title
        >
        <v-card-title
          class="justify-center pb-2 font-weight-medium text-center CS-sub"
          >IEEE COMPUTER SOCIETY STUDENT BRANCH CHAPTER OF NSBM</v-card-title
        >
        <v-card-text class="justify-center pb-2 font-weight-medium text-center CS-description">
          IEEE Computer Society is a professional society of the Institute of
          Electrical and Electronics Engineers (IEEE). It sponsors workshops and
          conferences, operates technical committees, and develops IEEE
          computing standards. The community supports more than 200 chapters
          worldwide and participates in educational activities at all levels in
          CS and professional certification in software engineering. IEEE
          Computer Society of NSBM is the student chapter of the NSBM Green
          University, and its purpose is to increase the knowledge in computer
          literacy & IT, as well as the professional standing of its members.
        </v-card-text>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container class="my-10">
        <v-row no-gutters justify="center">
          <span class="text-h4 font-weight-bold mb-8 mt-8">
            Latest Events
          </span>
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
    <v-container>
      <v-row justify="center" no-gutters>
        <v-card-title
          class="heading-event text-center md:text-left hidden-md-and-down"
        >
          Executive Committee</v-card-title
        >
        <v-card-title
          class="heading-event text-center md:text-left hidden-lg-and-up"
        >
          Executive <br />
          Committee</v-card-title
        >
        <v-card-title class="heading-sub text-center">2021/22</v-card-title>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-card-text class="para-event mx-sm-16 mx-0 CS-description">
          The Executive Committee of IEEE Computer Society will deliver
          organizational guidance to the community. Join the IEEE Computer
          Society, a leading organization for anyone engaged in computers and
          information technology to expand their knowledge.
        </v-card-text>
      </v-row>
      <v-layout justify-center align-center>
        <img
          v-bind:src="'/Assets/CS/excom.png'"
          width="100%"
          alt="Excom image"
          class="py-4"
        />
      </v-layout>

      <v-sheet width="100%">
        <v-row no-gutters justify="center">
          <span class="text-h4 text-center font-weight-bold mb-4">
            Founders
          </span>
        </v-row>
        <v-row justify="center" no-gutters class="DontBreakWords mt-8">
          <v-card
            class="mb-5 mx-3"
            width="250"
            flat
            color="transparent"
            v-for="(excom_2021, i) in exComs"
            :key="i"
          >
            <v-row no-gutters justify="center">
              <v-avatar size="128">
                <nuxt-img
                  quality="100"
                  format="webp"
                  fit="contain"
                  :src="excom_2021.image_path"
                />
              </v-avatar>
            </v-row>
            <v-card-title class="excom_2021_name text-center">
              <v-row no-gutters justify="center">
                {{ excom_2021.name }}
              </v-row>
            </v-card-title>
            <v-card-text class="excom_2021_position text-center">
              {{ excom_2021.position }}
            </v-card-text>
          </v-card>
        </v-row>
      </v-sheet>
    </v-container>
    <v-container class="my-10">
      <div class="text-h4 font-weight-bold mb-10 text-center">Testimonials</div>
      <v-row justify="center" no-gutters>
        <v-col class="hidden-sm-and-down">
          <v-carousel
            height="455"
            :cycle="true"
            :show-arrows="false"
            delimiter-icon="mdi-minus"
            hide-delimiter-background
            light
          >
            <v-carousel-item v-for="(testimonial, i) in testimonials" :key="i">
              <v-row>
                <v-col v-for="(obj, i) in testimonial" :key="i">
                  <Testimonial :dataObj="obj" />
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col class="hidden-md-and-up">
          <v-carousel
            :cycle="true"
            height="455"
            :show-arrows="true"
            hide-delimiters
          >
            <v-carousel-item
              v-for="(singleTestimonial, i) in singleTestimonials"
              :key="i"
            >
              <Testimonial :dataObj="singleTestimonial" />
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
    <JoinUs />
  </div>
</template>

<script>
import { PrevEvents } from "@/content/events/cs";
import { excom_cs_2021 } from "~/content/excom/2021/CS";
import { cs_testimonials } from "~/content/testimonials/CS";
export default {
  data: () => ({
    Slides: ["slide1.jpg"],
    exComs: excom_cs_2021,
    singleTestimonials: cs_testimonials,
    testimonials: [],
    Events: [],
  }),
  mounted() {
    this.Events = PrevEvents;
    let size = 3;
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
.excom_2021_name {
  font-size: 18px;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  font-weight: bold;
  margin-top: -5px;
  margin-right: -30px !important;
  margin-left: -30px !important;
}
.excom_2021_position {
  margin-top: -15px;
  font-size: 16px;
  font-weight: 500;
  color: black !important;
}
.heading-event {
  letter-spacing: 0px !important;
  font-size: 86px;
  font-weight: 300;
  margin-bottom: 30px !important;
}

.heading-sub {
  letter-spacing: 0px !important;
  font-size: 86px;
  font-weight: 300;
  margin-bottom: 30px !important;
}
.para-event {
  letter-spacing: 0px !important;
  padding-top: 10px;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
}

.CS-description{
  padding: 0px 50px 0px 50px;
  margin-top: 10px;
}
.CSSOverlay {
  width: 100vw;
  height: 80vh;
  position: absolute;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgb(119, 87, 0) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(119, 87, 0, 0.815) 100%
  );
}

.DontBreakWords {
  word-break: keep-all !important;
  font-size: 45px;
  line-height: 45px;
}

.CS-title {
  word-break: keep-all !important;
  font-size: 60px;
  line-height: 65px;
  color: #ffa300;
}

@media only screen and (max-width: 768px) {
  .CS-title {
    font-size: 50px;
    line-height: 65px;
  }
}

@media only screen and (max-width: 1262px) {
  .heading-event {
    font-size: 45px;
    line-height: 50px;
    font-weight: 600;
  }
  .heading-sub {
    font-size: 60px;
    /* line-height: 40px; */
    font-weight: 500;
  }

   .CS-description {
    padding: 0px !important;
  }

  .CS-sub{
    line-height: 25px !important;
    font-size: 26px !important;
    padding:  0px !important;
    margin-top: 20px;
    margin-block: 20px;
  }
}
</style>
