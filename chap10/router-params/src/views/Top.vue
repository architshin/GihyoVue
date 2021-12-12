<template>
	<h1>TOP</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>TOP</li>
		</ul>
	</nav>
	<section>
		<p>
			<router-link v-bind:to="{name: 'SeveralParams', params: {name: 'suzuki', points: 45}}">複数パラメータ</router-link>
		</p>
		<p>
			<router-link v-bind:to="{name: 'OptionalParams', params: {name: 'suzuki', points: 45}}">パラメータ省略(省略なし)</router-link><br>
			<router-link v-bind:to="{name: 'OptionalParams', params: {name: 'tanaka'}}">パラメータ省略(省略あり)</router-link>
		</p>
		<p>
			<router-link v-bind:to="{name: 'Repeatable0Params'}">可変長パラメータ(なし)</router-link><br>
			<router-link v-bind:to="{name: 'Repeatable0Params', params: {id: [14, 25, 65]}}">可変長パラメータ(あり)</router-link><br>
		</p>
		<p>
			<!-- <router-link v-bind:to="{name: 'Repeatable1Params'}">可変長パラメータ(なし)</router-link><br> -->
			<router-link v-bind:to="{name: 'Repeatable1Params', params: {id: [14, 25, 65]}}">可変長パラメータ(あり)</router-link><br>
		</p>
		<p>
			<router-link v-bind:to="{name: 'RegexpParams', params: {id: 98765}}">正規表現チェックパラメータ(正)</router-link><br>
			<router-link v-bind:to="{name: 'RegexpParams', params: {id: 1234}}">正規表現チェックパラメータ(誤)</router-link><br>
		</p>
	</section>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "Top"
});
</script>
