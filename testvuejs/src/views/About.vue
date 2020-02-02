<template>
<div class="About">
  <HelloWorld />
  <Header />
<Footer />
<vuetify />
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";
import vuetify from '../plugins/vuetify';


export default {
  name:"about",
  component: {
    Header,
    HelloWorld,
    Footer,
    vuetify,
  }
}
</script>