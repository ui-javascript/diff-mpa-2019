export default {
  MODE: "localhost",
  _MODE: "development",
  __MODE: "production",
  LOCAL_SESSION: "accessToken",
  SESSION_KEY: "x-access-token",
  SESSION_EXPIRE_TIME: 1800000,
  REQUST: {
    localhost: {
      BASE_URL: "http://127.0.0.1:51202/",
    },
    development: {
      BASE_URL: "http://dev.mofunc.com/ws/",
    },
  },
};
