import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import router from './router'
import AppVue from "./App.vue";

const app = createApp(AppVue)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.mount('#app')
