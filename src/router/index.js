import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Instruction from 'ui/docs/instruction.md';

const router = new VueRouter({
	routes: [
		{
			path: '/',
			name: 'instruction',
			title: '文档说明',
			component: Instruction
		},
		{
			path: '/button',
			name: 'button',
			title: 'Button 按钮',
			component: r =>
				import(
					/* webpackChunkName: "button" */ `ui/docs/button.md`
				).then(module => {
					r(module.default);
				})
		},
		{
			path: '/input',
			name: 'input',
			title: 'Input 输入框',
			component: r =>
				import(/* webpackChunkName: "input" */ `ui/docs/input.md`).then(
					module => {
						r(module.default);
					}
				)
		},
		{
			path: '/number',
			name: 'number',
			title: 'Number 计数器',
			component: r =>
				import(
					/* webpackChunkName: "number" */ `ui/docs/number.md`
				).then(module => {
					r(module.default);
				})
		},
		{
			path: '/color',
			name: 'color',
			title: 'Color 颜色选择器',
			component: r =>
				import(/* webpackChunkName: "color" */ `ui/docs/color.md`).then(
					module => {
						r(module.default);
					}
				)
		},
		{
			path: '/switch',
			name: 'switch',
			title: 'Switch 开关',
			component: r =>
				import(
					/* webpackChunkName: "switch" */ `ui/docs/switch.md`
				).then(module => {
					r(module.default);
				})
		},
		{
			path: '/slider',
			name: 'slider',
			title: 'Slider 滑动条',
			component: r =>
				import(
					/* webpackChunkName: "slider" */ `ui/docs/slider.md`
				).then(module => {
					r(module.default);
				})
		},
		{
			path: '/checkbox',
			name: 'checkbox',
			title: 'Checkbox 复选框',
			component: r =>
				import(
					/* webpackChunkName: "checkbox" */ `ui/docs/checkbox.md`
				).then(module => {
					r(module.default);
				})
		}
	,{
        path: '/json-editor',
        name: 'json-editor',
        title: 'Json 编辑框',
        component: r =>
            import( 
                /* webpackChunkName: "json-editor" */ 'ui/docs/json-editor.md'
            ).then(module => {
                r(module.default);
            })
    },{
                                    path: '/code',
                                    name: 'code-editor',
                                    title: 'Code 编辑器',
                                    component: r =>
                                        import(
                                            /* webpackChunkName: "code-editor" */ 'ui/docs/code-editor.md'
                                        ).then(module => {
                                            r(module.default);
                                        })
                                }]
});

export default router;
