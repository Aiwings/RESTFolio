<template>
  <div :class="'modal is-clipped ' + isActive" id="Login">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header v-if="title" class="modal-card-head">
        <h4 class="modal-card-title">{{ title }}</h4>
        <button class="delete" aria-label="close" @click="close"></button>
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
  props: {
    title: String,
  },
  data() {},
  computed: {
    isActive() {
      return this.$store.getters.isModalShown ? "is-active" : "";
    },
  },
  methods: {
    close() {
      this.$store.commit("toggleModal");
    },
  },
};
</script>

<style>
</style>