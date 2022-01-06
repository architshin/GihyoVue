<template>
	<h1>会員管理</h1>
	<nav id="breadcrumbs">
		<ul>
			<li><router-link v-bind:to="{name: 'AppTop'}">TOP</router-link></li>
			<li><router-link v-bind:to="{name: 'MemberList'}">会員リスト</router-link></li>
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
					<input type="number" id="addId" v-model.number="id" required>
				</dd>
				<dt>
					<label for="addName">名前&nbsp;</label>
				</dt>
				<dd>
					<input type="text" id="addName" v-model="name" required>
				</dd>
				<dt>
					<label for="addEmail">メールアドレス&nbsp;</label>
				</dt>
				<dd>
					<input type="email" id="addEmail" v-model="email" required>
				</dd>
				<dt>
					<label for="addPoints">保有ポイント&nbsp;</label>
				</dt>
				<dd>
					<input type="number" id="addPoints" v-model.number="points" required>
				</dd>
				<dt>
					<label for="addNote">備考</label>
				</dt>
				<dd>
					<textarea id="addNote" v-model="note"></textarea>
				</dd>
			</dl>
			<button type="submit">登録</button>
		</form>
	</section>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";
import {useRouter} from "vue-router";
import {ActionsList, useStore} from "@/store/index"
import {Member} from "@/interfaces";

export default defineComponent({
	name: "MemberAdd",
	setup() {
		const router = useRouter();
		const store = useStore();
		const member: Member =reactive(
			{
				id: 0,
				name: "",
				email: "",
				points: 0,
				note: ""
			}
		);
		const onAdd = (): void => {
			store.dispatch(ActionsList.INSERT_MEMBER, member);
			router.push({name: "MemberList"});
		};
		return {
			...toRefs(member),
			onAdd
		};
	}
});
</script>
