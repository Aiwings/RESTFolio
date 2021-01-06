<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Block slug="notexist"></Block>
  </div>
</template>

<script>
// @ is an alias to /src
import Block from "@/components/Block.vue";

export default {
  name: "Home",
  components: {
    Block,
  },
};
</script>
