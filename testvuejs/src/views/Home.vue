<template>
  <div class="home">
    <NavBarCategorie />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBarCategorie from "@/components/NavBarCategorie.vue"
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    NavBarCategorie,
    Footer,
  }
};
</script>
