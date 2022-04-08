<template>
  <v-container class="mt-4">
    <div v-for="(excom,i) in exComs" :key="i">
      <v-row no-gutters justify="center">
        <v-col cols="auto">
          <h1>IEEE Student Branch Executive Committee 2021/22</h1>
        </v-col>
      </v-row>

      <v-row no-gutters justify="center">
        <ExComCard v-for="(user,j) in excom" :key="j" :user="user"></ExComCard>
      </v-row>
    </div>

  </v-container>
</template>

<script>
import { excom_2022 } from '@/content/excom/2022';
import { excom_2021} from "~/content/excom/2021";

export default {
  name: "excom",
  data: ()=>({
    exComs:[
      excom_2022,
      excom_2021,
    ]
  })
}
</script>

<style scoped>

</style>
