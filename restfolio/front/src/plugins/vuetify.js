import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/es5/util/colors";
import "@mdi/font/css/materialdesignicons.css";
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    themes: {
      light: {
        primary: colors.indigo.darken3,
        secondary: colors.blue.darken3,
        accent: colors.deepPurple.darken3,
        error: colors.pink.darken3,
        warning: colors.amber.darken1,
        info: colors.cyan.darken3,
        success: colors.teal.darken3,
      },
    },
  },
});
