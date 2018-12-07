export default class Config {

  static HASH = '__BUILD_HASH__';
  static STORE_PREFIX = 'mul-react';
  static ENV = require('environments/__BUILD_ENV__').default;
  static IMG_URL = Config.ENV.IMG_URL;
  static TEL_400 = '400-613-6858';
  static APIS = {
    baseUrl: `//${location.host}`,
    items: {
      '/app': {
        'demo_api': ['post', '/api/v1/demo'],
      }
    }
  };
  static DATE_FORMAT = {
    datetime: 'YYYY-MM-DD HH:mm:ss',
    date: 'YYYY-MM-DD'
  };
}



