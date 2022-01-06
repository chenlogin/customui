
<template>
  <div id="example">
    <button @click="handleClick">按钮</button>
  </div>
</template>

<style scoped>
  button{
    width: 100px;
    height: 50px;
  }
</style>



<script lang="ts">

declare const __GLOBAL_STRING__: boolean;

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String,
      default() {
        return 'default'
      }
    }
  },
  //在 setup 中你应该避免使用 this，因为它不会找到组件实例。
  //setup 的调用发生在 data property、computed property 或 methods 被解析之前。
  setup(props) {
    const handleClick = (evt: MouseEvent) => {
      alert(__GLOBAL_STRING__)
    }
    return {
      handleClick
    }
  }
})
</script>



