<template>
  <Layout>
    <v-card>
      <v-row no-gutters>
        <v-col></v-col>
        <v-col>
          <v-card-title>Contact Us</v-card-title>
          <v-container>
            <v-form method="post" action="https://formspree.io/f/mpzkzwdw" v-model="valid">
              <v-text-field name="name" id="full-name"outlined label="Name"></v-text-field>
              <v-text-field name="_replyto" id="email-address" outlined label="Email"></v-text-field>
              <v-textarea name="message" id="message" outlined label="Message"></v-textarea>
              <v-row no-gutters justify="start">
                <v-btn type="submit" min-width="256" dark class="IEEE" large >Send</v-btn>
              </v-row>
            </v-form>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
  </Layout>
</template>

<script>
export default {
  name: "Contact",
  data(){
    return{
      valid: false,
    }
  }
}
</script>

<style scoped>

</style>
