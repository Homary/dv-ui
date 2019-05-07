<template>
	<div class="ui-aside">
		<ul class="aside-menu-wrap">
			<li v-for="route of routeList" :key="route.name">
				<router-link :to="route.path"
                    :style="{color: $route.path === route.path ? '#409eff' : ''}"
                >{{ route.title }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import route from 'ui/src/router/';

export default {
	data() {
		return {
			routeList: route.options.routes
		};
    },
    mounted() {
    },
};
</script>

<style lang="less">
.ui-aside {
	min-width: 20vw;
	.aside-menu-wrap {
		display: flex;
		flex-direction: column;
		margin-left: 5vw;
		li {
			height: 40px;
			line-height: 40px;
			font-size: 15px;
			text-align: left;
			a {
				color: #444;
			}
			a:hover {
				color: #409eff;
			}
		}
	}
}
</style>