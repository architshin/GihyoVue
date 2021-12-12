<template>
	<h1>会員管理</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>
				<router-link v-bind:to="{name: 'Top'}">TOP</router-link>
			</li>
			<li>ルートパラメータ参照</li>
		</ul>
	</nav>
	<section>
		<h2>ルートパラメータ参照</h2>
		<p>{{params}}</p>
	</section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRoute} from "vue-router";

export default defineComponent({
	name: "ParamsViewer",
	setup() {
		const route = useRoute();
		const params = route.params;
		return {
			params
		};
	}
});
</script>
