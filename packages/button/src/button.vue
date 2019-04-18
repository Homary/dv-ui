<template>
	<div class="dv-button" ref="dv-button" :style="{'width': width}">
		<span
			:name="name"
			:id="id"
			@click="clickHandler($event)"
            :class="['dv-input', 
                type ? 'dv-button--' + type : ''
            ]"
		>
			<slot></slot>
		</span>
	</div>
</template>
<script>
export default {
	name: 'dv-button',
	data() {
		return {};
	},
	props: {
		id: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'default'
        },
        width: {
            type: String,
            default: '100%'
        }
	},
	methods: {
		clickHandler(event) {
			this.$emit('click', event, this.$refs[this.name]);
		}
	}
};
</script>
