<template>
  <span>
    <div
      @click="togModif"
      class="block"
      :id="'block-' + slug"
      v-html="content"
    ></div>
    <BlockModif
      v-if="logged"
      :showModal="showModif"
      v-model:name="name"
      v-model:content="content"
      v-model:created="created"
      @send="send"
      @closeModif="togModif"
      :success="success"
    ></BlockModif>
  </span>
</template>

<script>
import Api from "../api/index";
import BlockModif from "./BlockModif";
export default {
  props: {
    slug: String,
  },
  data() {
    return {
      name: "",
      content: "Contenu à ajouter",
      created: false,
      logged: Object.prototype.hasOwnProperty.call(localStorage, "token"),
      success: {},
      showModif: false,
    };
  },
  methods: {
    async send(block) {
      let url = this.created ? `/api/blocks/${this.slug}` : `/api/blocks/`;
      let method = this.created ? "PUT" : "POST";
      try {
        let req = await Api.request(url, method, block);
        let resp = await req.json();
        if (resp.id) {
          this.success = {
            state: true,
          };
        }
      } catch (error) {
        console.error(error);
        this.success = {
          state: false,
          error: error.message,
        };
      }
    },
    togModif() {
      console.log("togModif called");
      this.showModif = !this.showModif;
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
  components: { BlockModif },
};
</script>

<style>
</style>