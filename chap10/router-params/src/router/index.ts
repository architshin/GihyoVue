import {createRouter, createWebHistory} from "vue-router";
import type {RouteRecordRaw} from "vue-router";
import AppTop from "@/views/AppTop.vue";

const routeSettings: RouteRecordRaw[] = [
	{
		path: "/",
		name: "AppTop",
		component: AppTop
	},
	{
		path: "/member/search/:name/:points",
		name: "SeveralParams",
		component: () => {
			return import("@/views/ParamsViewer.vue");
		}
	},
	{
		path: "/member/show/:name/:points?",
		name: "OptionalParams",
		component: () => {
			return import("@/views/ParamsViewer.vue");
		}
	},
	{
		path: "/member/call/:id*",
		name: "Repeatable0Params",
		component: () => {
			return import("@/views/ParamsViewer.vue");
		}
	},
	{
		path: "/member/tell/:id+",
		name: "Repeatable1Params",
		component: () => {
			return import("@/views/ParamsViewer.vue");
		}
	},
	{
		path: "/member/pull/:id(\\d{5})",
		name: "RegexpParams",
		component: () => {
			return import("@/views/ParamsViewer.vue");
		}
	},
	{
		path: "/member/go",
		name: "Go",
		redirect: {
			name: "Repeatable0Params"
		}
	},
	{
		path: "/member/goDynamic/:id",
		name: "GoDynamic",
		redirect: (to) =>{
			return {
				name: "Repeatable0Params",
				params: {id: to.params.id} 
			}
		}
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: () => {
			return import("@/views/NotFound.vue");
		}
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routeSettings
})

export default router
