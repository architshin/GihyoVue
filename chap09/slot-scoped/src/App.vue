<template>
	<section>
		<OneSection>
			<!-- <template v-slot:default="slotProps"> -->
			<template v-slot="slotProps">
				<dl>
					<dt>名前</dt>
					<dd>{{slotProps.memberInfo.name}}</dd>
					<!-- <dd>{{slotProps.memberName}}</dd> -->
					<dt>状況</dt>
					<dd>{{slotProps.memberInfo.state}}</dd>
					<!-- <dd>{{slotProps.memberState}}</dd> -->
				</dl>
			</template>
		</OneSection>
		<!-- <OneSection/> -->
	</section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import OneSection from "./components/OneSection.vue";

export default defineComponent({
	name: "App",
	components: {
		OneSection
	},
});
</script>
