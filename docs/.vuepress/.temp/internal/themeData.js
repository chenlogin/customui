export const themeData = {
  "logo": "https://vuejs.org/images/logo.png",
  "home": "/",
  "navbar": [
    {
      "text": "主题",
      "link": "/theme/default.md"
    }
  ],
  "sidebar": [
    {
      "text": "开发指南",
      "link": "/guide/",
      "children": [
        {
          "text": "安装",
          "link": "/guide/install.md",
          "children": []
        },
        {
          "text": "快速上手",
          "link": "https://v2.vuepress.vuejs.org/zh/",
          "children": []
        }
      ]
    },
    {
      "text": "组件",
      "link": "/basic/",
      "children": [
        {
          "text": "Button",
          "link": "/basic/button.md",
          "children": []
        }
      ]
    }
  ],
  "lastUpdated": true,
  "contributors": true,
  "editLink": false,
  "repo": "https://github.com/chenlogin/customui",
  "lastUpdatedText": "上次更新",
  "contributorsText": "贡献者",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLinkText": "Edit this page",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
