import {createStore} from "vuex";

export default createStore({
	state: {
		points: 0
	},
	getters: {
		getDoublePoints(state): number {
			return state.points * 2;
		}
	},
	mutations: {
		incrementPoints(state): void {
			state.points++;
		}
	},
	actions: {
	}
});
