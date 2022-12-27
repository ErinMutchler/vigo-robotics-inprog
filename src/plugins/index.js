import { loadFonts } from "@/plugins/webfontloader";
import vuetify from "@/plugins/vuetify";
import pinia from "@/stores";
import router from "@/router";

export function registerPlugins(app) {
  loadFonts();
  app.use(vuetify).use(pinia).use(router);
}
