// import Vue from 'vue'
// import Vue from 'vue/dist/vue.common.js';
import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false

new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})


var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
