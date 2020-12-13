<template>
  <v-app style="padding-top: 32px; padding-left: 32px;padding-right: 32px">
    <v-card height="256" color="#00629B">


      <v-row justify="space-between">
        <v-img style="margin-left: 32px;margin-bottom: 16px; margin-top: 16px"
                max-width="256" max-height="128" src="@/assets/sblogo.png"></v-img>
        <v-img style="margin-right: 32px;margin-bottom: 16px; margin-top: 16px"
               max-width="256" max-height="72" src="@/assets/ieeelogo.png"></v-img>
      </v-row>
      <StudentBranchNav></StudentBranchNav>
        <HomeGallery></HomeGallery>
    </v-card>
  </v-app>
</template>

<script>
import StudentBranchNav from "@/components/NavBars/StudentBranchNav";
import HomeGallery from "@/components/HomeGallery";
export default {
  name: "MainContent",
  components: {HomeGallery, StudentBranchNav}
}
</script>

<style scoped>

</style>