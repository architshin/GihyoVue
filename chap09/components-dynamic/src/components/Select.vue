<template>
	<select v-model="memberTypeSelect">
		<option value="1">通常会員</option>
		<option value="2">特別会員</option>
		<option value="3">優良会員</option>
	</select>
	<br>
	<p>選択されたリスト: {{memberTypeSelect}}</p>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	name: "Select",
	setup() {
		const memberTypeSelect = ref(1);
		return {
			memberTypeSelect
		}
	}
});
</script>
