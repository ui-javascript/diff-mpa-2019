
import React, { Component } from "react";
import qs from "qs";
import style from './style.scss'
import Content from "../../api/Content";
import { Link } from "react-router-dom";
class FaqList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true
    });
  }
  componentWillMount() {
    this.getList();
  }
  getList() {
    Content.getContent({
      code: this.query.code || "CommonProblemList",
      AppId: this.query.AppId || "10000003",
      //   AppId: this.query.AppId || "10000003",
      Authorization: this.query.Authorization
    }).then(res => {
      let str = res[0].content
      let start = str.indexOf("[");
      let end = str.indexOf("]") + 1
      str = str.substring(start, end).replace(/&quot;/g, '"')
      this.setState({
        list: JSON.parse(str)
      })
    });
  }

  render() {
    return <div className={style.container}>
      <div className={style.agreenment_con} >
        {this.state.list.map((item, i) => (
          <Link className={style.listItem} key={i} to={{
            pathname: 'FaqDetail',
            search: `code=${item.code}&Authorization=${this.query.Authorization}&AppId=${this.query.AppId}`
          }}>{item.name}
          </Link>
        ))}
      </div>
    </div>;
  }
}

export default FaqList