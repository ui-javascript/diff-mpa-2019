import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default props => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
  </>
);
