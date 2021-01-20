<template>
  <NavBar></NavBar>
  <router-view />
  <Login v-if="showLogin"></Login>
</template>
<script>
import NavBar from "./components/NavBar";
import Login from "./components/Login";
export default {
  components: {
    NavBar,
    Login,
  },
  computed: {
    showLogin() {
      return this.$store.getters.isModalShown;
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" src="@/scss/index.scss"></style>
