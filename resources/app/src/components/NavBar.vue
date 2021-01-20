<template>
  <nav
    class="navbar is-primary is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <p class="navbar-item">Portfolio</p>
      <a
        role="button"
        aria-label="menu"
        :aria-expanded="expanded"
        :class="'navbar-burger' + active"
        @click="togglenav"
        data-target="navBar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navBar" :class="'navbar-menu' + active">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item" active-class="is-active">
          Accueil
        </router-link>
        <router-link to="/about" class="navbar-item" active-class="is-active">
          A Propos
        </router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <a class="button is-primary" @click="clickLogin"> Connexion </a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      expanded: false,
    };
  },
  computed: {
    active() {
      return this.expanded ? "is-active" : "";
    },
  },
  methods: {
    togglenav() {
      this.expanded = !this.expanded;
    },
    clickLogin() {
      this.$store.commit("toggleModal");
    },
  },
};
</script>