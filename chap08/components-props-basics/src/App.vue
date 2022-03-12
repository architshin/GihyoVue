<script setup lang="ts">
import OneInfo from "./components/OneInfo.vue";
</script>

<template>
	<h1>プロップス基礎</h1>
	<section>
		<h2>属性に直接記述</h2>
		<OneInfo
			title="プロップスの利用"
			content="子コンポーネントにデータを渡すにはプロップスを利用する。"/>
	</section>
</template>

<style>
section {
	border: blue 1px solid;
	margin: 10px;
}
</style>
