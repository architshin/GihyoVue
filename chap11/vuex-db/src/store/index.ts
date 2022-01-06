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
	isLoading: boolean;
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
					_database = target.result as IDBDatabase;
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

export default createStore<State>({
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
			//データベースオブジェクトを取得する。
			const database = await getDatabase();
			const promise = new Promise<boolean>(
				(resolve, reject) => {
					//トランザクションオブジェクトを取得する。
					const transaction = database.transaction("members", "readonly");
					//membersオブジェクトストアを取得する。
					const objectStore = transaction.objectStore("members");
					//空のmemberListを生成。
					const memberList = new Map<number, Member>();
					//membersオブジェクトストアの全データを取得。
					const request = objectStore.openCursor();
					//データ取得が成功した場合の処理を登録。
					request.onsuccess = (event) => {
						//カーソルオブジェクトを取得。
						const target = event.target as IDBRequest;
						const cursor = target.result as IDBCursorWithValue;
						//カーソルが存在すれば…
						if(cursor) {
							//カーソルからキーデータを取得。
							const id = cursor.key as number;
							//カーソルから値オブジェクトを取得。
							const member = cursor.value as Member;
							//memberListに格納。
							memberList.set(id, member);
							//次のデータに同じ処理を実行。
							cursor.continue();
						}
					}
					//トランザクションが成功した場合の処理を登録。
					transaction.oncomplete = () => {
						//ステートにmemberListを格納。
						context.commit(MutationsList.CHANGE_LIST, memberList);
						//ステートのisLoadingをfalseに変更。
						context.commit(MutationsList.CHANGE_LOADING_STATUS, false);
						//非同期処理成功。Promise内の戻り値をtrueに。
						resolve(true);
					}
					//トランザクションが失敗した場合の処理を登録。
					transaction.onerror = (event) => {
						//非同期処理失敗。エラーメッセージを格納。
						console.log("ERROR: データ取得に失敗。", event);
						reject(new Error("ERROR: データ取得に失敗。"));
					}
				}
			);
			return promise;
		},
		async [ActionsList.INSERT_MEMBER](context, member: Member): Promise<boolean> {
			//memberオブジェクト生成。
			const memberAdd: Member =  {
				...member
			};
			//データベースオブジェクトを取得する。
			const database = await getDatabase();
			const promise = new Promise<boolean>(
				(resolve, reject) => {
					//トランザクションオブジェクトを取得する。
					const transaction = database.transaction("members", "readwrite");
					//membersオブジェクトストアを取得する。
					const objectStore = transaction.objectStore("members");
					//データ登録。
					objectStore.put(memberAdd);
					//トランザクションが成功した場合の処理を登録。
					transaction.oncomplete = () => {
						//非同期処理成功。Promise内の戻り値をtrueに。
						resolve(true);
					}
					//トランザクションが失敗した場合の処理を登録。
					transaction.onerror = (event) => {
						//非同期処理失敗。エラーメッセージを格納。
						console.log("ERROR: データ登録に失敗。", event);
						reject(new Error("ERROR: データ登録に失敗。"));
					}
				}
			);
			return promise;
		}
	}
});
