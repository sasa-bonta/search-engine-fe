<template class="w-100">
  <div v-if="isLoading">
    <ResultsSkeleton

        v-for="i in 10"
        :key="i"
    />
  </div>
  <div v-else>
    <v-list lines="three">
      <v-list-item
          v-for="item in results"
          :key="item.url"
          :title="item.title"
          :subtitle="item.description"
          @click="visitLink(item.url)"
      ></v-list-item>
    </v-list>
  </div>
</template>

<script>
import {computed, onMounted, ref, watch} from "vue";
import store from "@/store";
import ResultsSkeleton from "@/components/ResultsSkeleton";

export default {
  name: "ResultsList",
  components: {ResultsSkeleton},
  setup() {
    let isLoading = computed(() => store.state.isLoading)
    let results = computed(() => store.state.results)

    function visitLink(link) {
      window.open("https://" + link, '_blank').focus()
    }

    return {
      isLoading,
      results,
      visitLink,
    }
  }
}
</script>

<style scoped>

</style>