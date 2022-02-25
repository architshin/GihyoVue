<script setup lang="ts">
import {computed} from "vue";
import {RouterLink} from "vue-router";
import {useWeatherStore} from "@/stores/weather";
import type {City} from "@/stores/weather";

interface Props {
	id: string;
}
const props = defineProps<Props>();

const weatherStore = useWeatherStore();
const selectedCity = computed(
	(): City => {
		return weatherStore.getSelectedCity(props.id);
	}
);

</script>

<template>
	<section>
		<h2>{{selectedCity.name}}の天気</h2>
	</section>
</template>
