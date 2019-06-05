import axios from "axios";
import config from "./config";
import * as _ from "lodash";
const debug = require("debug")("app:request");
const { SESSION_KEY, REQUST, MODE, LOCAL_SESSION } = config;
let mode = MODE;

process.env.NODE_ENV == "production" && (mode = "development");

// create an axios instance
const service = axios.create({
  baseURL: (REQUST as any)[mode].BASE_URL, // api的base_url
  timeout: 300000, // request timeout
  withCredentials: true,
});

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (localStorage.getItem(LOCAL_SESSION)) {
      config.headers[SESSION_KEY] = localStorage.getItem(LOCAL_SESSION);
    }
    config.headers["x-requested-with"] = "XMLHttpRequest";
    return config;
  },
  error => {
    // Do something with request error
    debug(error); // for debug
    Promise.reject(error);
  }
);

// respone interceptor
service.interceptors.response.use(
  response => {
    debug("response", response);
    return response;
  },
  error => {
    debug(error);
    let duration = 3000;
    let redirect: { path: string; query: any };
    let message;
    if (
      _.get(error, "response.status") === 401 ||
      _.get(error, "response.status") === 403
    ) {
      localStorage.removeItem(LOCAL_SESSION);
      message = "未登录";
      _.get(error, "response.status") === 403 && (message = "权限不足");
    }
    if (typeof _.get(error, "response.data") == "string" && !message) {
      message = _.get(error, "response.data")
        .replace(/(.*)?message(.*)/, "$2")
        .replace(/[":}]/g, "");
    }
    message =
      message ||
      _.get(error, "response.data.message") ||
      _.get(error, "response.data.errors.type.message") ||
      error.message;
    if (message !== "Request aborted") {
      alert(message);
    }
    return Promise.reject(error);
  }
);

export default service;
