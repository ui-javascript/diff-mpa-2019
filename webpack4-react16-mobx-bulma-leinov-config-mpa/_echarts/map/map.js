import React from 'react';
import ReactDOM from 'react-dom';
import "../common.scss"
import Map from "./components/Map";
import ZheJiang from "./components/ZheJiang";

function App() {
  return (
    <div>
      {/*<Map/>*/}
      <ZheJiang/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
