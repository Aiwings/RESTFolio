<template>
  <v-app>
    <v-app-bar app fixed dense dark color="primary" scroll-target="#main">
      <v-app-bar-nav-icon @click.stop="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Guillaume Roux</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="secondary--text text--accent-4"
        >
          <router-link to="/" custom v-slot="{ href, navigate, isActive }">
            <v-list-item
              :class="{ active: isActive }"
              :href="href"
              @click="navigate"
            >
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              Accueil
            </v-list-item>
          </router-link>
          <v-list-item @click.stop="toggleLoggin()">
            <v-list-item-icon>
              <v-icon>mdi-account-box</v-icon>
            </v-list-item-icon>
            Connection
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <Login
      v-if="showLogin"
      v-model="showLogin"
      @closed="toggleLoggin()"
    ></Login>
    <v-main id="main">
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import Login from "./components/Login";
export default {
  name: "App",

  components: {
    Login,
  },
  methods: {
    toggleLoggin() {
      this.showLogin = !this.showLogin;
    },
  },
  data: () => ({
    drawer: false,
    group: null,
    showLogin: false,
  }),
};
</script>
