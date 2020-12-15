<template>
  <v-app style="padding-top: 16px; padding-left: 8px;padding-right: 8px">
    <v-card elevation="8" color="#00629B">

      <v-row justify="space-between">
        <v-img style="margin-left: 32px;margin-bottom: 16px; margin-top: 16px"
                max-width="256" max-height="128" src="@/assets/sblogo.png"></v-img>
        <v-img class="hidden-sm-and-down" style="margin-right: 32px;margin-bottom: 16px; margin-top: 16px"
               max-width="256" max-height="72" src="@/assets/ieeelogo.png"></v-img>
      </v-row>
      <StudentBranchNav @Drawer="Drawer"></StudentBranchNav>
        <router-view></router-view>
    </v-card>
  </v-app>
</template>

<script>
import StudentBranchNav from "@/components/NavBars/StudentBranchNav";
export default {
  name: "MainContent",
  components: {StudentBranchNav},
  methods:{
    Drawer(){
      this.$emit('Drawer');
    }
  }
}
</script>

<style scoped>

</style>