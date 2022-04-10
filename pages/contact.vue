<template>

    <v-container class="py-10">
      <v-row no-gutters>
        <v-col cols="6">
          <v-card-title class="formTitle">Contact Us
            <span class="formSubTitle">Our friendly team want to hear from you</span>
          </v-card-title>
          <v-container>
            <v-form method="post" action="https://formspree.io/f/mpzkzwdw" v-model="valid">
            <v-row>
              <v-col><v-text-field name="fname" id="full-name" outlined label="First Name"></v-text-field></v-col>
              <v-col><v-text-field name="lname" id="full-name" outlined label="Second Name"></v-text-field></v-col>
            </v-row>
              <v-row class="secondForm">
                <v-col><v-text-field  name="_replyto" id="email-address" outlined label="Email"></v-text-field></v-col>
              </v-row>
              <v-textarea name="message" id="message" outlined label="Type Message"></v-textarea>
              <v-row no-gutters justify="start">
                <v-btn block type="submit" min-width="256" class="moreButton" large outlined>Send Message</v-btn>
              </v-row>
            </v-form>
          </v-container>
        </v-col>
        <v-col class="hidden-sm-and-down"  cols="6">
          <nuxt-img
            quality="100"
            format="png"
            fit="contain"
            sizes="sm:75vw md:50vw lg:100%"
            src="/Assets/Other/Contact.jpg"/>
        </v-col>

      </v-row>
    </v-container>

</template>

<script>
export default {
  name: "contact"
}
</script>

<style scoped>
.formTitle{
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0px;
}
.formSubTitle{
  margin-top: 20px;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: -0px;
}
.secondForm{
  margin-top: -25px;
}

.moreButton {
  background-color: #00629B;
  border-radius: 10px;
  color: white;
  text-align: center;
  text-decoration: none;
}
</style>
