<template>
	<div class="p-2">

		<loading-progress
			:progress=100
			:indeterminate=true
			:counter-clockwise=false
			:hide-background=false
			size="64"
			rotate
			fillDuration="2"
			rotationDuration="1"
		/>

		<!-- <loading-progress
			:progress=100
			:indeterminate=true
			:counter-clockwise=true
			:hide-background=false
			shape="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
			size="180"
			fill-duration="2"
		/> -->

	</div>
</template>

<script>

	export default {
		data() {
			return {
				msg: 'vue',
				progress: 'Hewllo'
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
