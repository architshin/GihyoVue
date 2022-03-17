<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
	<h1>TOP</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>TOP</li>
		</ul>
	</nav>
	<section>
		<p>
			<RouterLink v-bind:to="{name: 'SeveralParams', params: {name: 'suzuki', points: 45}}">複数パラメータ</RouterLink>
		</p>
		<p>
			<RouterLink v-bind:to="{name: 'OptionalParams', params: {name: 'suzuki', points: 45}}">パラメータ省略(省略なし)</RouterLink><br>
			<RouterLink v-bind:to="{name: 'OptionalParams', params: {name: 'tanaka'}}">パラメータ省略(省略あり)</RouterLink>
		</p>
		<p>
			<RouterLink v-bind:to="{name: 'Repeatable0Params'}">可変長パラメータ(なし)</RouterLink><br>
			<RouterLink v-bind:to="{name: 'Repeatable0Params', params: {id: [14, 25, 65]}}">可変長パラメータ(あり)</RouterLink><br>
		</p>
		<p>
			<!-- <RouterLink v-bind:to="{name: 'Repeatable1Params'}">可変長パラメータ(なし)</RouterLink><br> -->
			<RouterLink v-bind:to="{name: 'Repeatable1Params', params: {id: [14, 25, 65]}}">可変長パラメータ(あり)</RouterLink><br>
		</p>
		<p>
			<RouterLink v-bind:to="{name: 'RegexpParams', params: {id: 98765}}">正規表現チェックパラメータ(正)</RouterLink><br>
			<RouterLink v-bind:to="{name: 'RegexpParams', params: {id: 1234}}">正規表現チェックパラメータ(誤)</RouterLink><br>
		</p>
		<p>
			<RouterLink v-bind:to="{name: 'Go'}">静的リダイレクト</RouterLink><br>
			<RouterLink v-bind:to="{name: 'GoDynamic', params: {id: 55164}}">動的リダイレクト</RouterLink><br>
		</p>
	</section>
</template>
