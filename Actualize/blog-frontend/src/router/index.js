import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import LogOut from "../views/LogOut.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/beeg",
    name: "beeg",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BEEGView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogOut,
  },
  {
    path: "/posts",
    name: "posts-index",
    component: () => import("../views/PostsIndex.vue"),
  },
  {
    path: "/posts/:id",
    name: "posts-show",
    component: () => import("../views/PostsShow.vue"),
  },
  {
    path: "/posts/new",
    name: "posts-new",
    component: () => import("../views/PostsNew.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;