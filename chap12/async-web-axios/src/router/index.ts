import {createRouter, createWebHistory} from "vue-router";
import type {RouteRecordRaw} from "vue-router";
import CityList from "@/views/CityList.vue";

const routeSettings: RouteRecordRaw[] = [
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
	routes: routeSettings
})

export default router
