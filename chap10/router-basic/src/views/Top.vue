<template>
	<h1>TOP</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>TOP</li>
		</ul>
	</nav>
	<section>
		<p>
			<!-- <router-link to="/member/memberList"> -->
			<router-link v-bind:to="{name: 'MemberList'}">
				会員管理はこちら
			</router-link>
		</p>
	</section>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "Top"
});
</script>
