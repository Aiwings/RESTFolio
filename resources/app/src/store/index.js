import { createStore } from "vuex";
import Api from "../api/index";
export default createStore({
  state: {
    editorShow: false,
    modifiedBlock: {
      slug: "",
      name: "",
      content: "",
      created: false,
    },
    ajaxState: {
      success: null,
      message: "",
    },
  },
  getters: {
    editorShown(state) {
      return state.editorShow;
    },
    getCurrentBlock(state) {
      return state.modifiedBlock;
    },
    getRequestState(state) {
      return state.ajaxState;
    },
  },
  mutations: {
    toggleEdit(state) {
      state.editorShow = !state.editorShow;
    },
    blockSlug(state, slug) {
      state.modifiedBlock.slug = slug;
    },
    blockName(state, name) {
      state.modifiedBlock.name = name;
    },
    blockContent(state, content) {
      state.modifiedBlock.content = content;
    },
    BlockCreated(state, created) {
      state.modifiedBlock.created = created;
    },
    clearBlock(state) {
      state.modifiedBlock = {
        name: "",
        content: "",
        created: false,
      };
    },
    setAjaxSuccess(state, bool) {
      state.ajaxState.success = bool;
    },
    setAjaxMessage(state, message) {
      state.ajaxState.message = message;
    },
  },
  actions: {
    showEditor(context, block) {
      context.commit("toggleEdit");
      context.commit("blockSlug", block.slug);
      context.commit("blockName", block.name);
      context.commit("blockContent", block.content);
      context.commit("BlockCreated", block.created);
    },
    async ajaxBlock(context) {
      let block = context.state.modifiedBlock;
      console.log(block);
      let url = block.created ? `/api/blocks/${block.slug}` : `/api/blocks/`;
      let method = block.created ? "PUT" : "POST";
      try {
        let req = await Api.request(url, method, block);
        let resp = await req.json();
        if (resp.id) {
          context.commit("setAjaxSuccess", true);
          context.commit("setAjaxMessage", "Opération effectuée avec succès");
        }
      } catch (error) {
        console.error(error);
        context.commit("setAjaxSuccess", false);
        context.commit("setAjaxMessage", "error.message");
      }
    },
    closeEdit(context) {
      context.commit("toggleEdit");
      context.commit("clearBlock");
    },
  },
  modules: {},
});
