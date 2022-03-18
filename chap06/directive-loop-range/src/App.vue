<template>
	<ul>
		<li
			v-for="r in 5"
			v-bind:key="r">
			半径{{r}}の円の円周: {{2 * r * 3.14}}
		</li>
	</ul>
</template>
