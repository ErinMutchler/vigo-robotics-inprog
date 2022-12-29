import { createApp } from "vue";
import { registerPlugins } from "@/plugins";
import App from "@/App.vue";

import "@/assets/styles/main.css";
import "@/assets/styles/categories.css";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");