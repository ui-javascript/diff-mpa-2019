import nx from 'next-js-core2';
import nxAxios from 'next-axios';

const WeiPaiHttp = nx.declare({
  extends: nxAxios,
  statics: {
    instance: null,
    getInstance: function () {
      if (!WeiPaiHttp.instance) {
        WeiPaiHttp.instance = new WeiPaiHttp();
      }
      return WeiPaiHttp.instance;
    }
  },
  methods: {
    // init: function () {
    //   //this.base();
    //   this.$base.init();
    //   this.setHeaders({
    //     common: {
    //       'Power by': 'Fei de next framework'
    //     }
    //   })
    // },
    toData: function (inResponse) {
      return inResponse.data;
    }
  }
});

export default WeiPaiHttp.getInstance();



