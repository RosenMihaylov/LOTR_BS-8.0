import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/createACard",
    name: "createACard",
    component: () => import("../views/CreateACard.vue")
  },
  {
    path: "/cardList",
    name: "cardList",
    component: () => import("../views/CardList.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
