<template>
  <v-app>
    <v-app-bar dense color="primary" dark elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Guillaume Roux</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="secondary--text text--accent-4">
          <router-link to="/" custom v-slot="{ href, navigate, isActive }"> 
            <v-list-item :class="{ active: isActive }" :href="href" @click="navigate">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              Accueil
            </v-list-item>
          </router-link>
           <router-link to="/login" custom v-slot="{ href, navigate, isActive }"> 
            <v-list-item :class="{ active: isActive }" :href="href" @click="navigate">
              <v-list-item-icon>
                <v-icon>mdi-account-box</v-icon>
              </v-list-item-icon>
              Connection
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>

export default {
  name: "App",

  components: {
    
  },

  data: () => ({
      drawer: false,
      group: null,
  })
};
</script>
