const host = process.env.NODE_ENV === 'development' ? 'localhost:8080' : 'semojs.github.io'

module.exports = {
  title: 'Semo 后端脚手架',
  description: '沉淀最佳实践，减少重复投入，增加一致性。',
  base: '/semo-starter-backend-typescript/',
  dest: 'public',
  themeConfig: {
    repo: 'https://github.com/semojs/semo-starter-backend-typescript',
    repoLabel: '代码',
    editLinks: true,
    editLinkText: '帮助改善此页面！',
    docsDir: 'doc',
    displayAllHeaders: false,
    nav: [
      { text: '首页', link: '/'},
      { text: '项目说明', link: '/business/'},
      { text: '脚手架使用说明', link: '/guide/'},
      { text: '参考', link: `http://${host}/semo-starter-backend-typescript/typedoc/`},
      { text: '接口', link: `http://${host}/semo-starter-backend-typescript/apidoc/`},
    ],
    sidebarDepth: 1,
    sidebar: [
      {
        title: '指南',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/quickstart/',
          '/guide/dir/',
          '/guide/config/',
          '/guide/global/',
          '/guide/error/',
          '/guide/controller/',
          '/guide/database/',
          '/guide/helper-service/',
          '/guide/deploy/',
        ]
      },
      {
        title: '进阶',
        collapsable: false,
        children: [
          '/topics/command/',
          '/topics/script/',
          '/topics/cron/',
          '/topics/model/',
          '/topics/extend/',
          '/topics/repl/',
          '/topics/tdd/',
          '/topics/semo/'
        ]
      },
      {
        title: '社区',
        collapsable: false,
        children: [
          '/community/contrib/',
          '/community/resource/',
          '/community/qa/',
        ]
      }
    ]
  }

}
