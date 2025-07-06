import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// mdi Icons
import "@mdi/font/css/materialdesignicons.css";
// Emitter configration
import mitt from "mitt";
const emitter = mitt();
//pinia store
import { createPinia } from "pinia";
//i18n
import i18n from "./i18n";
const pinia = createPinia();

// Components
const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(pinia)
  .use(vuetify)
  .provide("emitter", emitter)
  .use(router)
  .use(i18n)
  .mount("#app");
