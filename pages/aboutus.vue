<template>
  <div>
    <v-sheet class="pb-8">
      <v-container>
        <v-row align="center" no-gutters class="DontBreakWords mt-8">
          <v-col class="order-last order-md-first">
            <nuxt-img
              quality="98"
              format="webp"
              fit="contain"
              height="350"
              width="620"
              alt="Brand Logo"
              src="/Assets/Logos/IEEE_Logo_Blue.png"
              class="IEEE_logo"
            />
          </v-col>
          <v-col class="ml-sm-4 ml-0 px-sm-10 px-5">
            <v-card-title
              class="
                pa-0
                pb-2
                left
                font-weight-bold
                text-left
                justify-sm-end justify-left
                IEEE-title
                float-left
                text-h2
                about-ieee
                
              "
              >About IEEE</v-card-title
            >
            <v-card-text
              class="
                text-h5
                my-3
                mt-10
                pa-0
                pb-10 pb-sm-2
                pt-8 pt-sm-0
                left
                text-sm-left text-left
                float-left
              "
            >
              The IEEE Student Branch of NSBM Green University was established
              in 2015 and is composed of IEEE members from the Computing and
              Engineering faculty.
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container>
        <v-row no-gutters justify="center">
          <span class="text-h3 font-weight-bold mt-4 about-ieee-nsbm">
            About <span style="color: #00629b">IEEE NSBM</span> Student Branch
          </span>
        </v-row>
        <v-row>
          <div class="my-3 text-center about-ieee-nsbm-description">
            The IEEE Student Branch of NSBM Green University was established in
            2015 and is composed of IEEE members from the Computing and
            Engineering faculty. In the Sri Lanka section, there is a very
            active Student Branch with several activities throughout the year.
            The greatest part is that some of these projects are conducted not
            just for NSBM undergraduates, but also for undergraduates from other
            State and non-State universities. Throughout the year, the IEEE
            Student Branch of NSBM constantly performs numerous valuable
            national and international projects.
          </div>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet class="mb-10 mt-10">
      <v-row>
        <v-col class="d-flex child-flex" cols="12" sm="4">
          <v-img
            src="/Assets/Logos/aboutus_img_1.jpg"
            aspect-ratio="1"
            class="grey lighten-2"
          >
          </v-img>
        </v-col>
        <v-col class="d-flex child-flex" cols="12" sm="4">
          <v-img
            src="/Assets/Aboutus/aboutus_img_2.jpg"
            aspect-ratio="1"
            class="grey lighten-2"
          >
          </v-img> </v-col
        ><v-col class="d-flex child-flex" cols="12" sm="4">
          <v-img
            src="/Assets/Aboutus/aboutus_img_3.jpg"
            aspect-ratio="1"
            class="grey lighten-2"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-sheet>
    <v-container>
      <v-row no-gutters justify="center">
        <span class="text-h2 font-weight-bold mt-4 about-ieee-nsbm">
          <span style="color: #702f8a">WIE </span> Affinity Group
        </span>
      </v-row>
      <v-row no-gutters justify="center">
        <span class="text-h5 font-medium mt-4 justify-center text-center">
          IEEE WOMEN IN ENGINEERING AFFINITY GROUP OF NSBM
        </span>
      </v-row>
      <v-row align="center" no-gutters class="DontBreakWords mt-8">
        <v-col class="order-last order-md-first">
          <v-img
            quality="98"
            format="webp"
            fit="contain"
            class="rounded-lg my-4"
            height="400"
            width="400"
            alt="Brand Logo"
            :src="'/Assets/Logos/WIE_Logo.png'"
          />
        </v-col>
        <v-col class="ml-4 px-10 chapter-section">
          <v-card-text class="pa-0 pb-2 text-justify mt-4">
            IEEE Women in Engineering (WIE) is a global platform of IEEE members
            and volunteers dedicated to advancing women engineers and scientists
            and empowering young girls throughout the world to pursue academic
            interests in engineering and scientific professions. Women in
            Engineering Affinity Group of NSBM (WIE NSBM) is one of the student
            branch chapters of the global network which uplifts the women in
            leadership roles in industry as well as international platforms.
          </v-card-text>
          <v-card-text
            class="pa-0 text-justify mt-4 moreDetails pr-4"
            style="color: #702f8a; font-weight: bold"
          >
            More Details
          </v-card-text>
          <v-card-actions class="moreDetails">
            <v-btn
              class="btn-icon"
              icon
              href="https://www.facebook.com/nsbmwie"
              target="_blank"
              ><v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              icon
              class="btn-icon"
              href="https://www.linkedin.com/company/ieee-women-in-engineering-nsbm/"
              target="_blank"
              ><v-icon>mdi-linkedin</v-icon></v-btn
            >
            <v-btn
              class="btn-icon"
              icon
              href="https://twitter.com/nsbmieee"
              target="_blank"
              ><v-icon>mdi-twitter</v-icon></v-btn
            >
            <v-btn
              icon
              class="btn-icon"
              href="https://instagram.com/nsbmwie?igshid=YmMyMTA2M2Y="
              target="_blank"
              ><v-icon>mdi-instagram</v-icon></v-btn
            >
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-4">
      <v-row no-gutters justify="center">
        <span class="text-h2 font-weight-bold mt-4 about-ieee-nsbm">
          <span style="color: #ffa300">Computer Society</span> NSBM
        </span>
      </v-row>
      <v-row no-gutters justify="center">
        <span class="text-h5 font-medium mt-4 justify-center text-center">
          IEEE COMPUTER SOCIETY STUDENT BRANCH CHAPTER OF NSBM
        </span>
      </v-row>
      <v-row align="center" no-gutters class="DontBreakWords mt-8">
        <v-col class="px-5 chapter-section">
          <v-card-text class="pa-0 pb-2 text-justify mt-4">
            IEEE Computer Society (sometimes abbreviated as the Computer Society
            or CS) is a professional society of the Institute of Electrical and
            Electronics Engineers (IEEE). Its purpose and scope are "to advance
            the theory, practice, and application of computer and information
            processing science and technology" and the "professional standing of
            its members". The CS is the largest of 39 technical societies
            organized under the IEEE Technical Activities Board. <br /><br />
            The IEEE Computer Society sponsors workshops and conferences,
            publishes a variety of peer-reviewed literature, operates technical
            committees, and develops IEEE computing standards. It supports more
            than 200 chapters worldwide and participates in educational
            activities at all levels of the profession, including distance
            learning, accreditation of higher education programs in computer
            science, and professional certification in software engineering.
          </v-card-text>
          <v-card-text
            class="pa-0 text-justify mt-4 CSmoreDetails pl-4"
            style="color: #ffa300; font-weight: bold"
          >
            More Details
          </v-card-text>
          <v-card-actions class="CSmoreDetails">
            <v-btn
              class="cs-btn-icon"
              icon
              href="https://www.facebook.com/ieeecsnsbm"
              target="_blank"
              ><v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              icon
              class="cs-btn-icon"
              href="https://www.linkedin.com/company/ieee-student-branch-nsbm/mycompany/"
              target="_blank"
              ><v-icon>mdi-linkedin</v-icon></v-btn
            >
            <v-btn
              class="cs-btn-icon"
              icon
              href="https://twitter.com/nsbmieee"
              target="_blank"
              ><v-icon>mdi-twitter</v-icon></v-btn
            >
            <v-btn
              icon
              class="cs-btn-icon"
              href="https://www.instagram.com/nsbmieee/"
              target="_blank"
              ><v-icon>mdi-instagram</v-icon></v-btn
            >
          </v-card-actions>
        </v-col>
        <v-col>
          <v-img
            quality="98"
            format="webp"
            fit="contain"
            height="400"
            width="500"
            alt="Brand Logo"
            :src="'/Assets/Logos/CS_Logo.png'"
          />
        </v-col>
      </v-row>
    </v-container>
    <JoinUs />
  </div>
