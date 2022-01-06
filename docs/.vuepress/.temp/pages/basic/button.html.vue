<template><h1 id="button" tabindex="-1"><a class="header-anchor" href="#button" aria-hidden="true">#</a> button</h1>
<p>{{ 1 + 1}}</p>
<div>
    <Button></Button>
</div>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;Button&gt;&lt;/Button&gt;
&lt;/template&gt;
"><render-demo-0 />
        <template #description>
          <div>按钮组件</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;&lt;/</span><span style="color: var(--shiki-token-constant)">Button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo></template>

<script lang="ts">
      import * as Vue from 'vue'
      
      export default {
        name: 'component-doc',
        components: {
          "render-demo-0": (function() {
    
    const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue

function render(_ctx, _cache) {
  const _component_Button = _resolveComponent("Button")

  return (_openBlock(), _createBlock(_component_Button))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
<style></style>