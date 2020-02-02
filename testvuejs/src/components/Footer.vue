<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
<router-link to="/About">About</router-link>
<router-link to="/ContactUs">Contact Us</router-link>
<router-link to="/Friends">Friends</router-link>
<router-link to="/MessageGroupe">Message Groupe</router-link>

    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Unnamed</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: "Footer",
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Contact Us',
      ],
    }),
  }
</script>