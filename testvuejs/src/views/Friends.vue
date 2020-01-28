<template>
  <div class="home">
    <HelloWorld />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";


export default {
  name: "home",
  components: {
    Footer
  }
};
</script>
