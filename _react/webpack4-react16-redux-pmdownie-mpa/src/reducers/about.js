import { combineReducers } from "redux";
import api from "../constants/api";

const data = (data = {}, action) => {
  return action.type === api.ABOUT_FETCHING_SUCCESS ? action.data : data;
};

const loading = (loading = false, action) => {
  return action.type === api.ABOUT_FETCHING ? true : loading;
};

const loaded = (loaded = false, action) => {
  return action.type === api.ABOUT_FETCHING_SUCCESS ? true : loaded;
};

const error = (error = null, action) => {
  return action.type === api.ABOUT_FETCHING_FAIL ? action.error : error;
};

export default combineReducers({
  data,
  loading,
  loaded,
  error
});
