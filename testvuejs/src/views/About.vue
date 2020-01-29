<template>
<div>
  <Header />
<HelloWorld />
</div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";

export default {
  component: {
    HelloWorld,
    Header
  }
}
</script>