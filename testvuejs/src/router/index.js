import Vue from "vue";
import VueRouter from "vue-router";
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
    component: Footer
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
