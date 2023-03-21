import {createStore} from "vuex";

export default createStore({
    state: {
        search: 'advdvdas',
        suggestions: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'],
        results: [],
    },
    // getters: {
    //     getSearch: () => state.search,
    //     getSuggestions: () => state.suggestions,
    //     getResults: () => state.results,
    // },
    actions: {},
    mutations: {
        mutateSearch(state, payload) {
            state.search = payload
        },
        mutateSuggestions(state, payload) {
            state.suggestions = payload
        },
        mutateResults(state, payload) {
            state.results = payload
        },
    },
});