</template>

<script>
import JoinUs from "../components/JoinUs.vue";
export default {
  name: "aboutus",
  components: { JoinUs },
};
</script>

<style scoped>
.DontBreakWords {
  word-break: keep-all !important;
  font-size: 45px;
  line-height: 45px;
}

.about-ieee {
  line-height: 90px !important;
}

.moreDetails {
  text-align: right !important;
  justify-content: right !important;
  color: #702f8a !important;
}

.btn-icon {
  color: #702f8a !important;
  padding: 0px !important;
}

.CSmoreDetails {
  text-align: left !important;
  justify-content: left !important;
  color: #ffa300 !important;
}

.cs-btn-icon {
  color: #ffa300 !important;
  padding: 0px !important;
}

.IEEE-title {
  word-break: keep-all !important;
  font-size: 64px;
  line-height: 65px;
  color: #00629b;
}

@media only screen and (max-width: 768px) {
  .moreDetails {
    text-align: center !important;
    justify-content: center !important;
    color: #702f8a !important;
  }

  .CSmoreDetails {
    text-align: center !important;
    justify-content: center !important;
    color: #ffa300 !important;
  }
  .IEEE-title {
    word-break: keep-all !important;
    font-size: 55px;
    line-height: 65px;
    color: #00629b;
  }

  .IEEE_logo {
    width: 350px !important;
    height: 200px !important;
  }

  .about-ieee {
    line-height: 100px !important;
    margin-bottom: -50px !important;
    text-align: center !important;
    justify-items: center !important;
  }

  .about-ieee-nsbm {
    text-align: center !important;
    justify-items: center !important;
    line-height: 70px !important;
  }

  .about-ieee-nsbm-description {
    padding: 20px !important;
  }

  .chapter-section {
    padding: 0px !important;
  }
}
</style>
