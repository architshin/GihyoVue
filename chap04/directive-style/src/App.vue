<script setup lang="ts">
import {ref, computed} from "vue";

const msg = ref("こんにちは!世界");
const msgTextRed = ref("red");
const msgTextColor = ref("white");
const msgBgColor = ref("black");
const msgStyles = ref({
		color: "white",
		backgroundColor: "black"
	});
const msgStyles2 = ref({
		fontSize: "24pt"
	});
const msgStyles3 = ref({
		color: "pink",
		fontSize: "24pt"
	});
const textSize = computed(
	(): string => {
		const size = Math.round(Math.random() * 25) + 10;
		return `${size}pt`;
	}
);
</script>

<template>
	<p v-bind:style="{color: msgTextRed}">
		{{msg}}
	</p>
	<p v-bind:style="{color: 'pink'}">
		{{msg}}
	</p>
	<p v-bind:style="{fontSize: textSize}">
		{{msg}}
	</p>
	<p v-bind:style="{color: msgTextColor, backgroundColor: msgBgColor}">
		{{msg}}
	</p>
	<p v-bind:style="{color: msgTextColor, 'background-color': msgBgColor}">
		{{msg}}
	</p>
	<p v-bind:style="msgStyles">
		{{msg}}
	</p>
	<p v-bind:style="[msgStyles, msgStyles2]">
		{{msg}}
	</p>
	<p v-bind:style="[msgStyles, msgStyles3]">
		{{msg}}
	</p>
	<p v-bind:style="[msgStyles3, msgStyles]">
		{{msg}}
	</p>
</template>
