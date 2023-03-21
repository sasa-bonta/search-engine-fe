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
import {onMounted, ref} from "vue";

export default {
  name: "Autocomplete",

  setup() {
    const store = useStore();
    const route = useRoute()

    let search = ref('')
    let suggestions = ref([])

    onMounted(() => {
      search.value = store.state.search
      suggestions.value = store.state.suggestions
    })

    function goSurf() {
      if (route.name !== 'search') {
        router.push({name: 'search'})
      }
      store.commit('mutateSearch', search.value)
      store.dispatch('loadResults', search.value)
    }

    return {
      search,
      suggestions,
      goSurf,
    }
  }
}
</script>

<style scoped>

</style>