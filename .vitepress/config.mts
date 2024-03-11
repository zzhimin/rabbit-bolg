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
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zzhimin/work-log' }
    ]
  }
})
