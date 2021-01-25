<template>
  <div
    @click="togModif"
    class="block"
    :id="'block-' + slug"
    v-html="content"
  ></div>
</template>

<script>
import Api from "../api/index";
export default {
  props: {
    slug: String,
  },
  data() {
    return {
      name: "",
      content: "Contenu à ajouter",
      created: false,
    };
  },
  methods: {
    togModif() {
      this.$store.dispatch("showEditor", {
        name: this.name,
        slug: this.slug,
        content: this.content,
        created: this.created,
      });
      var module = this;
      const unsubscribeEdit = this.$store.subscribeAction(function (
        action,
        state
      ) {
        if (action.type == "ajaxBlock") {
          module.name = state.modifiedBlock.name;
          module.content = state.modifiedBlock.content;
          //console.log(this.content);
        }
        if (action.type == "closeEdit") {
          unsubscribeEdit();
        }
      });
    },
  },
  async created() {
    try {
      let req = await Api.get("/api/blocks/" + this.slug);
      let res = await req.json();
      this.content = res.content;
      this.name = res.name;
      console.log(res);
      this.created = true;
    } catch (error) {
      console.log(error.message);
    }
  },
};
</script>

<style>
</style>