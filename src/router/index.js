import Vue from "vue";
import VueRouter from "vue-router";

// 导入路由模块
import centerRouter from "@/router/routes/center";
import cinemaRouter from "@/router/routes/cinema";
import filmRouter from "@/router/routes/film";

Vue.use(VueRouter);

const routes = [
  // 注册路由模块
  centerRouter,
  cinemaRouter,
  filmRouter,
  {
    path: "/",
    redirect: "/film",
  },
];

const router = new VueRouter({
  mode: "history",
  // 前缀暂时可以不用使用
  // base: process.env.BASE_URL,
  routes,
});

export default router;
