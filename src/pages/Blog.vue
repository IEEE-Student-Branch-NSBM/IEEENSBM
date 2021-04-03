<template>
  <Layout>
    <v-container>
      <v-row justify="center">
        <v-col
            v-for="n in 24"
            :key="n"
        >
          <v-card class="HoverOnHover" elevation="4" min-width="320" width="320" rounded ripple>
            <g-image fit="cover" height=128 width="320" blur="0" src="~/assets/Logos/SB_Logo.png" ></g-image>
            <v-card-title>
              Post Title
            </v-card-title>
            <v-card-subtitle>
              Short Description/Overview
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
export default {
  name: "Blog"
}
</script>

<style scoped>
.HoverOnHover:hover {
  transition:  .4s ease;
  transform: scale(1.025);
  cursor: pointer;
}

.HoverOnHover {
  transition:  .4s ease;
  transform: scale(1);
  cursor: pointer;
}

</style>
