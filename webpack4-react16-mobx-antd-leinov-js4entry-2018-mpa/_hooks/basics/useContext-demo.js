import React, { useContext } from "react";
import ReactDOM from 'react-dom'

const colorContext = React.createContext("gray");

function Bar() {
  const color = useContext(colorContext);
  return <div>{color}</div>;
}

function Foo() {
  return <Bar />;
}

function App() {
  return (
    <colorContext.Provider value={"red"}>
      <Foo />
    </colorContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))


