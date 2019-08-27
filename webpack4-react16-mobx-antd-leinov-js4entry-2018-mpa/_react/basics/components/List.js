import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

class List extends Component {
  // 父组件声明自己支持context
  static childContextTypes = {
    color: PropTypes.string,
  }
  static propTypes = {
    list: PropTypes.array,
  }
  // 提供一个函数,用来返回相应的context对象
  getChildContext() {
    return {
      color: 'red',
    };
  }
  render() {
    const { list } = this.props;
    return (
      <div>
        <ul>
          {
            list.map((entry, index) =>
              <ListItem key={`list-${index}`} value={entry.text} />,
            )
          }
        </ul>
      </div>
    );
  }
}
export default List;
