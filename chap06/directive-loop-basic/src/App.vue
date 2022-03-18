<script setup lang="ts">
import {ref} from "vue";

const cocktailListInit: string[] = ["ホワイトレディ", "ブルーハワイ", "ニューヨーク"];
const cocktailList = ref(cocktailListInit);
// const cocktailList = ref(["ホワイトレディ", "ブルーハワイ", "ニューヨーク"]);
</script>

<template>
	<ul>
		<li
			v-for="cocktailName in cocktailList"
			v-bind:key="cocktailName">
			{{cocktailName}}
		</li>
	</ul>
	<ul>
		<li
			v-for="(cocktailName, index) in cocktailList"
			v-bind:key="cocktailName">
			{{cocktailName}}(インデックス{{index}})
		</li>
	</ul>
</template>
