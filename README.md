- VuePress 是一个以 Markdown 为中心的静态网站生成器，帮助用户构建他们的文档、博客和其他静态网站
- 一个 VuePress 站点本质上是一个由 Vue 和 Vue Router 驱动的单页面应用 (SPA)。
- 路由会根据你的 Markdown 文件的相对路径来自动生成。每个 Markdown 文件都通过 markdown-it 编译为 HTML ，然后将其作为 Vue 组件的<template>。因此，你可以在 Markdown 文件中直接使用 Vue 语法，便于你嵌入一些动态内容。
- VuePress 分为两个主要部分： Node App 和 Client App ，这一点对于开发插件和主题来说都十分重要。
    - 插件或者主题的入口文件会在 Node App 中被加载，因此它们需要使用 CommonJS 格式。
    - 客户端文件会在 Client App 中被加载，也就是会被 Bundler 处理。比如布局、组件、App Setup 文件、App Enhance 文件等。它们最好使用 ESM 格式。
- Markdown 文件可以包含一个 YAML Frontmatter 。Frontmatter 必须在 Markdown 文件的顶部。可以通过 Frontmatter 来覆盖当前页面的 lang, title, description 等属性。因此，你可以把 Frontmatter 当作页面级作用域的配置。同样的，VuePress 有一些内置支持的 Frontmatter 字段，而你使用的主题也可能有它自己的特殊 Frontmatter 。默认主题支持actions，features，footer等
