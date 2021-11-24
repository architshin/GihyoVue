<template>
	<section class="box">
		<h4>ひとつのコンポーネント</h4>
		<p>
			コンポーネントとは、…
		</p>
	</section>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
	name: "OneSection"
});
</script>

<style>
.box {
	border: green 1px solid;
	margin: 10px;
}
</style>
