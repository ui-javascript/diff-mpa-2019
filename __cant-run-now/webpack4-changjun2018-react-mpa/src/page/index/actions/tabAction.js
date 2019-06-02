/**
 * @author: Chang Jun
 * @date: 2018/10/11
 * @Description: 底部action
 */
import {CHANGE_TAB} from "./actionTypes";

/*
* @Actionname changeTab
* @info 底部选项卡选择action
* */
export const changeTab = (obj) => {
  return {
    type: CHANGE_TAB,
    obj: obj
  }
};