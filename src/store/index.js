import {createStore} from "vuex";
import {fetchResults, fetchSuggestions} from "@/api/api";

export default createStore({
    state: {
        search: '',
        isLoading: false,
        suggestions: [],
        results: [],
    },
    getters: {
        getSearch: (state) => state.search,
        getIsLoading: (state) => state.isLoading,
        getSuggestions: (state) => state.suggestions,
        getResults: (state) => state.results,
    },
    actions: {
        async loadResults(store, searchStr) {
            store.commit('mutateIsloading', true)
            const results = await fetchResults(searchStr)
            store.commit('mutateResults', results.data)
            store.commit('mutateIsloading', false)
        },
        async loadSuggestions(store, searchStr) {
            const results = await fetchSuggestions(searchStr)
            store.commit('mutateSuggestions', results.data)
        }
    },
    mutations: {
        mutateSearch(state, payload) {
            state.search = payload
        },
        mutateIsloading(state, payload) {
            state.isLoading = payload
        },
        mutateSuggestions(state, payload) {
            state.suggestions = payload
        },
        mutateResults(state, payload) {
            state.results = payload
        },
    },
});