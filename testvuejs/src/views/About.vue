<template>
  <div class="about">
    <Footer />
     <router-view />

  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";

export default {
  name: "about",
  components: {
    Footer,
  }
};
</script>
