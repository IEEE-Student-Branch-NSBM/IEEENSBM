<template>
  <v-row no-gutters class="mt-10" justify="center">
    <v-card
      class="card mx-auto"
      elevation="0"
      v-for="(chair, i) in Chairs"
      :key="i"
    >
      <v-row no-gutters>
        <v-img
          contain
          aspect-ratio="1"
          quality="100"
          format="webp"
          alt="Chair Persons"
          width="120px"
          :src="chair.image"
          class="card-avatar card-avatar--circle mx-auto my-7"
        />
      </v-row>
      <v-row no-gutters>
        <h1 class="ChairName">{{ chair.name }}</h1>
      </v-row>
      <v-row no-gutters>
        <h3 class="ChairPosition">{{ chair.chair_role }}</h3>
      </v-row>
      <v-row no-gutters>
        <a :href="chair.facebook" target="_blank"
          ><v-btn icon><v-icon>mdi-facebook</v-icon></v-btn></a
        >
        <a :href="chair.linkedin" target="_blank"
          ><v-btn icon><v-icon>mdi-linkedin</v-icon></v-btn></a
        >
        <a :href="chair.twitter" target="_blank"
          ><v-btn icon><v-icon>mdi-twitter</v-icon></v-btn></a
        >
        <a :href="chair.instagram" target="_blank"
          ><v-btn icon><v-icon>mdi-instagram</v-icon></v-btn></a
        >
      </v-row>
      <v-row no-gutters class="mb-8 mt-3">
        <a :href="chair.email"
          ><v-btn
            height="40px"
            width="120"
            class="chairButtonEmail"
            outlined
            justify="center"
          >
            Email
          </v-btn></a
        >
        <a :href="chair.linkedin" target="_blank">
          <v-btn
            height="40px"
            width="120"
            class="chairButtonConnect"
            outlined
            justify="center"
          >
            Connect
          </v-btn>
        </a>
      </v-row>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: "ChairCard",
  data: () => ({
    Chairs: [
      {
        name: "Srilal Sachintha",
        chair_role: "Chairperson - IEEE Student Branch",
        image: "/Assets/Chair/Srilal.png",
        facebook: "https://www.facebook.com/srilal.sachintha",
        linkedin: "https://www.linkedin.com/in/srilalsachintha/",
        twitter: "https://twitter.com/SrilalSachintha",
        instagram: "https://www.instagram.com/srilal.sachintha/",
        email: "mailto:name@Srilal@ieee.org",
      },
      {
        name: "Lihini Nisansala",
        chair_role: "Chairperson - IEEE Women In Engineering",
        image: "/Assets/Chair/Lihini.png",
        facebook: "https://www.facebook.com/lihini.nisansala",
        linkedin: "https://www.linkedin.com/in/lihininisansala/",
        twitter: "https://twitter.com/LihiniNisansala",
        instagram: "https://www.instagram.com/lihini.nisansala/",
        email: "mailto:name@lihininisansala@ieee.org",
      },
      {
        name: "Sanjula De Alwis",
        chair_role: "Chairperson - IEEE Computer Society",
        image: "/Assets/Chair/Sanjula.png",
        facebook: "https://www.facebook.com/sanjula.de.alwis",
        linkedin: "https://www.linkedin.com/in/sanjuladealwis/",
        twitter: "https://twitter.com/SanjulaDeAlwis",
        instagram: "https://www.instagram.com/sanjula.de.alwis/",
        email: "mailto:name@sanjulade@ieee.org",
      },
    ],
  }),
};
</script>

<style scoped>
.chairButtonEmail {
  border: 1px solid #00609c;
  background-color: #ffffff;
  border-radius: 10px;
  color: #00609c;
  text-align: center;
  text-decoration: none;
  margin-right: 4px;
}
.chairButtonConnect {
  background-color: #00609c;
  border-radius: 10px;
  color: white;
  text-align: center;
  text-decoration: none;
  margin-left: 4px;
}
.card {
  align-items: center;
  background: #fff;
  border-radius: 0.3em;
  border: 0.0625em solid mix(#fff, #abbaab, 20%);
  box-shadow: 0 0 1.7em 0 rgba(#abbaab, 0.55);
  display: flex;
  flex-direction: column;
  max-width: 18em;
  position: relative;
  width: 100% !important;
}

.card-info {
  padding: 1.2em 1em;
  position: relative;
  text-align: center;
  width: 100%;
}

.card-image {
  margin: auto;
  max-width: ((128px/16px) * 1em);
}

.card--is-edit .card-image {
  margin-bottom: 1em;
}

.card-avatar {
  display: block;
  height: auto;
  width: 100%;
}

.card-avatar--circle {
  border-radius: 50%;
}

.ChairName {
  font-size: 22px;
  font-weight: 700;
}
.ChairPosition {
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0.2em;
}

#card-1 {
  margin-right: 50px;
}

#card-3 {
  margin-left: 50px;
}
@media only screen and (max-width: 768px) {
  .card {
    margin-bottom: 20px;
  }
}
</style>
