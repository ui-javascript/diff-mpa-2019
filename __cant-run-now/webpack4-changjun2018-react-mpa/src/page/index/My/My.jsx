/*
 * @Author: ChangJun (52chinaweb@gmail.com) 
 * @Date: 2018-10-20 09:47:59 
 * @Last Modified by: 52chinaweb
 * @Last Modified time: 2018-10-20 10:00:49
 * @desc: 我的页面组件
 */

import './My.scss'
import React, { Component } from 'react';

class My extends Component {
  render() {
    return (
      <div className="my">
        <div className="header">
          <img src="http://i.waimai.meituan.com/static/img/default-avatar.png" alt="" className="avatar"/>
          <p className="nickname">xiaolin &gt;</p>
        </div>
        <div className="content">
          <ul className="items">
            <li className="address">
              收货地址管理
            </li>
            <li className="money">
              商家代金券
            </li>
          </ul>
          <ul className="items">
            <li className="email">
              意见反馈
            </li>
            <li className="question">
              常见问题
            </li>
          </ul>
          <p className="tel">客服电话&nbsp;101-097-77</p>
          <p className="time">客服时间&nbsp;9:00-23:00</p>
        </div>
      </div>
    );
  }
}

export default My;