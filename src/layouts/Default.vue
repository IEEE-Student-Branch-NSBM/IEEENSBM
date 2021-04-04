<template>
  <v-app>
    <v-navigation-drawer class="IEEE" v-bind:class="{WIE : Path === 'wie' , CS : Path === 'cs'}" v-model="NavDrawer" temporary app>
      <v-list>
        <v-list-item>
          <v-row justify="center" no-gutters>
            <g-image alt="NSBM IEEE Student" src="~/assets/Logos/IEEE_SB_Logo.png" quality="100" blur="0" width="128"/>
          </v-row>
        </v-list-item>

        <v-list-item to="/" class="mt-4" link dark>
          <v-list-item-title style="color:white;">Home</v-list-item-title>
        </v-list-item>

        <v-list-item to="wie" link dark>
          <v-list-item-title style="color:white;">WIE</v-list-item-title>
        </v-list-item>

        <v-list-item to="cs" link dark>
          <v-list-item-title style="color:white;">CS</v-list-item-title>
        </v-list-item>

        <v-list-item to="blog" link dark>
          <v-list-item-title style="color:white;">Blog</v-list-item-title>
        </v-list-item>

        <v-list-item to="excom" link dark>
          <v-list-item-title style="color:white;">ExCom</v-list-item-title>
        </v-list-item>

        <v-list-item to="/membership" link dark>
          <v-list-item-title style="color:white;">Membership</v-list-item-title>
        </v-list-item>

        <v-list-item to="/contact" link dark>
          <v-list-item-title style="color:white;">Contact</v-list-item-title>
        </v-list-item>

        <v-list-item to="/about" link dark>
          <v-list-item-title style="color:white;">About</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <header class="header">
      <v-app-bar
          :color="BackColor"
          app
          dense
      >
        <v-btn class="hidden-md-and-up" @click="NavDrawer = true" icon>
          <v-icon color="white">mdi-menu</v-icon>
        </v-btn>
        <v-row class="hidden-sm-and-down">

          <v-btn href="https://www.ieee.org" target="_blank" class="IEEENoCaps" :color="BackColor" elevation="0" dark>IEEE.org</v-btn>
          <v-btn href="https://ieeexplore.ieee.org" class="IEEENoCaps" :color="BackColor" elevation="0" dark>IEEE <i>Xplore</i>&nbspDigital Library</v-btn>
          <v-btn href="https://standards.ieee.org" class="IEEENoCaps" :color="BackColor" elevation="0" dark>IEEE Standards</v-btn>
          <v-btn href="https://spectrum.ieee.org" class="IEEENoCaps" :color="BackColor" elevation="0" dark>IEEE Spectrum</v-btn>
          <v-btn href="https://www.ieee.org/sitemap" class="IEEENoCaps" :color="BackColor" elevation="0" dark>More Sites</v-btn>
          <v-spacer></v-spacer>
          <v-btn href="https://www.ieee.org/join" class="IEEENoCaps" :color="BackColor" elevation="0" dark>Join IEEE</v-btn>
        </v-row>
      </v-app-bar>
    </header>


      <v-main class="grey lighten-2">

          <v-card :color="BackColor" class="ml-4 mr-4 rounded-b-0">
            <v-card-title>
              <v-row no-gutters justify="space-between" align="center">
                <g-image alt="NSBM IEEE Student" src="~/assets/Logos/IEEE_SB_Logo.png" quality="100" blur="0" width="256"/>
                <g-image alt="IEEE Logo" class="hidden-sm-and-down" src="~/assets/Logos/IEEE_Logo.png" quality="100" blur="0" width="256"/>
              </v-row>

            </v-card-title>
            <v-tabs v-bind:class="{WIE : Path === 'wie' , CS : Path === 'cs'}" dark slider-size="4" class="hidden-sm-and-down IEEE">
              <v-tab to="/">Home</v-tab>
              <v-tab to="/wie">WIE</v-tab>
              <v-tab to="/cs">CS</v-tab>
              <v-tab to="/blog">Blog</v-tab>
              <v-tab to="/excom">ExCom</v-tab>
              <v-tab to="/membership">Membership</v-tab>
              <v-tab to="/contact">Contact</v-tab>
              <v-tab to="/about">About</v-tab>
            </v-tabs>

          </v-card>
          <v-card flat v-bind:class="{WIE : Path === 'wie' , CS : Path === 'cs'}" class="rounded-t-0 ml-4 mr-4 IEEE">
            <slot></slot>
          </v-card>
      </v-main>

  </v-app>
</template>

<script>
export default {
  data(){
    return {
      Path:'',
      NavDrawer:false
    }
  },

  computed:{
    BackColor: function (){
      if(this.Path === 'wie'){
        return '#702f8a';
      } else if(this.Path === 'cs'){
        return '#FFA300';
      } else {
        return '#00629B';
      }
    }
  },

  mounted() {
    this.Path = this.$route.path.replaceAll('/','');
  }
}
</script>

<style scoped>
</style>

<style>


html{
  overflow-y: auto;
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;

}

.v-tabs-bar{
  background-color: #ffffff00 !important;
  border-color: #ffffff00 !important;
}

.IEEE{
  background-color: #00629B !important;
}

.IEEEFont{
  color: #00629B !important;
}

.WIE {
  background-color: #702f8a !important;
}

.WIEFont {
  color: #702f8a !important;
}

.CS {
  background-color: #FFA300 !important;
}

.CSFont {
  color: #FFA300 !important;
}

.IEEENoCaps {
  text-transform: none !important;
}

.IEEEHand{
  cursor: pointer !important;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.nav__link {
  margin-left: 20px;
}
</style>
