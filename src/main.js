import {createApp} from 'vue'
import {default as store} from './store'
import App from './App.vue'
import axios from 'axios'

import 'vuetify/styles';
import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import router from './router'


const vuetify = createVuetify({
    components,
    directives,
});

createApp(App)
    .use(router)
    .use(vuetify)
    .use(axios)
    .use(store)
    .mount('#app')
