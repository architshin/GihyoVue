import {InjectionKey} from "vue";
import {createStore, Store, useStore as baseUseStore} from "vuex";
import {Member} from "@/interfaces";

export enum MutationsList {
	CHANGE_LIST = "changeList",
	ADD_MEMBER = "addMember"
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
		[MutationsList.CHANGE_LIST](state, memberList: Map<number, Member>): void {
			state.memberList = memberList;
		},
		[MutationsList.ADD_MEMBER](state, member: Member): void {
			state.memberList.set(member.id, member);
		}
	},
	actions: {
		[ActionsList.PREPARE_MEMBER_LIST](context): void {
			//空のmemberListを用意。
			let memberList = new Map<number, Member>();
			//セッションストレージからデータを取得。
			const memberListJSONStr = sessionStorage.getItem("memberList");
			//セッションストレージのデータが空じゃないなら
			if(memberListJSONStr != undefined) {
				//JSON文字列をJSONオブジェクトに変換。
				const memberListJSON = JSON.parse(memberListJSONStr);
				//JSONオブジェクトをもとにmemberListを生成。
				memberList = new Map<number, Member>(memberListJSON);
				// console.log(`CHANGE_LIST: ${memberList}`);
			}
			//ステートにmemberListを格納。
			context.commit(MutationsList.CHANGE_LIST, memberList);
		},
		[ActionsList.INSERT_MEMBER](context, member: Member): void {
			//ステートのmemberListに引数の会員情報を追加。
			context.commit(MutationsList.ADD_MEMBER, member);
			//ステートのmemberListをJSON文字列に変換。
			const memberListJSONStr = JSON.stringify([...context.state.memberList]);
			//セッションストレージに格納。
			sessionStorage.setItem("memberList", memberListJSONStr);
			// console.log(`INSERT_MEMBER: ${memberListJSONStr}`);
		}
	}
});
