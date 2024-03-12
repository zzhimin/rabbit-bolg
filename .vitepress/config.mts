import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "记录工作记录生活",
  description: "my blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '前端架构', link: '/architecture/mvc-mvp-mvvm.md' }
    ],

    outline: {
      level: [2, 6],
      label: '目录'
    },

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: '前端架构',
        items: [
          { text: 'MVC、MVP、MVVM', link: '/architecture/mvc-mvp-mvvm.md' },
          { text: 'Clean Architecture', link: '/architecture/clean-architecture.md' },
          { text: 'Clean Architecture For Frontend', link: '/architecture/clean-architecture-frontend.md' },
          { text: 'Clean Architecture For Angular', link: '/architecture/clean-architecture-angular.md' },
          { text: 'Clean Architecture For Vue', link: '/architecture/clean-architecture-vue.md' },

        ]
      },
      {
        text: '最佳实践',
        items: [
          { text: 'test', link: '/architecture/mvc-mvp-mvvm.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zzhimin/work-log' }
    ]
  }
})
