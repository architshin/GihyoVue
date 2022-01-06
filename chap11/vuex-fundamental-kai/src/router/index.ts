import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import AppTop from "@/views/AppTop.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "AppTop",
		component: AppTop
	},
	{
		path: "/member/memberList",
		name: "MemberList",
		component: () => {
			return import("../views/member/MemberList.vue");
		}
	},
	{
		path: "/member/detail/:id",
		name: "MemberDetail",
		component: () => {
			return import("../views/member/MemberDetail.vue");
		},
		props: (routes) => {
			const idNum = Number(routes.params.id);
			return {
				id: idNum
			};
		}
	},
	{
		path: "/member/add",
		name: "MemberAdd",
		component: () => {
			return import("../views/member/MemberAdd.vue");
		}
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
