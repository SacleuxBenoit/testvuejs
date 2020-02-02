<template>
  <div class="home">
    <Novuetify />
    <router-link to="/About">About</router-link>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Novuetify from "@/components/Novuetify.vue";


export default {
  name: "home",
  components: {
    Novuetify
  }
};
</script>
