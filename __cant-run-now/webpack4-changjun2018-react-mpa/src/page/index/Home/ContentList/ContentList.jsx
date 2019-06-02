/**
 * @author: Chang Jun
 * @date: 2018/10/16
 * @Description: 附近商家列表
 */

import './ContentList.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux'
import ListItem from './ListItem/ListItem.jsx'
import ScrollView from 'component/ScrollView/ScrollView.jsx'
import {getListData} from "../../actions/contentListAction";


class ContentList extends Component {
  constructor(props) {
    super(props);
    // 记录当前页码
    this.page = 0;
    // 请求第一页数据
    this.fetchData(this.page);
    // 标识页面是否可以滚动
    this.state = {
      isend: false
    };
  }

  onLoadPage() {
    this.page++;
      // 最多滚动三页
      if (this.page > 3) {
        this.setState({
          isend: true
        })
      } else {
        this.fetchData(this.page);
      }
  }

  // 请求数据
  fetchData(page) {
    this.props.dispatch(getListData(page))
  }

  // 渲染首页商家列表数据
  renderItems() {
    let list = this.props.list;
    return list.map((item, index) => {
      return <ListItem key={index} itemData={item}></ListItem>
    })
  }

  render() {
    return (
        <div className="list-content">
          <h4 className="list-title">
            <span className="title-line"></span>
            <span>附近商家</span>
            <span className="title-line"></span>
          </h4>
          <ScrollView loadCallback={this.onLoadPage.bind(this)} isend={this.state.isend}>
            {this.renderItems()}
          </ScrollView>
        </div>
    );
  }
}

export default connect(
    state => ({
      list: state.contentListReducer.list
    })
)(ContentList)