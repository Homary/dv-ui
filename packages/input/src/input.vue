<template>
	<div ref="dv-input" class="dv-input" :style="{'width': width}">
		<template>
			<input
				:id="id"
				:name="name"
				ref="input"
				:value="value" 
                :aria-label="label" 
				v-bind="$attrs"
				@input="inputHandler"
				@focus="focusHandler"
				@blur="blurHandler"
			/>
			<div class="dv-input-error__body" v-if="isRangeError">
				<i class="dv-input-warning"></i>
				<span>{{ errorInfo }}</span>
			</div>
		</template>
	</div>
</template>
<script>
export default {
	name: 'dv-input',
	data() {
		return {
			isRangeError: false,
			errorInfo: ''
		};
	},
	props: {
		id: {
			type: String
		},
		name: {
			type: String
		},
		value: {
			type: [String, Number, Array],
			default: ''
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        label: String,
        width: String
	},
	methods: {
		inputHandler(event) {
			let value = event.target.value;

			if( !this.checkRange(event) ){
                this.$emit('input', value, this.$refs['dv-input']);
                this.$emit('change', value, this.$refs['dv-input']);
            }
		},
		checkRange(event) {
			let value = parseInt(event.target.value),
				min = parseInt(event.target.min),
				max = parseInt(event.target.max),
				isMin = min ? parseInt(min) : false,
				isMax = max ? parseInt(max) : false;

			if ((isMin || isMax) && (value < min || value > max)) {
				this.isRangeError = true;
				this.errorInfo = `最大值为${max},最小值为${min}`;
				this.$emit(
					'input',
					min <= value && value <= max ? value : '',
					this.$refs['dv-input']
				);
				this.$emit(
					'change',
					min <= value && value <= max ? value : '',
					this.$refs['dv-input']
				);
				setTimeout(() => {
					this.isRangeError = false;
                }, 3000);
                
                return true;
            }
            
            return false;
        },
        focusHandler(event) {
            this.$emit('focus', event, this.$refs['dv-input']);
        },
        blurHandler(event) {
            this.$emit('blur', event, this.$refs['dv-input']);
        }
	}
};
</script>