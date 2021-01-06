<template>
  <v-dialog
    v-model="$attrs.value"
    max-width="1080"
    @click:outside="updateClose()"
  >
    <v-card>
      <v-card-title class="headline"> Connexion à l' API </v-card-title>
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
          <v-alert v-if="message" v-bind:type="alert_type" dismissible>
            {{ message }}
          </v-alert>
        </v-container>
        <v-card-actions class="d-flex justify-center">
          <v-btn :disabled="!formIsValid" color="primary" type="submit">
            Connection
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
import Api from "../calls/api";
export default {
  name: "Login",
  data() {
    const defaultForm = Object.freeze({
      login: "",
      password: "",
    });
    return {
      form: Object.assign({}, defaultForm),
      message: "",
      alert_type: "",
    };
  },
  computed: {
    formIsValid() {
      return this.form.login && this.form.password;
    },
  },
  methods: {
    async submit() {
      try {
        const req = await Api.login(this.form);
        let { key } = await req.data;
        console.log(key);
        this.alert_type = "success";
        this.message = "Connexion réussie";
        localStorage.setItem("token", key);
        this.$store.dispatch("connect");
        setTimeout(() => {
          this.updateClose();
        }, 2000);
      } catch (error) {
        this.alert_type = "error";
        console.error(error.message);
        this.message = "Erreur de la connexion";
      }
    },
    updateClose() {
      this.$emit("closed", false);
    },
  },
};
</script>
