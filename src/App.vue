<template>
  <v-container>
    <router-view></router-view>
  </v-container>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: url("/public/background.jpg");
  background-size: cover;
}

img {
  height: 45vh;
}

#system-name {
  background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
  -webkit-background-clip: text;
  color: transparent;
}
</style>
