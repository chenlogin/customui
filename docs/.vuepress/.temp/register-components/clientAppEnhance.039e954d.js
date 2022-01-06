import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("Button", defineAsyncComponent(() => import("/Users/chen/Documents/personal/customui/packages/button/index.vue")))
}
