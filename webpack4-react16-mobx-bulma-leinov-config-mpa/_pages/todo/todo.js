/********************
 * @file:todo main js
 * @author: leinov
 * @date: 2018-10-08
 ********************/

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import configStore from "./store/index.js";
import App from "./app/App";

import "@/styles/common.scss";
import "./assets/index.scss";

const store = configStore();
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
