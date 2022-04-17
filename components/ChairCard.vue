<template>
  <v-row no-gutters justify="center" class="ml-16 mt-10">
    <v-col
      ><div id="card" class="card py-4">
        <div class="card-info">
          <div class="card-image mb-3">
            <v-img
              contain
              aspect-ratio="1"
              quality="100"
              format="webp"
              alt="Chair Persons"
              width="120px"
              src="/Assets/Chair/Srilal.png"
              class="card-avatar card-avatar--circle mx-auto"
            />
          </div>
          <div class="card-fields py-3">
            <h1 class="ChairName">Srilal Sachintha</h1>
            <h3 class="ChairPosition">Chairperson - IEEE Student Branch</h3>
          </div>
          <div class="social-media-chairs">
            <v-btn icon><v-icon>mdi-facebook</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-linkedin</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-twitter</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-instagram</v-icon></v-btn>
          </div>
          <div class="py-2">
            <v-btn
              height="40px"
              width="120"
              class="chairButtonEmail"
              outlined
              justify="center"
            >
              Email
            </v-btn>
            <v-btn
              height="40px"
              width="120"
              class="chairButtonConnect"
              outlined
              justify="center"
            >
              Connect
            </v-btn>
          </div>
        </div>
      </div></v-col
    >
    <v-col>
      <div id="card" class="card py-4">
        <div class="card-info">
          <div class="card-image mb-3">
            <v-img
              contain
              aspect-ratio="1"
              quality="100"
              format="webp"
              alt="Chair Persons"
              width="120px"
              src="/Assets/Chair/Lihini.png"
              class="card-avatar card-avatar--circle mx-auto"
            />
          </div>
          <div class="card-fields py-3">
            <h1 class="ChairName">Lihini Nisansala</h1>
            <h3 class="ChairPosition">
              Chairperson - IEEE Women In Engineering
            </h3>
          </div>
          <div class="social-media-chairs">
            <v-btn icon><v-icon>mdi-facebook</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-linkedin</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-twitter</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-instagram</v-icon></v-btn>
          </div>
          <div class="py-2">
            <v-btn
              height="40px"
              width="120"
              class="chairButtonEmail"
              outlined
              justify="center"
            >
              Email
            </v-btn>
            <v-btn
              height="40px"
              width="120"
              class="chairButtonConnect"
              outlined
              justify="center"
            >
              Connect
            </v-btn>
          </div>
        </div>
      </div>
    </v-col>
    <v-col>
      <div id="card" class="card py-4">
        <div class="card-info">
          <div class="card-image mb-3">
            <v-img
              contain
              aspect-ratio="1"
              quality="100"
              format="webp"
              alt="Chair Persons"
              width="120px"
              src="/Assets/Chair/Sanjula.png"
              class="card-avatar card-avatar--circle mx-auto"
            />
          </div>
          <div class="card-fields py-3">
            <h1 class="ChairName">Sanjula De Alwis</h1>
            <h3 class="ChairPosition">Chairperson - IEEE Computer Society</h3>
          </div>
          <div class="social-media-chairs">
            <v-btn icon><v-icon>mdi-facebook</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-linkedin</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-twitter</v-icon></v-btn>
            <v-btn icon><v-icon>mdi-instagram</v-icon></v-btn>
          </div>
          <div class="py-2">
            <v-btn
              height="40px"
              width="120"
              class="chairButtonEmail"
              outlined
              justify="center"
            >
              Email
            </v-btn>
            <v-btn
              height="40px"
              width="120"
              class="chairButtonConnect"
              outlined
              justify="center"
            >
              Connect
            </v-btn>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ChairCard",
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
}
.chairButtonConnect {
  background-color: #00609c;
  border-radius: 10px;
  color: white;
  text-align: center;
  text-decoration: none;
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
</style>
