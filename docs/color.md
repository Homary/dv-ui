## ColorPicker 颜色选择器

用于颜色选择，支持多种格式。

### 基础用法

:::demo 使用`v-model`绑定颜色值, 默认值为`#000000`

```html
<dv-color v-model="color"></dv-color>
<script>
	export default {
		data() {
			return {
				color: '#409EFF'
			};
		}
	};
</script>
```

:::

### 禁用状态

:::demo 使用`disabled`

```html
<dv-color :disabled="true"></dv-color>
```

:::

### 不同尺寸

:::demo 使用`size`,默认为`medium`

```html
<dv-color size="big" v-model="color"></dv-color>
<dv-color v-model="color"></dv-color>
<dv-color size="small" v-model="color"></dv-color>
<script>
	export default {
		data: function() {
			return {
				color: '#39EF21'
			};
		}
	};
</script>
```

:::

### Attributes

| 参数            | 说明   | 类型   | 可选值 | 默认值 |
| --------------- | ------ | ------ | ------ | ------ |
| value / v-model | 绑定值 | string | —      | —      |
| disabled | 是否禁用 | boolean | — | false |
| size | 尺寸 | string | — | big/medium/small |

### Events

| 事件名称 | 说明               | 回调参数     |
| -------- | ------------------ | ------------ |
| change   | 当绑定值变化时触发 | 当前值, 组件根节点 |
