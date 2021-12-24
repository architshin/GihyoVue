import {createStore} from "vuex";
import {Member} from "../interfaces";

export default createStore({
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
		initList(state): void {
			state.memberList.set(33456, {id: 33456, name: "田中太郎", email: "bow@example.com", points: 35, note: "ちょ〜イケメン。"});
			state.memberList.set(47783, {id: 47783, name: "鈴木二郎", email: "mue@example.com", points: 53});	
		},
		addMember(state, member: Member): void {
			state.memberList.set(member.id, member);
		}
	},
	actions: {
	},
	modules: {
	}
});
