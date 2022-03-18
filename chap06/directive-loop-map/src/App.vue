<script setup lang="ts">
import {ref} from "vue";

const cocktailListInit = new Map<number, string>();
cocktailListInit.set(2345, "ホワイトレディ");
cocktailListInit.set(4412, "ブルーハワイ");
cocktailListInit.set(6792, "ニューヨーク");
const cocktailList = ref(cocktailListInit);
</script>

<template>
	<ul>
		<li
			v-for="[id, cocktailName] in cocktailList"
			v-bind:key="id">
			IDが{{id}}のカクテルは{{cocktailName}}
		</li>
	</ul>
</template>
