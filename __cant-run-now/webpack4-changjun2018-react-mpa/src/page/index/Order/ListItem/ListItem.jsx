/*
 * @Author: ChangJun (52chinaweb@gmail.com) 
 * @Date: 2018-10-20 01:21:51 
 * @Last Modified by: 52chinaweb
 * @Last Modified time: 2018-10-20 02:41:13
 * @desc 订单列表item组件
 */

import './ListItem.scss'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class ListItem extends Component {
  constructor(props) {
    super(props)
  }

  /**
   * 渲染每个菜品的总价
   * @param {*} data
   */
  renderTotalPrice(index, data) {
    return (
      <div className="product-item" key={index}>
        <span>...</span>
        <div className="p-total-count">
          总计
          {data.product_count}
          个菜,实付
          <span className="total-price">￥{data.total}</span>
        </div>
      </div>
    )
  }

  /**
   * 渲染具体菜品
   * @param {*} data
   */
  renderProduct(data) {
    let list = data.product_list
    // push一个用来计算总计的{type:more}
    list.push({ type: 'more' })
    return list.map((item, index) => {
      if (item.type === 'more') {
        return this.renderTotalPrice(index,data)
      }
      return (
        <div className="product-item" key={index}>
          {item.product_name}
          <div className="p-count">x{item.product_count}</div>
        </div>
      )
    })
  }

  /**
   * 渲染评价按钮
   * @param {*} data
   */
  renderComment(data) {
    let evaluation = !data.is_comment;
    if(evaluation){
      return (
        <div className="evaluation clearfix">
          <div className="evaluation-btn">评价</div>
        </div>
      )
    }
    return null
  }

  render() {
    let data = this.props.itemData
    return (
      <div className="order-item">
        <div className="order-item-inner">
          <img className="item-img" src={data.poi_pic} alt="" />
          <div className="item-right">
            <div className="item-top">
              <p className="order-name one-line">{data.poi_name}</p>
              <div className="arrow" />
              <div className="order-state">{data.status_description}</div>
            </div>
            <div className="item-bottom">{this.renderProduct(data)}</div>
          </div>
        </div>
        {this.renderComment(data)}
      </div>
    )
  }
}

export default connect()(ListItem)
