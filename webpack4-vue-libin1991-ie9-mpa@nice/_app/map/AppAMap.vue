<template>
    <div id="app">
        <h3 class="title">{{ msg }}</h3>
        <div class="amap-wrapper">
            <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue';
    import VueAMap from 'vue-amap';
    Vue.use(VueAMap);

    const amapManager = VueAMap.initAMapApiLoader({
        key: '2378a12287ca8c4d881a691d32ae5cc5',
        plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
        // 默认高德 sdk 版本为 1.4.4
        v: '1.4.6',
    });

    export default {
        data () {
            return {
                msg: 'vue-amap向你问好！',
                zoom: 12,
                center: [121.59996, 31.197646],
                amapManager,
                events: {
                    init(map) {}
                },
                plugin: [{
                    pName: 'Geolocation',
                    events: {
                        init: (o) => {
                            console.log(0)

                            // o 是高德地图定位插件实例
                            o.getCurrentPosition((status, result) => {
                                console.log(result)
                                if (result && result.position) {

                                    const {lng, lat} = result.position;
                                    this.center = [lng, lat];
                                    this.loaded = true;
                                }
                            });
                        }
                    }
                }]
            }
        }
    }
</script>

<style>
    .amap-wrapper {
        width: 500px;
        height: 500px;
    }
</style>