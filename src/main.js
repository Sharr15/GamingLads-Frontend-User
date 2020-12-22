import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

//require("@/store/subscriber")
Vue.config.productionTip = false;
Vue.use(vuetify);
axios.defaults.baseURL = "http://localhost:8089/";
//store.dispatch("auth/attempt", localStorage.getItem("token")).then(()=> {new Vue({
//  router,
//  store,
// vuetify,
//  render: h => h(App)
//}).$mount("#app")})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
