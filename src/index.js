// test
import Vue from 'vue';
import App from './app';
import router from './router/';

// 安装组件
import DVUI from 'ui/packages/';
Vue.use(DVUI);

// 样式
import 'highlight.js/styles/color-brewer.css';
import './styles/';

// md外层组件
import DemoBlock from './demo-block/demo-block.vue';
Vue.component('demo-block', DemoBlock);


new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
