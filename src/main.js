import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import errorLog from "@/utils/error-log";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App)
    .use(router)
    .use(pinia)
    .use(Quasar, quasarUserOptions);

app.config.errorHandler = (e) => {
    console.log("------->", e);
    errorLog.sendMessage(JSON.stringify(e));
};

app.mount("#app");

