<template>
	<h1>会員管理</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>
				<router-link v-bind:to="{name: 'Top'}">TOP</router-link>
			</li>
			<li>次の画面</li>
		</ul>
	</nav>
	<section>
		<h2>次の画面</h2>
		<p>
			<router-link v-bind:to="{name: 'Next', params: {id: 5}}">パラメータ付きへ</router-link>
		</p>
		<OnePragraph/>
	</section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {onBeforeRouteLeave, onBeforeRouteUpdate} from "vue-router";
import OnePragraph from "../components/OnePragraph.vue";

export default defineComponent({
	name: "Next",
	components: {
		OnePragraph
	},
	setup() {
		onBeforeRouteLeave(
			(to, from) => {
				console.log(`Next#onBeforeRouteLeave: to=${to.fullPath};from=${from.fullPath}`);
			}
		);
		onBeforeRouteUpdate(
			(to, from) => {
				console.log(`Next#onBeforeRouteUpdate: to=${to.fullPath};from=${from.fullPath}`);
			}
		);
	}
});
</script>
