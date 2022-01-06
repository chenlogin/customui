import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("Button", defineAsyncComponent(() => import("/Users/chen/Documents/personal/vuepress-starter/packages/button/index.vue")))
}
