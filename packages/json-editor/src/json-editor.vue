<template>
<div class="dv-json-editor" ref="dv-json-editor">
	<pre v-highlightjs>
    <code :class="type" contenteditable="true" spellcheck="false" @input="contentChange">
        {{ value }}
        <slot v-if="!value"></slot>
    </code>
    </pre>
</div>
</template>
<script>
import VueHighlightJS from 'vue-highlightjs';
import Vue from 'vue';

Vue.use(VueHighlightJS);

export default {
	name: 'dv-json-editor',
	props: {
		type: {
			type: String,
			default: 'json'
		},
		theme: {
			type: String,
			default: 'atom-one-light'
		},
		value: [String, Object, Array]
	},
	mounted() {
        import(`highlight.js/styles/${this.theme}.css`); 
	},
	methods: {
		contentChange(event) {
			let data;

			try {
                data = JSON.parse(event.target.textContent);
                this.$emit('input', data);
				this.$emit('change', data, this.$refs['dv-json-editor']);
			} catch (e) {
				console.warn('> json-editor: 数据格式错误');
			}
		}
	}
};
</script>
<style lang="less">
    
</style>