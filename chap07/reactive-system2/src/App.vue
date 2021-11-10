<template>
	<p>現在時刻: {{timeStrRef}}</p>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {setupTimeStrRef} from "./setups";

export default defineComponent({
	setup() {
		const timeStrRef = setupTimeStrRef();
		return {
			timeStrRef
		};
	}
});
</script>
