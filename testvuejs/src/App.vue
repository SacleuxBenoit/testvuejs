<template>
  <div class="home">
    <Header/>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Header,
    HelloWorld,
    Footer
  }
};
</script>
