<template>
  <div>
    <v-sheet class="vsheet">
      <v-container fluid class="joinus-topBanner">
        <v-row align="center" no-gutters class="DontBreakWords mt-8">
          <v-col class="px-10 firstCard">
            <span class="titles pa-0"
              >Our <span style="color: #00629b"> Vision</span>
            </span>
            <v-card-text class="pa-0 pb-2 mt-4 text-justify">
              A world in which engineers and scientists are respected for their
              exemplary ethical behavior and the IEEE and its Ethics & Member
              Conduct Committee are recognized as a major drive in this regard.
            </v-card-text>
          </v-col>
          <v-col>
            <v-img
              quality="98"
              format="webp"
              fit="contain"
              class="rounded-lg"
              height="350"
              width="800"
              alt="Brand Logo"
              src="/Assets/Update/Three.jpg"
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
              width="800"
              alt="Brand Logo"
              src="/Assets/Update/Four.jpg"
            />
          </v-col>
          <v-col class="ml-4 px-10">
            <span class="titles pa-0"
              >Our <span style="color: #00629b">Mission</span>
            </span>
            <v-card-text class="pa-0 pb-2 text-justify mt-4">
              The Student Chapter of IEEE NSBM advises the community on ethics
              policy and concerns as well as fostering awareness on ethical
              issues and promoting ethical behavior amongst individuals and
              organizations working within the IEEE fields of interest.
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-sheet>
      <v-container>
        <v-row no-gutters justify="center">
          <span class="membershipTitle mt-4 hidden-sm-and-down">
            How to get a IEEE Membership
          </span>
          <span class="membershipTitle mt-4 hidden-md-and-up align-center">
            How to get a IEEE <br />
            Membership
          </span>
        </v-row>
        <v-row>
          <div class="my-3 text-center">
            Reach your full potential as part of the world’s largest technology
            community. Membership in IEEE is open to individuals who by
            education or experience give evidence of competence in an
            IEEE-designated field. Refer to the informational video below to get
            an idea. In contrast <br />
            <u>
              <a
                href="https://drive.google.com/file/d/1aOtxyQboBomTCiRLJPZEuQjaS6HwPCfJ/view?usp=sharing"
                >click here to download the instructional PDF</a
              ></u
            >
          </div>
        </v-row>
      </v-container>
    </v-sheet>
    <v-container class="my-5">
      <v-row justify="center">
        <section style="width: 100%">
          <iframe
            src="https://www.youtube.com/embed/bFQzQ9av6eM"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            frameborder="0"
            scrolling="no"
            width="100%"
            height="500"
            picture-in-picture
          ></iframe>
        </section>
      </v-row>
      <v-row no-gutters justify="center">
        <span class="text-h7 font-weight-bold mt-8">
          Website :
          <i style="color: #00629b" class="font-weight-medium"
            ><a target="_blank" href="www.ieee.or">www.ieee.org</a></i
          >
        </span>
      </v-row>
    </v-container>
    <v-container class="mb-10">
      <v-row justify="center">
        <v-col>
          <section style="width: 100%">
            <iframe
              width="100%"
              height="250"
              src="//ieeetv.ieee.org/player/embed_play/221931/auto"
              title="IEEE NSBM VIDEO"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              picture-in-picture
            ></iframe>
          </section>
        </v-col>
        <v-col>
          <section style="width: 100%">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/el0A0U7bJ6c"
              title="IEEE NSBM VIDEO"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              picture-in-picture
            ></iframe>
          </section>
        </v-col>
        <v-col>
          <section style="width: 100%">
            <iframe
              width="100%"
              height="250"
              src="//ieeetv.ieee.org/player/embed_play/221926/auto"
              title="IEEE NSBM VIDEO"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              picture-in-picture
            ></iframe>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Volunteer",
};
</script>

<style scoped>
.vsheet {
  padding-top: auto;
}
.titles {
  font-size: 60px;
  font-weight: 700;
}
.membershipTitle {
  font-size: 55px;
  font-weight: 600;
  text-align: center;
}

.joinus-topBanner {
  padding-left: 80px;
  padding-right: 80px;
  margin-top: 40px;
}

@media only screen and (max-width: 1388px) {
  .titles {
    font-size: 50px;
  }
}

@media only screen and (max-width: 752px) {
  .membershipTitle {
    font-size: 40px;
  }
  .joinus-topBanner {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media only screen and (max-width: 768px) {
  .titles {
    font-size: 40px;
  }
}
</style>
