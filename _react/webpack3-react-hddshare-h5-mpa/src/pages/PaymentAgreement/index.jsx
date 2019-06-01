
import React, { Component } from "react";
import qs from "qs";
import style from './style.scss'
import Content from "../../api/Content";

class Agreenment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {}
    };
    this.query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true
    });
  }
  componentWillMount() {
    this.getContent();
  }
  getContent() {
    Content.getContent({
      code: this.query.code || "Agreement",
      AppId: this.query.AppId || "",
    //   AppId: this.query.AppId || "10000003",
      Authorization: this.query.Authorization
    }).then(res => {
      this.setState({ content: res[0].content });
    });
  }
 
  render() {
    return <div className={style.container}>
        <div className={style.agreenment_con} dangerouslySetInnerHTML={{ __html: this.state.content }} />
      </div>;
  }
}

export default Agreenment