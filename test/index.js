import Vue from 'vue';

import DvUI from 'lib/index.js';
Vue.use(DvUI);
import 'lib/theme-chalk/index.css';

import View from './test.vue';

new Vue({
    el: '#app',
    render: h => h(View)
})