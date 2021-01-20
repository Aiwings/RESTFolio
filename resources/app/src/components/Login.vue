<template>
  <Modal title="Connexion à l' API">
    <template v-slot:default>
      <form @submit.prevent="submit">
        <div class="field">
          <label for="email" class="label"></label>
          <div class="control has-icons-left">
            <input
              type="email"
              name="email"
              v-model="email"
              :class="'input ' + valid.email.classname"
              placeholder="email"
              required
            />
            <span class="icon is-small is-left">
              <svg class="iconsvg icon-user">
                <use xlink:href="@/assets/icons.svg#icon-user"></use>
              </svg>
            </span>
          </div>
          <p :class="'help ' + valid.email.classname">
            {{ valid.email.message }}
          </p>
        </div>
        <div class="field">
          <label for="password" class="lab"> Mot de passe</label>
          <div class="control has-icons-left">
            <input
              type="password"
              name="password"
              v-model="password"
              :class="'input ' + valid.password.classname"
              placeholder="mot de passe"
              required
            />
            <span class="icon is-small is-left">
              <svg class="iconsvg icon-lock">
                <use xlink:href="@/assets/icons.svg#icon-lock"></use>
              </svg>
            </span>
          </div>
          <p :class="'help ' + valid.password.classname">
            {{ valid.password.message }}
          </p>
        </div>
      </form>
      <div :class="messageclass">
        <div class="message-body">{{ message }}</div>
      </div>
    </template>
    <template v-slot:footer>
      <button
        @click="login"
        class="button is-primary"
        v-bind:disabled="!isValid"
      >
        Se Connecter
      </button>
      <button class="button" @click="close">Annuler</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "./Modal";
import Api from "../api/index";
export default {
  data() {
    return {
      email: "",
      password: "",
      valid: {
        email: {
          state: false,
          message: "",
          classname: "",
        },
        password: {
          state: false,
          message: "",
          classname: "",
        },
      },
      message: "",
      messageclass: "",
    };
  },
  components: {
    Modal,
  },
  watch: {
    email() {
      let regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
      if (!this.email) {
        this.valid.email.message = "Adresse email requise";
        this.valid.email.classname = "is-danger";
      } else if (!regex.test(this.email)) {
        this.valid.email.message = "Adresse email non valide";
        this.valid.email.classname = "is-danger";
      } else {
        this.valid.email.state = true;
        this.valid.email.message = "Adresse email valide";
        this.valid.email.classname = "is-success";
      }
    },
    password() {
      if (!this.password) {
        this.valid.password.message = "Mot de passe requis";
        this.valid.password.classname = "is-danger";
        return;
      }
      this.valid.password.message = "";
      this.valid.password.state = true;
      this.valid.password.classname = "is-success";
    },
  },
  computed: {
    isValid() {
      return this.valid.password.state && this.valid.email.state;
    },
  },
  methods: {
    async login() {
      let jsonobj = {
        email: this.email,
        password: this.password,
      };
      try {
        const request = await Api.post("/api/login", jsonobj);
        let data = await request.json();

        if (data.success == true) {
          this.result = true;
          this.message = "Connection effectuée";
          localStorage.setItem("token", data.api_token);
          this.messageclass = "message is-success";
        } else {
          throw new Error(data.error);
        }
      } catch (error) {
        console.error(error);
        this.message = error.message;
        this.messageclass = "message is-danger";
      }
    },
    close() {
      this.$store.commit("toggleModal");
    },
  },
};
</script>

<style>
</style>