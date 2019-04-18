## InputNumber 计数器

仅允许输入标准的数字值，可定义范围

### 基础用法
:::demo 只需要在`dv-number`元素中使用`v-model`绑定变量即可，变量的初始值即为默认值。
``` html
<dv-number v-model="num" :min="1" :max="10" name="number"></dv-number>
<script>
    export default {
        data() {
            return {
               num: 1 
            } 
        }
    }
</script>
```
:::

### 设置长度  
:::demo 设置`width`,默认为`100%`
```html
<dv-number width="150px"></dv-number>
```
:::

### 步数
:::demo 设置`step`
```html
<dv-number :step="5"></dv-number>
```
:::

### 按钮位置  
:::demo 设置`controls-position`
```html
<dv-number controls-position="right"></dv-number>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|----------|-------------- |----------|--------------------------------  |-------- |
| value / v-model    | 绑定值         | number | — | 0 |
| min      | 设置计数器允许的最小值 | number | — | -Infinity |
| max      | 设置计数器允许的最大值 | number | — | Infinity |
| step     | 计数器步长           | number   | — | 1 |
| controls | 是否使用控制按钮        | boolean | — | true |
| controls-position | 控制按钮位置 | string | right | - |
| name | 原生属性 | string | — | — |
| width | 设置宽度 | string | — | — |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 绑定值被改变时触发 | 最后变更的值, 组件根节点 |
| blur | 在组件 Input 失去焦点时触发 | event, 组件根节点 |
| focus | 在组件 Input 获得焦点时触发 | event, 组件根节点 |
