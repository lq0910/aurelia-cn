module.exports = {
  title: "Aurelia 中文网",
  description: "Aurelia 简单强大的下一代MVVM应用框架",
  head: [
    ["link", { rel: "icon", href: "/icons/icon.png" }]
  ],
  //base: '/docs/', // 设置站点根路径
  //theme: "@vuepress/vue",
  themeConfig: {
    repo: "lq0910/aurelia-cn",
    repoLabel: "查看源码",

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    //docsRepo: "lq0910/aurelia-cn",
    // 假如文档不是放在仓库的根目录下：
    docsDir: "/docs",
    // 假如文档放在一个特定的分支下：
    //docsBranch: "master",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "帮助我们改善此页面！",
    nav: [
      { text: "起步", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "API", link: "/api/" },
      {
        text: "官网通道",
        items: [
          { text: "英文文档", link: "https://aurelia.io" },
          { text: "官方论坛", link: "https://discourse.aurelia.io/" },
          { text: "官方博客", link: "https://aurelia.io/blog" },
        ]
      },
    ],
    sidebar: "auto", //自动生成侧栏
    displayAllHeaders: true, // 默认值：false 显示所有页面的标题链接
    lastUpdated: "上次更新", // string | boolean
    serviceWorker: {
      updatePopup: true // Boolean | Object, 默认值是 undefined.
      //如果设置为 true, 默认的文本配置将是:
      /*  updatePopup: {
        message: "文档有新的更新",
        buttonText: "刷新"
      } */
    }
  }
};
