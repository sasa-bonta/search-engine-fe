<template>
  <v-sheet>
    <v-autocomplete
        clearable
        label="What are you looking for?"
        :items="suggestions"
        :model-value="search"
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
import {useState} from 'vuex-composition-helpers/dist'

export default {
  name: "Autocomplete",

  setup() {
    // let search = ref('')
    const {search, suggestions} = useState(['search', 'suggestions'])

    return {
      search,
      suggestions,
    }
  }
}
</script>

<style scoped>

</style>