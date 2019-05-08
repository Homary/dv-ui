<template>
	<div class="dv-code-editor" ref="dv-code-editor">
		<codemirror v-model="code" :options="ceOptions" @change="changeHandler"></codemirror>
	</div>
</template>

<script>
// require component
import { codemirror } from 'vue-codemirror-lite';

// require styles
import 'codemirror/lib/codemirror';

// language && mode
require('codemirror/mode/vue/vue');
require('codemirror/mode/javascript/javascript');
require('codemirror/addon/hint/show-hint');
require('codemirror/addon/hint/show-hint.css');
require('codemirror/addon/hint/javascript-hint');

export default {
	name: 'dv-code-editor',
	components: {
		codemirror
	},
    props: {
        mode: {
            type: String,
            default: 'javascript'
        },
        tabSize: {
            type: Number,
            default: 4
        },
        value: [String, Number, Object, Function, Boolean],
        theme: {
            type: String, 
            default: 'default'
        },
        lineNumbers: {
            type: Boolean,
            default: true
        }
    },
	mounted() {
        if(this.theme !== 'default') {
            require(`codemirror/theme/${this.theme}`)
        }
    },
    data() {
        return {
            code: this.value
        }
    },
	computed: {
		ceOptions() {
			return {
				tabSize: this.tabSize,
				mode: this.mode,
                theme: this.theme,
				lineNumbers: this.lineNumbers,
				line: true,
				styleActiveLine: true,
				foldGutter: true,
				styleSelectedText: true,
				matchBrackets: true,
                showCursorWhenSelecting: true,
				extraKeys: { Ctrl: 'autocomplete' }
			};
        }
    },
    methods: {
        changeHandler(data) {
            this.$emit('input', data);
            this.$emit('change', data, this.$refs['dv-code-editor']);
        }
    },
};
</script>