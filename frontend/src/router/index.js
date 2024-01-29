import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Main from "../views/Main.vue";

const routes = [
  {
    path: "/",

    component: Login,
  },
  {
    path: "/home",

    component: Main,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
