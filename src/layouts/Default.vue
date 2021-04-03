<template>
  <v-app>
    <header class="header">
      <v-app-bar
          color="#00629B"
          app
          dense
      >
        <v-row class="hidden-sm-and-down">
          <v-btn class="IEEE" elevation="0" dark>IEEE.org</v-btn>
          <v-btn class="IEEE" elevation="0" dark>IEEE Xplore Digital Library</v-btn>
          <v-btn class="IEEE" elevation="0" dark>IEEE Standards</v-btn>
          <v-btn class="IEEE" elevation="0" dark>IEEE Spectrum</v-btn>
          <v-btn class="IEEE" elevation="0" dark>More Sites</v-btn>
        </v-row>
      </v-app-bar>
    </header>


      <v-main class="grey lighten-2">
        <v-card class="IEEE ml-4 mr-4">
          <v-card-title>
            <v-row no-gutters justify="space-between" align="center">
              <g-image alt="NSBM IEEE Student" src="~/assets/Logos/IEEE_SB_Logo.png" quality="100" blur="0" width="256"/>
              <g-image alt="IEEE Logo" class="hidden-sm-and-down" src="~/assets/Logos/IEEE_Logo.png" quality="100" blur="0" width="256"/>
            </v-row>

          </v-card-title>
          <v-tabs background-color="#00629B" dark slider-size="4" class="hidden-sm-and-down IEEE">
            <v-tab to="/">Home</v-tab>
            <v-tab to="/wie">WIE</v-tab>
            <v-tab to="/blog">Blog</v-tab>
            <v-tab to="/xcom">XCom</v-tab>
            <v-tab to="/Membership">Membership</v-tab>
            <v-tab to="/contact">Contact</v-tab>
            <v-tab to="/About">About</v-tab>
          </v-tabs>
          <slot></slot>
        </v-card>
      </v-main>

  </v-app>
</template>

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

.IEEE{
  background-color: #00629B !important;
}

.IEEEFont{
  color: #00629B !important;;
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
