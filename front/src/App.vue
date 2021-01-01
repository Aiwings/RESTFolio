<template>
  <div id="app">
    <ui-top-app-bar contentSelector="main" type="1" nav-id="drawer-menu">Guillaume Roux Créations</ui-top-app-bar>
    <div class="mdc-top-app-bar--fixed-adjust">
      <Drawer></Drawer>
      <router-view />
    </div>
  </div>
</template>
<script>
import Drawer from "./views/Drawer";
export default {
  name:"app",
  components: {
    Drawer
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
}

</style>