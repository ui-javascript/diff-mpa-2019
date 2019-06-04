/********************
 * @file:index main js
 * @author: leinov
 * @date: 2018-10-08
 ********************/

// import React from "react"
import * as React from 'react'
import ReactDOM from "react-dom"
import '@/styles/common.scss'

class Child extends React.Component {

    // 装饰器是es7语法 -> babel：present
    // typescript原生支持

    // @autoBind
    update(e) {
        // 原生事件
        console.log(e.nativeEvent)
        // 取消冒泡
        e.stopPropagation()
        // 取消默认行为
        e.preventDefault()

        this.props.onChange('小明名字改了')
    }

    render() {
        return (<div>
            {this.props.parentName}
            <button className={'ml-20'} onClick={this.update.bind(this)}>更新</button>
        </div>)
    }
}

class Parent extends React.Component {
    state = {
        name: '小明'
    }

    changeName(name) {
        this.setState({
            name
        })
    }

    render() {
        // @deprecated for demo
        setTimeout(() => {
            if (this.state.name !== '小明') {
                this.setState({name: '改了也是你爸爸'})
            }
        }, 2000)

        return (<div>
            <Child onChange={this.changeName.bind(this)} parentName={this.state.name}/>
        </div>)
    }
}


ReactDOM.render(
    (<div>
        <Parent />
    </div>),
    document.getElementById('root'))
