<template>
<div class="About">
  <HelloWorld />
  <Header />
<Footer />
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import HelloWorld from "@/components/HelloWorld.vue";

import Footer from "@/components/Footer.vue";


export default {
  name:"About",
  component: {
    Header,
    HelloWorld,
    Footer
  }
}
</script>