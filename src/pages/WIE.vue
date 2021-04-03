<template>
  <Layout>
    <v-card>
      <v-container>
        <v-row no-gutters justify="center">
          <g-image
          quality="100"
          blur="0"
          src="~/assets/Logos/WIE_Logo.png"
          width="256"
          height="256"
          ></g-image>
        </v-row>

        <v-row no-gutters justify="center">
          <h1 class="WIEFont">
            Women In Engineering
          </h1>
        </v-row>
        <v-row no-gutters justify="center">
          <v-card-title class="text-center">IEEE NSBM WIE Affinity Group</v-card-title>
        </v-row>

            <v-col>

              <h1 class="text-center WIEFont">Who Are We?</h1>
              <p class="text-justify">
                IEEE WIE is one of the world’s leaders in changing the face of engineering. Our global network connects nearly 20,000 members in over 100 countries to advance women in technology at all points in their life and career. IEEE WIE members make lifelong friendships, acquire influential mentors, and make a difference for the benefit of humanity.
              </p>
              <v-row justify="center">
                <v-btn class="WIE" dark>Join Us</v-btn>
              </v-row>

            </v-col>

      </v-container>
    </v-card>
  </Layout>
</template>

<script>
export default {
  name: "WIE"
}
</script>

<style scoped>

</style>
