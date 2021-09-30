<template>
  <v-container>
    <v-row justify="center" no-gutters>
      <v-col cols="auto" align-self="center" align="center">
        <v-card class="rounded-circle" rounded width="128" height="128">
          <nuxt-img
            alt="CS logo"
            quality="96"
            format="webp"
            class="rounded-circle" height="128" width="128"  src="/Assets/Logos/CS_Logo.png"></nuxt-img>
        </v-card>

        <h1 class="text-h4 font-weight-bold CSFont">IEEE Computer Society</h1>
        <h1 class="text-h6 font-weight-bold">IEEE CS Student Chapter of NSBM</h1>
      </v-col>


    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "cs"
}
</script>

<style scoped>

</style>
