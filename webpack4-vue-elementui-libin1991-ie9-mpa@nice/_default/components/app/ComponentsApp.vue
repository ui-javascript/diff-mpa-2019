<template>
	<div class="index">
        hello world

        <v-distpicker province="广东省" city="广州市" area="海珠区"></v-distpicker>

        <!--<vueCropper-->
                <!--ref="cropper"-->
                <!--:img="option.img"-->
                <!--:outputSize="option.size"-->
                <!--:outputType="option.outputType"-->
        <!--&gt;</vueCropper>-->

	</div>
</template>

<script>
    import { VueCropper }  from 'vue-cropper'


	export default {
		data() {
			return {
                // option: {
                //     img: 'https://user-gold-cdn.xitu.io/2019/2/28/1693348c6a55e7c9?imageView2/2/w/800/q/100',
                //     size: 100,
                //     outputType: 'jpeg'
                // }
			}
		},
        components: {
            VueCropper,
        },
		mounted() {},
		methods: {

		}
	}
</script>

<style lang="less">

</style>
