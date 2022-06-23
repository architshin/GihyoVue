<script setup lang="ts">
import {ref} from "vue";
import OneInfo from "./components/OneInfo.vue";

const weatherListInit = new Map<number, Weather>();
weatherListInit.set(1, {id: 1, title: "今日の天気", content: "今日は一日中、晴でしょう。"});
weatherListInit.set(2, {id: 2, title: "明日の天気", content: "明日は一日中、雨でしょう。"});
weatherListInit.set(3, {id: 3, title: "明後日の天気", content: "明後日は一日中、雪でしょう。"});
const weatherList = ref(weatherListInit);

interface Weather {
	id: number;
	title: string;
	content: string;
}
</script>

<template>
	<h1>Props基礎</h1>
	<section>
		<h2>ループでコンポーネントを生成</h2>
		<OneInfo
			v-for="[id, weather] in weatherList"
			v-bind:key="id"
			v-bind:title="weather.title"
			v-bind:content="weather.content"/>
	</section>
</template>
