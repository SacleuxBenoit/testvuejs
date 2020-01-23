<template>
<v-app>
<v-toolbar>
  <v-toolbar-title>{{title}}</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn flat v-bind:keys='menu in menus'>{{menu.name}}</v-btn>
  </v-toolbar-items>
</v-toolbar>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      title: "test",
      menus:[
        {name:"About"},
        {name:"Link2"},
        {name:"Search"},
      ]
    }
  },
  name: 'App' 
  }
</script>