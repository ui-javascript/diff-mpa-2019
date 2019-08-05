import React, { Component } from 'react';
import ReactDOM from "react-dom";

import { observable, action } from 'mobx';
import { Provider, observer, inject } from 'mobx-react';

// 定义数据结构
class Store {
  // ① 使用 observable decorator
  @observable a = 0;
}

// 定义对数据的操作
class Actions {
  constructor({store}) {
    this.store = store;
  }
  // ② 使用 action decorator
  @action
  incA = () => {
    this.store.a++;
  }
  @action
  decA = () => {
    this.store.a--;
  }
}

// ③实例化单一数据源
const store = new Store();
// ④实例化 actions，并且和 store 进行关联
const actions = new Actions({store});

// inject 向业务组件注入 store，actions，和 Provider 配合使用
// ⑤ 使用 inject decorator 和 observer decorator
@inject('store', 'actions')
@observer
class Demo extends Component {
  render() {
    const { store, actions } = this.props;
    return (
      <div>
        <p>a = {store.a}</p>
        <p>
          <button className="ui-btn" onClick={actions.incA}>增加 a</button>
          <button className="ui-btn" onClick={actions.decA}>减少 a</button>
        </p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    // ⑥使用Provider 在被 inject 的子组件里，可以通过 props.store props.actions 访问
    return (
      <Provider store={store} actions={actions}>
        <Demo />
      </Provider>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("root")
);
