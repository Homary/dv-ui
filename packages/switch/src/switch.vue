<template>
	<div
		class="dv-switch"
		:class="{ 'is-checked': checked }"
		role="switch"
		:aria-checked="checked"
		@click="switchValue"
		ref="dv-switch"
	>
		<input
			class="dv-switch__input"
			type="checkbox"
			@change="handleChange"
			ref="input"
			:id="id"
			:name="name"
			:true-value="activeValue"
			:false-value="inactiveValue"
			@keydown.enter="switchValue"
		/>
		<span
			:class="[
				'dv-switch__label',
				'dv-switch__label--left',
				!checked ? 'is-active' : ''
			]"
			v-if="inactiveText"
		>
			<i></i>
			<span v-if="inactiveText" :aria-hidden="checked">{{
				inactiveText
			}}</span>
		</span>
		<span
			class="dv-switch__core"
			ref="core"
			:style="{ width: coreWidth + 'px' }"
		>
		</span>
		<span
			:class="[
				'dv-switch__label',
				'dv-switch__label--right',
				checked ? 'is-active' : ''
			]"
			v-if="activeText"
		>
			<i></i>
			<span v-if="activeText" :aria-hidden="!checked">{{
				activeText
			}}</span>
		</span>
	</div>
</template>
<script>
export default {
	name: 'DVSwitch',
	props: {
		value: {
			type: [Boolean, String, Number],
			default: false
		},
		width: {
			type: Number,
			default: 40
		},
		activeText: String,
		inactiveText: String,
		activeColor: {
			type: String,
			default: ''
		},
		inactiveColor: {
			type: String,
			default: ''
		},
		activeValue: {
			type: [Boolean, String, Number],
			default: true
		},
		inactiveValue: {
			type: [Boolean, String, Number],
			default: false
		},
		name: {
			type: String,
			default: ''
		},
		id: String
	},
	data() {
		return {
			coreWidth: this.width
		};
	},
	created() {
		if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
			this.$emit('input', this.inactiveValue);
		}
	},
	computed: {
		checked() {
			return this.value === this.activeValue;
		}
	},
	watch: {
		checked() {
			this.$refs.input.checked = this.checked;
			if (this.activeColor || this.inactiveColor) {
				this.setBackgroundColor();
			}
		}
	},
	methods: {
		handleChange(event) {
			const val = this.checked ? this.inactiveValue : this.activeValue;
			this.$emit('input', val);
			this.$emit('change', val, this.$refs['dv-switch']);
			this.$nextTick(() => {
				this.$refs.input.checked = this.checked;
			});
		},
		setBackgroundColor() {
			let newColor = this.checked ? this.activeColor : this.inactiveColor;
			this.$refs.core.style.borderColor = newColor;
			this.$refs.core.style.backgroundColor = newColor;
		},
		switchValue() {
			this.handleChange();
		}
	},
	mounted() {
		/* istanbul ignore if */
		this.coreWidth = this.width || 40;
		if (this.activeColor || this.inactiveColor) {
			this.setBackgroundColor();
		}
		this.$refs.input.checked = this.checked;
	}
};
</script>