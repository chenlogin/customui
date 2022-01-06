import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

const { path } = require('@vuepress/utils')

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'en-US',
  title: 'Custom UI',
  description: 'Just playing around',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    home: '/',
    navbar: [
      {
        text: '主题',
        link: '/theme/default.md',
      }
    ],
    sidebar: [
      {
        text: '开发指南',
        link: '/guide/',
        children: [
          {
            text: '安装',
            link: '/guide/install.md',
            children: [],
          },
          {
            text: '快速上手',
            link: 'https://v2.vuepress.vuejs.org/zh/',
            children: [],
          }
        ],
      },
      {
        text: '组件',
        link: '/basic/',
        children: [
          {
            text: 'Button',
            link: '/basic/button.md',
            children: [],
          }
        ],
      }
    ],
    
    lastUpdated: true,
    contributors: true,
    editLink:false,
    repo: 'https://github.com/chenlogin/customui',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者'
  },
  plugins: [
    ['vuepress-plugin-demoblock-plus'],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
    [
      '@vuepress/register-components',
      {
        components: {
          Button: path.resolve(__dirname, '../../packages/button/index.vue'),
        },
      },
    ],
  ],
  define: {
    __GLOBAL_BOOLEAN__: true,
    __GLOBAL_STRING__: 'foobar',
    __GLOBAL_OBJECT__: { foo: 'bar' },
  },
})

//4、layout