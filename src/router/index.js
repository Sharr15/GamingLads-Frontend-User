import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Profile from "../views/Profile.vue";
import Match from "../views/Match.vue";
import Matched from "../views/Matched.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
    //beforeEnter: (to, from, next) => { if(!store.getters["auth/authenticated"]){return next({name: "signin"})} next()}
  },
  {
    path: "/match",
    name: "match",
    component: Match
    //beforeEnter: (to, from, next) => { if(!store.getters["auth/authenticated"]){return next({name: "signin"})} next()}
  },
  {
    path: "/matched",
    name: "matched",
    component: Matched
    //beforeEnter: (to, from, next) => { if(!store.getters["auth/authenticated"]){return next({name: "signin"})} next()}
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
