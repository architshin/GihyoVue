<script setup lang="ts">
import {computed} from "vue";
import {RouterLink} from "vue-router";
import {useWeatherStore} from "@/stores/weather";
import type {City} from "@/stores/weather";

const weatherStore = useWeatherStore();
weatherStore.prepareCityList();

const cityList = computed(
	(): Map<string, City> => {
		return weatherStore.cityList;
	}
);
</script>

<template>
	<section>
		<h2>都市リスト</h2>
		<ul>
			<li
				v-for="[id, city] in cityList"
				v-bind:key="id">
				<RouterLink v-bind:to="{name: 'WeatherInfo', params: {id: id}}">
					{{city.name}}の天気
				</RouterLink>
			</li>
		</ul>
	</section>
</template>
