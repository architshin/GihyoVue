<template>
	<section>
		<h2>Slotの利用</h2>
		<OneSection v-bind:name="taro">
			<p>連絡がつきません。</p>
		</OneSection>
	</section>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import OneSection from "./components/OneSection.vue";

export default defineComponent({
	name: "App",
	components: {
		OneSection
	},
	setup() {
		const taro = ref("田中太郎");
		return {
			taro
		}
	}
});
</script>
