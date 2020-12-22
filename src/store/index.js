import Vue from "vue";
import Vuex from "vuex";
import vuetify from "vuetify";
import auth from "./auth.js";
Vue.use(Vuex);

new Vue({
  vuetify
}).$mount("#app");

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth
  }
});
