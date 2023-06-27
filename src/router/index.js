import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "all",
      component: () => import("../views/All.vue"),
    },
    {
      path: "/done",
      name: "done",
      component: () => import("../views/Done.vue"),
    },
    {
      path: "/favor",
      name: "favor",
      component: () => import("../views/Favor.vue"),
    },
    {
      path: "/deleted",
      name: "deleted",
      component: () => import("../views/Deleted.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/Settings.vue"),
    },
    {
      path: "/help",
      name: "help",
      component: () => import("../views/Help.vue"),
    },
  ],
});

export default router;
