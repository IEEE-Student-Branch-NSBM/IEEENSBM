<template>
  <v-sheet class="py-10">
    <v-row no-gutters align-content="center">
      <v-col cols="12" sm="6" class="px-10">
        <v-card-title class="formTitle">Contact Us </v-card-title>
        <span class="formSubTitle ml-5"
          >Our friendly team want to hear from you</span
        >
        <v-container>
          <v-form method="post" action="https://formspree.io/f/mpzkzwdw">
            <v-row>
              <v-col
                ><v-text-field
                  name="fname"
                  id="full-name"
                  outlined
                  label="First Name"
                ></v-text-field
              ></v-col>
              <v-col
                ><v-text-field
                  name="lname"
                  id="full-name"
                  outlined
                  label="Second Name"
                ></v-text-field
              ></v-col>
            </v-row>
            <v-row class="secondForm">
              <v-col
                ><v-text-field
                  name="_replyto"
                  id="email-address"
                  outlined
                  label="Email"
                ></v-text-field
              ></v-col>
            </v-row>
            <v-textarea
              name="message"
              id="message"
              outlined
              label="Type Message"
            ></v-textarea>
            <v-row no-gutters justify="start">
              <v-btn
                block
                type="submit"
                min-width="256"
                class="moreButton"
                large
                outlined
                >Send Message</v-btn
              >
            </v-row>
          </v-form>
        </v-container>
      </v-col>
      <v-col class="hidden-sm-and-down" cols="12" sm="6">
        <GmapMap
          :center="{ lat: 6.8213, lng: 80.0416 }"
          :zoom="18"
          map-type-id="terrain"
          style="width: 750px; height: 500px"
          :options="{
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: true,
            disableDefaultUi: false,
          }"
        />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: "contact",
};
</script>

<style scoped>
.formTitle {
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0px;
}


.formSubTitle {
  margin-top: 12px;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: -0px;
}
.secondForm {
  margin-top: -40px;
}

.moreButton {
  background-color: #00629b;
  border-radius: 10px;
  color: white;
  text-align: center;
  text-decoration: none;
}
@media only screen and (max-width: 768px) {
  .formTitle {
    font-size: 35px;
    font-weight: 500;
    letter-spacing: -0px;
  }
  .formSubTitle {
  margin-top: 12px;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: -0px;
}
}
</style>
