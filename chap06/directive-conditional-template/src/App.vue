<script setup lang="ts">
import {computed} from "vue";

const randomNumber = computed(
	(): number => {
		return Math.round(Math.random() * 100);
	}
);
</script>

<template>
	<p>
		点数は{{randomNumber}}点
		<template v-if="randomNumber >= 80">
			で優です。
			<span style="color: red;">すばらしい!</span>
		</template>
	</p>
</template>
