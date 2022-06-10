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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575796299669!2d80.03938421460494!3d6.821334421522082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1654833879798!5m2!1sen!2slk"
          width="750"
          height="500"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
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
