import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Top from "../views/Top.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Top",
		component: Top,
		beforeEnter: (to, from) => {
			console.log(`RouteTop#beforeEnter: to=${to.fullPath};from=${from.fullPath}`);
		}
	},
	{
		path: "/next/:id?",
		name: "Next",
		component: () => {
			return import("../views/Next.vue");
		},
		beforeEnter: (to, from) => {
			console.log(`RouteNext#beforeEnter: to=${to.fullPath};from=${from.fullPath}`);
		}
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

router.beforeEach(
	(to, from) => {
		console.log(`Global#beforeEach: to=${to.fullPath};from=${from.fullPath}`);
	}
);
router.beforeResolve(
	(to, from) => {
		console.log(`Global#beforeResolve: to=${to.fullPath};from=${from.fullPath}`);
	}
);
router.afterEach(
	(to, from) => {
		console.log(`Global#afterEach: to=${to.fullPath};from=${from.fullPath}`);
	}
);

export default router
