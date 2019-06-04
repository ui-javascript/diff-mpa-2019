import React from "react";
import ReactDOM from "react-dom";

function App () {
  return <div dangerouslySetInnerHTML={{ __html: '<strong>i am strong, too</strong>'}}></div>
}

ReactDOM.render(
  <App />,
  document.getElementById("root"));
