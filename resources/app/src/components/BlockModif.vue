<template>
  <Modal :title="title" :show="showModal" @close="closeModal">
    <template v-slot:default>
      <form @submit.prevent="submit" id="block-modif">
        <div class="field">
          <label for="name" class="label">Nom du Block</label>
          <div class="control">
            <input
              type="text"
              :value="name"
              @input="$emit('update:name', $event.target.value)"
              placeholder="Nom"
              class="input"
              required
            />
          </div>
        </div>
        <quill-editor :value="content" @change="onChange($event)" />
      </form>
      <div :class="messageClass">
        <div class="message-body">{{ message }}</div>
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

export default {
  props: {
    name: String,
    content: String,
    created: Boolean,
    success: Object,
    showModal: Boolean,
  },
  emits: ["update:name", "update:content"],
  components: {
    Modal,
    quillEditor,
  },
  methods: {
    sendEmit() {
      let block = {};
      block.name = this.name;
      block.content = this.content;
      this.$emit("send", block);
    },
    closeModal() {
      this.$emit("closeModif");
    },
    onChange(event) {
      this.$emit("update:content", event.html);
    },
  },
  data() {
    return {
      title:
        (this.created ? "Modification" : "Création") + " du block " + this.name,
      messageClass: "is-hidden",
      message: "",
    };
  },
  watch: {
    success(result) {
      this.messageClass = "message ";
      this.messageClass += result.state ? "is-success" : "is-danger";
      this.message = result.error ? result.error : "Transmission effectuée";
    },
  },
};
</script>

<style>
main .modal-card {
  width: 80vw;
}
#block-modif .ql-container {
  min-height: 20vh;
}
</style>