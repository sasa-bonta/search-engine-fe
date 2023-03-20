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
      <h1 id="system-name">Search component</h1>
    </v-row>
    <v-row
        justify="center"
        align="center"
    >
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <!--        <v-autocomplete-->
        <!--            clearable-->
        <!--            label="What are you looking for?"-->
        <!--            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"-->
        <!--            no-data-text="No suggestions"-->
        <!--            :no-filter="true"-->
        <!--            variant="solo"-->
        <!--        ></v-autocomplete>-->
        <v-sheet>
          <v-text-field
              v-model="search"
              label="What are you looking for?"
              hide-details
          >
            <template #append>
              <v-btn variant="plain" prepend-icon="mdi-vuetify" class="mb-3 mr-3"> Go</v-btn>
            </template>
          </v-text-field>
        </v-sheet>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    let search = ref('')

    return {
      search
    }
  }
}
</script>

<style>

</style>
