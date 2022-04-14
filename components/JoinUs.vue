<template>
  <v-container>
    <v-row align="center" no-gutters class="DontBreakWords py-8 mb-5">
      <v-col>
        <v-img
          quality="98"
          format="webp"
          fit="contain"
          mx-auto
          width="600"
          alt="Brand Logo"
          src="/Assets/Other/JoinUs.png"
        />
      </v-col>
      <v-col class="px-10">
        <v-card-title class="pa-0 pb-2 JoinUs"
          >Be part of our creative community</v-card-title
        >
        <v-card-text class="pa-0 pb-2 text-justify JoinUsPara">
          We love what we do and we do it with passion. We value the
          experimentation of the message and smart incentives.
        </v-card-text>
        <v-btn class="JoinUsButton px-10 py-5" outlined justify="center">
          Join Us
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.JoinUs {
  font-size: 40px;
  font-weight: bold;
  line-height: 40px;
}

.JoinUsPara {
  margin-top: 10px;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
}

.JoinUsButton {
  background-color: #00609c;
  border-radius: 10px;
  color: white;
  text-align: center;
  text-decoration: none;
  width: 40%;
  font-weight: 300;
  color: #ffffff !important;
  margin-top: 10px;
}
</style>
<script>
export default {
  name: "JoinUs",
};
</script>

