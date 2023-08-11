import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/RwdPage",
      name: "Rwd",
      component: () => import("../views/RwdPage.vue"),
    },
    {
      path: "/QuotePage",
      name: "Quote",
      component: () => import("../views/QuotePage.vue"),
    },
  ],
});

export default router;
