import type {RouteRecordRaw} from "vue-router";
import {createRouter, createWebHistory} from "vue-router";
import CityList from "@/views/CityList.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "CityList",
		component: CityList
	},
	{
		path: "/weatherInfo/:id",
		name: "WeatherInfo",
		component: () => {
			return import("@/views/WeatherInfo.vue");
		},
		props: true
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router
