/**
 * @author: Chang Jun
 * @date: 2018/10/11
 * @Description: 底部tabbar组件
 * @constructor: <BottomBar/>
 */
import './BottomBar.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'

class BottomBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="bottom-bar">{this.renderItems()}</div>
  }

  // 底部item渲染
  renderItems() {
    let tabs = this.props.tabs
    return tabs.map((item, index) => {
      let cls = item.key + ' btn-item'
      let name = item.name
      return (
        <NavLink
          key={index}
          className={cls}
          replace={true}
          to={'/' + item.key}
          activeClassName="active"
          onClick={() => this.changeTab(item)}
        >
          <div className="tab-icon" />
          <div className="btn-name">{name}</div>
        </NavLink>
      )
    })
  }

  // 点击切换选项
  changeTab(item) {
    this.props.history.replace(item.key)
  }
}

export default withRouter(
  connect(state => ({
    tabs: state.tabReducer.tabs,
    activeKey: state.tabReducer.activeKey
  }))(BottomBar)
)
