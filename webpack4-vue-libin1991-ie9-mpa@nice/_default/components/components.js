import './styles/components.less';

import Vue from 'vue'
// import Vue from 'vue/dist/vue.common.js';
import App from './app/ComponentsApp'

// 省市区数据
import Distpicker from 'v-distpicker'
Vue.component('v-distpicker', Distpicker)

new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})
