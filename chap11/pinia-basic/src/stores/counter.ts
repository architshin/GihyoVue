import {defineStore} from "pinia";

export const useCounterStore = defineStore({
	id: "counter",
	state: () => {
		return {
			counter: 0
		};
	},
	getters: {
		doubleCount: (state): number => {
			return state.counter * 2;
		}
	},
	actions: {
		incrementCount(): void {
			this.counter++;
		}
	}
});
