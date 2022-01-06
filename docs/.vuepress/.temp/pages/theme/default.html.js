export const data = {
  "key": "v-72f5dc77",
  "path": "/theme/default.html",
  "title": "default theme",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1641484159000,
    "contributors": [
      {
        "name": "meng.chen",
        "email": "meng.chen@17zuoye.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "theme/default.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
