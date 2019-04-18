## dv-ui

基于` element-ui `的` Vue UI 库`  

### Install  

```
npm install dv-ui
```

### Quick Start  

```javascript
import Vue from 'vue'
import Dvui from 'dv-ui'

Vue.use(Dvui)

// require style
import 'dv-ui/theme-chalk/index.css'
```

### 现有组件  

- [x] dv-button 按钮  
- [x] dv-checkbox 复选框  
- [x] dv-color 颜色器  
- [x] dv-input 输入框  
- [x] dv-number 数字输入
- [x] dv-slider 滑块  
- [x] dv-switch 开关

### 功能划分　　

1. 组件添加
    `make new` 

2. 文档页面开发
    `make dev` 

3. 文档页面打包
    `make dev-build`

4. 组件样式编译  
    `make theme` 

5. 库文件打包发布  
    `make dist`  