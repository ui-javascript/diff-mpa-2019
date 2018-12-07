import axios from 'axios'
import qs from 'qs'
import env from '../config'

export const baseURL = env.BASE_API
// create an axios instance
const service = axios.create({
	baseURL: baseURL, // api的base_url
	timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
	config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
	// config.headers['Authorization'] = localStorage.getItem('token')
	if (config.data && config.headers['Content-Type'].includes('application/x-www-form-urlencoded')) {
		config.data = qs.stringify(config.data)
	}
	return config
}, error => {
	Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
response => {
	if (response.data.code !== 200) {
		if (   response.data.code === 100 // 用户未登录
			|| response.data.code === 101 // 用户不存在
			|| response.data.code === 403 // 拒绝访问
			// || response.data.code == 5001 // 手机号已注册过
			// || response.data.code == 5002 // 手机验证码错误
			|| response.data.code === 5101 // 两次输入密码不相同
			|| response.data.code === 5201 // Token验证失败, 请求重新登录!
			|| response.data.code === 5202) { // 帐号已在其它地方登录!
			localStorage.clear()
			// Message.error(response.data.msg)
			window.location.href = '/'
			return Promise.reject('error')
		}
		if (response.data.code === 2001) {
			return response
		}
		// Message.error(response.data.msg)
		return Promise.reject('error')
	} else {
		return response
	}
},
error => {
	// Message.error(error.toString())
	return Promise.reject('error')
})

export default service