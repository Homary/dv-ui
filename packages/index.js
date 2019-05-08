import Button from './button/index';
import Checkbox from './checkbox/index';
import CheckboxGroup from './checkbox-group/index';
import Color from './color/index';
import Input from './input/index';
import JsonEditor from './json-editor/index';
import Number from './number/index';
import Slider from './slider/index';
import Switch from './switch/index';
import Tooltip from './tooltip/index';
import CodeEditor from './code-editor/index';

import './theme-chalk/index'; 
const components = { 
'dv-button': Button,
'dv-checkbox': Checkbox,
'dv-checkbox-group': CheckboxGroup,
'dv-color': Color,
'dv-input': Input,
'dv-json-editor': JsonEditor,
'dv-number': Number,
'dv-slider': Slider,
'dv-switch': Switch,
'dv-tooltip': Tooltip,
'dv-code-editor': CodeEditor 
} 

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