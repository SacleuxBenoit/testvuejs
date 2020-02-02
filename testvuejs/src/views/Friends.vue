<template>
  <div class="home">
    <Header/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";


export default {
  name: "friends",
  components: {
    Footer,
    Header
  }
};
</script>
