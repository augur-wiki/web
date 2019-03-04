import Vue from "vue";
import App from "./App.vue";
import router from "./router";

/* Setup axios */
import { axios } from "axios";

/* Import FontAwesome*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faChartLine)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
