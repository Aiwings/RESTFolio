import { createStore } from "vuex";

export default createStore({
  state: {
    modalShow: false,
  },
  getters: {
    isModalShown(state) {
      return state.modalShow;
    },
  },
  mutations: {
    toggleModal(state) {
      state.modalShow = !state.modalShow;
    },
  },
  actions: {},
  modules: {},
});
