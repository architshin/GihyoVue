import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Top from "../views/Top.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Top",
		component: Top
	},
	{
		path: "/member/search/:name/:points",
		name: "SeveralParams",
		component: () => {
			return import("../views/ParamsViewer.vue");
		}
	},
	{
		path: "/member/show/:name/:points?",
		name: "OptionalParams",
		component: () => {
			return import("../views/ParamsViewer.vue");
		}
	},
	{
		path: "/member/call/:id*",
		name: "Repeatable0Params",
		component: () => {
			return import("../views/ParamsViewer.vue");
		}
	},
	{
		path: "/member/tell/:id+",
		name: "Repeatable1Params",
		component: () => {
			return import("../views/ParamsViewer.vue");
		}
	},
	{
		path: "/member/pull/:id(\\d{5})",
		name: "RegexpParams",
		component: () => {
			return import("../views/ParamsViewer.vue");
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
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
