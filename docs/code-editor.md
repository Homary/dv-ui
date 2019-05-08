## Code 编辑器

在线 web 代码编辑器, 支持代码高亮、提示、自动补全(Ctrl)    

### 基础用法  

:::demo 使用方法, mode 默认为 javascript ,支持 vue

```html 
<dv-code-editor :value="jsCode" mode="javascript"></dv-code-editor>
<script>
    export default {
        data() {
            return {
                jsCode: `const str = 'Hello World'`,
                vueCode: '<template></template>'
            }
        }
    }
</script>
```
:::

### 设置主题

:::demo 主题设置,配置 theme,支持 codemirror 所有主题   

```html 
<dv-code-editor :value="jsCode" mode="javascript" theme="seti"></dv-code-editor>
<br />
<dv-code-editor :value="vueCode" mode="vue" theme="monokai"></dv-code-editor>
<script>
    export default {
        data() {
            return {
                jsCode: `const str = 'Hello World'`,
                vueCode: '<template></template>'
            }
        }
    }
</script>
```
:::

### Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value / v-model | 绑定值           | string   | — | — |
| tabSize | tab 缩进大小 | number | — | 4 |
| mode | 语言模式 | string | javascript \ vue | javascript |
| theme | 颜色主题 | sting | codemirror 所有主题 | default |
| lineNumbers | 是否显示行号 | boolean | — | true |  

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 在值改变时触发 |  改变后的值, 组件根节点  | 

#### codemirror主题

https://codemirror.net/demo/theme.html