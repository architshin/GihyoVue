<template>
	<label>
		<input type="radio" name="memberType" value="1" v-model="memberType">
		通常会員
	</label>
	<label>
		<input type="radio" name="memberType" value="2" v-model="memberType">
		特別会員
	</label>
	<label>
		<input type="radio" name="memberType" value="3" v-model="memberType">
		優良会員
	</label>
	<br>
	<p>選択されたラジオボタン: {{memberType}}</p>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
	name: "Radio",
	setup() {
		const memberType = ref(1);
		return {
			memberType
		}
	}
});
</script>
