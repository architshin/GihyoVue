<template>
	<h1>会員管理</h1>
	<nav id="breadcrumbs">
		<ul>
			<li>
				<router-link v-bind:to="{name: 'AppTop'}">
					TOP
				</router-link>
			</li>
			<li>
				<router-link v-bind:to="{name: 'MemberList'}">
					会員リスト
				</router-link>
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

<script lang="ts">
import {defineComponent, computed} from "vue";
import {Member} from "../../interfaces";
import {useStore} from "../../store/index"

export default defineComponent({
	name: "MemberDetail",
	props: {
		id: {
			type: Number,
			required: true
		}
	},
	setup(props) {
		const store = useStore();
		const member = computed(
			(): Member => {
				const member = store.getters.getById(props.id);
				return member;
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
		return {
			member,
			localNote
		};
	}
});
</script>
