<template>
  <div>
    <v-sheet class="pb-8">
      <v-container>
        <v-row align="center" no-gutters class="DontBreakWords mt-8">
          <v-col class="order-last order-md-first">
            <v-img
              quality="98"
              format="webp"
              fit="contain"
              class="rounded-lg"
              height="350"
              alt="Brand Logo"
              :src="'/Assets/Aboutus/aboutIEEE.png'"
            />
          </v-col>
          <v-col class="ml-sm-4 ml-0 px-sm-10 px-5">
            <v-card-title
              class="
                pa-0
                pb-2
                font-weight-bold
                text-sm-right
                text-center
                justify-sm-end
                justify-center
                IEEE-title
              "
              >About IEEE</v-card-title
            >
            <v-card-text class="pa-0 pb-10 pb-sm-2 pt-8 pt-sm-0 right text-sm-right text-center float-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container>
        <v-row no-gutters justify="center">
          <span class="text-h3 font-weight-bold mt-4">
            About <span style="color: #00629b">IEEE NSBM</span> Student Branch
          </span>
        </v-row>
        <v-row>
          <div class="my-3 text-sm-center text-left mx-sm-0 mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </div>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet class="mb-10 mt-10">
      <v-row>
        <v-col v-for="n in 3" :key="n" class="d-flex child-flex" cols="12" sm="4">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-sheet>
    <v-sheet class="pt-8 pb-8">
      <v-container>
        <v-row align="center" no-gutters class="DontBreakWords mt-8">
          <v-col class="px-sm-10 px-0 firstCard">
            <span class="pa-0 text-h3 text-sm-h2 font-weight-bold"
              >Our <span style="color: #00629b"> Vision</span>
            </span>
            <v-card-text class="pa-0 pb-2 mt-4 mb-5 mb-sm-0 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
              src="https://picsum.photos/510"
            />
          </v-col>
        </v-row>
        <v-row align="center" no-gutters class="DontBreakWords mt-8">
          <v-col class="order-last order-md-first">
            <v-img
              quality="98"
              format="webp"
              fit="contain"
              class="rounded-lg"
              height="350"
              alt="Brand Logo"
              src="https://picsum.photos/510"
            />
          </v-col>
          <v-col class="ml-4 px-sm-10 px-0 mt-10 mt-sm-0">
            <span class="pa-0 text-h3 text-sm-h2 font-weight-bold"
              >Our <span style="color: #00629b">Mission</span>
            </span>
            <v-card-text class="pa-0 pb-2 text-justify mt-4 mb-5 mb-sm-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container>
        <v-row no-gutters justify="center">
          <span class="text-h4 text-sm-h3 font-weight-bold mt-4 mx-5 mx-sm-0">
            About <span style="color: #702f8a">WIE NSBM</span> Affinity Group
          </span>
        </v-row>
        <v-row align="center" no-gutters class="DontBreakWords mt-8">
          <v-col class="order-last order-md-first">
            <v-img
              quality="98"
              format="webp"
              fit="contain"
              class="rounded-lg my-4"
              height="350"
              alt="Brand Logo"
              :src="'/Assets/Aboutus/WIE.png'"
            />
          </v-col>
          <v-col class="ml-sm-4 ml-0 px-sm-10 px-5">
            <v-card-text class="pa-0 pb-2 text-justify mt-4 mb-5 mb-sm-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but alsothe leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
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
                href="https://www.facebook.com/ieeensbm/"
                target="_blank"
                ><v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                icon
                class="btn-icon"
                href="https://www.linkedin.com/company/ieee-student-branch-nsbm/mycompany/"
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
                href="https://www.instagram.com/nsbmieee/"
                target="_blank"
                ><v-icon>mdi-instagram</v-icon></v-btn
              >
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="mt-4">
        <v-row no-gutters justify="center">
          <span class="text-h4 text-sm-h3 font-weight-bold mt-4 mx-5 mx-sm-0">
            About <span style="color: #ffa300">Computer Society</span> NSBM
          </span>
        </v-row>
        <v-row align="center" no-gutters class="DontBreakWords mt-8">
          <v-col class="ml-sm-4 ml-0 px-sm-10 px-5">
            <v-card-text class="pa-0 pb-2 text-justify mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but alsothe leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
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
                href="https://www.facebook.com/ieeensbm/"
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
              class="rounded-lg my-4"
              height="350"
              alt="Brand Logo"
              :src="'/Assets/Aboutus/cs.png'"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
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
}
</style>
