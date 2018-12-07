import AppBase from '#';

export default class extends AppBase {

  static initialState(inStore) {
    const {sum} = inStore.local;
    return {
      local: {
        sum: sum || 200
      }
    }
  }

  _onClick() {
    let {sum} = AppBase.$.local;
    AppBase.$.local = {
      sum: ++sum
    };
  }

  render() {
    const {sum} = AppBase.$.local;
    return (
      <div className="blank-module">
        <header>
          <h1 className="lc-1 ">我是一个很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的标题</h1>
          <h2>short!!11sdsd11wewe2 - {sum}</h2>
        </header>
        <button className="dc-button" onClick={this._onClick}>TEST</button>
      </div>
    );
  }
}
