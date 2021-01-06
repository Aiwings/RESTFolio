<template>
  <v-dialog
    v-model="$attrs.value.show"
    max-width="1080"
    @click:outside="updateClose()"
  >
    <v-card>
      <v-card-title class="headline"> Edition du Block </v-card-title>
      <v-form ref="form" @submit.prevent="submit">
        <v-container>
          <v-row justify="center">
            <v-col cols="3">
              <v-text-field
                outlined
                label="Nom du champ"
                v-model="form.name"
                required
              >
              </v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field
                outlined
                label="Slug"
                :readonly="!toCreate"
                v-model="form.slug"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row align-content="center" justify="center">
            <vue-editor v-model="form.content"></vue-editor>
          </v-row>
          <v-alert v-if="message" v-bind:type="alert_type" dismissible>
            {{ message }}
          </v-alert>
        </v-container>
        <v-card-actions class="d-flex justify-center">
          <v-btn :disabled="!formIsValid" color="primary" type="submit">
            Soummettre
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
  name: "BlockModif",
  components: {
    VueEditor,
  },
  data() {
    return {
      message: "",
      alert_type: "",
    };
  },
  computed: {
    form: {
      get() {
        return this.$attrs.value.form;
      },
      set(newForm) {
        this.$emit("input", newForm);
      },
    },
    toCreate: {
      get() {
        return this.$attrs.value.toCreate;
      },
      set(create) {
        this.$emit("input", create);
      },
    },
    formIsValid() {
      return this.form.slug && this.form.name && this.form.content;
    },
  },
  methods: {
    submit() {
      this.$emit("blockSubmit");
    },
    updateClose() {
      this.$emit("closed");
    },
  },
};
</script>
<style lang="scss">
.quillWrapper {
  height: 100%;
}
</style>