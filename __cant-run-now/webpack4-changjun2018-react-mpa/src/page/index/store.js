/**
 * @author: Chang Jun
 * @date: 2018/10/10
 * @Description:
 */

import {createStore,applyMiddleware} from 'redux'
import mainReducer from './reducers/main';
import thunk from 'redux-thunk';

import createHistory from 'history/createHashHistory'
import { routerMiddleware } from 'react-router-redux'

// 创建基于hash的history
const history = createHistory();

// 创建初始化tab
history.replace('home')

// 创建history的middleware
const historyMiddl = routerMiddleware(history);

const store = createStore(mainReducer, applyMiddleware(thunk,historyMiddl));


// 配置redux热更新
if (module.hot){
  module.hot.accept('./reducers/main',()=>{
    const nextRootReducer = require('./reducers/main');
    store.replaceReducer(nextRootReducer)
  })
}

module.exports = {
  store,
  history
}
