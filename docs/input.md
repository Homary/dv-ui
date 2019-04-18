## Input 输入框

通过鼠标或键盘输入字符

### 基础用法  
:::demo `placeholder`属性
```html
<dv-input placeholder="请输入内容"></dv-input>
```
::: 

### 设置长度
:::demo `width`属性,默认为`100%`
```html
<dv-input width="150px"></dv-input>
```
:::

### 双向绑定
::: demo `v-model`双向绑定数据
```html
<dv-input v-model="val"></dv-input>

<script>
    export default {
        data() {
            return {
                val: 1
            }
        }
    }
</script>
```
:::

### 禁用状态
:::demo `disabled`  
```html
<dv-input disabled="true" placeholder="禁用输入"></dv-input>
```
:::

### Input Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value / v-model | 绑定值           | string / number  | — | — |
| maxlength     | 原生属性，最大输入长度      | number          |  —  | — |
| minlength     | 原生属性，最小输入长度      | number          | — | — |
| placeholder   | 输入框占位文本    | string          | — | — |
| disabled      | 禁用            | boolean         | — | false   |
| name | 原生属性 | string | — | — |
| readonly | 原生属性，是否只读 | boolean | — | false |
| max | 原生属性，设置最大值 | — | — | — |
| min | 原生属性，设置最小值 | — | — | — |
| width | 设置长度 | string | — | — |

### Input Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| blur | 在 Input 失去焦点时触发 | event, 组件根节点 |
| focus | 在 Input 获得焦点时触发 | event, 组件根节点 |
| change | 在 Input 值改变时触发 |  改变后的值, 组件根节点  |
| input | 在 Input 值改变时触发 | 改变后的值, 组件根节点  |