import React, { Component, useState, useEffect } from "react"
import ReactDOM from "react-dom"

import moment from "moment";
import { Table } from "antd";


const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {}
  };
  return obj;
};

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
      render: renderContent
    },
    {
      title: "Home phone (多列测试)",
      colSpan: 2,
      dataIndex: "tel",

      render: (value, row, index) => {
        const { current, pageSize } = this.state.pagination;
        const obj = {
          children: value,
          props: {}
        };
        // 默认一行
        let sameRowCount = 1;

        let totalIndex = pageSize * current;
        totalIndex = totalIndex > this.data.length ? this.data.length : totalIndex;
        const fullIndex = pageSize * (current - 1) + index;

        if (index !== 0 && this.data[fullIndex - 1].tel === this.data[fullIndex].tel) {
          sameRowCount = 0;
        } else {
          for (let i = fullIndex + 1; i < totalIndex; i++) {
            if (this.data[i].tel === this.data[fullIndex].tel) {
              sameRowCount++;
            } else {
              break;
            }
          }
        }

        obj.props.rowSpan = sameRowCount;


        return obj;
      }
    },
    {
      title: "Phone",
      colSpan: 0,
      dataIndex: "phone",
      render: renderContent
    },
    {
      title: "Address",
      dataIndex: "address",
      render: renderContent
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
