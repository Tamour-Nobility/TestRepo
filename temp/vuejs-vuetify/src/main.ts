import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/index";
import VueApexCharts from "vue3-apexcharts";
import { QuillEditor } from "@vueup/vue-quill";

// Import styles
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "remixicon/fonts/remixicon.css";

import "./assets/scss/styles.css";

const app = createApp(App).use(router).use(vuetify);
app.use(VueApexCharts);
app.component("QuillEditor", QuillEditor);
app.mount("#app");
