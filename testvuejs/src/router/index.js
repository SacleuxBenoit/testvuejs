import Vue from "vue";
import VueRouter from "vue-router";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Home from "../views/Home.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },

  {
    path: "/About",
    name: "about",
    component: Header, Footer
  },

  // Fait une redirection vers le home quand le chemin n'est pas bon
  {
    path: "*",
    redirect: '/'
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
