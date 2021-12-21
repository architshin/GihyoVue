import {InjectionKey} from "vue";
import {createStore, Store, useStore as baseUseStore} from "vuex";
import {Member} from "../interfaces";

export enum MutationsList {
	INIT_LIST = "INIT_LIST",
	ADD_MEMBER = "ADD_MEMBER"
}

export interface State {
	memberList: Map<number, Member>
}

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore() {
	return baseUseStore(key)
}

export const store = createStore<State>({
	state: {
		memberList: new Map<number, Member>()
	},
	getters: {
		getById: (state) => {
			return (id: number): Member => {
				const member = state.memberList.get(id) as Member;
				return member;
			}
		}
	},
	mutations: {
		[MutationsList.INIT_LIST](state): void {
			state.memberList.set(33456, {id: 33456, name: "田中太郎", email: "bow@example.com", points: 35, note: "ちょ〜イケメン。"});
			state.memberList.set(47783, {id: 47783, name: "鈴木二郎", email: "mue@example.com", points: 53});	
		},
		[MutationsList.ADD_MEMBER](state, member: Member): void {
			state.memberList.set(member.id, member);
		}
	},
	actions: {
	},
	modules: {
	}
});
