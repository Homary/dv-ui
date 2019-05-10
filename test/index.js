import Vue from 'vue';

import DvUI from './tester/dvui.js';
Vue.use(DvUI);
import './tester/dvui.css';

import View from './test.vue';

console.log(DvUI);


new Vue({
    el: '#app',
    render: h => h(View)
})