import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/MainPage.vue";
import SignupView from "../views/SignupPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "Sign up",
    component: SignupView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
