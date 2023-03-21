import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api/'
})

export const fetchResults = (search) => api.get('search', {params: {q: search}})
export const fetchSuggestions = (search) => api.get('suggestions', {params: {q: search}})