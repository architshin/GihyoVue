<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
	<h1>404</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>
				<RouterLink v-bind:to="{name: 'AppTop'}">TOP</RouterLink>
			</li>
		</ul>
	</nav>
	<section>
		<p>Not Found</p>
	</section>
</template>
