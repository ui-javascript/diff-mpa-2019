import React from "react"
import ReactDOM from "react-dom"

import styles from "./demo.scss"
import { Button } from "antd"

function App() {
  return (
    <div className='p-2'>
      <Button class={styles.demo}>按钮</Button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
