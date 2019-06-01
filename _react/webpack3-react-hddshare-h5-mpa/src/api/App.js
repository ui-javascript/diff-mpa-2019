import Base from './Base'
import request from '../common/request'

class App extends Base {
    qrcode(params) {
        return new Promise((resolve, reject) => {
            this.request({
                url: this.baseUrl + '/qrcode',
                params
            }).then(res => {
                resolve(res.data.data || res.data || res)
            })
        })
    }
}

export default new App('/adv/app', request)