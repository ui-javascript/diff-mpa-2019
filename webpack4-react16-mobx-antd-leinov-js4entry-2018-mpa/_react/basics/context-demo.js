import React , {Component} from "react"
import ReactDOM from "react-dom"

import List from './components/List';
const list = [
  {
    text: '题目一',
  },
  {
    text: '题目二',
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <List
          list={list}
        />
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById("root"));
