import Base from './Base'
import request from '../common/request'

class Truck extends Base {
    nearby(params) {
        return new Promise((resolve, reject) => {
            this.request({
                url: this.baseUrl + '/nearby',
                params
            }).then(res => {
                resolve(res.data.data || res.data || res)
            })
        })
    }
}

export default new Truck('/adv/truck', request)