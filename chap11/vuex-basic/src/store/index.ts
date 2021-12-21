import {createStore} from "vuex";

export default createStore({
	state: {
		points: 0
	},
	getters: {
		getDoublePoints(state) {
			return state.points * 2;
		}
	},
	mutations: {
		INCREMENT_POINTS(state) {
			state.points++;
		}
	},
	actions: {
	},
	modules: {
	}
})
