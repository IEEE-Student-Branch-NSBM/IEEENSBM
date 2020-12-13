<template>
  <v-app style="padding-top: 64px; padding-left: 32px;padding-right: 32px">
    <v-card height="256" color="#00629B">

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