<template>
	<h1>会員管理</h1>
	<nav id="breadcrumbs">
		<ul>
			<li><router-link v-bind:to="{name: 'Top'}">TOP</router-link></li>
			<li>会員リスト</li>
		</ul>
	</nav>
	<section>
		<p>
			新規登録は<router-link v-bind:to="{name: 'MemberAdd'}">こちら</router-link>から
		</p>
	</section>
	<section>
		<ul>
			<li v-for="[id, member] in memberList" v-bind:key="id">
				<router-link v-bind:to="{name: 'MemberDetail', params: {id: id}}">
					IDが{{id}}の{{member.name}}さん
				</router-link>
			</li>
		</ul>
	</section>
</template>

<script lang="ts">
import {defineComponent, inject} from "vue";
import {Member} from "../../interfaces";

export default defineComponent({
	name: "MemberList",
	setup() {
		const memberList = inject("memberList") as Map<number, Member>;
		return {
			memberList
		};
	}
});
</script>
