import {InjectionKey} from "vue";
import {createStore, Store, useStore as baseUseStore} from "vuex";
import {Member} from "@/interfaces";

export enum MutationsList {
	CHANGE_LOADING_STATUS = "changeLoadingStatus",
	ADD_MEMBER = "addMember",
	CHANGE_LIST = "changeList"
}

export enum ActionsList {
	PREPARE_MEMBER_LIST = "prepareMemberList",
	INSERT_MEMBER = "insertMember"
}

export interface State {
	memberList: Map<number, Member>;
	isLoading: boolean
}

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore() {
	return baseUseStore(key);
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
				request.onupgradeneeded = (event) => {
					const target = event.target as IDBRequest;
					const database = target.result as IDBDatabase;
					database.createObjectStore("members",{keyPath: "id"});
				};
				request.onsuccess = (event) => {
					const target = event.target as IDBRequest;
					_database = target.result;
					resolve(_database);
				};
				request.onerror = (event) => {
					console.log("ERROR: DBをオープンできません。", event);
					reject(new Error("ERROR: DBをオープンできません。"));
				};
			}
		}
	);
	return promise;
}

export const store = createStore<State>({
	state: {
		memberList: new Map<number, Member>(),
		isLoading: true
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
		[MutationsList.CHANGE_LOADING_STATUS](state, status: boolean): void {
			state.isLoading = status;
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
			const database = await getDatabase();
			const promise = new Promise<boolean>(
				(resolve, reject) => {
					const transaction = database.transaction("members", "readonly");
					const objectStore = transaction.objectStore("members");
					const memberList = new Map<number, Member>();
					const request = objectStore.openCursor();
					request.onsuccess = (event) => {
						const target = event.target as IDBRequest;
						const cursor = target.result as IDBCursorWithValue;
						if(cursor) {
							const id = cursor.key as number;
							const member = cursor.value as Member;
							memberList.set(id, member);
							cursor.continue();
						}
					}
					transaction.oncomplete = () => {
						context.commit(MutationsList.CHANGE_LIST, memberList);
						context.commit(MutationsList.CHANGE_LOADING_STATUS, false);
						resolve(true);
					}
					transaction.onerror = (event) => {
						console.log("ERROR: データ取得に失敗。", event);
						reject(new Error("ERROR: データ取得に失敗。"));
					}
				}
			);
			return promise;
		},
		async [ActionsList.INSERT_MEMBER](context, member: Member): Promise<boolean> {
			const memberAdd: Member =  {
				...member
			};
			const database = await getDatabase();
			const promise = new Promise<boolean>(
				(resolve, reject) => {
					const transaction = database.transaction("members", "readwrite");
					const objectStore = transaction.objectStore("members");
					objectStore.put(memberAdd);
					transaction.oncomplete = () => {
						resolve(true);
					}
					transaction.onerror = (event) => {
						console.log("ERROR: データ登録に失敗。", event);
						reject(new Error("ERROR: データ登録に失敗。"));
					}
				}
			);
			return promise;
		}
	},
	modules: {
	}
});
