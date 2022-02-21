<script setup lang="ts">
import {RouterView} from "vue-router";
import {useMembersStore} from "@/stores/members";

const membersStore = useMembersStore();
membersStore.initList();
</script>

<template>
	<header>
		<h1>Piniaサンプル</h1>
	</header>
	<main>
		<RouterView/>
	</main>
</template>

<style>
main {
	border: blue 1px solid;
	padding: 10px;
}
#breadcrumbs ul li {
	display: inline;
	list-style-type: none;
}
#breadcrumbs {
	margin-left: 0px;
}
#breadcrumbs ul {
	padding-left: 0px;
}
#breadcrumbs ul .current {
	color: red;
}
#breadcrumbs ul li:before {
	content: " > ";
}
#breadcrumbs ul li:first-child:before {
	content: none;
}
</style>
