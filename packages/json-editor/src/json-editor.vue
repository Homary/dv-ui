<template>
	<div class="dv-json-editor" ref="dv-json-editor">
		<pre
			v-highlightjs
			:id="id"
			contenteditable="true"
			@input="contentChange"
		><code :class="type" spellcheck="false">{{value}}
        <slot v-if="!value"></slot></code></pre>
	</div>
    <!-- value 必须在 code 标签后面,不能后空格,不然缩进会有问题 -->
</template>
<script>
import hljs from 'highlight.js';

export default {
	name: 'dv-json-editor',
	directives: {
		highlightjs: {
			inserted: function(el) {
				const preEl = document.querySelectorAll('#' + el.id);

				preEl.forEach(el => {
					hljs.highlightBlock(el);
				});
			}
		}
	},
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
	data() {
		return {
			id: 'id' + String(Math.random()).slice(2, 8)
		};
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