/*
 * @Author: ChangJun (52chinaweb@gmail.com) 
 * @Date: 2018-10-19 23:03:11 
 * @desc: 订单组件action
 * @Last Modified by: 52chinaweb
 * @Last Modified time: 2018-10-19 23:59:06
 */

 
import {ORDER_DATA} from './actionTypes'
import axios from "axios";


export const getOrderData = (page) => (dispatch) => {
  axios({
    method: 'get',
    url: '/json/orders.json'
  }).then((resp) => {
    dispatch({
      type: ORDER_DATA,
      currentPage:page,
      obj: resp.data
    });
  });
};