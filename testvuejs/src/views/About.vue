<template>
<div>
  <Header />
<Footer />
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


export default {
  name:"About",
  component: {
    Header,
    Footer
  }
}
</script>