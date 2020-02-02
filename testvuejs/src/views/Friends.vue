<template>
  <div class="home">
    <Footer />
    <Header/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";


export default {
  name: "Friends",
  components: {
    Footer,
    Header
  }
};
</script>
