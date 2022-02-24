import {defineStore} from "pinia";
import type {Member} from "@/interfaces";

interface State {
	memberList: Map<number, Member>;
}

export const useMembersStore = defineStore({
	id: "members",
	state: (): State => {
		return {
			memberList: new Map<number, Member>()
		}
	},
	getters: {
		getById: (state) => {
			return (id: number): Member => {
				const member = state.memberList.get(id) as Member;
				return member;
			}
		},
		isMemberListEmpty: (state): boolean => {
			return state.memberList.size == 0;
		}
	},
	actions: {
		prepareMemberList(): void {
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
			this.memberList = memberList;
		},
		insertMember(member: Member): void {
			//ステートのmemberListに引数の会員情報を追加。
			this.memberList.set(member.id, member);
			//ステートのmemberListをJSON文字列に変換。
			const memberListJSONStr = JSON.stringify([...this.memberList]);
			//セッションストレージに格納。
			sessionStorage.setItem("memberList", memberListJSONStr);
			// console.log(`INSERT_MEMBER: ${memberListJSONStr}`);
		}
	}
});
