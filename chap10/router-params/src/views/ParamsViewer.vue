<script setup lang="ts">
import {RouterLink, useRoute} from "vue-router";

const route = useRoute();
const params = route.params;
</script>

<template>
	<h1>ルートパラメータ参照</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>
				<RouterLink v-bind:to="{name: 'AppTop'}">TOP</RouterLink>
			</li>
			<li>ルートパラメータ参照</li>
		</ul>
	</nav>
	<section>
		<p>{{params}}</p>
	</section>
</template>
