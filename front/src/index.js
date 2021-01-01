import Vue from "vue";
import BalmUI from "balm-ui"; // Official Google Material Components
import BalmUIPlus from "balm-ui/dist/balm-ui-plus";

import App from "./App.vue";
import router from "./router";

Vue.use(BalmUI); // Mandatory
Vue.use(BalmUIPlus); // Optional

new Vue({
  el: "#app",
  router,
  template: "<App />",
  components: { App },
});
