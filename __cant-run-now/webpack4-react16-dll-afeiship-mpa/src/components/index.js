export default require('views/app-base').default;


/*===components start===*/
export const TestComp = require('views/test-comp').default;
/*===components end===*/



/*===services start===*/
// export const $api = require('services/api').default;
export const $config = require('services/config').default;
export const $app = require('services/app').default;
export const $http = require('services/http').default;
export const $store = require('next-store');
/*===services end===*/
