import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

// 创建一个axios实例
const http = axios.create({
  // baseURL: "", 存在一些场景，调用多个后端地址
  // timeout: 5000, // 超时时间
  withCredentials: true // 允许携带cookie
})

// 请求拦截器
http.interceptors.request.use(
  (config: any) => {
    console.log('------config--------',config)
    // 获取token，并将其添加到请求头中
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `${token}`
    }
    return config
  },
  (error: any) => {
    // 错误抛出，在具体业务代码中处理
    error.data = {}
    error.data.message = '请求出错，请联系管理员！'
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('--------response-------',response)
    // const status: number = response.status
    // const message = ''
    // if(status<200 || status>= 300){
    //   // 处理 http 错误，抛出到业务代码处理
    //   message =
    // }
    // 直接返回
    return response
  },
  (error: any) => {
    // 可以做一些处理，401，403，500 等等，直接统一处理，也可以抛出到业务代码中处理
    ElMessage.error(error)
    return Promise.reject(error)
  }
)

export default http
