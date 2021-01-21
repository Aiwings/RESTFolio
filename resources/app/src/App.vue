<template>
  <NavBar @showLogin="toggleLogin"></NavBar>
  <router-view />
  <Login :showModal="showLogin" @closeModal="toggleLogin"></Login>
</template>
<script>
import NavBar from "./components/NavBar";
import Login from "./components/Login";
export default {
  components: {
    NavBar,
    Login,
  },
  computed: {},
  data() {
    return {
      showLogin: false,
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
