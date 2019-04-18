<template>
	<div
		ref="dv-number"
		:class="['dv-number', { 'dv-number-default': !controlsAtRight }]"
        :style="{'width': width ? width : ''}"
	>
		<input
			class="dv-number-input"
			type="text"
			:value="currentValue"
			@change="handleChange($event)"
			@keydown="handleKeydown($event)"
			:disabled="disabled"
			:name="name"
			:placeholder="placeholder"
			@focus="focusHandler"
			@blur="blurHandler"
		/>
		<i
			:class="[
				'dv-number-plus--default',
				'noselect',
				{ 'dv-number-plus': controlsAtRight }
			]"
			@click="handleAdd($event)"
			:disabled="currentValue >= max"
			v-if="Boolean(controls)"
			>+</i
		>
		<i
			:class="[
				'dv-number-reduce--default',
				'noselect',
				{ 'dv-number-reduce': controlsAtRight }
			]"
			@click="handleReduce($event)"
			:disabled="currentValue <= min"
			v-if="Boolean(controls)"
			>-</i
		>
	</div>
</template>
<script>
export default {
	// 定义来自父级的参数
	name: 'dv-number',
	props: {
		max: {
			type: Number,
			default: Infinity
		},
		min: {
			type: Number,
			default: -Infinity
		},
		value: {
			type: [Number, String],
			default: 0
		},
		step: {
			type: Number,
			default: 1
		},
		disabled: {
			type: Boolean,
			default: false
		},
		controls: {
			type: Boolean,
			default: true
		},
		name: String,
		placeholder: String,
        controlsPosition: String,
        width: String
	},
	computed: {
		controlsAtRight() {
			return this.controls && this.controlsPosition === 'right';
		}
	},
	data: function() {
		var currentValue = 0;
		if (this.value > this.max) {
			currentValue = this.max;
		} else if (this.value < this.min) {
			currentValue = this.min;
		} else {
			currentValue = this.value;
		}
		return {
			currentValue: currentValue
		};
	},
	methods: {
		handleChange: function(event) {
			var val = event.target.value.trim();
			if (/\d+/g.test(val)) {
				//数字
				var max = this.max;
				var min = this.min;
				val = parseInt(val);
				this.currentValue = val;
				if (val > max) this.currentValue = max;
				if (val < min) this.currentValue = min;
			} else if (/%\d+/g.test(val)) {
				// 如果输入的非数字，则保留之前的数据
				event.target.value = this.currentValue;
			} else {
				event.target.value = this.currentValue;
			}
		},
		// 绑定键盘事件
		handleKeydown: function(event) {
			if (event.keyCode == 38) {
				this.handleAdd();
			}
			if (event.keyCode == 40) {
				this.handleReduce();
			}
		},
		handleAdd: function(event) {
			//百分数类型
			if (/(\d+)%/g.test(this.currentValue)) {
				var number = RegExp.$1;
				this.currentValue = parseInt(number) + this.step + '%';
			} else {
				//数字类型
				if (this.currentValue >= this.max) return;
				this.currentValue += this.step;
			}
		},
		handleReduce: function(event) {
			if (/(\d+)%/g.test(this.currentValue)) {
				var number = RegExp.$1;
				this.currentValue = parseInt(number) - this.step + '%';
			} else {
				if (this.currentValue <= this.min) return;
				this.currentValue -= this.step;
			}
		},
		updateVal: function(val) {
			if (val > this.max) val = this.max;
			if (val < this.min) val = this.min;

			// if (/(\d+)%/g.test(this.currentValue)) {
			//     this.value = (parseInt(RegExp.$1) + this.step) + '%' ;
			// } else {
			//     this.currentValue = val;
			// }
			this.currentValue = val;
		},
		focusHandler(event) {
			this.$emit('focus', event, this.dom);
		},
		blurHandler(event) {
			this.$emit('blur', event, this.dom);
		}
	},
	watch: {
		// 增加监听
		currentValue: function(val) {
			this.$emit('input', val, this.dom);
			this.$emit('change', val, this.dom);
		},
		value: function(val) {
			this.updateVal(val);
		}
	},
	mounted: function() {
		this.currentValue = this.value;
		this.$nextTick(() => {
			this.dom = this.$refs['dv-number'];
		});
	},
	beforeDestroy: function() {
		this.currentValue;
	}
};
</script>
