import axios, {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse
} from 'axios'
import router from '../router'
import { __TOKEN_KEY__ } from '../api/common'

// 引用elementUi的message组件
import { Message } from 'element-ui'
import { ElMessageOptions } from 'element-ui/types/message'

/**
 * @description HTTP请求封装
 */
class Fetch {
  // Axios实例对象
  private _axios: AxiosInstance
  // Axios配置
  private readonly _config: AxiosRequestConfig = {
    baseURL: process.env.BASE_API,
    timeout: 1000 * 60 * 10,
    responseType: 'json'
  }

  // 构造函数，初始化Axios
  constructor () {
    // axios实例
    this._axios = axios.create(this._config)
    // axios请求拦截
    this._axios.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 若是有做鉴权token , 就给头部带上token
        let token = window.localStorage.getItem(__TOKEN_KEY__)
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error: any) => {
        this.sendError(error)
        return Promise.reject(error)
      }
    )

    // axios 响应拦截，对响应的状态处理
    this._axios.interceptors.response.use(
      (res: AxiosResponse) => {
        // 200,204为处理成功
        if ([200, 204].indexOf(res.status) === -1) {
          this.sendError(res)
          return Promise.reject(res.data)
        }
        return res
      },
      (error: any) => {
        // 错误处理
        if (error.response) {
          if (error.response.status) {
            // 授权过期
            if (error.response.status === 401) {
              router.push({
                path: '/login'
              })
            }
          }
        }
        // 其它错误
        this.sendError(error)
        return Promise.reject(error)
      }
    )
  }
  /**
   * @description http 请求方法
   * @param {T} options
   */
  fetch<AxiosRequestConfig> (options: AxiosRequestConfig): Promise<{}> {
    return new Promise((resolve, reject) => {
      this._axios(options)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  /**
   * @description 错误处理方法
   * @param {Object} error
   */
  private sendError (error: any) {
    console.log(error)
    let data: any
    let message: string = '发生错误，请联系管理员'
    if (error.response) {
      data = error.response.data
      message = data.message
    }
    // 2。用elementUi组件弹出
    let mess: ElMessageOptions = {
      message: message,
      type: 'error',
      duration: 5 * 1000
    }
    Message(mess)
  }
}
let fetch = new Fetch()
export { fetch as Fetch }
