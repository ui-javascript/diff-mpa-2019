/**
 * @author: Chang Jun
 * @date: 2018/10/13
 * @Description: 分类action
 */
import {HEAD_DATA} from './actionTypes'
import axios from "axios";


export const getHeaderData = () => (dispatch) => {
  axios({
    method: 'get',
    url: '/json/head.json'
  }).then((resp) => {
    dispatch({
      type: HEAD_DATA,
      obj: resp.data
    });
  });
};
