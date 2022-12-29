import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

export default createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#003057",
          secondary: "#E1523D",
          accent: "#64CCC9",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  display: {
    mobileBreakpoint: "sm",
    thresholds: {
      xs: 0,
      sm: 340,
      md: 540,
      lg: 768,
      xl: 1280,
    },
  },
});
