<template>
  <Layout>
    <v-card color="white">
      <v-row align="baseline" justify="center" no-gutters>
        <v-col cols="auto">
          <v-card class="rounded-circle" rounded width="128" height="128">
            <g-image class="rounded-circle" quality="100" height="128" width="128" blur="0" src="~/assets/Logos/CS_Logo.png"></g-image>
          </v-card>
        </v-col>

        <v-card height="256" width="256" class="ma-4">
          <g-image height="256" width="256" blur="0" src="~/assets/Logos/SB_Logo.png"></g-image>
        </v-card>
        <v-col cols="auto">
          <v-card class="rounded-circle"  width="128" height="128">
            <g-image class="rounded-circle" quality="100" height="128" width="128" blur="0" src="~/assets/Logos/WIE_Logo.png"></g-image>
          </v-card>
        </v-col>
      </v-row>

        <v-row justify="center" no-gutters>
          <h1>Welcome to IEEE NSBM Student Branch!</h1>
        </v-row>

    </v-card>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
