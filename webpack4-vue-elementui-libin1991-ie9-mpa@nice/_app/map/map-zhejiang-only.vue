<template>
    <div>
        下面我简单说点啥
    </div>
</template>

<script>

  export default {
    // name: 'app',
    data() {
      return {
        adCode: 420100, // 武汉市code
        disProvince: null, // 区域图层
        depth: 2, // 区域等级 0省级 1市级 2区县级
        colors: {}, // 区域颜色
        heatmap: null, // 热力图
        city: '武汉市'
      }
    },

    created() {
      var that = this
      var url =
        'https://webapi.amap.com/maps?v=1.4.11&key=2378a12287ca8c4d881a691d32ae5cc5&plugin=AMap.DistrictSearch,AMap.DistrictLayer'
      var jsapi = document.createElement('script')
      jsapi.charset = 'utf-8'
      jsapi.src = url
      // 加载完后的回调
      jsapi.onload = function() {
        // 防止插件没有初始化完成
        setTimeout(() => {
          that.getData()
        }, 500)
      }
      document.head.appendChild(jsapi)
    },
    methods: {
      // 创建地图
      initMap() {
        var that = this
        this.map = new AMap.Map('heatMap', {
          zoom: 9,
          center: [114.318924, 30.6],
          pitch: 1,
          resizeEnable: true,
          showIndoorMap: false
        })
        // 绘制遮罩层
        new AMap.DistrictSearch({
          extensions: 'all',
          subdistrict: 0
        }).search(that.city, function(status, result) {
          // 外多边形坐标数组和内多边形坐标数组
          var outer = [
            new AMap.LngLat(-360, 90, true),
            new AMap.LngLat(-360, -90, true),
            new AMap.LngLat(360, -90, true),
            new AMap.LngLat(360, 90, true)
          ]
          var holes = result.districtList[0].boundaries
          var pathArray = [outer]
          pathArray.push.apply(pathArray, holes)
          var polygon = new AMap.Polygon({
            pathL: pathArray,
            strokeColor: '#193976',
            strokeWeight: 1,
            fillColor: '#193976', // 遮罩背景色
            fillOpacity: 1
          })
          polygon.setPath(pathArray)
          that.map.add(polygon)
        })
      },
      // 创建区域图层
      initPro(code, dep) {
        let that = this
        this.disProvince && disProvince.setMap(null)
        this.disProvince = new AMap.DistrictLayer.Province({
          zIndex: 12,
          adcode: [code],
          depth: dep,
          styles: {
            fill: function(properties) {
              // properties为可用于做样式映射的字段，包含
              // NAME_CHN:中文名称
              // adcode_pro
              // adcode_cit
              // adcode
              var adcode = properties.adcode
              return that.getColorByAdcode(adcode)
            },
            'province-stroke': 'cornflowerblue',
            'city-stroke': 'white', // 中国地级市边界
            'county-stroke': 'rgba(255,255,255,0.5)' // 中国区县边界
          }
        })
        this.disProvince.setMap(this.map)
      },
      // 颜色辅助方法
      getColorByAdcode(adcode) {
        if (!this.colors[adcode]) {
          var gb = Math.random() * 155
          this.colors[adcode] = 'rgb(' + gb + ',' + gb + ',250)'
        }
        return this.colors[adcode]
      },
      // 限制地图显示范围
      lockMapBounds() {
        var bounds = this.map.getBounds()
        this.map.setLimitBounds(bounds)
      },
      // 绘制热力图
      drwaHeatmap(heatmapData) {
        var that = this
        if (!this.isSupportCanvas()) {
          alert(
            '热力图仅对支持canvas的浏览器适用,您所使用的浏览器不能使用热力图功能,请换个浏览器试试~'
          )
        }
        this.map.plugin(['AMap.Heatmap'], function() {
          // 初始化heatmap对象
          that.heatmap = new AMap.Heatmap(that.map, {
            radius: 25, // 给定半径
            opacity: [0, 0.8]
            /*,
              gradient:{
                  0.5: 'blue',
                  0.65: 'rgb(117,211,248)',
                  0.7: 'rgb(0, 255, 0)',
                  0.9: '#ffea00',
                  1.0: 'red'
              }
               */
          })
          that.heatmap.setDataSet({
            data: heatmapData.data, // [{lng:'',lag:'',count:}]
            max: heatmapData.max
          })
        })
      },
      // 获取数据
      getData() {
        // 获取热力数据
        // commIssueHeatMap().then(res => {
        //   let data = {
        //     max: 100, // 最大值
        //     data: res.data.result
        //   }
        //   this.initMap()
        //   this.initPro(this.adCode, this.depth)
        //   this.lockMapBounds()
        //   this.drwaHeatmap(data)
        // })

          this.initMap()
          this.initPro(this.adCode, this.depth)
          this.lockMapBounds()
          // this.drwaHeatmap(data)
      },
      // 判断浏览区是否支持canvas
      isSupportCanvas() {
        var elem = document.createElement('canvas')
        return !!(elem.getContext && elem.getContext('2d'))
      }
    }
  }

</script>


<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        position:relative;
    }

</style>
