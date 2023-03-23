<template>
  <v-container fluid style="width: 100vw; height: 100vh;">
    <router-view></router-view>
  </v-container>
</template>

<script>

</script>

<style>
#app {
  background-size: cover;
  height: 100vh;
  background: url("/public/background.jpg") repeat-y;
}

.v-col {
  flex-basis: auto !important;
}
</style>
