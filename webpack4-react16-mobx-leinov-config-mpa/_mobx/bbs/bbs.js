import React from "react";
import ReactDOM from "react-dom";
import { configure } from 'mobx';
import { Provider } from "mobx-react";
import App from "./components/App";
import stores from "./stores";

// useStrict(true);
configure({ enforceActions: 'observed' })

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
