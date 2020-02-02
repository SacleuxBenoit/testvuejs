<template>
<div class="About">
  <HelloWorld />
  <Header />
  <Novuetify />
<Footer />
<vuetify />
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";
import vuetify from '../plugins/vuetify';
import Novuetify from '@/components/Novuetify.vue';


export default {
  name:"about",
  component: {
    Header,
    HelloWorld,
    Footer,
    vuetify,
    Novuetify
  }
}
</script>