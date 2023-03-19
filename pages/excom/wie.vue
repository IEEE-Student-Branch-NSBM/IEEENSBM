<template>
    <div>
      <v-container class="mt-4">
        <v-row justify="center" no-gutters>
          <v-card-title
            class="heading-event text-center md:text-left hidden-sm-and-down text-uppercase"
          >
            Executive Committee</v-card-title
          >
          <v-card-title
            class="heading-event text-center md:text-left hidden-md-and-up text-uppercase"
          >
            Executive <br />
            Committee</v-card-title
          >
        </v-row>
        <v-row justify="center" no-gutters>
          <v-card-text class="para-event mx-sm-16 mx-0 mb-6">
            The Executive Committee of the IEEE NSBM Student Branch consists of
            the Chair, the Vice Chair, the Secretary, Founders, and fellow
            representatives from the Board. The purpose of the Executive Committee
            is to manage the daily operations of the community. They are
            authorized to establish and upgrade the rules, procedures,
            restrictions, resolutions, and requirements of the Board, as well as
            the IEEE NSBM Student Branch.
          </v-card-text>
        </v-row>
        <v-row class="excom-swap-tab-chapter">
          <v-btn-toggle v-model="toggle_multiple">
            <a href="."><v-btn color="#00629B">IEEE Student Branch</v-btn></a>
            <v-btn color="#702F8A">WIE Affinity Group</v-btn>
            <a href="cs"><v-btn color="#FFA300">CS Student Chapter</v-btn></a>
          </v-btn-toggle>
        </v-row>
        <v-row>
        <v-tabs v-model="wie_tabs" centered class="mb-4" height="40" slider-size="3" color="#00273E">
          <v-tab :value="22">2022/23</v-tab>
          <v-tab :value="21">2021/22</v-tab>
          <v-tab :value="20">2020/21</v-tab>
          <v-tab :value="19">2019/20</v-tab>
          <v-tab :value="18">2018/19</v-tab>
        </v-tabs>
      </v-row>
      <v-row class="justify-center">
        <v-tabs-items v-model="wie_tabs" class="w-100">
          <v-tab-item>
            <v-row class="d-flex justify-center my-15 bg-surface-variant">
              <div v-for="(excom, i) in wie_Excom18">
                <ExComCard 
                :key="i" 
                :name="excom.name" 
                :position="excom.position" 
                :image="excom.image_path"
                :linkedin="excom.linkedin" 
                :facebook="excom.facebook" 
                :email="excom.email"/>
              </div>
            </v-row>
          </v-tab-item> 
          <v-tab-item>
            <v-row class="d-flex justify-center my-15 bg-surface-variant">
              <div v-for="(excom, i) in wie_Excom19">
                <ExComCard 
                :key="i" 
                :name="excom.name" 
                :position="excom.position" 
                :image="excom.image_path"
                :linkedin="excom.linkedin" 
                :facebook="excom.facebook" 
                :email="excom.email"/>
              </div>
            </v-row>
          </v-tab-item> 
          <v-tab-item>
            <v-row class="d-flex justify-center my-15 bg-surface-variant">
              <div v-for="(excom, i) in wie_Excom20">
                <ExComCard 
                :key="i" 
                :name="excom.name" 
                :position="excom.position" 
                :image="excom.image_path"
                :linkedin="excom.linkedin" 
                :facebook="excom.facebook" 
                :email="excom.email"/>
              </div>
            </v-row>
          </v-tab-item> 
          <v-tab-item>
            <v-row class="d-flex justify-center my-15 bg-surface-variant">
              <div v-for="(excom, i) in wie_Excom21">
                <ExComCard 
                :key="i" 
                :name="excom.name" 
                :position="excom.position" 
                :image="excom.image_path"
                :linkedin="excom.linkedin" 
                :facebook="excom.facebook" 
                :email="excom.email"/>
              </div>
            </v-row>
          </v-tab-item> 
          <v-tab-item>
            <v-row class="d-flex justify-center my-15 bg-surface-variant">
              <div v-for="(excom, i) in wie_Excom22">
                <ExComCard 
                :key="i" 
                :name="excom.name" 
                :position="excom.position" 
                :image="excom.image_path"
                :linkedin="excom.linkedin" 
                :facebook="excom.facebook" 
                :email="excom.email"/>
              </div>
            </v-row>
          </v-tab-item> 
        </v-tabs-items>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { excom_wie_2018 } from "~/content/excom/2018/WIE";
import { excom_wie_2019 } from "~/content/excom/2019/WIE";
import { excom_wie_2020 } from "~/content/excom/2020/WIE";
import { excom_wie_2021 } from "~/content/excom/2021/WIE";
import { excom_wie_2022 } from "~/content/excom/2022/WIE";
import ExComCard from "~/components/ExComCard.vue";

export default {
  name: "excom",
  components: {
    ExComCard,
  },
  data: () => ({
    wie_Excom18: excom_wie_2018,
    wie_Excom19: excom_wie_2019,
    wie_Excom20: excom_wie_2020,
    wie_Excom21: excom_wie_2021,
    wie_Excom22: excom_wie_2022,
    wie_tabs: null,
    toggle_multiple: null,
  }),
};
</script>

<style scoped>

.DontBreakWords {
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  font-size: 45px;
  line-height: 45px;
}

.heading-event {
  letter-spacing: 0px !important;
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 30px !important;
  margin-top: 50px !important;
}

.heading-sub {
  letter-spacing: 0px !important;
  font-size: 86px;
  font-weight: 300;
  /* margin-bottom: 30px !important; */
}

.para-event {
  letter-spacing: 0px !important;
  padding-top: 10px;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  color: #2F234FCC;
}
.excom-swap-tab-chapter{
  font-size: 20px;
  margin-bottom: 30px;
}
.v-tab{
  font-size: 18px!important;
}
.v-tabs-items{
  background-color: transparent;
}
.excom-swap-tab-chapter .v-btn-toggle{
  width: 100%;
  background-color: transparent!important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.excom-swap-tab-chapter .v-btn{
  color: white!important;
  font-size: 20px;
  font-weight: 600;
  padding: 30px 20px!important;
  margin: 10px;
  border-radius: 10px!important;
}
@media only screen and (max-width: 1278px) {
  .heading-event {
    font-size: 70px;
    line-height: 40px;
    font-weight: 300;
  }

  .heading-sub {
    font-size: 60px;
    /* line-height: 40px; */
    font-weight: 300;
  }
}

@media only screen and (max-width: 1262px) {
  .heading-event {
    font-size: 45px;
    line-height: 50px;
    font-weight: 600;
  }
  .heading-sub {
    font-size: 60px;
    /* line-height: 40px; */
    font-weight: 500;
  }
}
</style>

  