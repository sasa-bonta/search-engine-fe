<template>
    <v-row
        justify="center"
    >
      <img src="zebra.png" alt="zebra.png">
    </v-row>
    <v-row
        justify="center"
    >
      <h1 id="system-name">Zebra Search Home</h1>
    </v-row>
    <v-row
        justify="center"
        align="center"
    >
      <v-col lg="3" md="0"></v-col>
      <v-col lg="6" md="12">
        <Autocomplete />
      </v-col>
      <v-col lg="3" md="0"></v-col>
    </v-row>
</template>

<script>
import Autocomplete from "@/components/Autocomplete";

export default {
  components: {Autocomplete},
}
</script>

<style scoped>
img {
  height: 45vh;
}

#system-name {
  background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
  -webkit-background-clip: text;
  color: transparent;
}
</style>
