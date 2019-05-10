<template>
	<div class="test">
        <dv-button>dv-button</dv-button>
        <dv-checkbox v-model="checked">备选项</dv-checkbox>
		<dv-json-editor v-model="val" class="json"></dv-json-editor>
        <dv-json-editor v-model="val" theme="monokai" class="json"></dv-json-editor>
		<dv-code-editor class="code"
			v-model="code"
			mode="vue"
			theme="monokai"
		></dv-code-editor>
		<dv-code-editor class="code"
			v-model="code"
			mode="vue"
		></dv-code-editor>
	</div>
</template>

<script>
export default {
	data() {
		return {
			val: {
				name: 'tom',
				age: 18
			},
            code: '<template></template>',
            checked: ['备选项']
		};
	}
};
</script>

<style>
.code, .json{
    width: 500px;
    height: 600px;
}
</style>