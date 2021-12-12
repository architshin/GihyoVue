import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Top from "../views/Top.vue";
import Side from "../views/Side.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Top",
		components: {
			default: Top,
			sidebar: Side
		}
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
