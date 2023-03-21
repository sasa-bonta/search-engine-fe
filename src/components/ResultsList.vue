<template class="w-100">
  <v-list lines="three">
    <v-list-item
        v-for="item in results"
        :key="item.url"
        :title="item.title"
        :subtitle="item.description"
        @click="visitLink(item.url)"
    ></v-list-item>
  </v-list>
</template>

<script>
import {computed, onMounted, ref, watch} from "vue";
import store from "@/store";

export default {
  name: "ResultsList",

  setup() {
    // let isLoading = computed(() => store.state.isLoading)
    let results = computed(() => store.state.results)

    // onMounted(() => {
    //   isLoading.value = store.state.isLoading
    //   results.value = store.state.results
    // })

    function visitLink(link) {
      window.open("https://" + link, '_blank').focus()
    }

    return {
      results,
      visitLink,
    }
  }
}
</script>

<style scoped>

</style>