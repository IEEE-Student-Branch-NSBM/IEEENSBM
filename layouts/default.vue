<template>
  <v-app>
    <v-navigation-drawer
      :color="BackColor"
      v-bind:class="{WIE : Path === 'wie' , CS : Path === 'cs'}"
      v-model="NavDrawer" temporary app>
      <v-list>
        <v-list-item>
          <v-row justify="center" no-gutters>
            <v-img alt="NSBM IEEE Student" src="/Assets/Logos/IEEE_SB_Logo.png" max-width="128"/>
          </v-row>
        </v-list-item>

        <v-list-item :key="MenuItem.Name" v-for="MenuItem in Menu" :to="MenuItem.To" link dark>
          <v-list-item-title style="color:white;">{{ MenuItem.Name }}</v-list-item-title>
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

          <v-btn href="https://www.ieee.org" target="_blank" class="IEEENoCaps" color="transparent" elevation="0" dark>IEEE.org</v-btn>
          <v-btn href="https://ieeexplore.ieee.org" class="IEEENoCaps" color="transparent" elevation="0" dark>IEEE <i>Xplore</i>&nbspDigital Library</v-btn>
          <v-btn href="https://standards.ieee.org" class="IEEENoCaps" color="transparent" elevation="0" dark>IEEE Standards</v-btn>
          <v-btn href="https://spectrum.ieee.org" class="IEEENoCaps" color="transparent" elevation="0" dark>IEEE Spectrum</v-btn>
          <v-btn href="https://www.ieee.org/sitemap" class="IEEENoCaps" color="transparent" elevation="0" dark>More Sites</v-btn>
          <v-spacer></v-spacer>
          <v-btn href="https://www.ieee.org/join" class="IEEENoCaps" color="transparent" elevation="0" dark>Join IEEE</v-btn>
        </v-row>
      </v-app-bar>
    </header>

    <v-main class="grey lighten-2">

      <v-card :color="BackColor" class="ml-4 mr-4 rounded-b-0">
        <v-card-title>
          <v-row no-gutters justify="space-between" align="center">
            <v-img alt="NSBM IEEE Student"  src="/Assets/Logos/IEEE_SB_Logo.png" max-width="180"/>
            <v-img alt="IEEE Logo" class="hidden-sm-and-down" src="/Assets/Logos/IEEE_Logo.png" max-width="180"/>
          </v-row>

        </v-card-title>

          <v-tabs @change="ChangeColor" :background-color="BackColor" dark slider-size="4" class="hidden-sm-and-down">
            <v-tab :key="MenuItem.Name" v-for="MenuItem in Menu" :to="MenuItem.To">{{ MenuItem.Name }}</v-tab>
          </v-tabs>


      </v-card>
      <v-card flat class="rounded-t-0 ml-4 mr-4 mb-4 IEEE">
        <nuxt/>
      </v-card>
    </v-main>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      Path:'',
      NavDrawer:false,
      BackColor:'#00629B',

      Menu:[
        {
          Name:'Home',
          To:'/'
        },
        {
          Name:'WIE',
          To:'/wie'
        },
        {
          Name:'CS',
          To:'/cs'
        },
        {
          Name:'Events',
          To:'/events'
        },
        {
          Name:'Blog',
          To:'/blog'
        },
        {
          Name:'EXCOM',
          To:'/excom'
        },
        {
          Name:'Membership',
          To:'/membership'
        },
        {
          Name:'Contact',
          To:'/contact'
        },

      ]
    }
  },
  methods:{
    ChangeColor(){
      console.log(this.$route.name);
      if(this.$route.name === 'wie'){
        this.BackColor = '#702f8a';
      } else if(this.$route.name === 'cs'){
        this.BackColor =  '#FFA300';
      } else {
        this.BackColor =  '#00629B';
      }
    }
  },

  mounted() {
    this.Path = this.$route.path.replaceAll('/','');
  }
}
</script>

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
