<template>
  <div>
    <div class="CSSOverlay"></div>
    <v-carousel
      height="80vh"
      :cycle="true"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus">
      <v-carousel-item v-for="(slide, i) in Slides" :key="i">
        <v-sheet :color="slide" height="100%" tile>
          <v-img
            quality="98"
            format="webp"
            fit="contain"
            height="80vh"
            width="100%"
            alt="Brand Logo"
            :src="'/Assets/HomeSlider/' + slide"/>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-sheet dark width="100%" class="bannerImg pa-4">
      <v-row align="center" no-gutters class="mt-3">
        <v-col class="pa-4" cols="7">
          <v-card-title class="DontBreakWords pa-0 font-weight-bold">Welcome to IEEE Student Branch of NSBM
          </v-card-title>
          <v-card-text class="pa-0 py-4 headingPara">
            IEEE is the world’s largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE’s highly cited publications, conferences, technology standards, and professional and educational activities.
          </v-card-text>
        </v-col>
        <v-col cols="5">
          <v-row no-gutters justify="center">
            <nuxt-img
              quality="100"
              format="webp"
              fit="contain"
              height="200"
              alt="Brand Logo"
              src="/Assets/Logos/SB_Logo_V2.png"/>
          </v-row>
        </v-col>
      </v-row>
    </v-sheet>

    <v-sheet color="#F3FBFF" class="pt-8 pb-8">
        <v-container>
          <v-row align="center" no-gutters class="DontBreakWords mt-8">
            <v-col class="px-10 firstCard">
              <v-card-title class="pa-0 pb-2 text-h4 font-weight-bold">Team Work</v-card-title>
              <v-card-title class="pa-0 pb-2 text-h5 font-weight-regular">Lorem Ipsum</v-card-title>
              <v-card-text class="pa-0 pb-2 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </v-card-text>
            </v-col>
            <v-col>
              <v-img
                quality="98"
                format="webp"
                fit="contain"
                class="rounded-lg"
                height="350"
                alt="Brand Logo"
                src="https://picsum.photos/510"/>
            </v-col>
          </v-row>
          <v-row align="center" no-gutters class="DontBreakWords mt-8">
            <v-col>
              <v-img
                quality="98"
                format="webp"
                fit="contain"
                class="rounded-lg"
                height="350"
                alt="Brand Logo"
                src="https://picsum.photos/510"/>
            </v-col>
            <v-col class="ml-4 px-10">
              <v-card-title class="pa-0 pb-2 text-h4 font-weight-bold">Volunteering</v-card-title>
              <v-card-title class="pa-0 pb-2 text-h5 font-weight-regular">Lorem Ipsum</v-card-title>
              <v-card-text class="pa-0 pb-2 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </v-card-text>
            </v-col>

          </v-row>
        </v-container>
      </v-sheet>

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
        <v-slide-item
          v-for="(event,i) in Events"
          :key="i">
          <EventCard :event="event"/>
        </v-slide-item>
      </v-slide-group>
    </v-container>

    <v-sheet color="#F3FBFF" class="pt-8 pb-8">
      <v-container>
        <v-row no-gutters justify="center">
          <span class="text-h4 font-weight-bold mt-6 mb-10">
            Student Branch Counsellors
          </span>
        </v-row>
        <v-row justify="center" no-gutters class="DontBreakWords mt-8">
          <v-card class="mb-5" width="300" flat color="transparent" v-for="(lecturer,i) in Lecturers" :key="i">
            <v-row no-gutters justify="center">
              <v-avatar size="128">
                <nuxt-img
                  quality="100"
                  format="webp"
                  fit="contain"
                  :src="lecturer.image"/>
              </v-avatar>
            </v-row>
            <v-card-title class="text-h7 font-weight-bold text-center">
              <v-row no-gutters justify="center">
                {{ lecturer.name }}
              </v-row>
            </v-card-title>
            <v-card-subtitle class="text-center font-weight-bold">
              {{ lecturer.designation }}
              <br>
              {{ lecturer.ieee_designation }}
            </v-card-subtitle>
          </v-card>
        </v-row>
      </v-container>
    </v-sheet>

    <v-container>
      <v-row no-gutters justify="center">
          <span class="text-h4 font-weight-bold mt-6 mb-2 text-center">
            Student Branch Chairpersons <br /> 2021/22
          </span>
        </v-row>
        <v-row  justify="center">
          <v-btn class="moreButton" outlined justify="center">
            View More
          </v-btn>
      </v-row>
    </v-container>

    <v-container class="my-10">
      <div class="text-h4 font-weight-bold mb-10 text-center">
        Testimonials
      </div>
      <v-row justify="center" no-gutters>
        <v-col class="hidden-sm-and-down" >
          <v-carousel
            height="350"
            :cycle="true"
            :show-arrows="false"
            delimiter-icon="mdi-minus"
            hide-delimiter-background
            light>
            <v-carousel-item v-for="(testimonial, i) in testimonials" :key="i">
              <v-row>
                <v-col v-for="(obj, i) in testimonial" :key="i">
                  <Testimonial  :dataObj="obj" />
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col class="hidden-md-and-up" >
          <v-carousel :cycle="true"
                      height="200"
                      :show-arrows="true"
                      hide-delimiters>
            <v-carousel-item v-for="(singleTestimonial, i) in singleTestimonials" :key="i">
              <Testimonial  :dataObj="singleTestimonial" />
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="my-10">
      <v-row no-gutters justify="center">
        <span class="text-h4 font-weight-bold mb-8 mt-2">
        Our Fellowship
      </span>
      </v-row>
     <v-row justify="center">
        <section style="width:100%">
        <iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/ihz8vom1XPg" title="IEEE NSBM VIDEO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
     </v-row>
    </v-container>


  </div>
