import Base from './Base'
import request from '../common/request'

class BankCard extends Base {
    getSupportBankList(params) {
        return new Promise((resolve, reject) => {
            this.request({
                url: this.baseUrl + '/getSupportBankList',
                params
            }).then(res => {
                resolve(res.data.data || res.data || res)
            })
        })
    }
}

export default new BankCard('/pay/bankCard', request)