// 电影路由
export default {
  // 页面请求uri
  path: "/film",
  component: () => import("@/views/Film/Film"),
  // 子路由 嵌套路由
  children: [
    {
      // /film/nowplaying
      path: "nowplaying",
      component: () => import("@/views/Film/NowPlaying"),
    },
    {
      path: "comingsoon",
      component: () => import("@/views/Film/ComingSoon"),
    },
    {
      path: "/film",
      redirect: "nowplaying",
    },
  ],
};
