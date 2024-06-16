import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useLoginStore } from "@/stores/login";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      redirect: "/carousel",
      children: [
        {
          path: "/about",
          component: () => import("../views/AboutView.vue"),
        },

        {
          path: "/carousel",
          component: () => import("@/views/home/Carousel.vue"),
        },
        {
          path: "/qiyuan",
          component: () => import("../views/jieshao/QiyuanView.vue"),
        },
        {
          path: "/what",
          component: () => import("@/views/jieshao/WhatView.vue"),
        },
      ],
    },
    {
      path: "/login",
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

//导航守卫
//用户未登录默认跳转登录页，登录则正常进入下一步
router.beforeEach((to, from, next) => {
  //取出pinia仓库中的登录信息状态
  const loginStore = useLoginStore();
  //取出缓存localStorage中的用户信息
  const userInfo = localStorage.getItem("userInfo");

  if (loginStore.userInfo || userInfo) {
    next();
  } else {
    //if是避免死循环
    if (to.path == "/login") {
      next();
      return;
    }
    next("/login");
  }
});

export default router;
