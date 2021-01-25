<template>
  <NavBar @showLogin="toggleLogin"></NavBar>
  <router-view />
  <Login :showModal="showLogin" @closeModal="toggleLogin"></Login>
  <BlockModif v-if="logged"></BlockModif>
</template>
<script>
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import BlockModif from "./components/BlockModif";
export default {
  components: {
    NavBar,
    Login,
    BlockModif,
  },
  computed: {},
  data() {
    return {
      logged: localStorage.getItem("token") !== null,
      showLogin: false,
      showModif: false,
    };
  },
  methods: {
    toggleLogin() {
      this.showLogin = !this.showLogin;
    },
  },
};
</script>
<style lang="scss" src="@/scss/index.scss"></style>
