## Json 编辑框

提供 Json 数据高亮以及编辑功能,支持 v-model 双向绑定  

### 基础用法

:::demo v-model绑定数据,支持 String, Object, Array

```html
<dv-json-editor v-model="testData" theme="atom-one-light"></dv-json-editor>
<br />
<dv-json-editor v-model="testData" theme="monokai"></dv-json-editor>
<br />
<dv-json-editor v-model="testData"></dv-json-editor>
<script>
export default {
data() {
    return {
        testData: [
            {
                title: 'apples',
                count: [12000, 20000],
                description: { text: '...', sensitive: false }
            },
            {
                title: 'oranges',
                count: [17500, null],
                description: { text: '...', sensitive: false }
            }
        ]
    };
}
};
</script>
```
:::

### Attributes 
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|--------|--------   |---------- |-------------  |-------- |
| value/v-model   | JSON数据 | string / object / array | — | — | 
| theme   | 样式主题  | string    | default / atom-one-light / monokai | default |  

### Events 
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 在值改变时并且符合 JSON 格式时触发 |  改变后的值, 组件根节点  |