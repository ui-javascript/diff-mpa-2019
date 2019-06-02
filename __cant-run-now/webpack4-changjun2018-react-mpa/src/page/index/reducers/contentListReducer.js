/**
 * @author: Chang Jun
 * @date: 2018/10/16
 * @Description: 商家列表reducer
 */

import {LIST_DATA} from "../actions/actionTypes";

const initState = {
  list: []
};

const getContentList = (state, action) => {
  if (action.currentPage === 0) {
    return {...state, list: action.obj.data.poilist}
  } else {
    let list = state.list;
    return {...state,list:list.concat(action.obj.data.poilist)}
  }
};

const contentListReducer = (state = initState, action) => {
  switch (action.type) {
    case LIST_DATA:
      return getContentList(state, action);
    default:
      return state;
  }
};

export default contentListReducer;

