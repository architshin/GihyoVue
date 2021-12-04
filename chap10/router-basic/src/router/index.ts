import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Top from "../views/Top.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Top",
		component: Top
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
			return {id: Number(routes.params.id)};
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
