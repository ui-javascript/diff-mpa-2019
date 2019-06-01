class Base {
    constructor(baseUrl, request) {
        this._find = "/list"
        this._findById = "/detail"
        this._add = "/add"
        this._update = "/modify"
        this._del = "/delete"
        this.baseUrl = baseUrl
        this.request = request
    }
    initURI(data) {
        data.find && (this._find = data.find)
        data.findById && (this._findById = data.findById)
        data.add && (this._add = data.add)
        data.update && (this._update = data.update)
        data.del && (this._del = data.del)
    }
    find(params) {
        return new Promise((resolve, reject) => {
            this.request({
                url: this.baseUrl + this._find,
                params
            }).then(res => {
                resolve(res.data.data || res.data || res)
            })
        })
    }
    findById(params) {
        return new Promise((resolve, reject) => {
            this.request({
                url: this.baseUrl + this._findById,
                params
            }).then(res => {
                resolve(res.data.data || res.data || res)
            })
        })
    }
    add(data) {
        return this.request({
            url: this.baseUrl + this._add,
            method: 'post',
            data
        })
    }
    update(data) {
        return this.request({
            url: this.baseUrl + this._update,
            method: 'post',
            data
        })
    }
    del(data) {
        return this.request({
            url: this.baseUrl + this._del,
            method: 'post',
            data
        })
    }
}

export default Base