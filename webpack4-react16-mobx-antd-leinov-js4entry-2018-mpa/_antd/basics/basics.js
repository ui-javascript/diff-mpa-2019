import React, { Component, useState, useEffect } from "react"
import ReactDOM from "react-dom"

import { Button } from "antd"

function App() {
  return (
    <div className='p-2'>
      <Button>按钮</Button>
    </div>
  );
}



ReactDOM.render(<App />, document.getElementById("root"));
