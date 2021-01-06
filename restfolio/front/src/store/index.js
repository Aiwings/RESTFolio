import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logged: false,
  },
  getters: {
    isLogged: (state) => {
      return state.logged;
    },
  },
  mutations: {
    LOGIN(state, payload) {
      state.logged = payload;
    },
  },
  actions: {
    connect(context) {
      context.commit("LOGIN", true);
    },
    disconnect(context) {
      context.commit("LOGIN", false);
    },
  },
  modules: {},
});