</template>

<script>
import { PrevEvents } from "@/content/events/events";

export default {
  data: () => ({
    Slides: [
      'slide_1.jpg',
      'slide_2.jpg',
      'slide_3.jpg',
      'slide_4.jpg',
      'slide_5.jpg',
      'slide_6.jpg',
    ],
    Events:[],
    singleTestimonials: [

      {
        name: "Sanjula",
        title: "V President",
        description: "Maru habai",
        img: "/Assets/Excom/AsstTreasurer.jpg"
      },
      {
        name: "Sanjula",
        title: "V President",
        description: "Maru habai",
        img: "/Assets/Excom/AsstTreasurer.jpg"
      },
      {
        name: "Sanjula",
        title: "V President",
        description: "Maru habai",
        img: "/Assets/Excom/AsstTreasurer.jpg"
      },
      {
        name: "Sanjula",
        title: "V President",
        description: "Maru habai",
        img: "/Assets/Excom/AsstTreasurer.jpg"
      },
      {
        name: "Sanjula",
        title: "V President",
        description: "Maru habai",
        img: "/Assets/Excom/AsstTreasurer.jpg"
      },
      {
        name: "Sanjula",
        title: "V President",
        description: "Maru habai",
        img: "/Assets/Excom/AsstTreasurer.jpg"
      },
      {
        name: "Sanjula",
        title: "V President",
        description: "Maru habai",
        img: "/Assets/Excom/AsstTreasurer.jpg"
      },
      {
        name: "Sanjula",
        title: "V President",
        description: "Maru habai",
        img: "/Assets/Excom/AsstTreasurer.jpg"
      },
      {
        name: "Sanjula",
        title: "V President",
        description: "Maru habai",
        img: "/Assets/Excom/AsstTreasurer.jpg"
      }
    ],
    testimonials: [],
    Lecturers:[
      {
        name: 'Prof. Chaminda Rathnayake',
        designation: 'Deputy Vice Chancellor at NSBM',
        ieee_designation: 'Branch Counsellor',
        image: '/Assets/Lecturers/ChamindaRathnayake.png',
      },
      {
        name: 'Mr. Mohamed Shafraz',
        designation: 'Senior Lecturer at NSBM',
        ieee_designation: 'Senior Adviser',
        image: '/Assets/Lecturers/MohamedShafraz.png',
      },
      {
        name: 'Mr. Iman Ashly',
        designation: 'Senior Lecturer at NSBM',
        ieee_designation: 'Lecturer in Charge',
        image: '/Assets/Lecturers/ImanAshly.png',
      },
      {
        name: 'Mrs. Narmada Ranaweera',
        designation: 'Senior Lecturer at NSBM',
        ieee_designation: 'Mistress In Charge',
        image: '/Assets/Lecturers/NarmadaRanaweera.png',
      },
      {
        name: 'Ms. Kaumadee Samarakoon',
        designation: 'Senior Lecturer at NSBM',
        ieee_designation: 'Mistress In Charge',
        image: '/Assets/Lecturers/KaumadeeSamarakooon.png',
      }
    ]
  }),
  mounted() {
    this.Events = PrevEvents;

    let size = 3;
    Array.from({length: Math.ceil(this.singleTestimonials.length / size)}, (val, i) => {
      this.testimonials.push(this.singleTestimonials.slice(i * size, i * size + size))
    })
  }
}
</script>

<style scoped>
.text-h7 {
  font-size: 1rem;
}

.DontBreakWords {
  word-break: keep-all !important;
  font-size: 45px;
  line-height: 45px;
}

.firstCard{
  margin-right: 20px;
}

.CSSOverlay{
  width: 100vw;
  height: 80vh;
  position: absolute;
  z-index: 1;
  background: rgb(0,39,62);
  background: linear-gradient(180deg, rgba(0,39,62,1) 0%, rgba(255,255,255,0) 50%, rgba(0,39,62,1) 100%);
}

.bannerImg{
  background-image: url('../docs/Assets/Other/IEEE_BANNER.png');
  height: 300px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}

.headingPara{
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
}

.moreButton {
  background-color: #00609C;
  border-radius: 10px;
  color: white;
  text-align: center;
  text-decoration: none;
}
</style>
