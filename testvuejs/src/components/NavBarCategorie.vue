<template>
  <v-bottom-navigation grow height="2.5rem">
    <v-btn :value="activeBtn" style="color:#f2a413" class="subtitle-1">
      <strong style="color:#FB4C26"><router-link to="/About">
#HTML</router-link></strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#72dbf2" class="subtitle-1">
      <strong style="color:#2684FB">#CSS</strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#f20574" class="subtitle-1">
      <strong style="color:#f20574">#SASS</strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#fddb22" class="subtitle-1">
      <strong style="color:#FBFB26">#Javascript</strong>
    </v-btn>

    <v-btn :value="activeBtn" style="color:#18d95b" class="subtitle-1">
      <strong style="color:#18d95b">#VueJS</strong>
    </v-btn>
    <v-btn :value="activeBtn" style="color:#04d912" class="subtitle-1">
      <strong style="color:#171703">#Markdown</strong>
    </v-btn>
    <v-btn :value="activeBtn" style="color:#fffAc3" class="subtitle-1">
      <strong style="color:#fffAc3">#Algorithmes</strong>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
    name:"NavBarCategorie",
  data() {
    return {
      activeBtn: 1
    };
  }
};
</script>

<style lang="scss" scoped>

</style>