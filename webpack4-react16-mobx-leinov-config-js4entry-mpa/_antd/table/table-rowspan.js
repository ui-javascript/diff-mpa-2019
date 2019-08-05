import React, { Component, useState, useEffect } from "react"
import ReactDOM from "react-dom"

import moment from "moment";
import { Table } from "antd";



class App extends React.Component {
  state = {
    // 分页
    pagination: {
      current: 1,
      pageSize: 10,
    }
  };

  data = [
    {
      key: "11",
      name: "John Brown222",
      age: 32,
      tel: "0571-22098909",
      phone: 18889898989,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "12",
      name: "John Brown",
      age: 32,
      tel: "0571-22098909",
      phone: 18889898989,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "13",
      name: "John Brown",
      age: 32,
      tel: "0571-22098909",
      phone: 18889898989,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "14",
      name: "John Brown",
      age: 32,
      tel: "0571-22098909",
      phone: 18889898989,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "1",
      name: "John Brown",
      age: 32,
      tel: "0571-22098909",
      phone: 18889898989,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "15",
      name: "John Brown",
      age: 32,
      tel: "0571-22098909",
      phone: 18889898989,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "16",
      name: "John Brown",
      age: 32,
      tel: "0571-22098909",
      phone: 18889898989,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "2",
      name: "Jim Green",
      tel: "0571-22098333",
      phone: 18889898888,
      age: 42,
      address: "London No. 1 Lake Park"
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "Sidney No. 1 Lake Park"
    },
    {
      key: "4",
      name: "Jim Red",
      age: 18,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "London No. 2 Lake Park"
    },
    {
      key: "51",
      name: "Jake White",
      age: 18,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "Dublin No. 2 Lake Park"
    },
    {
      key: "53",
      name: "Jake White",
      age: 18,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "Dublin No. 2 Lake Park"
    },
    {
      key: "5",
      name: "Jake White",
      age: 18,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "Dublin No. 2 Lake Park"
    }
  ];

  columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, row, index) => {
        return <a href="#">{text}</a>;
      }
    },
    {
      title: "Age",
      dataIndex: "age",
      render: value => {
        return {
          children: value,
          props: {
            rowSpan: 2
          },
        };
      }
    },
    {
      title: "Phone",
      colSpan: 0,
      dataIndex: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
    }
  ];

  handleChange = (pagination) => {
    this.setState({ pagination });
  }

  render() {
    return (
      <Table
        columns={this.columns}
        dataSource={this.data}
        bordered
        onChange={this.handleChange}
        pagination={this.state.pagination}
      />
    );
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
