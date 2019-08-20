import React from "react"
import ReactDOM from "react-dom"

import { Button, Input } from "antd"
import { useFormTable } from 'sunflower-antd';

import 'antd/es/style/themes/default.less';

function request (values) {
  alert(values)
}

function Component(props) {
    const { Form, Table } = useFormTable({
        search: (values) => request(values),
        defaultPageSize: 5,
      });
      
    return <div>
    <Form layout="inline">
      <Form.Item
        label="Username"
        name="username"
      >
        <Input placeholder="Username" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item>
        <Button onClick={() => form.resetFields()}>
            Reset
          </Button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>

    <Table
      style={{marginTop: 20}}
      columns={[
        {
          title: 'Username',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        }
      ]}
      rowKey="id"
      pagination={{
        showQuickJumper: true,
        showSizeChanger: true,
        pageSizeOptions: ['5', '10', '20', '50'],
      }}
    />
  </div>;
  }


ReactDOM.render(<Component />, document.getElementById("root"));
