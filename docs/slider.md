## Slider 滑块

通过拖动滑块在一个固定区间内进行选择

必须绑定`v-model`

### 基础用法 

:::demo 拖动滑块时,显示当前值  

```html
<template>
    <dv-slider v-model="value1"></dv-slider>
</template>
<script>
    export default {
        data() {
            return {
                value1: 0,
                value2: 0,
                value3: [10, 25]
            }
        }
    }
</script>
```
:::

### 范围选择  

:::demo 设置range即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值

```html
<dv-slider v-model="value3" range></dv-slider>
<script>
    export default {
        data() {
            return {
                value3: [10, 25]
            }
        }
    }
</script>
```
:::

### 竖向模式

:::demo 设置vertical可使 Slider 变成竖向模式，此时必须设置高度height属性  

```html
<template>
    <dv-slider v-model="value2" vertical height="250px"></dv-slider>
</template>
<script>
    export default {
        data() {
            return {
                value2: 0
            }
        }
    }
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | number | — | 0 |
| min | 最小值 | number | — | 0 |
| max | 最大值 | number | — | 100 |
| disabled | 是否禁用 | boolean | — | false |
| step | 步长 | number | — | 1 |
| show-stops | 是否显示间断点 | boolean | — | false |
| show-tooltip | 是否显示 tooltip | boolean | — | true |
| format-tooltip | 格式化 tooltip message | function(value) | — | — |
| range | 是否为范围选择 | boolean | — | false |
| vertical | 是否竖向模式 | boolean | — | false |
| height | Slider 高度，竖向模式时必填 | string | — | — |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发） | 改变后的值, 组件根节点 |
