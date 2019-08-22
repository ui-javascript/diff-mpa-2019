import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'

function App() {
    const count = useRef(0);
  
    const showCount = () => {
      alert("count: " + count.current);
    };
  
    const handleClick = number => {
      count.current = count.current + number;
      setTimeout(showCount, 3000);
    };
  
    return (
      <div>
        <p>You clicked {count.current} times</p>
        <button onClick={() => handleClick(1)}>增加 count</button>
        <button onClick={() => handleClick(-1)}>减少 count</button>
      </div>
    );
  }
  
ReactDOM.render(<App />, document.getElementById("root"))

