import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import auth from "../auth";

const requireAuth = async (to, from, next) => {
  let authResult = await auth.authenticated();
  if (!authResult) {
    next("/login");
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: requireAuth,
  },
  {
    path: "/contacts",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactView.vue"),
  },
  {
    path: "/posts/:id",
    name: "post",
    component: () =>
      import(/* webpackChunkName: "post" */ "../views/PostView.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue"),
  },
  {
    path: "/addPost",
    name: "addPost",
    component: () =>
      import(/* webpackChunkName: "post" */ "../views/AddPostView.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/:catchAll(.*)",
    name: "home",
    component: HomeView,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
