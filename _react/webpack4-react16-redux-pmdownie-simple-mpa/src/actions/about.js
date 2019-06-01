import api from "../constants/api";
import Axios from "axios";

const aboutFetch = () => ({
  type: api.ABOUT_FETCHING
});

const aboutFetchSuccess = data => ({
  type: api.ABOUT_FETCHING_SUCCESS,
  data
});

const aboutFetchFail = error => ({
  type: api.ABOUT_FETCHING_FAIL,
  error
});

export const fetchAbout = () => async dispatch => {
  dispatch(aboutFetch());

  try {
    const data = await Axios.get("https://localhost:2424/data");
    dispatch(aboutFetchSuccess(data));
  } catch (error) {
    dispatch(aboutFetchFail(error));
    throw new Error(error);
  }
};
