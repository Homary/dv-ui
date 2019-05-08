<template>
	<div class="test">
		<dv-json-editor v-model="val"></dv-json-editor>
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
			code: '<template></template>'
		};
	}
};
</script>

<style>
.code{
    width: 500px;
    height: 600px;
}
</style>