<script setup lang="ts">
import {ref, computed} from "vue";

//Propsインターフェースの定義。
interface Props {
	id: number;
	name: string;
	email: string;
	points: number;
	note?: string;
}
//Propsオブジェクトの設定。
const props = withDefaults(
	defineProps<Props>(),
	{note:  "--"}
);

//このコンポーネント内で利用するポイント数のテンプレート変数。
const localPoints = ref(props.points);
//［ポイント加算］ボタンをクリックした時のメソッド。
const pointUp = (): void => {
	// props.points++;
	localPoints.value++;
}
</script>

<template>
	<section class="box">
		<h4>{{name}}さんの情報</h4>
		<dl>
			<dt>ID</dt>
			<dd>{{id}}</dd>
			<dt>メールアドレス</dt>
			<dd>{{email}}</dd>
			<dt>保有ポイント</dt>
			<dd>{{localPoints}}</dd>
			<dt>備考</dt>
			<dd>{{note}}</dd>
		</dl>
		<button v-on:click="pointUp">ポイント加算</button>
	</section>
</template>

<style scoped>
.box {
	border: green 1px solid;
	margin: 10px;
}
</style>
