<template>
  <v-form ref="form" @submit.prevent="submit">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            outlined
            label="Utilisateur"
            v-model="form.login"
            required
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            type="password"
            outlined
            label="Mot de passe"
            v-model="form.password"
            required
          >
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-btn :disabled="!formIsValid" color="primary" type="submit"
        >Connection</v-btn
      >
    </v-card-actions>
  </v-form>
</template>
<script>
import Api from "../calls/api";
export default {
  name: "Login",
  data: () => {
    const defaultForm = Object.freeze({
      login: "",
      password: "",
    });
    return {
      form: Object.assign({}, defaultForm),
    };
  },
  computed: {
    formIsValid() {
      return this.form.login && this.form.password;
    },
  },
  methods: {
    async submit() {
      const req = await Api.login(this.form);
      let { data } = req.data;
      console.log(data);
    },
  },
};
</script>
