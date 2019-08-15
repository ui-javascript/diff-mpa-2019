<template>
	<div id="app">
		<BarChart
			title="d3+vue 柱状图"
		    xKey="name"
			yKey="amount"
			:data="barChartData"/>
	</div>
</template>

<script>
    import BarChart from "./components/BarChart.vue";
    export default {
        name: "App",
        components: {
            BarChart
        },
        data: () => ({
            barChartData: [
                {
                    name: "张三",
                    amount: 25
                },
                {
                    name: "李四",
                    amount: 40
                },
                {
                    name: "老王",
                    amount: 15
                },
                {
                    name: "老赖",
                    amount: 9
                }
            ]
        })
    };
</script>

<style>
	#app {
		font-family: "Open Sans", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #282f36;
		margin-top: 30px;
	}
</style>