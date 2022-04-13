<template>
  <v-app class="DefaultFont">
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
          <v-btn small text href="https://ieeexplore.ieee.org" rel="noreferrer" class="IEEENoCaps">IEEE <i>Xplore &nbsp</i> Digital Library</v-btn>
          <v-btn small text href="https://standards.ieee.org" rel="noreferrer" class="IEEENoCaps">IEEE Standards</v-btn>
          <v-btn small text href="https://spectrum.ieee.org" rel="noreferrer" class="IEEENoCaps">IEEE Spectrum</v-btn>
          <v-btn small text href="https://www.ieee.org/sitemap" rel="noreferrer" class="IEEENoCaps">More Sites</v-btn>
          <v-spacer></v-spacer>
          <v-btn small text href="https://www.ieee.org/join" class="IEEENoCaps">Join IEEE</v-btn>
        </v-row>

        </div>
      </v-app-bar>
    </header>

    <v-main class="white lighten-2">

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
        <nuxt/>
    </v-main>

    <v-footer padless>
      <v-sheet dark width="100%" color="#00273E">
        <v-row no-gutters>
          <v-col align="center" cols="12" sm="12" md="3" lg="3">
            <v-card color="#00629b" class="mb-8 rounded-b-xl" max-width="250px">

              <v-container></v-container>

              <v-img class="mb-4" width="250px" src="/Assets/Logos/IEEE_Logo_White.png"></v-img>

              <v-card-actions class="justify-center">
                <v-btn icon ><v-icon>mdi-facebook</v-icon></v-btn>
                <v-btn icon ><v-icon>mdi-linkedin</v-icon></v-btn>
                <v-btn icon ><v-icon>mdi-twitter</v-icon></v-btn>
                <v-btn icon ><v-icon>mdi-instagram</v-icon></v-btn>
                <v-btn icon ><v-icon>mdi-youtube</v-icon></v-btn>
              </v-card-actions>

              <v-container></v-container>

            </v-card>
          </v-col>

          <v-col cols="12" sm="12" md="2" lg="2" class="mt-8 mb-8 footer-col" align="center">
            <div>
              <h3 style="width:75%; text-align:left" >Get Started</h3>
              <ul style="width:88%; list-style:none; text-align:left; margin-right:20px">
                <li>HOME</li>
                <li>EVENTS</li>
                <li>BLOG</li>
                <li>EXECUTIVE COMMITTEE</li>
                <li>MEMBERSHIP</li>
              </ul>
            </div>

          </v-col >

          <v-col cols="12" sm="12" md="3" lg="3" class="mt-8 mb-8 footer-col" align="center">
              <div>
                <h3 style="width:75%; text-align:left" >Student Branch Chapters</h3>
                <ul style="width:88%; list-style:none; text-align:left">
                  <li>Women in Engineering</li>
                  <li>Computer Society</li>
                </ul>
              </div>
          </v-col>

          <v-col cols="12" sm="12" md="4" lg="4" class="mt-8 mb-8 footer-col" align="center">
              <div>
                <h3 style="width:75%; text-align:left" >Contact Us</h3>
                <table style="width:75%;">
                  <tr>
                    <td><v-icon>mdi-phone</v-icon></td>
                    <td class="pl-1"> +94 00 000 000</td>
                  </tr>
                  <tr>
                    <td><v-icon>mdi-email</v-icon></td>
                    <td class="pl-1"> XXXXXXXXXXX@gmail.com</td>
                  </tr>
                  <tr>
                    <td><v-icon>mdi-map-marker-outline</v-icon></td>
                    <td class="pl-1"> 345 Faulconer Drive,<br>Suite 4 • <br>Charlottesville, CA</td>
                  </tr>
                </table>
              </div>
          </v-col>

        </v-row>

        <v-row no-gutters color="#000000" class="shrink" align="center" justify="end">
          <v-col cols="12" sm="6" md="4" lg="4" align="center" >
            <p>© Copyright 2021 | All rights reserved</p>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="4" align="right">
            <v-card width="70%" color="#00629b" class="pa-0 rounded-tl-xl" align="center" id="developed">
              <v-card-subtitle>Developed by IEEE Computer Society — NSBM</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>

    </v-footer>


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
          Name:'Blog',
          To:'/blog'
        },
        {
          Name:'EXCOM',
          To:'/excom'
        },
        {
          Name:'About US',
          To:'/membership'
        },
        {
          Name:'Contact Us',
          To:'/contact'
        },
        {
          Name:'Join Us',
          To:'/volunteer'
        }
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,500;1,600;1,700;1,800;1,900&display=swap');

@media screen and (max-width: 600px) {
  #developed {
    width: 100% !important;
    border-radius:0 !important;
  }

  .footer-col div{
    width:50% !important;
    margin: 0 auto !important;
  }

}

html{
  overflow-y: auto;
}

body {

  margin:0;
  padding:0;
  line-height: 1.5;
  font-family: 'Poppins', 'sans-serif' !important;

  
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  opacity: 0.3;
  background-color: #00629B;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  opacity: 1;
  background-color: #ffffff;
}

::-webkit-scrollbar {
  width: 8px;
  opacity: 0.3;
  background-color: #00629B;
}

.DefaultFont {
  font-family: 'Poppins', 'sans-serif' !important;
}

.v-tabs-bar{
  background-color: #ffffff00 !important;
  border-color: #ffffff00 !important;
}

/* .v-btn{
  font-weight: bold !important;
  font-family: "Roboto", sans-serif !important;
}

.v-tab{
  font-weight: bold !important;
  font-family: "Roboto", sans-serif !important;
} */

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

.footer-col {
  border-right:1px solid seashell;
}


.footer-col div ul li{
  margin: 10px 0;

}

td {
  height:50px;
  vertical-align: center;
}

</style>
