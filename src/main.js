import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import localStorage from "./store/plugin/localStorage";

const storeToLocalSave = ["todo"];

const app = createApp(App);
const pinia = createPinia();
pinia.use(
  context =>
    storeToLocalSave.includes(context.store.$id) && localStorage(context)
);

app.use(pinia);
app.mount("#app");
