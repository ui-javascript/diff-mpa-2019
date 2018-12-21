import React, { Component } from "react";
import ReactDOM from "react-dom";


class ListComponent extends Component {
    render() {
        return [
            <li key="A">First item</li>,
            <li key="B">Second item</li>,
            <li key="C">Third item</li>
        ];
    }
}

class StringComponent extends Component {
    render() {
        return "Just a strings";
    }
}



class App extends Component {
    render() {
        return [
            <div custom-attribute="something" >自定义属性</div>,
            <ul>
                <ListComponent />
            </ul>,
            <StringComponent />
        ];
    }
}


ReactDOM.render(<App />, document.getElementById("root"));



