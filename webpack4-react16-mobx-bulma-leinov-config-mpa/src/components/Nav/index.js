import React, {Component} from "react";
import "./nav.scss";
import logo from "./react-multi.png"

export default class Index extends Component {

    render() {
        return (
            <div className="menu columns">
                <div className="column is-2 logo"><img className="w-40 h-40" src={logo}/></div>

                <div className="columns column nav is-8">
                    <div className="nav-item"><a href="/">Home</a></div>
                    <div className="nav-item"><a href="/index-page2.html">Page2</a></div>
                    <div className="nav-item"><a href="/todo.html">Todo</a></div>
                    {/*<div className="nav-item"><a href="https://github.com/leinov/webpack-react-multi-page/">Github</a></div>*/}
                </div>
                <div className="column is-2"></div>
            </div>
        );
    }
}
