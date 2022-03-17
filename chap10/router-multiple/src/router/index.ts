import {createRouter, createWebHistory} from "vue-router";
import type {RouteRecordRaw} from "vue-router";
import AppTop from "@/views/AppTop.vue";
import Sub from "@/views/Sub.vue";

const routeSettings: RouteRecordRaw[] = [
	{
		path: "/",
		name: "AppTop",
		components: {
			default: AppTop,
			sub: Sub
		}
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routeSettings
})

export default router
