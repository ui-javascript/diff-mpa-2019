import React, { Component, useState, useEffect } from "react"
import ReactDOM from "react-dom"


import { Table } from 'antd';

import "./typo.scss"
import "./custom.scss"

const rowSelection = {
  type: 'radio',
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

let data = [
  {
    "id": 368,
    "code": "000101001",
    "name": "一类人工",
    "format": "",
    "unit": "工日",
    "areaPrices": [
      {
        "area": "杭州",
        "prices": [
          "/"
        ]
      }
    ]
  },
  {
    "id": 369,
    "code": "000102001",
    "name": "二类人工",
    "format": "",
    "unit": "工日",
    "areaPrices": [
      {
        "area": "杭州",
        "prices": [
          "/"
        ]
      }
    ]
  },
  {
    "id": 371,
    "code": "000103001",
    "name": "三类人工",
    "format": "",
    "unit": "工日",
    "areaPrices": [
      {
        "area": "杭州",
        "prices": [
          "/"
        ]
      }
    ]
  },
  {
    "id": 378,
    "code": "999999",
    "name": "wxc-009",
    "format": "1111",
    "unit": "222",
    "areaPrices": [
      {
        "area": "杭州",
        "prices": [
          "/"
        ]
      }
    ]
  },
  {
    "id": 8,
    "code": "010100029",
    "name": "热轧带肋钢筋",
    "format": "HRB400 φ10",
    "unit": "t",
    "areaPrices": [
      {
        "area": "杭州",
        "prices": [
          "/"
        ]
      }
    ]
  },
  {
    "id": 9,
    "code": "010100031",
    "name": "热轧带肋钢筋",
    "format": "HRB400 φ12",
    "unit": "t",
    "areaPrices": [
      {
        "area": "杭州",
        "prices": [
          "/"
        ]
      }
    ]
  },
  {
    "id": 10,
    "code": "010130051",
    "name": "热轧带肋钢筋",
    "format": "HRB400 φ14",
    "unit": "t",
    "areaPrices": [
      {
        "area": "杭州",
        "prices": [
          "/"
        ]
      }
    ]
  },
  {
    "id": 11,
    "code": "010130057",
    "name": "热轧带肋钢筋",
    "format": "HRB400 φ16",
    "unit": "t",
    "areaPrices": [
      {
        "area": "杭州",
        "prices": [
          "/"
        ]
      }
    ]
  },
  {
    "id": 12,
    "code": "010100041",
    "name": "热轧带肋钢筋",
    "format": "HRB400 φ18",
    "unit": "t",
    "areaPrices": [
      {
        "area": "杭州",
        "prices": [
          "/"
        ]
      }
    ]
  },
  {
    "id": 13,
    "code": "010130063",
    "name": "热轧带肋钢筋",
    "format": "HRB400 φ20",
    "unit": "t",
    "areaPrices": [
      {
        "area": "杭州",
        "prices": [
          "/"
        ]
      }
    ]
  }
]


const columns = [
  { title: '材料名称', dataIndex: 'name', key: 'name' },
  { title: '材料规格', dataIndex: 'format', key: 'format' },
  { title: '单位', dataIndex: 'unit', key: 'unit' },
  { title: '材料编码', dataIndex: 'code', key: 'code' },
  // {
  //   title: 'Action',
  //   dataIndex: '',
  //   key: 'x',
  //   render: () => <a href="javascript:;">Delete</a>,
  // },
];





ReactDOM.render(
  <Table
    // className={"p-5"}
    style={{ width: 1000 }}
    rowKey={record => record.id}
    columns={columns}
    rowSelection={rowSelection}
    defaultExpandAllRows
    expandedRowRender={record => <div className={'typo'} style={{ margin: 0 }}>
      {record.description}
      <table>
        <thead>
        <tr>
          <th rowSpan={2}>地区</th>
          <th>含税价</th>
        </tr>
        <tr>
          <th>201901</th>
          {/*<th>201902</th>*/}
        </tr>
        </thead>
        <tbody>
        { record.areaPrices.map((item, index) => <tr key={index}>
          <th>{item.area}</th>
          {item.prices.map((itemm, indexx) => <td key={indexx}>{itemm}</td>)}
        </tr>) }
        </tbody>
      </table>
    </div>}
    dataSource={data}
  />,
  document.getElementById("root"));
