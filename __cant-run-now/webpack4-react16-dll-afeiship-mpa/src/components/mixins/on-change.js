import AppBase from 'components';

export default class {
  onChangeToLocal(inField, inEvent) {
    AppBase.$.local = {
      [inField]: inEvent.target.value
    };
  }

  onChangeToSession(inField, inEvent) {
    AppBase.$.session = {
      [inField]: inEvent.target.value
    };
  }

  onChangeToMemory(inField, inEvent) {
    AppBase.$.memory = {
      [inField]: inEvent.target.value
    };
  }
}
