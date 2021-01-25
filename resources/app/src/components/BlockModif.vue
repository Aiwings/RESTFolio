<template>
  <Modal :title="title" :show="editorShow" @close="closeModal" id="block-modif">
    <template v-slot:default>
      <form @submit.prevent="submit" id="block-modif">
        <div class="field">
          <label for="name" class="label">Nom du Block</label>
          <div class="control">
            <input
              type="text"
              :value="modifiedBlock.name"
              placeholder="Nom"
              @input="changeName($event)"
              class="input"
              required
            />
          </div>
        </div>
        <quill-editor
          :value="modifiedBlock.content"
          @change="changeContent($event)"
        />
      </form>
      <div :class="messageClass">
        <div class="message-body">{{ ajaxState.message }}</div>
      </div>
    </template>
    <template v-slot:footer>
      <button @click="sendEmit" class="button is-primary">Soummetre</button>
      <button class="button" @click="closeModal">Annuler</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "./Modal";
import { quillEditor } from "vue3-quill";
import { mapState } from "vuex";
export default {
  components: {
    Modal,
    quillEditor,
  },
  methods: {
    sendEmit() {
      this.$store.dispatch("ajaxBlock");
    },
    changeName(event) {
      this.$store.commit("blockName", event.target.value);
    },
    changeContent(event) {
      this.$store.commit("blockContent", event.html);
    },
    closeModal() {
      this.$store.dispatch("closeEdit");
    },
  },
  computed: {
    messageClass() {
      let className = "message ";
      if (this.ajaxState.success === true) {
        className += "is-success";
      } else if (this.ajaxState.success === false) {
        className += "is-danger";
      } else {
        className += "is-hidden";
      }
      return className;
    },
    name() {
      return this.modifiedBlock.name;
    },
    content() {
      return this.modifiedBlock.content;
    },
    ...mapState(["modifiedBlock", "editorShow", "ajaxState"]),
  },
  data() {
    return {
      title: "Edition du Block",
    };
  },
};
</script>

<style>
#block-modif .modal-card {
  width: 80vw;
}
#block-modif .ql-container {
  min-height: 20vh;
}
</style>