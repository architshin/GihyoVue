<script setup lang="ts">
import OneSection from "./components/OneSection.vue";
</script>

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
