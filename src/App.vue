<template>
  <v-container fluid style="width: 100vw; height: 100vh;">
    <router-view></router-view>
  </v-container>
</template>

<script>
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

export default {
  setup() {
    let bgColor = ref('landscape')
    const route = useRoute()

    watch(route, (to) => {
      bgColor = to.name === 'home' ? 'landscape' : 'white'
      console.log(to.name)
      console.log(bgColor)
    })

    return {
      bgColor
    }
  }
}
</script>

<style>
#app {
  background-size: cover;
  height: 100vh;
  background: url("/public/background.jpg") repeat-y;
}
</style>
