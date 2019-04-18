<template>
	<div ref="dv-select" class="dv-select">
		<div class="dv-select-input" @click="toogleDrop">
			<input v-model="val" type="text" disabled v-bind="$attrs" />
			<i :class="dropIconClass"></i>
		</div>
		<div v-if="isDrop" class="dv-select-list">
			<ul class="dv-select-ul">
				<li
					:ref="'li-' + index"
					:key="index"
					@click="selectHandler($event, index)"
					:class="[
						'dv-select-li',
						{
							'dv-select-dropmenu-item--select': index === sindex
						}
					]"
					v-for="(option, index) in options"
				>
					<i
						v-if="index === sindex"
						class="dv-select-selected-icon"
					></i>
					<span :value="option.label">{{ option.label }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: 'dv-select',
	data() {
		return {
			isDrop: false,
			val: this.value,
			sindex: -1
		};
	},
	props: {
		value: {
			type: [String, Number],
			default: ''
		},
		options: {
			type: Array,
			default: []
		}
	},
	computed: {
		dropIconClass() {
			if (this.isDrop) {
				return ['OD', 'dv-icon-up'];
			} else {
				return ['OD', 'dv-icon-down'];
			}
		},
		listSelected() {
			return 'dv-select-li:after';
		}
	},
	methods: {
		toogleDrop(event) {
			this.isDrop = !this.isDrop;
			if (this.isDrop) {
				this.setSelectItemStyle();
			}
			this.$emit('visible-change', this.isDrop);
		},
		selectHandler(event, index) {
			this.selectItem(event, index);
			this.toogleDrop(event);
		},
		selectItem(event, index) {
			let elem = event.target;
			let lis = elem.parentNode.children;
			this.val = this.options[index].label;
			this.sindex = index;
			Array.prototype.forEach.call(lis, (item, idx) => {
				if (idx === index) {
					item.classList.add('dv-select-dropmenu-item--select');
				} else {
					item.classList.remove('dv-select-dropmenu-item--select');
				}
			});

			this.$emit('input', this.val, this.dom);
			this.$emit('change', this.val, this.dom);
		},
		init() {
			// this.options.forEach((item, index) => {
			// 	item == this.value ? (this.sindex = index) : (this.sindex = 0);
			// });

			this.dom = this.$refs['dv-select'];
		},
		setSelectItemStyle() {}
	},
	mounted() {
		this.init();
	}
};
</script>
<style lang="less">
</style>