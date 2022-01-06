import { App } from 'vue'
import Button from './index.vue'

// 在组件上添加install方法，方便直接使用单个组件
Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export default Button
export { Button }
