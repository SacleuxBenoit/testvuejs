<template>
  <div class="about">
    <Header />
    <Footer />
     <router-view />

  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "about",
  components: {
    Footer,
    Header
  }
};
</script>
