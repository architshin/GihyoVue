import {InjectionKey} from "vue";
import {createStore, Store, useStore as baseUseStore} from "vuex";
import {Member} from "../interfaces";

export enum MutationsList {
	INIT_LIST = "INIT_LIST",
	ADD_MEMBER = "ADD_MEMBER",
	CHANGE_LIST = "CHANGE_LIST"
}

export enum ActionsList {
	PREPARE_MEMBER_LIST = "PREPARE_MEMBER_LIST",
	INSERT_MEMBER = "INSERT_MEMBER"
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
		},
		[MutationsList.CHANGE_LIST](state, memberList: Map<number, Member>): void {
			state.memberList = memberList;
		}
	},
	actions: {
		[ActionsList.PREPARE_MEMBER_LIST](context): void {
			let memberListJSONStr = sessionStorage.getItem("memberList");
			if(memberListJSONStr == undefined) {
				context.commit(MutationsList.INIT_LIST);
				memberListJSONStr = JSON.stringify([...context.state.memberList]);
				sessionStorage.setItem("memberList", memberListJSONStr);
				// console.log(`INIT_LIST: ${memberListJSONStr}`);
			}
			else {
				const memberListJSON = JSON.parse(memberListJSONStr);
				const memberList = new Map<number, Member>(memberListJSON);
				context.commit(MutationsList.CHANGE_LIST, memberList);
				// console.log(`CHANGE_LIST: ${memberList}`);
			}
		},
		[ActionsList.INSERT_MEMBER](context, member: Member): void {
			context.commit(MutationsList.ADD_MEMBER, member);
			const memberListJSONStr = JSON.stringify([...context.state.memberList]);
			sessionStorage.setItem("memberList", memberListJSONStr);
			// console.log(`INSERT_MEMBER: ${memberListJSONStr}`);
		}
	},
	modules: {
	}
});
