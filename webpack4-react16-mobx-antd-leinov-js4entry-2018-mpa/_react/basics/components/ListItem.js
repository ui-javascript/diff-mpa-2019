import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  // 子组件声明自己要使用context
  static contextTypes = {
    color: PropTypes.string,
  }
  static propTypes = {
    value: PropTypes.string,
  }
  render() {
    const { value } = this.props;
    return (
      <li style={{ background: this.context.color }}>
        <span>{value}</span>
      </li>
    );
  }
}
export default ListItem;
