<template>
  <v-card>
    <v-col >
      <MainBase></MainBase>
      <WhatWeDo></WhatWeDo>
    </v-col>
  </v-card>
</template>

<script>

import WhatWeDo from "@/components/HomeComponents/WhatWeDo";
import MainBase from "@/components/HomeComponents/MainBase";
export default {
  name: 'Home',
  components: {
    MainBase,
    WhatWeDo

  }
}
</script>
