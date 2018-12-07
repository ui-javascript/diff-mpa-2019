import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAbout } from "../actions/about";

const mapStateToProps = ({ about }) => ({ about });

class About extends Component {
  componentDidMount() {
    this.props.fetchAbout();
  }

  render() {
    return <div>About page</div>;
  }
}

export default connect(
  mapStateToProps,
  { fetchAbout }
)(About);
