<script setup lang="ts">
import {ref} from "vue";
import OneSection from "./components/OneSection.vue";

const taroProblemsInit: string[] = ["電話が通じません。", "留守です。"];
const taro = ref("田中太郎");
const taroProblems = ref(taroProblemsInit);
const jiro = ref("鈴木二郎");
</script>

<template>
	<section>
		<OneSection v-bind:name="taro">
			<ul>
				<li v-for="problem in taroProblems" v-bind:key="problem">
					{{problem}}
				</li>
			</ul>
		</OneSection>
		<OneSection v-bind:name="jiro"/>
	</section>
</template>
