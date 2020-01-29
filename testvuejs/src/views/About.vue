<template>
<div>
  <Header />
<HelloWorld />
<Footer />
</div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


export default {
  component: {
    HelloWorld,
    Header,
    Footer
  }
}
</script>