<template>
	<h1>会員管理</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>
				<router-link v-bind:to="{name: 'AppTop'}">
					TOP
				</router-link>
			</li>
			<li>会員リスト</li>
		</ul>
	</nav>
	<section>
		<h2>会員リスト</h2>
		<p>
			新規登録は<router-link v-bind:to="{name: 'MemberAdd'}">こちら</router-link>から
		</p>
		<p v-if="isLoading">
			データ取得中…
		</p>
		<section v-else>
			<ul>
				<li v-if="isEmptyList">会員情報は存在しません。</li>
				<li
					v-for="[id, member] in memberList"
					v-bind:key="id">
					<router-link v-bind:to="{name: 'MemberDetail', params: {id: id}}">
						IDが{{id}}の{{member.name}}さん
					</router-link>
				</li>
			</ul>
		</section>
	</section>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import {Member} from "../../interfaces";
import {useStore, ActionsList} from "../../store/index"

export default defineComponent({
	name: "MemberList",
	setup() {
		const store = useStore();
		store.dispatch(ActionsList.PREPARE_MEMBER_LIST);
		const memberList = computed(
			(): Map<number, Member> => {
				return store.state.memberList;
			}
		);
		const isLoading = computed(
			(): boolean => {
				return store.state.isLoading;
			}
		);
		const isEmptyList = computed(
			(): boolean => {
				return memberList.value.size == 0;
			}
		);
		return {
			memberList,
			isLoading,
			isEmptyList
		};
	}
});
</script>
