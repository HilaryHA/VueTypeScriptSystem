/**
 * @description [ axios 请求封装] 
 * @author Hilary
 * @date 2019/12/27
 */
import axios from 'axios'
import viewUI , { Message, Modal } from 'view-design'
import store from '../store'
import router from '../router'

// Message['info']({
//     background: true,
//     content: '提示信息'
// })

// Message.success('提示信息')

// console.log(viewUI)
// console.log(Message)

const service = axios.create({
    baseURL: '/api', // url = base url + request url
    timeout: 5000,
    withCredentials: true,  // send cookies when cross-domain requests
    headers: {
        // clear cors
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
    }
})

// Request interceptors
service.interceptors.request.use(
    (config : any) => {
        // Add Authorization header to every request, you can add other custom headers here
        if (store.getters.token) {
            // console.log(store.getters)
            config.headers['Authorization'] = store.getters.token
        }
        return config
    },
    (error : any) => {
        Promise.reject(error)
    }
)

// Response interceptors
service.interceptors.response.use(
    (response : any) => {
        const res = response.data
        if (res.status !== 200) {
            (Message as any).error({
                content: res.info || 'Error',
                duration: 5,
                background: true
            })

            if (res.status === 401 || res.status === 403 || res.status === 408) {
                // 警告提示窗
                (Modal as any).warning({
                    // Modal.confirm({
                    title: '提示',
                    content: `你已被登出，可以取消继续留在该页面，或者重新登录`,
                    okText: '确定',
                    cancalText: '取消',
                    width: 300,
                    onOk: () => {
                        setTimeout(() => {
                            (Modal as any).remove();
                            (Modal as any).info('退出成功');
                            // 清空store的token 
                            store.dispatch('initStateData')
                            router.push('/')
                        }, 2000)
                    }
                })
            }            
            // 若后台返回错误值，此处返回对应错误对象，下面 error 就会接收
            return Promise.reject(new Error(res.info || 'Error'))
        } else {
            // 注意返回值
            return response.data
        }        
    },
    (error : any) => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400: error.message = '请求错误(400)'; break;
                case 401: error.message = '未授权,请登录(401)'; break;
                case 403: error.message = '拒绝访问(403)'; break;
                case 404: error.message = `请求地址出错: ${error.response.config.url}`; break;
                case 405: error.message = '请求方法未允许(405)'; break;
                case 408: error.message = '请求超时(408)'; break;
                case 500: error.message = '服务器内部错误(500)'; break;
                case 501: error.message = '服务未实现(501)'; break;
                case 502: error.message = '网络错误(502)'; break;
                case 503: error.message = '服务不可用(503)'; break;
                case 504: error.message = '网络超时(504)'; break;
                case 505: error.message = 'HTTP版本不受支持(505)'; break;
                default: error.message = `连接错误: ${error.message}`; 
            }
        } else {
            error.message = '连接到服务器失败，请联系管理员'
        }        
        (Message as any).error({
            content: error.info || error.message ||  'Error',
            duration: 5,
            background: true
        })
        return Promise.reject(error)
    }
)

export default service