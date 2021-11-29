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
		path: "/member/add",
		name: "MemberAdd",
		component: () => {
			return import("../views/member/MemberAdd.vue");
		}
	},
	// {
	// 	path: "/dept/detail/:id",
	// 	name: "DeptDetail",
	// 	component: () => {
	// 		return import("../views/dept/DeptDetail.vue");
	// 	},
	// 	props: (routes) => {
	// 		return {id: Number(routes.params.id)};
	// 	}
	// }
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
