<template>
  <v-container>
    <v-row justify="center" no-gutters>

      <v-card class="rounded-circle" rounded width="128" height="128">
        <nuxt-img
          alt="CS logo"
          quality="96"
          format="webp"
          class="rounded-circle" height="128" width="128"  src="/Assets/Logos/CS_Logo.png"></nuxt-img>

      </v-card>

    </v-row>
    <v-row no-gutters justify="center">
      <h1 class="CSFont">
        IEEE Computer Society
      </h1>
    </v-row>
    <v-row no-gutters justify="center">
      <v-card-title class="text-center">IEEE NSBM Computer Society</v-card-title>

    </v-row>

    <v-col>
      <h1 class="text-center CSFont">Who Are We?</h1>
      <p class="text-justify">
        The IEEE Computer Society is the premier source for information, inspiration, and
        collaboration in computer science and engineering. Connecting members worldwide,
        the Computer Society empowers the people who advance technology by delivering tools for individuals
        at all stages of their professional careers. Our trusted resources include international conferences,
        peer-reviewed publications, a robust digital library, globally recognized standards,
        and continuous learning opportunities.
      </p>
    </v-col>

  </v-container>
</template>

<script>
export default {
  name: "cs"
}
</script>

<style scoped>

</style>

