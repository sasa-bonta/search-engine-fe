import {createStore} from "vuex";

export default createStore({
    state: {
        search: '',
        results: [],
    },
    getters: {
        getSearch: () => this.state.search,
        getResults: () => this.state.results,
    },
    actions: {},
    mutations: {
        mutateSearch(state, payload) {
            state.search = payload
        },
        mutateResults(state, payload) {
            state.results = payload
        },
    },
});