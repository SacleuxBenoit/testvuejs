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
            <nuxt-link tag="li" to="/">Accueil</nuxt-link>
          </li>
        </v-tab>

        <v-tab>
          <li>
            <nuxt-link tag="li" to="/articles">Articles</nuxt-link>
          </li>
        </v-tab>

        <v-tab>
          <li>
            <nuxt-link tag="li" to="/partenaires">Partenaires</nuxt-link>
          </li>
        </v-tab>
      </v-tabs>

      <v-tabs right background-color="transparent" color="white">
        <v-tab>
          <popupRegister />
        </v-tab>
        <v-tab>
          <popupLogin />
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import popupRegister from "@/components/popupRegister.vue";
import popupLogin from "@/components/popupLogin.vue";
export default {
  components: {
    popupRegister,
    popupLogin
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