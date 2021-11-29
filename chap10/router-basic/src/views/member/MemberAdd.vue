<template>
	<h1>会員管理</h1>
	<nav id="breadcrumbs">
		<ul>
			<li><router-link to="/">TOP</router-link></li>
			<li><router-link to="/member/memberList">会員リスト</router-link></li>
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
					<input type="number" id="addId" v-model="id" required>
				</dd>
				<dt>
					<label for="addName">名前&nbsp;</label>
				</dt>
				<dd>
					<input type="text" id="addName" v-model="name" required>
				</dd>
				<dt>
					<label for="addPoint">保有ポイント&nbsp;</label>
				</dt>
				<dd>
					<input type="number" id="addPoint" v-model="point" required>
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
