import Base from './Base'
import request from '../common/request'

class Content extends Base {
    getContent(params) {
        return new Promise((resolve, reject) => {
            this.request({
                url: this.baseUrl + '/findFreeContentListByTopicCode',
                params
            }).then(res => {
                resolve(res.data.data || res.data || res)
            })
        })
    }
}

export default new Content('/content', request)