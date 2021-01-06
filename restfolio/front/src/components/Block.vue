<template>
  <div :id="'slug-' + slug">
    <v-container>
      <div @click="toggleModif" v-html="block.content"></div>
    </v-container>
    <BlockModif
      v-if="isConnected"
      @closed="toggleModif()"
      v-model="modifs"
      @blockSubmit="blockSubmit"
    ></BlockModif>
  </div>
</template>

<script>
import Api from "../calls/api";
import BlockModif from "./BlockModif";
export default {
  props: ["slug"],
  components: {
    BlockModif,
  },
  data() {
    let url = `/api/block/${this.slug}`;
    this.getContent(url);
    let block = {
      content: "Contenu à insérer",
      name: "",
      slug: this.slug,
    };
    return {
      isConnected: localStorage.getItem("token"),
      block: block,
      url: url,
      modifs: {
        show: false,
        form: block,
        toCreate: false,
      },
    };
  },
  methods: {
    async getContent(url) {
      try {
        let req = await Api.get(url);
        this.block.content = req.data.content;
        this.block.name = req.data.name;
      } catch (err) {
        if (err.response.status == 404) {
          this.modifs.toCreate = true;
        }
      }
    },
    toggleModif() {
      this.modifs.show = !this.modifs.show;
    },
    async blockSubmit() {
      try {
        let req = !this.modifs.toCreate
          ? await Api.put(this.url, this.block)
          : await Api.post("/api/blocks/", this.block);
        console.log(req.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>