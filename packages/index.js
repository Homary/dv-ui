// import Menutabs from './menu/menutabs.vue';
// import Tabs from './tabs/tabs.vue';
// import Tab from './tabs/tab.vue';
import Input from './input/index';
import NumberInput from './number/index';
// import Select from './select/select.vue';
import Switch from './switch/index';
import Color from './color/index';
// import Scroll from './scroll/scroll.vue';
// import CodeEditor from './code/code-editor.vue';
import Button from './button/index';
// import ImgUploader from './img/img-uploader.vue';
// import Canvas from './canvas/canvas.vue';
import SliderBar from './slider/index';
import Checkbox from './checkbox/index';
import CheckboxGroup from './checkbox/src/checkbox-group';

import './theme-chalk/index';

const components = {
	// menutabs: Menutabs,
	// 'dv-tabs': Tabs,
	// 'dv-tab': Tab,
	'dv-number': NumberInput,
	'dv-input': Input,
	// 'dv-select': Select,
	'dv-switch': Switch,
	'dv-color': Color,
	// 'dv-scroll': Scroll,
	// 'dv-code-editor': CodeEditor,
	'dv-button': Button,
	// 'dv-img-uploader': ImgUploader,
	// 'dv-virtual-canvas': Canvas,
	'dv-slider': SliderBar,
	'dv-checkbox': Checkbox,
	'dv-checkbox-group': CheckboxGroup
};

const dvUi = {
    ...components,
}

const install = function (Vue, opts = {}) {
    Object.keys(dvUi).forEach(key => {
        Vue.component(key, dvUi[key]);
    });
    //定义静态组件
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: '1.0.0',
    install,
    ...components
}

export default API;