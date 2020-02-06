<template>
  <v-app-bar
    fixed
    app
    shrink-on-scroll
    prominent
    src="blueBannerYWW.png"
    fade-img-on-scroll
    height="2rem"
  >
    <template v-slot:img="{ props }">
      <v-img v-bind="props"></v-img>
    </template>

    <v-spacer></v-spacer>

    <template v-slot:extension>
      <v-tabs align-with-title background-color="transparent" color="white">
        <v-tab>
          <li>
            <router-link to="/">Accueil</router-link>
          </li>
        </v-tab>

        <v-tab>
          <li>
            <router-link to="/">Créer un cheat-sheet</router-link>
          </li>
        </v-tab>
      </v-tabs>

      <v-tabs right background-color="transparent" color="white">
        <v-tab>
          <Register />
        </v-tab>
        <v-tab>
          <Login />
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
export default {
    name:"NavBar",
  components: {
    Register,
    Login
  }
};
</script>

<style lang="scss" scoped>
li {
  text-decoration: none;
  list-style-type: none;
}
span {
  text-shadow: 1px 2px 2px black;
}
v-tab {
  text-shadow: 1px 2px 2px black;
}
</style>