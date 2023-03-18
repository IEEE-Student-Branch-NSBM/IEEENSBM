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
          <v-btn color="#00629B">IEEE Student Branch</v-btn>
          <v-btn color="#702F8A">WIE Affinity Group</v-btn>
          <v-btn color="#FFA300">CS Student Chapter</v-btn>
        </v-btn-toggle>
      </v-row>
      <v-row>
        <v-tabs v-model="tabs" centered class="mb-4" height="40" slider-size="3" color="#00273E">
          <v-tab :value="22">2022/23</v-tab>
          <v-tab :value="21">2021/22</v-tab>
          <v-tab :value="20">2020/21</v-tab>
          <v-tab :value="19">2019/20</v-tab>
          <v-tab :value="18">2018/19</v-tab>
        </v-tabs>
      </v-row>
      <v-row class="d-flex justify-center my-15 bg-surface-variant">
        <div v-for="(excom, i) in exComs">
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
    </v-container>
  </div>
</template>

<script>
import { excom_sb_2021 } from "~/content/excom/2021/SB";
import ExComCard from "~/components/ExComCard.vue";

export default {
  name: "excom",
  components: {
    ExComCard,
  },
  data: () => ({
    exComs: excom_sb_2021,
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
.excom-swap-tab-chapter .v-btn-toggle{
  width: 100%;
  background-color: transparent!important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.excom-swap-tab-chapter .v-btn{
  color: white!important;
  font-size: 20px;
  font-weight: 600;
  padding: 30px 20px!important;
  margin-inline: 10px;
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
