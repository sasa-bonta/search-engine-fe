import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "@/components/Home";
import Search from "@/components/Search";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
