import axios, { InternalAxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'
import {ElMessage} from 'element-plus'

const config = {
    baseURL: 'http://127.0.0.1:9024/' as string,
    timeout: 60000 as number
}

// 定义请求响应参数，不含data
interface Result {
    code: string;
    msg: string;
}

// 请求响应参数，包含data
interface ResultData<T = any> extends Result {
    data?: T;
}

class RequestHttp {
    // 定义成员变量并指定类型
    service: AxiosInstance;
    public constructor(config: any) {
        // 实例化axios
        this.service = axios.create(config);

        /**
         * 请求拦截器
         */
        this.service.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                // 在发送请求之前做些什么
                return config
            },
            (error: any) => {
                // 处理请求错误
                ElMessage.error('客户发送请求异常', error.msg)
                return Promise.reject(error)
            }
        )

        /**
         * 响应拦截器
         * 服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
         */
        this.service.interceptors.response.use(
            (response: AxiosResponse) => {
                const {data} = response
                if (data.code && data.code !== '0000') {
                    ElMessage.error(data.msg)
                    return Promise.reject(data)
                }
                return data
            },
            (error: any) => {
                const {response} = error
                if (response) {
                    this.handleCode(response.status)
                }
                ElMessage.error('客户端获取响应异常', error.msg)
            },
        )
    }
    handleCode(code: number):void {
        switch(code) {
            case 401:
                ElMessage.error('认证失败，无权限访问')
                break;
            default:
                ElMessage.error('请求失败')
                break;
        }
    }

    // 常用方法封装
    get<T>(url: string, params?: object): Promise<ResultData<T>> {
        return this.service.get(url, {params});
    }
    post<T>(url: string, params?: object): Promise<ResultData<T>> {
        return this.service.post(url, params);
    }
    put<T>(url: string, params?: object): Promise<ResultData<T>> {
        return this.service.put(url, params);
    }
    delete<T>(url: string, params?: object): Promise<ResultData<T>> {
        return this.service.delete(url, {params});
    }
}

export default new RequestHttp(config);
