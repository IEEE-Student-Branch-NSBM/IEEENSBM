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
        elevate-on-scroll
        :color="BackColor"
        app
        dense
      >
        <v-tabs v-if="!showNavbar" @change="ChangeColor" :background-color="BackColor" dark slider-size="4" class="hidden-sm-and-down">
          <v-tab :key="MenuItem.Name" v-for="MenuItem in Menu" :to="MenuItem.To">{{ MenuItem.Name }}</v-tab>
        </v-tabs>
        <div v-if="showNavbar">
        <v-row no-gutters align="center">
          <v-btn class="hidden-md-and-up" @click="NavDrawer = true" icon>
            <v-icon color="white">mdi-menu</v-icon>
          </v-btn>

          <h3 class="white--text hidden-sm-and-up text-center">IEEE Student Branch of NSBM</h3>
        </v-row>

        <v-row no-gutters class="hidden-sm-and-down">
          <v-btn small text href="https://www.ieee.org" rel="noreferrer" target="_blank" class="IEEENoCaps">IEEE.org</v-btn>
          <v-btn small text href="https://ieeexplore.ieee.org" rel="noreferrer" class="IEEENoCaps">IEEE <i>Xplore</i>&nbspDigital Library</v-btn>
          <v-btn small text href="https://standards.ieee.org" rel="noreferrer" class="IEEENoCaps">IEEE Standards</v-btn>
          <v-btn small text href="https://spectrum.ieee.org" rel="noreferrer" class="IEEENoCaps">IEEE Spectrum</v-btn>
          <v-btn small text href="https://www.ieee.org/sitemap" rel="noreferrer" class="IEEENoCaps">More Sites</v-btn>
          <v-spacer></v-spacer>
          <v-btn small text href="https://www.ieee.org/join" class="IEEENoCaps">Join IEEE</v-btn>
        </v-row>

        </div>
      </v-app-bar>
    </header>

    <v-main class="grey lighten-2">

      <v-card :color="BackColor" class="rounded-0">
        <v-card-title class="hidden-sm-and-down pt-2">
          <v-row no-gutters justify="space-between" align="center">

            <nuxt-img
              quality="98"
              format="webp"
              fit="contain"
              class="hidden-sm-and-down"
              height="64"
              alt="Brand Logo"
              src="/Assets/Logos/MainLogo.png"/>

            <nuxt-img
              alt="IEEE Logo"
              quality="98"
              format="webp"
              class="hidden-sm-and-down"
              fit="contain"
              height="64"

              src="/Assets/Logos/IEEE_Logo.png"/>
          </v-row>
        </v-card-title>

        <v-tabs @change="ChangeColor" :background-color="BackColor" dark slider-size="4" class="hidden-sm-and-down">
          <v-tab :key="MenuItem.Name" v-for="MenuItem in Menu" :to="MenuItem.To">{{ MenuItem.Name }}</v-tab>
        </v-tabs>


      </v-card>

      <v-card flat class="rounded-t-0">
        <nuxt/>
      </v-card>

      <v-footer :color="BackColor">
        <v-col>
          <v-row no-gutters justify="center">
            <nuxt-img
              height="48"
              alt="MainLogo"
              quality="96"
              format="webp"
              src="/Assets/Logos/MainLogo.png"></nuxt-img>
          </v-row>
          <v-row no-gutters justify="center">
            <v-btn class="ma-1">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn class="ma-1">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn class="ma-1">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </v-row>

          <v-row no-gutters justify="center">
            <kbd>&lt;/&gt; by IEEE Computer Society — NSBM</kbd>
          </v-row>
        </v-col>

      </v-footer>
    </v-main>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      Path:'',
      NavDrawer:false,
      showNavbar : true,
      lastScrollPosition:0,
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
          Name:'Volunteer',
          To:'/volunteer'
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
    onScroll () {

      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      console.log(currentScrollPosition);
      if (currentScrollPosition < 0) {
        return
      }
      if (currentScrollPosition >= 135) {
        this.showNavbar = false;
      }

      if(currentScrollPosition <= 115){
        this.showNavbar = true;
      }

      //this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
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


  mounted () {
    this.Path = this.$route.path.replaceAll('/','');
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
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
  font-size: 13px !important;
  color: white !important;
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
}

.nav__link {
  margin-left: 20px;
}
</style>
