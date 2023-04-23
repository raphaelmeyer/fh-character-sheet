import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';

import App from './App.vue';
import router from './router';

import 'vuetify/styles';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import './assets/main.css';

import '@mdi/font/css/materialdesignicons.css';
import { localStoragePlugin } from './stores/local-storage.plugin';

const vuetify = createVuetify({
  components,
  directives
});

const app = createApp(App);

const pinia = createPinia();
pinia.use(localStoragePlugin);

app.use(pinia);
app.use(router);
app.use(vuetify);

app.mount('#app');
