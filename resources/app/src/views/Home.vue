<template>
  <main class="home">
    <Landing></Landing>
  </main>
</template>

<script>
// @ is an alias to /src
import Landing from "../components/Landing";

export default {
  name: "Home",
  components: {
    Landing,
  },
};
</script>
