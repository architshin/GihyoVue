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

let _database: IDBDatabase;

async function getDatabase(): Promise<IDBDatabase> {
	const promise = new Promise<IDBDatabase>(
		(resolve, reject): void => {
			if(_database != undefined) {
				resolve(_database);
			}
			else {
				const request = window.indexedDB.open("vuexdb", 1);
				request.onerror = (event) => {
					console.log("ERROR: DBをオープンできません。", event);
					reject("ERROR");
				};
				request.onsuccess = (event) => {
					const target = event.target as IDBRequest;
					_database = target.result;
					resolve(_database);
				}
				request.onupgradeneeded = (event) => {
					const target = event.target as IDBRequest;
					const database = target.result as IDBDatabase;
					database.createObjectStore("members",{keyPath: "id"});
				}
			}
		}
	);
	return promise;
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
		async [ActionsList.PREPARE_MEMBER_LIST](context): Promise<boolean> {
			_database = await getDatabase();
			const promise = new Promise<boolean>(
				(resolve, reject) => {
					const transaction = _database.transaction("members", "readwrite");
					const objectStore = transaction.objectStore("members");
					const memberList = new Map<number, Member>();
					objectStore.openCursor().onsuccess = (event) => {
						const request = event.target as IDBRequest;
						const cursor = request.result as IDBCursorWithValue;
						if(cursor) {
							const id = cursor.key as number;
							const member = cursor.value as Member;
							memberList.set(id, member);
							cursor.continue;
						}
						else {
							let member: Member = {id: 33456, name: "田中太郎", email: "bow@example.com", points: 35, note: "ちょ〜イケメン。"};
							memberList.set(33456, member);
							objectStore.put(member);
							member = {id: 47783, name: "鈴木二郎", email: "mue@example.com", points: 53};
							memberList.set(47783, member);	
							objectStore.put(member);
						}
					}
					context.commit(MutationsList.CHANGE_LIST, memberList);
					transaction.oncomplete = () => {
						resolve(true);
					}
					transaction.onerror = (event) => {
						console.log("ERROR: データ取得に失敗", event);
						reject(false);
					}
				}
			);
			return promise;
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
