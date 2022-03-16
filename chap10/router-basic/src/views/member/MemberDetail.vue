<script setup lang="ts">
import {inject, computed} from "vue";
import {RouterLink} from "vue-router";
import type {Member} from "@/interfaces";

interface Props {
	id: number;
}
const props = defineProps<Props>();
const memberList = inject("memberList") as Map<number, Member>;
const member = computed(
	(): Member => {
		return memberList.get(props.id) as Member;
	}
);
const localNote = computed(
	(): string => {
		let localNote = "--";
		if(member.value.note != undefined) {
			localNote = member.value.note;
		}
		return localNote;
	}
);
</script>

<template>
	<h1>会員管理</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>
				<RouterLink v-bind:to="{name: 'AppTop'}">
					TOP
				</RouterLink>
			</li>
			<li>
				<RouterLink v-bind:to="{name: 'MemberList'}">
					会員リスト
				</RouterLink>
			</li>
			<li>会員詳細情報</li>
		</ul>
	</nav>
	<section>
		<h2>会員詳細情報</h2>
		<dl>
			<dt>ID</dt>
			<dd>{{member.id}}</dd>
			<dt>名前</dt>
			<dd>{{member.name}}</dd>
			<dt>メールアドレス</dt>
			<dd>{{member.email}}</dd>
			<dt>保有ポイント</dt>
			<dd>{{member.points}}</dd>
			<dt>備考</dt>
			<dd>{{localNote}}</dd>
		</dl>
	</section>
</template>
