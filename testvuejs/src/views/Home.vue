<template>
  <div class="home">
    <Header />
    <NavBar />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue"
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    NavBar,
    Footer,
    Header
  }
};
</script>
