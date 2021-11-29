<template>
	<h1>会員管理</h1>
	<nav id="breadcrumbs">
		<ul>
			<li><router-link to="/">TOP</router-link></li>
			<li>会員リスト</li>
		</ul>
	</nav>
	<section>
		<p>
			新規登録は<router-link to="/add">こちら</router-link>から
		</p>
	</section>
	<section>
		<ul>
			<li v-for="[id, member] in memberList" v-bind:key="id">
				IDが{{id}}の{{member.name}}さん
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
