<template>
  <v-sheet>
    <v-combobox
        clearable
        label="What are you looking for?"
        :items="suggestions"
        v-model="search"
        no-data-text="No suggestions"
        variant="solo"
        hide-details
        @input="loadSuggestions"
        @change="goSurf"
    >
      <template #append>
        <v-btn
            variant="plain"
            prepend-icon="mdi-vuetify"
            class="mb-3 mr-3"
            @click="goSurf"
        > Go
        </v-btn>
      </template>
    </v-combobox>
  </v-sheet>
</template>

<script>
import {useRoute} from "vue-router/dist/vue-router";
import router from "@/router";
import {useStore} from "vuex";
import {computed, onMounted, ref, watch} from "vue";
import store from "@/store";

export default {
  name: "Autocomplete",

  setup() {
    const store = useStore();
    const route = useRoute()

    let search = ref('')
    let suggestions = computed(() => store.getters.getSuggestions)

    onMounted(() => {
      search.value = store.getters.getSearch
    })

    function goSurf() {
      if (search.value !== '' && route.name !== 'search') {
        router.push({name: 'search'})
      }
      store.commit('mutateSearch', search.value)
      store.dispatch('loadResults', search.value)
    }

    function loadSuggestions() {
      console.log("loading")
      store.dispatch('loadSuggestions', search.value)
    }

    return {
      search,
      suggestions,
      goSurf,
      loadSuggestions,
    }
  }
}
</script>

<style scoped>

</style>