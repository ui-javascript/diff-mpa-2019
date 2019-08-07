import React, { useState } from "react"
import ReactDOM from "react-dom"

let gCounter = 0
function App () {

  const [counter, setCounter] = useState(0)

  function add() {
    gCounter++;
    setCounter(counter+1)
  }


  return (<>

    {/*<div className={"hidden"}>*/}
    {/*  { () => { gCounter = 12 } }*/}
    {/*</div>*/}

    <p><mark>{++gCounter}</mark></p>
    <p><mark>{++gCounter}</mark></p>
    <p><mark>{++gCounter}</mark></p>

    {/* will --> Too many re-renders */}
    {/*{ add() }*/}

  </>)
}

ReactDOM.render(<App />, document.getElementById("root"));
