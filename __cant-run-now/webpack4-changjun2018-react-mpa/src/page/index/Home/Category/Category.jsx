/**
 * @author: Chang Jun
 * @date: 2018/10/13
 * @Description: 首页分类组件
 */

import './Category.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getHeaderData} from "../../actions/categoryAction";


class Category extends Component {
  constructor(props) {
    super(props);
    this.fetchData()
  }

  // 请求数据
  fetchData() {
    this.props.dispatch(getHeaderData())
  }
  // 渲染首页分类数据
  renderItems() {
    let items = this.props.items;
    items = items.splice(0, 8);
    return items.map((item, index) => {
      return (
          <div key={index} className="category-item">
            <img src={item.url} alt="" className="item-icon"/>
            <p className="item-name">{item.name}</p>
          </div>
      )
    })
  }

  render() {
    return (
        <div className="category-content clearfix">
          {this.renderItems()}
        </div>
    );
  }
}

export default connect(
    state => ({
      items: state.categoryReducer.items
    })
)(Category)