import React from 'react';
import ReactDOM from 'react-dom';
import echarts from "echarts"
import ReactEcharts from 'echarts-for-react'

let option = {

}

function App() {

  return (<ReactEcharts
    option={option}
    style={{height: '500px', width: '100%'}}
    className='react_for_echarts'/>);
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
