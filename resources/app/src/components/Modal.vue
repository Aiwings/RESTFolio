<template>
  <div :class="'modal is-clipped ' + isActive" :id="id">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header v-if="title" class="modal-card-head">
        <h4 class="modal-card-title">{{ title }}</h4>
        <button class="delete" aria-label="close" @click="close">X</button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer class="modal-card-foot">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show", "title", "id"],
  computed: {
    isActive() {
      return this.show ? "is-active" : "";
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>