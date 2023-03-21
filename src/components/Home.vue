<template>
    <v-row
        justify="center"
    >
      <img src="zebra.png" alt="zebra.jpg">
    </v-row>
    <v-row
        justify="center"
    >
      <h1 id="system-name">Zebra Search Home</h1>
      <router-link :to="{ name: 'search'}">Go to Foo</router-link>
    </v-row>
    <v-row
        justify="center"
        align="center"
    >
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <autocomplete />
        <!--        <v-sheet>-->
        <!--          <v-text-field-->
        <!--              v-model="search"-->
        <!--              label="What are you looking for?"-->
        <!--              hide-details-->
        <!--          >-->
        <!--          </v-text-field>-->
        <!--        </v-sheet>-->
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
</template>

<script>
// import {ref} from "vue";
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
