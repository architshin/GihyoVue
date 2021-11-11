<template>
	<h1>Props基礎</h1>
	<section>
		<h2>属性に直接記述</h2>
		<OneInfo
			title="propsの利用"
			content="子コンポーネントにデータを渡すにはpropsを利用する。"/>
	</section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import OneInfo from "./components/OneInfo.vue";

export default defineComponent({
	name: "App",
	components: {
		OneInfo
	},
});
</script>

<style>
section {
	border: blue 1px solid;
	margin: 10px;
}
</style>
