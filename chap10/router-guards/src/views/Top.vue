<template>
	<h1>TOP</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>TOP</li>
		</ul>
	</nav>
	<section>
		<p>
			<router-link v-bind:to="{name: 'Next'}">次へ</router-link>
		</p>
		<OnePragraph/>
	</section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {onBeforeRouteLeave, onBeforeRouteUpdate} from "vue-router";
import OnePragraph from "../components/OnePragraph.vue";

export default defineComponent({
	name: "Top",
	components: {
		OnePragraph
	},
	setup() {
		onBeforeRouteLeave(
			(to, from) => {
				console.log(`Top#onBeforeRouteLeave: to=${to.fullPath};from=${from.fullPath}`);
			}
		);
		onBeforeRouteUpdate(
			(to, from) => {
				console.log(`Top#onBeforeRouteUpdate: to=${to.fullPath};from=${from.fullPath}`);
			}
		);
	}
});
</script>
