import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ContactUs from "../views/ContactUs.vue";
import Friends from "../views/Friends";
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
    component: About
  },
  {
    path: "/ContactUs",
    name: "contactUs",
    component: ContactUs
  },
  {
    path: "/Friends",
    name: "friends",
    component: Friends
  },
  {
    path: "/MessageGroupe",
    name: "messageGroupe",
    component: MessageGroupe
  },
  {
    path: "/MessagePrivate",
    name: "messagePrivate",
    component: MessagePrivate
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
