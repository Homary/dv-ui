## Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基本用法

:::demo 绑定`v-model`到一个`Boolean`类型的变量。可以使用`active-color`属性与`inactive-color`属性来设置开关的背景色。

```html
<dv-switch v-model="val1" :active-color="blue" :inactive-color="red"></dv-switch>
<script>
    export default {
        data() {
            return {
                val1: true,
                val2: true,
                blue: 'blue',
                red: 'red'
            }
        }
    }
</script>
```
:::

### 文字描述  

:::demo 不同状态说明  

```html
<dv-switch v-model="val2" active-text="打开状态" inactive-text="关闭状态"></dv-switch>
<script>
    data() {
        return {
            val2: true
        }
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | boolean / string / number | — | — |
| width  | switch 的宽度（像素）    | number   | — | 40 |
| active-text  | switch 打开时的文字描述    | string   | — | — |
| inactive-text  | switch 关闭时的文字描述    | string   | — | — |
| active-value  | switch 打开时的值    | boolean / string / number | — | true |
| inactive-value  | switch 关闭时的值    | boolean / string / number | — | false |
| active-color  | switch 打开时的背景色    | string   | — | #409EFF |
| inactive-color  | switch 关闭时的背景色    | string   | — | #C0CCDA |
| name            | switch 对应的 name 属性    | string   | — | — |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | switch 状态发生变化时的回调函数    | 新状态的值, 组件根节点 |