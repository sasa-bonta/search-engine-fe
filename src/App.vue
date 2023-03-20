<template>
  <v-container>
    <v-row
        justify="center"
    >
      <img src="zebra.png" alt="zebra.jpg">
    </v-row>
    <v-row
        justify="center"
    >
      <h1 id="system-name">Zebra Search</h1>
    </v-row>
    <v-row
        justify="center"
        align="center"
    >
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-autocomplete
            clearable
            label="What are you looking for?"
            :items="[]"
            variant="solo"
            no-data-text="No suggestions"
            :no-filter="true"
        ></v-autocomplete>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
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
