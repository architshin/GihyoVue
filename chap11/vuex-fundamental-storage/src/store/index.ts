import {InjectionKey} from "vue";
import {createStore, Store, useStore as baseUseStore} from "vuex";
import {Member} from "@/interfaces";

export enum MutationsList {
	ADD_MEMBER = "addMember",
	CHANGE_LIST = "changeList"
}

export enum ActionsList {
	PREPARE_MEMBER_LIST = "prepareMemberList",
	INSERT_MEMBER = "insertMember"
}

export interface State {
	memberList: Map<number, Member>
}

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore() {
	return baseUseStore(key)
}

export default createStore<State>({
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
		[MutationsList.ADD_MEMBER](state, member: Member): void {
			state.memberList.set(member.id, member);
		},
		[MutationsList.CHANGE_LIST](state, memberList: Map<number, Member>): void {
			state.memberList = memberList;
		}
	},
	actions: {
		[ActionsList.PREPARE_MEMBER_LIST](context): void {
			let memberList = new Map<number, Member>();
			const memberListJSONStr = sessionStorage.getItem("memberList");
			if(memberListJSONStr != undefined) {
				const memberListJSON = JSON.parse(memberListJSONStr);
				memberList = new Map<number, Member>(memberListJSON);
				// console.log(`CHANGE_LIST: ${memberList}`);
			}
			context.commit(MutationsList.CHANGE_LIST, memberList);
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
