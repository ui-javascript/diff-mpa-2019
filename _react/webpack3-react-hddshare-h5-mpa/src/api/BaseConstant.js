import Base from './Base'
import request from '../common/request'

class BaseConstant extends Base {
    findByType(params) {
        return new Promise((resolve, reject) => {
            this.request({
                url: this.baseUrl + '/findByType',
                params
            }).then(res => {
                resolve(res.data.data || res.data || res)
            })
        })
    }
}

export default new BaseConstant('/adv/baseConstant', request)