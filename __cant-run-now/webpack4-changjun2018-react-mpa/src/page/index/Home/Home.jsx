/**
 * @author: Chang Jun
 * @date: 2018/10/13
 * @Description: 首页
 */

import React, {Component} from 'react';
import Header from './Header/Header';
import Category from './Category/Category';
import ContentList from './ContentList/ContentList';

class Home extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Category/>
          <ContentList/>
        </div>
    );
  }
}

export default Home;