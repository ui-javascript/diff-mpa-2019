/*
 * @Author: ChangJun (52chinaweb@gmail.com) 
 * @Date: 2018-10-19 23:37:14 
 * @Last Modified by: 52chinaweb
 * @Last Modified time: 2018-10-19 23:53:09
 * @desc orderReducer
 */

import {ORDER_DATA} from "../actions/actionTypes";

const initState = {
  list: []
};

const getOrderData = (state, action) => {
  if (action.currentPage === 0) {
    return {...state, list: action.obj.data.digestlist}
  } else {
    let list = state.list;
    return {...state,list:list.concat(action.obj.data.digestlist)}
  }
};

const OrderReducer = (state = initState, action) => {
  switch (action.type) {
    case ORDER_DATA:
      return getOrderData(state, action);
    default:
      return state;
  }
};

export default OrderReducer;


