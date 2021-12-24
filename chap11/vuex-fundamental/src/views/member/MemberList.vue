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
		<section>
			<ul>
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
import {useStore} from "vuex";
import {Member} from "@/interfaces";

export default defineComponent({
	name: "MemberList",
	setup() {
		const store = useStore();
		const memberList = computed(
			(): Map<number, Member> => {
				return store.state.memberList;
			}
		);
		return {
			memberList
		};
	}
});
</script>
