/********************
 * @file:index main js
 * @author: leinov
 * @date: 2018-10-08
 ********************/

import React from "react";
import ReactDOM from "react-dom";
// import * as React from 'react'


import 'src/common.scss'

import img from './assets/react.png'

let imgProps = {
    src: img,
    alt: '1图片',
    className: 'block'
}


class Page extends React.Component {
    render() {
        return (
            <div>
                home
            </div>
        )
    }
}

class XiaoMing extends React.Component {
    state = {
        name: '小明'
    }

    render() {
        // @deprecated 仅为演示
        setTimeout(() => this.setState({name: '小明儿子'}), 1000)

        return (<div>
            {this.state.name}
        </div>)
    }
}

ReactDOM.render((
    <div>
        <img className={'inline-block'} src={img}/>
        <img {...imgProps}/>

        <div>
            <label htmlFor="name">姓名:</label><input id="name"/>
            {/*
                在原生属性上使用此元素不支持的属性
                必须使用data-前缀
            */}
            <input type="text" data-init="22"/>
        </div>

        <Page/>

        <XiaoMing/>

    </div>
), document.getElementById('root'))
