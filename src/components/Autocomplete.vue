<template>
  <v-sheet>
    <v-autocomplete
        clearable
        label="What are you looking for?"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        no-data-text="No suggestions"
        :no-filter="true"
        variant="solo"
        hide-details
    >
      <template #append>
        <v-btn variant="plain" prepend-icon="mdi-vuetify" class="mb-3 mr-3"> Go</v-btn>
      </template>
    </v-autocomplete>
  </v-sheet>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Autocomplete",

  setup() {
    let search = ref('')

    return {
      search
    }
  }
}
</script>

<style scoped>

</style>