<template>
  <v-card
          :key="id"
          class="mx-0 mx-md-15 mb-10 rounded-lg excom-card"
          height="350"
          width="350">
          <div class="excom-card-default">
            <div>
              <v-img
                :src="image"
                height="200"
                width="200"
                class=" rounded-circle mx-auto"
                contain></v-img>
            </div>
            <v-card-title class="excom_name justify-center">
              {{ name }}
            </v-card-title>
            <v-card-subtitle class="excom_position">
              {{ position }}
            </v-card-subtitle>
          </div>
          <div class="excom-card-hover">
            <v-card-actions class="justify-center flex-column">
              <div>
                <a :href="linkedin" target="_blank"><v-btn icon>
                  <v-icon size="25" color="#2F234F">mdi-linkedin</v-icon>
                </v-btn></a>
                <a :href="facebook" target="_blank"><v-btn icon>
                  <v-icon size="25" color="#2F234F">mdi-facebook</v-icon>
                </v-btn></a>
              </div>
              <div class="mt-5">
                <a :href="'mailto:name@'+email"><v-btn color="primary" outlined>
                  Email
                </v-btn></a>
              </div>
            </v-card-actions>
          </div>
        </v-card>
</template>

<script>
export default {
  props:{
    id: Number,
    name: String,
    position: String,
    image: String,
    linkedin: String,
    facebook: String,
    email: String
  },
  name: "ExComCard"
}
</script>

<style scoped>
.excom-card{
  box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07)!important;
  transition: all 0.5s ease-in-out!important;
  transition-delay: 0.3s!important;
}
.excom-card-default{
  height: 350px;
  padding-top: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out!important;
}
.excom-card-hover{
  height: 0px;
  opacity: 0;
  transition: all 0.5s ease-in-out!important;
}
.excom-card:hover{
  height: 450px!important;
  transition: all 0.5s ease-in-out!important;
}
.excom-card:hover .excom-card-default{
  height: 310px;
  padding-top: 40px;
  transition: all 0.5s ease-in-out!important;
}
.excom-card:hover .excom-card-hover{
  height: 120px;
  opacity: 1;
  transition: all 0.5s ease-in-out!important;
  transition-delay: 0.2s!important;
}
.excom_name {
  font-size: 18px;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  font-weight: bold;
  text-align: center;
  color: #2F234F;
  text-transform: uppercase;
}
.excom_position {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #737373 !important;
  text-transform: uppercase;
  letter-spacing: 0.2px;
}
</style>
