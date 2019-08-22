<template>
	<div class="p-2">
        hello {{ msg }} !

		<loading-progress
			:progress="progress"
			:indeterminate="indeterminate"
			:counter-clockwise="counterClockwise"
			:hide-background="hideBackground"
			size="64"
			rotate
			fillDuration="2"
			rotationDuration="1"
			/>

	</div>
</template>

<script>

	export default {
		data() {
			return {
			    msg: 'vue'
			}
		},
		components: {

        },
		mounted() {

        },
		methods: {

		}
	}
</script>

<style lang="less">

</style>
