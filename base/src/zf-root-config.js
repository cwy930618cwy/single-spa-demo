import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome", // 应用名字 随便起
  app: () =>  // 当路径匹配到的时候，执行这个方法
    System.import( // 加载了一个远程的模块，这个模块会暴露 三个钩子
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: location => location.pathname == '/',
});

registerApplication({
  name: "@zf/vue",
  app: () => System.import("@zf/vue"),
  activeWhen: ["/vue"]
});


start({  // 启动应用
  urlRerouteOnly: true,
});
