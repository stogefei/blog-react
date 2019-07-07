import axios from 'axios'
import { message } from 'antd';

// create an axios instance
const service = axios.create({
    baseURL: process.env.BASE_API, // api 的 base_url
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // Do something before request is sent
        config.headers['X-Token'] ='12312313'
        return config
    },
    error => {
        // Do something with request error
        message.error('This is an error message');
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => response,
    error => {
        console.log('err' + error)  // for debug
        message.error('响应错误');
        return Promise.reject(error)
    }
)

export default service
