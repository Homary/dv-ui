<template>
	<div class="app">
		<ui-header class="header"></ui-header>
		<ui-aside class="aside"></ui-aside>
		<main class="main">
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
import UiAside from './views/ui-aside';
import UiHeader from './views/ui-header';

export default {
	name: 'app',
	components: {
		'ui-aside': UiAside,
		'ui-header': UiHeader
	}
};
</script>

<style lang="less">
.app {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	.header {
		flex: 1 1 100%;
	}
	.main {
		flex: 1 1 75%;
        padding: 30px 5vw 0 5vw;  
        margin-bottom: 10vh;
        box-sizing: border-box;
	}
}
</style>