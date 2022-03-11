<script setup lang="ts">
import {ref} from "vue";

// 現在日時を取得。
const now = new Date();
// 現在の時刻の文字列を取得。
const nowStr = now.toLocaleTimeString();
// 現在の時刻文字列をテンプレート変数として用意。
let timeStr = nowStr;
// 同じく現在の時刻文字列をテンプレート変数としてref()で用意。
const timeStrRef = ref(nowStr);
// 新しい時刻に変更する関数。
function changeTime(): void {
	// 現在日時を取得。
	const newTime = new Date();
	// 現在の時刻の文字列を取得。
	const newTimeStr = newTime.toLocaleTimeString();
	// 現在の時刻文字列をテンプレート変数timeStrに格納。
	timeStr = newTimeStr;
	// 現在の時刻文字列をテンプレート変数timeStrRefに格納。
	timeStrRef.value = newTimeStr;
}
// changeTime関数を1秒ごとに実行。
setInterval(changeTime, 1000);
</script>

<template>
	<p>現在時刻: {{timeStr}}</p>
	<p>現在時刻(ref): {{timeStrRef}}</p>
</template>
