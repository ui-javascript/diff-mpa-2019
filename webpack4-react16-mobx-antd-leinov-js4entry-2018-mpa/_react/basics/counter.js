import React, { useState } from "react"
import ReactDOM from "react-dom"

import styles from "./styles.scss"

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

    <p className={styles.bgYellow}><mark>{++gCounter}</mark></p>
    <p><mark>{++gCounter}</mark></p>
    <p><mark>{++gCounter}</mark></p>

    {/* will --> Too many re-renders */}
    {/*{ add() }*/}

  </>)
}

ReactDOM.render(<App />, document.getElementById("root"));
