<template>

  <v-card class="pa-5">
    <v-row>
      <v-col align="right" lg="3" md="0">
        <router-link :to="{name: 'home'}">
          <img src="zebra.png" alt="zebra.png" height="100">
        </router-link>
      </v-col>
      <v-col lg="6" md="12">
        <v-card elevation="5" class="mb-5">
          <Autocomplete/>
        </v-card>
        <ResultsList/>
      </v-col>
      <v-col lg="3" md="0"></v-col>
    </v-row>
  </v-card>
</template>

<script>
import Autocomplete from "@/components/Autocomplete";
import ResultsList from "@/components/ResultsList";

export default {
  components: {Autocomplete, ResultsList},
}
</script>

<style scoped>
body {
  background-color: azure;
}
</style>
