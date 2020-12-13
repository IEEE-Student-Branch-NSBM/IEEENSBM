<template>
  <v-app>
    <TopBrands></TopBrands>
    <MainContent></MainContent>
  </v-app>
</template>

<script>
import TopBrands from "@/components/NavBars/TopBrands";
import MainContent from "@/components/MainContent";
export default {
  name: 'App',

  components: {
    MainContent,
    TopBrands,
  },

  data: () => ({
    //
  }),
};
</script>
