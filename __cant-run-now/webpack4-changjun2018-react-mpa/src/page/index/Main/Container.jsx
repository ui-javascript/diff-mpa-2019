/**
 * @author: Chang Jun
 * @date: 2018/10/13
 * @Description:
 */

import React from 'react';
import Main from './Main'
import {hot} from 'react-hot-loader';

class Container extends React.Component{
  render(){
    return <Main/>
  }
}

export default hot(module)(Container)