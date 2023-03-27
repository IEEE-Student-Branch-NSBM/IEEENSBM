<template>
  <v-sheet class="py-10">
    <v-row no-gutters align-content="center">
      <v-col cols="12" sm="6" class="px-sm-10 px-5">
        <v-card-title class="formTitle justify-sm-start justify-center"
          >Contact Us
        </v-card-title>
        <span class="formSubTitle ml-sm-5 ml-0"
          >Our friendly team want to hear from you</span
        >
        <v-container>
          <v-form
            ref="contactForm"
            method="post"
            action="https://formspree.io/f/mpzkzwdw"
          >
            <v-row no-gutters>
              <v-col class="mr-2">
                <v-text-field
                  name="fname"
                  id="full-name"
                  outlined
                  label="First Name"
                  :rules="fnameRules"
                ></v-text-field
              ></v-col>
              <v-col
                ><v-text-field
                  name="lname"
                  id="full-name"
                  outlined
                  label="Second Name"
                  :rules="snameRules"
                ></v-text-field
              ></v-col>
            </v-row>
            <v-row no-gutters class="secondForm">
              <v-col><v-text-field
                  name="_replyto"
                  id="email-address"
                  outlined
                  label="Email"
                  :rules="emailRules"></v-text-field>
              </v-col>
            </v-row>
            <v-textarea
              name="message"
              id="message"
              outlined
              label="Type Message"
              requied
              :rules="fnameRules"
            ></v-textarea>
            <v-row no-gutters justify="end">
              <button ref="submit" style="display:none;">Submit</button>
              <v-btn
                min-width="256"
                height="56"
                color="primary"
                dark
                large
                @click="sendMessage"
                >Send Message</v-btn
              >
          <nuxt-img
            quality="96"
            format="png"
            fit="contain"
            sizes="sm:75vw md:50vw lg:100%"
            src="/Assets/Other/Contact.jpg"/>
        </v-col>
        <v-col>
          <v-card-title>Contact Us</v-card-title>
          <v-container>
            <v-form method="post" action="https://formspree.io/f/mpzkzwdw" v-model="valid">
              <v-text-field name="name" id="full-name"outlined label="Name"></v-text-field>
              <v-text-field  name="_replyto" id="email-address" outlined label="Email"></v-text-field>
              <v-textarea name="message" id="message" outlined label="Message"></v-textarea>
              <v-row no-gutters justify="start">
                <v-btn block type="submit" min-width="256" dark class="IEEE" large >Send Your Message</v-btn>
              </v-row>
            </v-form>
          </v-container>
        </v-col>
        
        
        <v-col>
          <v-card-title>Feedbacks</v-card-title>
          <v-container>
            <v-form method="post" action="https://formspree.io/f/mpzkzwdw" v-model="valid">
           
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
            </v-row>
          </v-form>
        </v-container>
      </v-col>
      <v-col class="hidden-sm-and-down" cols="12" sm="6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575796299669!2d80.03938421460494!3d6.821334421522082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1654833879798!5m2!1sen!2slk"
          width="750"
          height="500"
          style="border: 0;"
          loading="lazy"
          class="rounded-lg"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-col>
      <v-col class="hidden-md-and-up" cols="12" sm="6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575796299669!2d80.03938421460494!3d6.821334421522082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1654833879798!5m2!1sen!2slk"
          width="400"
          height="200"
          style="border: 0; border-radius: 20px"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: "contact",
  computed: {

  },
  data: () => ({
    valid: true,
    name: "",
    fnameRules: [(v) => !!v || "First Name is required"],
    snameRules: [(v) => !!v || "Second Name is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be required",
    ],
    message: "",
    messageRules: [(v) => !!v || "Message is required"],
  }),

  methods: {
    sendMessage(){
      if(this.$refs.contactForm.validate()){
        this.$refs.submit.click();
      }
    },
  },
};
</script>

<style scoped>
.formTitle {
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0px;
}

.formSubTitle {
  margin-top: 12px;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: -0px;
}

@media only screen and (max-width: 768px) {
  .formTitle {
    font-size: 35px;
    font-weight: 500;
    letter-spacing: -0px;
  }
  .formSubTitle {
    margin-top: 12px;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0px;
  }
}
</style>
