<template>
  <v-container>
    <div class="classOne">
      <div class="classTwo">
        <h1 @click="changeText">My Text</h1>
      </div>

      <div class="">
        <h1>{{ message }}</h1>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "membership",
  data () {
    return {
      message: "Hello from the membership page!"
    }
  },
  methods:{
    changeText(){
      this.message = "Changed Text!"
    }
  }
}
</script>

<style scoped>


.classOne .classTwo {
  color: red;
}


</style>
