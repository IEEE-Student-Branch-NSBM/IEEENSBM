<template>
  <v-app>
    <Drawer ref="Drawer"></Drawer>
    <TopBrands class="hidden-sm-and-down"></TopBrands>
    <MainContent @Drawer="Drawer"></MainContent>
  </v-app>
</template>

<script>
import TopBrands from "@/components/NavBars/TopBrands";
import MainContent from "@/components/MainContent";
import Drawer from "@/components/NavBars/Drawer";
export default {
  name: 'App',

  components: {
    Drawer,
    MainContent,
    TopBrands,
  },

  data: () => ({
    //
  }),
  methods:{
    Drawer(){
      this.$refs.Drawer.Toggle();
    }
  }
};
</script>
