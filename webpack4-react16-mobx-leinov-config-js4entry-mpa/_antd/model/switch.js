import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

import { Switch } from "antd"

function App() {
  let [options, setOptions] = useState({
    isOk: 0
  })

  function handleSwitchChange (checked, event)  {
    console.log(checked)
    setOptions(Object.assign({}, options, {isOk: checked ? 1 : 0}))
  }

  return (
    <div className='p-2'>
      <Switch
        key={Math.random()}
        checkedChildren="显示到报告" unCheckedChildren="不显示"
        defaultChecked = { options.isOk ? true : false }
        onChange={handleSwitchChange }
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
