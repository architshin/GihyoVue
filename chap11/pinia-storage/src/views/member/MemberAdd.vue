<script setup lang="ts">
import {reactive} from "vue";
import {RouterLink, useRouter} from "vue-router";
import type {Member} from "@/interfaces";
import {useMembersStore} from "@/stores/members";

const router = useRouter();
const membersStore = useMembersStore();
const member: Member = reactive({
	id: 0,
	name: "",
	email: "",
	points: 0,
	note: "",
});
const onAdd = (): void => {
	membersStore.insertMember(member);
	router.push({name: "MemberList"});
};
</script>

<template>
	<h1>会員管理</h1>
	<nav id="breadcrumbs">
		<ul>
			<li><RouterLink v-bind:to="{name: 'AppTop'}">TOP</RouterLink></li>
			<li><RouterLink v-bind:to="{name: 'MemberList'}">会員リスト</RouterLink></li>
			<li>会員情報追加</li>
		</ul>
	</nav>
	<section>
		<h2>会員情報追加</h2>
		<p>
			情報を入力し、登録ボタンをクリックしてください。
		</p>
		<form v-on:submit.prevent="onAdd">
			<dl>
				<dt>
					<label for="addId">ID&nbsp;</label>
				</dt>
				<dd>
					<input type="number" id="addId" v-model.number="member.id" required>
				</dd>
				<dt>
					<label for="addName">名前&nbsp;</label>
				</dt>
				<dd>
					<input type="text" id="addName" v-model="member.name" required>
				</dd>
				<dt>
					<label for="addEmail">メールアドレス&nbsp;</label>
				</dt>
				<dd>
					<input type="email" id="addEmail" v-model="member.email" required>
				</dd>
				<dt>
					<label for="addPoints">保有ポイント&nbsp;</label>
				</dt>
				<dd>
					<input type="number" id="addPoints" v-model.number="member.points" required>
				</dd>
				<dt>
					<label for="addNote">備考</label>
				</dt>
				<dd>
					<textarea id="addNote" v-model="member.note"></textarea>
				</dd>
			</dl>
			<button type="submit">登録</button>
		</form>
	</section>
</template>
