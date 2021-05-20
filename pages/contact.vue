<template>
  <div>
    <v-card>
      <v-row no-gutters>
        <v-col class="hidden-sm-and-down">
          <v-img

            height="480"
            width="760"
            quality="100"
            blur="0"
            fit="cover"
            src="/Assets/Other/Contact.jpg"
          ></v-img>
        </v-col>
        <v-col>
          <v-card-title>Contact Us</v-card-title>
          <v-container>
            <v-form method="post" action="https://formspree.io/f/mpzkzwdw" v-model="valid">
              <v-text-field name="name" id="full-name"outlined label="Name"></v-text-field>
              <v-text-field  name="_replyto" id="email-address" outlined label="Email"></v-text-field>
              <v-textarea name="message" id="message" outlined label="Message"></v-textarea>
              <v-row no-gutters justify="start">
                <v-btn block type="submit" min-width="256" dark class="IEEE" large >Send</v-btn>
              </v-row>
            </v-form>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "contact"
}
</script>

<style scoped>

</style>
