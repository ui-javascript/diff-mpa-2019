// 双Y轴图表配置了alias别名但是legend不生效，少参数吗
// https://github.com/antvis/g2/issues/779

import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';

function App() {
  var data = [{
    time: '10:10',
    call: 4,
    waiting: 2,
    people: 2
  }, {
    time: '10:15',
    call: 2,
    waiting: 6,
    people: 3
  }, {
    time: '10:20',
    call: 13,
    waiting: 2,
    people: 5
  }, {
    time: '10:25',
    call: 9,
    waiting: 9,
    people: 1
  }, {
    time: '10:30',
    call: 5,
    waiting: 2,
    people: 3
  }, {
    time: '10:35',
    call: 8,
    waiting: 2,
    people: 1
  }, {
    time: '10:40',
    call: 13,
    waiting: 1,
    people: 2
  }];

  var chart = new G2.Chart({
    container: 'root',
    forceFit: true,
    // 指定图表宽度
    width: 600,
    // 指定图表高度
    height: 300,
  });

  chart.source(data, {
    call: {
      min: 0
    },
    'people': {
      alias: '答疑处理时效',
      min: 0
    },
    'waiting': {
      alias: '答疑超时数',
      min: 0
    }
  });

  chart.legend({
    custom: true,
    allowAllCanceled: true,
    items: [{
      // 这里改成你的别名
      value: '答疑超时数',
      marker: {
        symbol: 'square',
        fill: '#3182bd',
        radius: 5
      }
    }, {
      // 这里改成你的别名
      value: '答疑处理时效',
      marker: {
        symbol: 'hyphen',
        stroke: '#fdae6b',
        radius: 5,
        lineWidth: 3
      }
    }],

    onClick: function onClick(ev) {
      var item = ev.item;
      var value = item.value;
      var checked = ev.checked;
      var geoms = chart.getAllGeoms();
      for (var i = 0; i < geoms.length; i++) {
        var geom = geoms[i];

        // 这里使用别名判断
        if (geom.getYScale().alias === value) {
          if (checked) {
            geom.show();
          } else {
            geom.hide();
          }
        }
      }
    }
  });

  chart.legend({
    position: 'bottom'
  });

  chart.interval().position('time*waiting').color('#3182bd');
  chart.line().position('time*people').color('#fdae6b').size(3).shape('smooth');
  chart.point().position('time*people').color('#fdae6b').size(3).shape('circle');
  chart.render();

  return null
}



ReactDOM.render(<App />,
  document.getElementById("root"));
