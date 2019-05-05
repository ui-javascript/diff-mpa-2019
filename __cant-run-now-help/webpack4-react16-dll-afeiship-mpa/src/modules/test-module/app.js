import AppBase from 'components';

export default class extends AppBase {
  static initialState() {
    return {
      memory: {
        initialData: {
          tes: 123,
          age: 100,
          items: []
        },
        myInitial: 0,
        sum: 0
      },
      local: {
        test: 200,
        store: 0,
        items: [
          { key: 1 }
        ]
      },
      session: {
        afei: 'session test..'
      }
    }
  }

  _onClick() {
    let { test } = AppBase.$.local;
    test++;
    AppBase.$.local = { test: test };
  }

  render() {
    const { test } = AppBase.$.local;
    return (
      <div className="test-module">
        {test}
        <button className="dc-button" onClick={this._onClick}>TEST</button>
      </div>
    );
  }
}
