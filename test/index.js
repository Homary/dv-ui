import Vue from 'vue';

import DvUI from 'dv-ui';
Vue.use(DvUI);
import 'dv-ui/theme-chalk/index.css';

new Vue({
    el: '#app',
    render: h => h('dv-button', {}, 'Hello World')
})