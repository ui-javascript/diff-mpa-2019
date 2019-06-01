import React, { Component } from "react";
import { Link } from "react-router-dom";
import Routes from "../../routes";
import logo from "./logo.svg";
import styles from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={styles.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Routes />
        </header>
      </div>
    );
  }
}

export default App;
