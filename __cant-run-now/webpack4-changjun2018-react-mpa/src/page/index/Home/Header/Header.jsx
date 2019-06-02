/**
 * @author: Chang Jun
 * @date: 2018/10/13
 * @Description: 首页Header
 */
import './Header.scss'
import React, {Component} from 'react';
import SearchBar from '../SearchBar/SearchBar'
class Header extends Component {
  render() {
    return (
        <div className="header">
          <SearchBar/>
          <img className="banner-img"  src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg" alt=""/>
        </div>
    );
  }
}

export default Header;